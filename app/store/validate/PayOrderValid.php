<?php

namespace app\store\validate;

use think\Validate;

class PayOrderValid extends Validate
{

    protected $rule = [
        'pay_id' => [
            'require',
            '>=:1',
            'integer',
        ],
        'order_amount|订单金额' => [
            'require',
            '>=:0.01',
            'float',
        ],
        'line_id|线路' => [
            'require',
            '>=:0',
            'integer',
        ],
        'type|订单类型' => [
            'require',
            '>=:1',
            '<=:3',
            'integer',
        ],
    ];

    protected $scene = [
        'add' => ['order_amount', 'line_id', 'type'],
        'edit' => ['pay_id', 'order_amount', 'line_id', 'type'],
        'delete' => ['pay_id'],
    ];

}