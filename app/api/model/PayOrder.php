<?php

namespace app\api\model;

use app\api\service\Payment as PaymentService;
use app\api\service\User as UserService;
use app\common\enum\OrderType as OrderTypeEnum;
use app\common\model\PayOrder as PayOrderModel;

class PayOrder extends PayOrderModel
{

    //订单信息
    public function index($param)
    {
        // 当前用户信息
        $userId = UserService::getCurrentLoginUserId();
        $pay_id = $this->filterParam($param);
        if(!$pay_id){
            return false;
        }
        $order = $this->find($pay_id);
        if(!$this->check($order)){
            return false;
        }
        return compact('order');
    }

    //提交支付
    public function pay($param)
    {
        // 当前用户信息
        $userId = UserService::getCurrentLoginUserId();
        $pay_id = $this->filterParam($param);
        if(!$pay_id){
            return false;
        }
        $order = $this->find($pay_id);
        if(!$this->check($order)){
            return false;
        }
        // 构建微信支付
        $payment = PaymentService::wechat(
            $order['pay_id'],
            $order['order_no'] . '_' . $userId . '_' . date('s',time()),
            $order['order_amount'],
            OrderTypeEnum::PAY_ORDER
        );
        // 充值状态提醒
        $message = ['success' => '充值成功', 'error' => '订单未支付'];
        return compact('payment', 'message');
    }

    //检查参数
    public function filterParam($param)
    {
        $pay_id = intval($param['pay_id'] ?? 0);
        if(!$pay_id){
            $this->error = '参数错误';
            return false;
        }
        return $pay_id;
    }

    //验证订单
    public function check($order)
    {
        if(!$order){
            $this->error = '订单信息不存在';
            return false;
        }
        if($order['status'] != 1){
            $this->error = '订单已经支付过了,无需重复支付。如有疑问请联系工作人员';
            return false;
        }
        return true;
    }

    /**
     * 获取订单详情(待付款状态)
     * @param $orderNo
     * @return array|null|static
     */
    public static function getPayDetail(string $orderNo)
    {
        return self::detail(['order_no' => $orderNo, 'pay_status' => 1]);
    }

}