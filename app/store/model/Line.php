<?php

namespace app\store\model;

use app\common\model\Line as LineModel;
use app\store\validate\LineValid;
use think\db\Query;

class Line extends LineModel
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
            ->order(['create_time'=>'desc'])
            ->append(['show_time', 'show_time_format'])
            ->paginate(15);
    }

    //过滤查询
    protected function getFilter(array $param)
    {
        $keywords = $param['keywords'] ?? '';
        $time = $param['time'] ?? [];
        return $this
            ->when($keywords, function(Query $query)use($keywords){
                $query->whereLike('title',"%{$keywords}%");
            })
            ->when($time, function(Query $query)use($time){
                $create_time = between_time($time);
                $query->whereBetweenTime('create_time', $create_time['start_time'], $create_time['end_time']);
            });
    }

    //新增线路
    public function add(array $data)
    {
        $data = $this->filterForm($data);
        if (!$this->validateForm($data, self::FORM_SCENE_ADD)) {
            return false;
        }
        $data['store_id'] = self::$storeId;
        return $this->save($data);
    }

    //编辑线路
    public function edit(array $data)
    {
        $data = $this->filterForm($data);
        if (!$this->validateForm($data, self::FORM_SCENE_EDIT)) {
            return false;
        }
        return $this->where('line_id',$data['line_id'])->save(array_merge($data, ['update_time'=>time()])) !== false;
    }

    //删除线路
    public function del($data)
    {
        if (!$this->validateForm($data, self::FORM_SCENE_DELETE)) {
            return false;
        }
        return $this->where('line_id',$data['line_id'])->save(['delete_time'=>time()]) !== false;
    }

    //过滤表单数据
    private function filterForm(array $data)
    {
        if(!isset($data['show_time']))return [];
        $show_time = between_time($data['show_time']);
        $data['show_time_start'] = $show_time['start_time'];
        $data['show_time_end'] = $show_time['end_time'];
        unset($data['show_time']);
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
        $validate = new LineValid();
        switch($scene){
            case self::FORM_SCENE_ADD:
                if(!$validate->scene($scene)->check($data)){
                    $this->error = $validate->getError();
                    return false;
                }
                break;
            case self::FORM_SCENE_EDIT:
                if(!$validate->scene($scene)->check($data)){
                    $this->error = $validate->getError();
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