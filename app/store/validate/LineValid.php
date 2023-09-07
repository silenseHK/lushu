<?php

namespace app\store\validate;

use think\Validate;

class LineValid extends Validate
{

    protected $rule = [
        'line_id' => [
            'require',
            '>=:1',
            'integer',
        ],
        'title|线路标题' => [
            'require',
            'max:255',
        ],
        'spend_time|行程耗时' => [
            'require',
            'max:255',
        ],
        'show_time_start|开放浏览开始时间' => [
            'require',
            '>=:0',
            'integer',
        ],
        'show_time_end|开放浏览截至时间' => [
            'require',
            '>:show_time_start',
            'integer',
        ],
        'status|状态' => [
            'require',
            '>=:0',
            '<=:1',
            'integer',
        ],
        'bannerId|顶部图片' => [
            '>=:0',
            'integer',
        ],
        'alert_title|弹窗标题' => [
            'max:30',
        ],
    ];

    protected $scene = [
        'add' => ['title', 'spend_time', 'show_time_start', 'show_time_end', 'status', 'bannerId', 'alert_title'],
        'edit' => ['line_id', 'title', 'spend_time', 'show_time_start', 'show_time_end', 'status', 'bannerId', 'alert_title'],
        'delete' => ['line_id'],
    ];

}