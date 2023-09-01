<?php

namespace app\api\model;

use app\api\service\User as UserService;
use app\common\model\Line as LineModel;

class Line extends LineModel
{

    public function index($param)
    {
        // 当前用户信息
        $user = UserService::getCurrentLoginUser(true);
        $line_id = intval($param['line_id'] ?? 0);
        if(!$line_id){
            $this->error = '参数错误';
            return false;
        }
        ##获取线路信息
        $line = $this->where('line_id',$line_id)->with(['day'])->field('line_id, title, author_tips, spend_time, status, travel_notice, show_time_start, show_time_end')->find();
        if(!$line){
            $this->error = '线路信息不存在';
            return false;
        }
        if($line['status'] != 1 || time() < $line['show_time_start'] || $line['show_time_end'] < time()){
            $this->error = '线路信息暂未开放';
            return false;
        }

        $site_num = 0; //路线景点数
        $distance = 0; //路线总里程
        $pos_arr = []; //坐标集合
        foreach($line['day'] as $day){
            $site_num = $day['site_num'] + $site_num;
            $distance = $day['distance'] + $distance;
            $distance = $day['distance'] + $distance;
            $pos_arr[] = [
                'title' => $day['title'],
                'pos' => [$day['pos_long'], $day['pos_lat']],
                'day_sort' => $day['day_sort'],
                'day_id' => $day['day_id'],
            ];
        }
        $per_distance = bcdiv($distance, count($line['day'])); //平均每日里程数
        return compact('site_num','distance','per_distance','pos_arr','line');
    }

}