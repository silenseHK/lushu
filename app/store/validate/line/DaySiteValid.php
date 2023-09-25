<?php

namespace app\store\validate\line;

use think\Validate;

class DaySiteValid extends Validate
{

    protected $rule = [
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
        'title|行程标题' => [
            'require',
            'max:255',
        ],
        'schedule_time|行程时间' => [
            'require',
            'array',
        ],
        'type|行程类型' => [
            'require',
            'max:255',
        ],
        'cost_time|行程耗时' => [
            'require',
            '>=:0',
            'integer',
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
        'site_sort|景点排序' => [
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
        'show_type|展示方式' => [
            'require',
            '>=:1',
            '<=:3',
            'integer',
        ],
    ];

    protected $scene = [
        'add' => ['day_id', 'title', 'schedule_time', 'type', 'cost_time', 'imgId', 'pos_long', 'pos_lat', 'site_sort', 'status', 'show_type'],
        'edit' => ['site_id', 'day_id', 'title', 'schedule_time', 'type', 'cost_time', 'imgId', 'pos_long', 'pos_lat', 'site_sort', 'status', 'show_type'],
        'delete' => ['site_id'],
    ];

}