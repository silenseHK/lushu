<?php

namespace app\common\model;

use app\common\model\line\Day;
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

    //关联日程
    public function day()
    {
        return $this->hasMany(Day::class,'line_id','line_id')->where('status',1)->append(['date_format'])->field('day_id, line_id, title, date, distance, time_consume, desc, pos_long, pos_lat, site_num, day_sort')->order('day_sort','asc');
    }

    //关联图片
    public function banner()
    {
        return $this->hasOne(UploadFile::class, 'file_id', 'bannerId');
    }

}