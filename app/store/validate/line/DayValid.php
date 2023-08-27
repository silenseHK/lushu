<?php

namespace app\store\validate\line;

use think\Validate;

class DayValid extends Validate
{

    protected $rule = [
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
        'title|日程标题' => [
            'require',
            'max:255',
        ],
        'time_consume|日程耗时' => [
            'require',
            'max:255',
        ],
        'distance|路程距离' => [
            'require',
            'integer',
            '>=:0'
        ],
        'date|路程日期' => [
            'require',
            'integer',
            '>:0'
        ],
        'day_sort|第几日' => [
            'require',
            'integer',
            '>:0'
        ],
        'day_line|今日线路' => [
            'require',
            'max:255',
        ],
        'pos_long|经度' => [
            'require',
            'max:255',
        ],
        'pos_lat|纬度' => [
            'require',
            'max:255',
        ],
        'site_num|景点数' => [
            'require',
            'integer',
            '>=:0'
        ],
        'status|状态' => [
            'require',
            '>=:0',
            '<=:1',
            'integer',
        ],
    ];

    protected $scene = [
        'add' => ['line_id', 'title', 'time_consume', 'distance', 'date', 'day_sort', 'day_line', 'pos_long', 'pos_lat', 'site_num', 'status'],
        'edit' => ['day_id', 'line_id', 'title', 'time_consume', 'distance', 'date', 'day_sort', 'day_line', 'pos_long', 'pos_lat', 'site_num', 'status'],
        'delete' => ['day_id'],
    ];

}