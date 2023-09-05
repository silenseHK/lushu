<?php

namespace app\common\model\line;

use app\common\model\Line;
use cores\BaseModel;

class Day extends BaseModel
{

    // 定义表名
    protected $name = 'lushu_day';

    // 定义主键
    protected $pk = 'day_id';

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

    //关联行程
    public function site()
    {
        return $this->hasMany(DaySite::class,'day_id','day_id')->where('status',1)->with(['img', 'shop'])->order('site_sort')->field('site_id, day_id, title, schedule_time, type, cost_time, imgId, pos_long, pos_lat, tips, site_sort');
    }

    //关联线路
    public function line()
    {
        return $this->belongsTo(Line::class,'line_id','line_id')->removeOption('soft_delete')->field('line_id, title');
    }

}