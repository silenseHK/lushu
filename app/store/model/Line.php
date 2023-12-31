<?php

namespace app\store\model;

use app\common\library\wechat\WxQrcode;
use app\common\model\Line as LineModel;
use app\store\model\line\Day;
use app\store\model\line\DaySite;
use app\store\validate\LineValid;
use think\db\Query;
use think\Exception;

class Line extends LineModel
{

    // 表单验证场景: 新增
    const FORM_SCENE_ADD = 'add';

    // 表单验证场景: 编辑
    const FORM_SCENE_EDIT = 'edit';

    // 表单验证场景: 删除
    const FORM_SCENE_DELETE = 'delete';

    // 表单验证场景: 复制
    const FORM_SCENE_COPY = 'copy';

    //线路列表
    public function list(array $param)
    {
        return $this->getFilter($param)
            ->with(['banner'])
            ->order(['create_time'=>'desc'])
            ->append(['show_time', 'show_time_format'])
            ->paginate(15);
    }

    //线路列表
    public function simpleList()
    {
        return $this->where('status',1)->order('create_time','desc')->field('line_id, title')->select();
    }

    //过滤查询
    protected function getFilter(array $param)
    {
        $keywords = $param['keywords'] ?? '';
        $time = $param['time'] ?? [];
        return $this
            ->when($keywords, function(Query $query)use($keywords){
                $query->whereLike('title',"%{$keywords}%");
            })
            ->when($time, function(Query $query)use($time){
                $create_time = between_time($time);
                $query->whereBetweenTime('create_time', $create_time['start_time'], $create_time['end_time']);
            });
    }

    //新增线路
    public function add(array $data)
    {
        $data = $this->filterForm($data);
        if (!$this->validateForm($data, self::FORM_SCENE_ADD)) {
            return false;
        }
        $data['store_id'] = self::$storeId;
        return $this->save($data);
    }

    //编辑线路
    public function edit(array $data)
    {
        $data = $this->filterForm($data);
        if (!$this->validateForm($data, self::FORM_SCENE_EDIT)) {
            return false;
        }
        return $this->where('line_id',$data['line_id'])->save(array_merge($data, ['update_time'=>time()])) !== false;
    }

    //删除线路
    public function del($data)
    {
        if (!$this->validateForm($data, self::FORM_SCENE_DELETE)) {
            return false;
        }
        return $this->where('line_id',$data['line_id'])->save(['delete_time'=>time()]) !== false;
    }

    //复制线路
    public function copy($data)
    {
        if (!$this->validateForm($data, self::FORM_SCENE_COPY)) {
            return false;
        }
        $line_id = $data['line_id'];
        ##线路信息
        $line = $this->find($line_id);
        if(!$line){
            $this->error = '线路信息不存在';
            return false;
        }
        $line = $line->toArray();
        ##日程信息
        $dayModel = new Day();
        $dayList = $dayModel->where('line_id', $line_id)->select()->toArray();
        $siteModel = new DaySite();
        $this->startTrans();
        try{
            unset($line['line_id']);
            unset($line['create_time']);
            unset($line['update_time']);
            unset($line['qrcode']);
            $res = $this->create($line);
            $new_line_id = $res['line_id'];
            $site_insert = [];
            foreach($dayList as $day){
                $siteList = $siteModel->where('day_id',$day['day_id'])->select()->toArray();
                unset($day['day_id']);
                unset($day['line_id']);
                unset($day['create_time']);
                unset($day['update_time']);
                $day['line_id'] = $new_line_id;
                $res = $dayModel->create($day);
                $new_day_id = $res['day_id'];
                foreach($siteList as $site){
                    unset($site['site_id']);
                    unset($site['day_id']);
                    unset($site['line_id']);
                    unset($site['create_time']);
                    unset($site['update_time']);
                    $site['line_id'] = $new_line_id;
                    $site['day_id'] = $new_day_id;
                    $site_insert[] = $site;
                }
            }
            if($site_insert){
                $res = $siteModel->insertAll($site_insert);
                if(!$res){
                    throw new Exception('复制行程失败');
                }
            }
            $this->commit();
            return true;
        }catch (\Exception $e){
            $this->rollback();
            $this->error = $e->getMessage();
            return false;
        }
    }

    //过滤表单数据
    private function filterForm(array $data)
    {
        if(!isset($data['show_time']))return [];
        $show_time = between_time($data['show_time']);
        $data['show_time_start'] = $show_time['start_time'];
        $data['show_time_end'] = $show_time['end_time'];
        unset($data['show_time']);
        return $data;
    }

    /**
     * 表单验证
     * @param $data
     * @param string $scene
     * @return bool
     */
    private function validateForm(array $data, string $scene = self::FORM_SCENE_ADD)
    {
        $validate = new LineValid();
        switch($scene){
            case self::FORM_SCENE_ADD:
                if(!$validate->scene($scene)->check($data)){
                    $this->error = $validate->getError();
                    return false;
                }
                break;
            case self::FORM_SCENE_EDIT:
                if(!$validate->scene($scene)->check($data)){
                    $this->error = $validate->getError();
                    return false;
                }
                break;
            case self::FORM_SCENE_DELETE:
                if(!$validate->scene($scene)->check($data)){
                    $this->error = $validate->getError();
                    return false;
                }
                break;
            case self::FORM_SCENE_COPY:
                if(!$validate->scene($scene)->check($data)){
                    $this->error = $validate->getError();
                    return false;
                }
                break;
            default:
                return false;
        }
        return true;
    }

    //获取线路二维码
    public function qrcode(array $param)
    {
        $line_id = intval($param['line_id'] ?? 0);
        if(!$line_id){
            $this->error = '参数错误';
            return false;
        }
        ##获取线路信息
        $line = $this->find($line_id);
        if(!$line){
            $this->error = '线路信息不存在';
            return false;
        }
        if($line['qrcode']){
            return $line['qrcode'];
        }
        if(!$line['qrcode']){  //生成二维码
            $WxQrcode = new WxQrcode();
            $qrcode = $WxQrcode->getQRCode('/pages/index/index?line_id='.$line_id,'line');
            $line->qrcode = $qrcode;
            $line->save();
            return $qrcode;
        }
        return true;
    }

}