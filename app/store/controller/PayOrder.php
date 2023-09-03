<?php

namespace app\store\controller;

use app\store\model\PayOrder as PayOrderModel;

class PayOrder extends Controller
{

    //支付订单列表
    public function list()
    {
        $model = new PayOrderModel;
        $list = $model->list($this->request->param());
        return $this->renderSuccess(compact('list'));
    }

    //新建支付订单
    public function add()
    {
        $model = new PayOrderModel;
        if ($model->add($this->postData())) {
            return $this->renderSuccess('添加成功');
        }
        return $this->renderError($model->getError() ?: '添加失败');
    }

    //修改支付订单
    public function edit()
    {
        $model = new PayOrderModel;
        if ($model->edit($this->postData())) {
            return $this->renderSuccess('编辑成功');
        }
        return $this->renderError($model->getError() ?: '编辑失败');
    }

    //删除支付订单
    public function delete()
    {
        $model = new PayOrderModel;
        if ($model->del($this->postData())) {
            return $this->renderSuccess('删除成功');
        }
        return $this->renderError($model->getError() ?: '删除失败');
    }

    //生成订单二维码
    public function qrcode()
    {
        $model = new PayOrderModel;
        if (!$qrcode = $model->qrcode($this->request->param())) {
            return $this->renderError($model->getError() ?: '请求失败');
        }
        $qrcode = request()->domain() . '/' . trim($qrcode,'/');
        return $this->renderSuccess(compact('qrcode'));
    }

}