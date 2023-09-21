<?php

namespace app\store\model\line;

use app\common\model\line\DaySite as DaySiteModel;
use app\store\model\Line;
use app\store\validate\line\DaySiteValid;
use think\db\Query;

class DaySite extends DaySiteModel
{

    // 表单验证场景: 新增
    const FORM_SCENE_ADD = 'add';

    // 表单验证场景: 编辑
    const FORM_SCENE_EDIT = 'edit';

    // 表单验证场景: 删除
    const FORM_SCENE_DELETE = 'delete';

    //线路列表
    public function list(array $param)
    {
        return $this->getFilter($param)
            ->order(['site_sort'=>'asc'])
            ->with(['img'])
            ->paginate(15);
    }

    //过滤查询
    protected function getFilter(array $param)
    {
        $line_id = $param['line_id'] ?? 0;
        $day_id = $param['day_id'] ?? 0;
        $keywords = $param['keywords'] ?? '';
        $time = $param['time'] ?? [];
        return $this
            ->when($day_id>0,function(Query $query) use ($day_id){
                $query->where('day_id',$day_id);
            })
            ->when($line_id>0,function(Query $query) use ($line_id){
                $query->where('line_id',$line_id);
            })
            ->when($keywords, function(Query $query)use($keywords){
                $query->whereLike('title',"%{$keywords}%");
            })
            ->when($time, function(Query $query)use($time){
                $create_time = between_time($time);
                $query->whereBetweenTime('create_time', $create_time['start_time'], $create_time['end_time']);
            });
    }

    //新增行程
    public function add(array $data)
    {
        $data = $this->filterForm($data);
        if (!$this->validateForm($data, self::FORM_SCENE_ADD)) {
            return false;
        }
        $data['store_id'] = self::$storeId;
        return $this->save($data);
    }

    //编辑行程
    public function edit(array $data)
    {
        $data = $this->filterForm($data);
        if (!$this->validateForm($data, self::FORM_SCENE_EDIT)) {
            return false;
        }
        if(isset($data['schedule_time'])){
            $data['schedule_time'] = implode(',',$data['schedule_time']);
        }
        return $this->where('site_id',$data['site_id'])->save(array_merge($data, ['update_time'=>time()])) !== false;
    }

    //删除行程
    public function del($data)
    {
        if (!$this->validateForm($data, self::FORM_SCENE_DELETE)) {
            return false;
        }
        return $this->where('site_id',$data['site_id'])->delete();
    }

    //过滤表单数据
    private function filterForm(array $data)
    {
        $day_id = $data['day_id'] ?? 0;
        $dayModel = new Day();
        $data['line_id'] = $dayModel->where('day_id',$day_id)->value('line_id');
        return $data;
    }

    /**
     * 表单验证
     * @param $data
     * @param string $scene
     * @return bool
     */
    private function validateForm(array $data, string $scene = self::FORM_SCENE_ADD)
    {
        $validate = new DaySiteValid();
        switch($scene){
            case self::FORM_SCENE_ADD:
                if(!$validate->scene($scene)->check($data)){
                    $this->error = $validate->getError();
                    return false;
                }
                ##查看这排序的行程是否存在
                $check = $this->where('day_id', $data['day_id'])->where('site_sort', $data['site_sort'])->count();
                if($check){
                    $this->error = '第' . $data['site_sort'] . '个行程已存在,请勿重复添加';
                    return false;
                }
                break;
            case self::FORM_SCENE_EDIT:
                if(!$validate->scene($scene)->check($data)){
                    $this->error = $validate->getError();
                    return false;
                }
                ##查看这天日程是否存在
                $check = $this->where('day_id', $data['day_id'])->where('site_sort', $data['site_sort'])->where('site_id','<>',$data['site_id'])->count();
                if($check){
                    $this->error = '第' . $data['site_sort'] . '个行程已存在,请勿重复添加';
                    return false;
                }
                break;
            case self::FORM_SCENE_DELETE:
                if(!$validate->scene($scene)->check($data)){
                    $this->error = $validate->getError();
                    return false;
                }
                break;
            default:
                return false;
        }
        return true;
    }

}