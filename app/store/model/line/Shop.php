<?php

namespace app\store\model\line;

use app\common\model\line\Shop as ShopModel;
use app\store\validate\line\ShopValid;
use think\db\Query;

class Shop extends ShopModel
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
            ->order(['sort'=>'asc'])
            ->with(['img', 'site'])
            ->paginate(15);
    }

    //过滤查询
    protected function getFilter(array $param)
    {
        $line_id = $param['line_id'] ?? 0;
        $day_id = $param['day_id'] ?? 0;
        $site_id = $param['site_id'] ?? 0;
        $keywords = $param['keywords'] ?? '';
        return $this
            ->when($site_id>0,function(Query $query) use ($site_id){
                $query->where('site_id',$site_id);
            })
            ->when($day_id>0,function(Query $query) use ($day_id){
                $query->where('day_id',$day_id);
            })
            ->when($line_id>0,function(Query $query) use ($line_id){
                $query->where('line_id',$line_id);
            })
            ->when($keywords, function(Query $query)use($keywords){
                $query->whereLike('title',"%{$keywords}%");
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
        return $this->where('shop_id',$data['shop_id'])->save($data) !== false;
    }

    //删除行程
    public function del($data)
    {
        if (!$this->validateForm($data, self::FORM_SCENE_DELETE)) {
            return false;
        }
        return $this->where('shop_id',$data['shop_id'])->delete();
    }

    //过滤表单数据
    private function filterForm(array $data)
    {
        $site_id = $data['site_id'] ?? 0;
        $daySiteModel = new DaySite();
        $site = $daySiteModel->where('site_id',$site_id)->field('line_id, day_id')->find();
        $data['line_id'] = $site['line_id'];
        $data['day_id'] = $site['day_id'];
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
        $validate = new ShopValid();
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