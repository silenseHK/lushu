<?php

namespace app\store\controller\line;

use app\store\controller\Controller;
use app\store\model\line\Shop as ShopModel;

class Shop extends Controller
{

    //店铺列表
    public function list()
    {
        $model = new ShopModel;
        $list = $model->list($this->request->param());
        return $this->renderSuccess(compact('list'));
    }

    //添加店铺
    public function add()
    {
        $model = new ShopModel;
        if ($model->add($this->postData())) {
            return $this->renderSuccess('添加成功');
        }
        return $this->renderError($model->getError() ?: '添加失败');
    }

    //修改店铺
    public function edit()
    {
        $model = new ShopModel;
        if ($model->edit($this->postData())) {
            return $this->renderSuccess('编辑成功');
        }
        return $this->renderError($model->getError() ?: '编辑失败');
    }

    //删除店铺
    public function delete()
    {
        $model = new ShopModel;
        if ($model->del($this->postData())) {
            return $this->renderSuccess('删除成功');
        }
        return $this->renderError($model->getError() ?: '删除失败');
    }

}