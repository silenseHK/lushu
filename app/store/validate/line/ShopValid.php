<?php

namespace app\store\validate\line;

use think\Validate;

class ShopValid extends Validate
{

    protected $rule = [
        'shop_id' => [
            'require',
            '>=:1',
            'integer',
        ],
        'site_id' => [
            'require',
            '>=:1',
            'integer',
        ],
        'day_id' => [
            'require',
            '>=:1',
            'integer',
        ],
        'line_id' => [
            'require',
            '>=:1',
            'integer',
        ],
        'title|店铺名' => [
            'require',
            'max:255',
        ],
        'imgId|图片' => [
            'require',
            '>=:1',
            'integer',
        ],
        'pos_long|经度' => [
            'require',
            'max:255',
        ],
        'pos_lat|纬度' => [
            'require',
            'max:255',
        ],
        'sort|店铺排序' => [
            'require',
            '>=:1',
            'integer',
        ],
        'status|状态' => [
            'require',
            '>=:0',
            '<=:1',
            'integer',
        ],
    ];

    protected $scene = [
        'add' => ['site_id', 'title', 'imgId', 'pos_long', 'pos_lat', 'sort', 'status'],
        'edit' => ['shop_id', 'site_id', 'title', 'imgId', 'pos_long', 'pos_lat', 'sort', 'status'],
        'delete' => ['shop_id'],
    ];

}