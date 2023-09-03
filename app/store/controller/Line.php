<?php

namespace app\store\controller;

use app\store\model\Line as LineModel;

class Line extends Controller
{

    //线路列表
    public function list()
    {
        $model = new LineModel;
        $list = $model->list($this->request->param());
        return $this->renderSuccess(compact('list'));
    }

    //添加线路
    public function add()
    {
        $model = new LineModel;
        if ($model->add($this->postData())) {
            return $this->renderSuccess('添加成功');
        }
        return $this->renderError($model->getError() ?: '添加失败');
    }

    //修改线路
    public function edit()
    {
        $model = new LineModel;
        if ($model->edit($this->postData())) {
            return $this->renderSuccess('编辑成功');
        }
        return $this->renderError($model->getError() ?: '编辑失败');
    }

    //删除线路
    public function delete()
    {
        $model = new LineModel;
        if ($model->del($this->postData())) {
            return $this->renderSuccess('删除成功');
        }
        return $this->renderError($model->getError() ?: '删除失败');
    }

    //简单线路列表
    public function simpleList()
    {
        $model = new LineModel;
        $list = $model->simpleList();
        return $this->renderSuccess(compact('list'));
    }

    //生成线路二维码
    public function qrcode()
    {
        $model = new LineModel;
        if (!$qrcode = $model->qrcode($this->request->param())) {
            return $this->renderError($model->getError() ?: '请求失败');
        }
        $qrcode = request()->domain() . '/' . trim($qrcode,'/');
        return $this->renderSuccess(compact('qrcode'));
    }

}