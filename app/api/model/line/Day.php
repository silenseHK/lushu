<?php

namespace app\api\model\line;

use app\api\service\User as UserService;
use app\common\model\line\Day as DayModel;

class Day extends DayModel
{

    //格式化时间
    public function getTimeConsumeAttr($value)
    {
        return filterCostTime($value);
    }

    //日程菜单
    public function menu($param)
    {
        $line_id = $param['line_id'] ?? 0;
        if(!$line_id){
            $this->error = '参数错误';
            return false;
        }
        $menu = $this->where('line_id',$line_id)->where('status',1)->where('day_sort','>',0)->order('day_sort','asc')->field('day_id, title, day_line, day_sort, time_consume, distance')->select();
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
        $day = $day->toArray();
        if($day['status'] != 1){
            $this->error = '路程信息已下线';
            return false;
        }
        $pos_arr = [];
        foreach($day['site'] as $key => $site){
            $pos_arr[] = [
                'title' => $site['title'],
                'pos' => [$site['pos_long'], $site['pos_lat']],
                'site_sort' => $site['site_sort'],
                'site_id' => $site['site_id'],
                'status' => $site['status'],
            ];
            if($site['status'] != 1){
                unset($day['site'][$key]);
            }
            $day['site'][$key]['cost_time'] = filterCostTime($site['cost_time']);
        }
        $day['site'] = array_values($day['site']);
        return compact('day','pos_arr');
    }

}