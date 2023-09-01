<?php

namespace app\api\model\line;

use app\api\service\User as UserService;
use app\common\model\line\Day as DayModel;

class Day extends DayModel
{

    //日程菜单
    public function menu($param)
    {
        $line_id = $param['line_id'] ?? 0;
        if(!$line_id){
            $this->error = '参数错误';
            return false;
        }
        $menu = $this->where('line_id',$line_id)->where('status',1)->order('day_sort','asc')->field('day_id, title, day_line, day_sort')->select();
        return compact('menu');
    }

    //日程详情
    public function detail($param)
    {
        // 当前用户信息
        $user = UserService::getCurrentLoginUser(true);
        $day_id = $param['day_id'] ?? 0;
        if(!$day_id){
            $this->error = '参数错误';
            return false;
        }
        $day = $this->where('day_id', $day_id)->with(['site', 'line'])->field('day_id, title, day_sort, distance, time_consume, tips, day_sort, status, line_id, site_num')->find();
        if(!$day){
            $this->error = '路程信息不存在';
            return false;
        }
        if($day['status'] != 1){
            $this->error = '路程信息已下线';
            return false;
        }
        $pos_arr = [];
        foreach($day['site'] as $site){
            $pos_arr[] = [
                'title' => $site['title'],
                'pos' => [$site['pos_long'], $site['pos_lat']],
                'site_sort' => $site['site_sort'],
                'site_id' => $site['site_id'],
            ];
        }
        return compact('day','pos_arr');
    }

}