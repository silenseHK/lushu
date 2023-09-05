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
        $order_no = $this->filterParam($param);
        if(!$order_no){
            return false;
        }
        $order = $this->where('order_no',$order_no)->with(['line'])->find();
        if(!$this->check($order, $userId)){
            return false;
        }
        return compact('order');
    }

    //提交支付
    public function pay($param)
    {
        // 当前用户信息
        $userId = UserService::getCurrentLoginUserId();
        $order_no = $this->filterParam($param);
        if(!$order_no){
            return false;
        }
        $order = $this->where('order_no',$order_no)->find();
        if(!$this->check($order, $userId)){
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
        $order_no = $param['order_no'] ?? '';
        if(!$order_no){
            $this->error = '参数错误';
            return false;
        }
        return $order_no;
    }

    //验证订单
    public function check($order, $user_id)
    {
        if(!$order){
            $this->error = '订单信息不存在';
            return false;
        }
        if($order['status'] != 1){
            $this->error = '订单已经支付过了,无需重复支付。如有疑问请联系工作人员';
            return false;
        }
        if($order['user_id'] && $order['user_id'] != $user_id){
            $this->error = '订单已被其他用户拉起支付，请联系工作人员处理';
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