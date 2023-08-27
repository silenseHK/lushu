<?php

namespace app\store\controller\line;

use app\store\controller\Controller;
use app\store\model\line\Day as DayModel;

class Day extends Controller
{

    //日程列表
    public function list()
    {
        $model = new DayModel;
        $list = $model->list($this->request->param());
        return $this->renderSuccess(compact('list'));
    }

    //添加日程
    public function add()
    {
        $model = new DayModel;
        if ($model->add($this->postData())) {
            return $this->renderSuccess('添加成功');
        }
        return $this->renderError($model->getError() ?: '添加失败');
    }

    //修改日程
    public function edit()
    {
        $model = new DayModel;
        if ($model->edit($this->postData())) {
            return $this->renderSuccess('编辑成功');
        }
        return $this->renderError($model->getError() ?: '编辑失败');
    }

    //删除日程
    public function delete()
    {
        $model = new DayModel;
        if ($model->del($this->postData())) {
            return $this->renderSuccess('删除成功');
        }
        return $this->renderError($model->getError() ?: '删除失败');
    }

}