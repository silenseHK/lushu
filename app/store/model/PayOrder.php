<?php

namespace app\store\model;

use app\common\library\wechat\WxQrcode;
use app\common\model\PayOrder as PayOrderModel;
use app\store\validate\PayOrderValid;
use think\db\Query;

class PayOrder extends PayOrderModel
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
            ->with(['line', 'user'])
            ->order(['create_time'=>'desc'])
            ->append(['arrive_time_format'])
            ->paginate(15);
    }

    //过滤查询
    protected function getFilter(array $param)
    {
        $keywords = $param['keywords'] ?? '';
        $time = $param['time'] ?? [];
        $status = $param['status'] ?? 0;
        return $this
            ->when($keywords, function(Query $query)use($keywords){
                $lineModel = new Line();
                $line_ids = $lineModel->whereLike('title',"%{$keywords}%")->column('line_id');
                $query->whereIn('line_id', $line_ids);
            })
            ->when($time, function(Query $query)use($time){
                $create_time = between_time($time);
                $query->whereBetweenTime('create_time', $create_time['start_time'], $create_time['end_time']);
            })
            ->when($status > 0, function(Query $query) use ($status){
                $query->where('status',$status);
            });
    }

    //添加支付订单
    public function add($data)
    {
        $data = $this->filterForm($data);
        if (!$this->validateForm($data, self::FORM_SCENE_ADD)) {
            return false;
        }
        $data['store_id'] = self::$storeId;
        $data['order_no'] = getNX();
        return $this->save($data);
    }

    //编辑支付订单
    public function edit(array $data)
    {
        $data = $this->filterForm($data);
        if (!$this->validateForm($data, self::FORM_SCENE_EDIT)) {
            return false;
        }
        return $this->where('line_id',$data['line_id'])->save(array_merge($data, ['update_time'=>time()])) !== false;
    }

    //删除支付订单
    public function del($data)
    {
        if (!$this->validateForm($data, self::FORM_SCENE_DELETE)) {
            return false;
        }
        return $this->where('pay_id',$data['pay_id'])->save(['delete_time'=>time()]) !== false;
    }

    //过滤表单数据
    private function filterForm(array $data)
    {
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
        $validate = new PayOrderValid();
        $line_id = $data['line_id'] ?? 0;
        if($line_id > 0){
            $lineModel = new Line;
            if(!$lineModel->where('line_id',$line_id)->find()){
                $this->error = '线路不存在';
                return false;
            }
        }
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

    //获取小程序码
    public function qrcode($param)
    {
        $pay_id = intval($param['pay_id'] ?? 0);
        if(!$pay_id){
            $this->error = '参数错误';
            return false;
        }
        ##获取订单信息
        $order = $this->find($pay_id);
        if(!$order){
            $this->error = '订单信息不存在';
            return false;
        }
        if($order['qrcode']){
            return $order['qrcode'];
        }
        if(!$order['qrcode']){  //生成二维码
            $WxQrcode = new WxQrcode();
            $qrcode = $WxQrcode->getQRCode('/pages/r_page/orderPay/index?order_no='.$order['order_no'],'order');
            $order->qrcode = $qrcode;
            $order->save();
            return $qrcode;
        }
        return true;
    }

}