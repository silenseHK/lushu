<?php

namespace app\store\controller\line;

use app\store\controller\Controller;
use app\store\model\line\DaySite as DaySiteModel;

class DaySite extends Controller
{

    //日行程表
    public function list()
    {
        $model = new DaySiteModel;
        $list = $model->list($this->request->param());
        return $this->renderSuccess(compact('list'));
    }

    //添加行程
    public function add()
    {
        $model = new DaySiteModel;
        if ($model->add($this->postData())) {
            return $this->renderSuccess('添加成功');
        }
        return $this->renderError($model->getError() ?: '添加失败');
    }

    //修改行程
    public function edit()
    {
        $model = new DaySiteModel;
        if ($model->edit($this->postData())) {
            return $this->renderSuccess('编辑成功');
        }
        return $this->renderError($model->getError() ?: '编辑失败');
    }

    //删除行程
    public function delete()
    {
        $model = new DaySiteModel;
        if ($model->del($this->postData())) {
            return $this->renderSuccess('删除成功');
        }
        return $this->renderError($model->getError() ?: '删除失败');
    }

}