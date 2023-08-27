<?php

namespace app\common\model;

use cores\BaseModel;
use think\model\concern\SoftDelete;

class Line extends BaseModel
{

    // 定义表名
    protected $name = 'lushu_line';

    // 定义主键
    protected $pk = 'line_id';

    protected $deleteTime = 'delete_time';

    use SoftDelete;

    public function getAuthorTipsAttr($value)
    {
        return htmlspecialchars_decode($value);
    }

    public function setAuthorTipsAttr($value)
    {
        return htmlspecialchars($value);
    }

    public function getTravelNoticeAttr($value)
    {
        return htmlspecialchars_decode($value);
    }

    public function setTravelNoticeAttr($value)
    {
        return htmlspecialchars($value);
    }

    public function getShowTimeFormatAttr($value, $data)
    {
        return [date('Y-m-d H:i:s', $data['show_time_start']), date('Y-m-d H:i:s', $data['show_time_end'])];
    }

    public function getShowTimeAttr($value, $data)
    {
        return [$data['show_time_start'], $data['show_time_end']];
    }

}