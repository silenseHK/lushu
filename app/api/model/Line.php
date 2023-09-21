<?php

namespace app\api\model;

use app\api\service\User as UserService;
use app\common\model\Line as LineModel;
use think\db\Query;

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
        $line = $this->where('line_id',$line_id)->with(['day'=>function(Query $query){
            $query->with(['site']);
        }, 'banner'])->field('line_id, title, author_tips, spend_time, status, travel_notice, show_time_start, show_time_end, bannerId, alert_title')->find();
        if(!$line){
            $this->error = '线路信息不存在';
            return false;
        }
        $line = $line->toArray();
        if($line['status'] != 1 || time() < $line['show_time_start'] || $line['show_time_end'] < time()){
            $this->error = '链接已失效，欢迎再来！如有疑问，请联系策划师。';
            return false;
        }

        $site_num = 0; //路线景点数
        $distance = 0; //路线总里程
        $pos_arr = []; //坐标集合
        $day_sort = 1;
        foreach($line['day'] as $key => $day){
            $site_num = $day['site_num'] + $site_num;
            $distance = $day['distance'] + $distance;
            $distance = $day['distance'] + $distance;
            if($day['site']){
                foreach($day['site'] as $k => $site){
                    $per_pos = [
                        'title' => $site['title'],
                        'pos' => [$site['pos_long'], $site['pos_lat']],
                        'day_sort' => $day_sort,
                        'day_id' => $day['day_id'],
                        'status' => $site['status'],
                    ];
//                    if($day['day_sort'] > 0){
//                      $per_pos['title'] = "第{$day['day_sort']}天 " . $per_pos['title'];
//                    }
                    $pos_arr[] = $per_pos;
                    $day_sort++;
                    if($site['status'] != 1){
                        unset($line['day'][$key]['site'][$k]);
                    }
                }
                $day['site'] = array_values($day['site']);
            }
            $line['day'][$key]['time_consume'] = filterCostTime($day['time_consume'],2);
            if($day['day_sort'] == 0)unset($line['day'][$key]);
        }
        $line['day'] = array_values($line['day']);
        $day_num = count($line['day']);
        $per_distance = bcdiv($distance, count($line['day'])); //平均每日里程数
        return compact('site_num','distance','per_distance','pos_arr','line','day_num');
    }

}