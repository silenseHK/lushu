<?php

namespace app\api\controller;

use app\api\model\PayOrder as PayOrderModel;

class PayOrder extends Controller
{

    //订单信息
    public function index()
    {
        // 获取订单信息
        $model = new PayOrderModel;
        $info = $model->index($this->request->param());
        if ($info !== false) {
            return $this->renderSuccess($info);
        }
        return $this->renderError($model->getError() ?: '获取信息失败');
    }

    //支付订单
    public function pay()
    {
        // 获取订单信息
        $model = new PayOrderModel;
        $info = $model->pay($this->request->param());
        if ($info !== false) {
            return $this->renderSuccess($info);
        }
        return $this->renderError($model->getError() ?: '获取信息失败');
    }

}