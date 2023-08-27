<?php

namespace app\common\model\line;

use cores\BaseModel;

class Day extends BaseModel
{

    // 定义表名
    protected $name = 'lushu_day';

    // 定义主键
    protected $pk = 'line_id';

    public function getDateFormatAttr($value, $data)
    {
        $week_arr = ['天', '一', '二', '三', '四', '五', '六'];
        $week = $week_arr[date('w',$data['date'])];
        return date("m月d日 星期{$week}", $data['date']);
    }

    public function getTipsAttr($value)
    {
        return htmlspecialchars_decode($value);
    }

    public function setTipsAttr($value)
    {
        return htmlspecialchars($value);
    }

}