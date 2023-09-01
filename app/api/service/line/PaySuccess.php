<?php

namespace app\api\service\line;

use app\api\model\PayOrder as OrderModel;
use app\api\model\User as UserModel;
use app\api\model\user\BalanceLog as BalanceLogModel;
use app\common\enum\recharge\order\PayStatus as PayStatusEnum;
use app\common\enum\user\balanceLog\Scene as SceneEnum;
use app\common\service\BaseService;

class PaySuccess extends BaseService
{

    // 订单模型
    public $model;

    // 当前用户信息
    private $user;

    /**
     * 构造函数
     * PaySuccess constructor.
     * @param $orderNo
     */
    public function __construct($orderNo)
    {
        parent::__construct();
        [$order_no, $user_id, $rand] = explode('_', $orderNo);
        // 实例化订单模型
        $this->model = OrderModel::getPayDetail($order_no);
        // 获取用户信息
        $this->user = UserModel::detail($user_id);
    }

    /**
     * 获取订单详情
     * @return OrderModel|null
     */
    public function getOrderInfo()
    {
        return $this->model;
    }

    /**
     * 订单支付成功业务处理
     * @param int $payType 支付类型
     * @param array $payData 支付回调数据
     * @return bool
     */
    public function onPaySuccess(int $payType, $payData)
    {
        return $this->model->transaction(function () use ($payData) {
            // 更新订单状态
            $this->model->save([
                'status' => 2,
                'arrive_time' => time(),
                'transaction_id' => $payData['transaction_id'],
                'user_id' => $this->user['user_id']
            ]);
            return true;
        });
    }

}