<?php

namespace app\api\controller;

use app\api\model\Line as LineModel;
use app\api\model\line\Day as DayModel;

class Line extends Controller
{

    //线路信息
    public function index()
    {
        // 获取列表数据
        $model = new LineModel;
        $info = $model->index($this->request->param());
        if ($info !== false) {
            return $this->renderSuccess($info);
        }
        return $this->renderError($model->getError() ?: '获取信息失败');
    }

    //日程菜单
    public function dayMenu()
    {
        // 获取列表数据
        $model = new DayModel;
        $info = $model->menu($this->request->param());
        if ($info !== false) {
            return $this->renderSuccess($info);
        }
        return $this->renderError($model->getError() ?: '获取信息失败');
    }

    //日程
    public function day()
    {
        // 获取列表数据
        $model = new DayModel;
        $info = $model->detail($this->request->param());
        if ($info !== false) {
            return $this->renderSuccess($info);
        }
        return $this->renderError($model->getError() ?: '获取信息失败');
    }

}