<?php

namespace app\common\model\line;

use app\common\model\UploadFile;
use cores\BaseModel;
use think\model\relation\BelongsTo;
use think\model\relation\HasOne;

class Shop extends BaseModel
{

    // 定义表名
    protected $name = 'lushu_shop';

    // 定义主键
    protected $pk = 'shop_id';

    /**
    * 关联模型：行程图片
    * @return HasOne
    */
    public function img(): HasOne
    {
        return $this->hasOne(UploadFile::class, 'file_id', 'imgId');
    }

    /**
     * 关联行程
     * @return \think\model\relation\BelongsTo
     */
    public function site(): BelongsTo
    {
        return $this->belongsTo(DaySite::class,'site_id','site_id')->field('site_id, title');
    }

}