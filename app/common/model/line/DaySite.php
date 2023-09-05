<?php

namespace app\common\model\line;

use cores\BaseModel;
use think\model\relation\HasMany;
use think\model\relation\HasOne;
use app\common\model\UploadFile;

class DaySite extends BaseModel
{

    // 定义表名
    protected $name = 'lushu_day_site';

    // 定义主键
    protected $pk = 'site_id';

    public function getDateFormatAttr($value, $data)
    {
        $week_arr = ['天', '一', '二', '三', '四', '五', '六'];
        $week = $week_arr[date('w',$data['date'])];
        return date("m月d日 星期{$week}", $data['date']);
    }

    public function getScheduleTimeAttr($value, $data)
    {
        return explode(',',$value) ? : [];
    }

    public function setScheduleTimeAttr($value, $data)
    {
        return implode(',',$value);
    }

    public function getTipsAttr($value)
    {
        return htmlspecialchars_decode($value);
    }

    public function setTipsAttr($value)
    {
        return htmlspecialchars($value);
    }

    /**
     * 关联模型：行程图片
     * @return HasOne
     */
    public function img(): HasOne
    {
        return $this->hasOne(UploadFile::class, 'file_id', 'imgId');
    }

    /**
     * 关联店铺
     * @return \think\model\relation\HasMany
     */
    public function shop(): HasMany
    {
        return $this->hasMany(Shop::class,'site_id','site_id')->order('sort','asc')->with(['img']);
    }

}