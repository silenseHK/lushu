<?php

namespace app\common\model;

use cores\BaseModel;
use think\model\concern\SoftDelete;

class PayOrder extends BaseModel
{

    // 定义表名
    protected $name = 'lushu_pay_order';

    // 定义主键
    protected $pk = 'pay_id';

    protected $delete_time = 'delete_time';

    use SoftDelete;

    public function getArriveTimeFormatAttr($value, $data)
    {
        return $data['arrive_time'] ? date('Y-m-d H:i:s', $data['arrive_time']) : '--';
    }

    public function line()
    {
        return $this->belongsTo(Line::class,'line_id','line_id')->removeOption('soft_delete')->field('line_id, title');
    }

    public function user()
    {
        return $this->belongsTo(User::class,'user_id','user_id')->field('user_id, mobile, nick_name');
    }

    /**
     * 获取订单详情
     * @param $where
     * @return array|null|\think\Model
     */
    public static function detail($where)
    {
        return static::get($where);
    }

}