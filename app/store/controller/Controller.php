<?php
// +----------------------------------------------------------------------
// | 萤火商城系统 [ 致力于通过产品和服务，帮助商家高效化开拓市场 ]
// +----------------------------------------------------------------------
// | Copyright (c) 2017~2023 https://www.yiovo.com All rights reserved.
// +----------------------------------------------------------------------
// | Licensed 这不是一个自由软件，不允许对程序代码以任何形式任何目的的再发行
// +----------------------------------------------------------------------
// | Author: 萤火科技 <admin@yiovo.com>
// +----------------------------------------------------------------------
declare (strict_types=1);

namespace app\store\controller;

use cores\BaseController;
use cores\exception\BaseException;
use app\store\service\Auth as AuthService;
use app\common\service\store\User as StoreUserService;

/**
 * 商户后台控制器基类
 * Class Controller
 * @package app\store\controller
 */
class Controller extends BaseController
{
    // 商家登录信息
    protected $store;

    // 当前商城ID
    protected $storeId;

    // 当前控制器名称
    protected $controller = '';

    // 当前方法名称
    protected $action = '';

    // 当前路由uri
    protected $routeUri = '';

    // 当前路由：分组名称
    protected $group = '';

    // 登录验证白名单
    protected $allowAllAction = [
        'passport/login',
        'passport/logout',
    ];

    /**
     * 强制验证当前访问的控制器方法method
     * 例: [ 'login' => 'POST' ]
     * @var array
     */
    protected $methodRules = [];

    /**
     * 后台初始化
     * @throws BaseException
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    public function initialize()
    {
        // 当前商城id
        $this->storeId = $this->getStoreId();
        // 设置管理员登录信息
        $this->setStoreInfo();
        // 当前路由信息
        $this->getRouteInfo();
        // 验证登录状态
        $this->checkLogin();
        // 验证当前API权限
        $this->checkPrivilege();
        // 强制验证当前访问的控制器方法method
        $this->checkMethodRules();
    }

    /**
     * 设置管理员登录信息
     */
    private function setStoreInfo()
    {
        $this->store = StoreUserService::getLoginInfo();
    }

    /**
     * 验证当前路由权限
     * @return bool
     * @throws BaseException
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    private function checkPrivilege(): bool
    {
        // 在开发模式下, 建议把此处代码暂时屏蔽, 开发完成后在超管后台新增菜单和api
        if (!AuthService::getInstance()->checkPrivilege('/' . $this->routeUri)) {
            throwError('很抱歉，没有当前api的访问权限 ' . $this->routeUri);
        }
        return true;
    }

    /**
     * 解析当前路由参数 （分组名称、控制器名称、方法名）
     */
    protected function getRouteInfo()
    {
        // 控制器名称
        $this->controller = uncamelize($this->request->controller());
        // 方法名称
        $this->action = $this->request->action();
        // 控制器分组 (用于定义所属模块)
        $group = strstr($this->controller, '.', true);
        $this->group = $group !== false ? $group : $this->controller;
        // 当前uri
        $this->routeUri = "{$this->controller}/$this->action";
    }

    /**
     * 验证登录状态
     * @return bool
     * @throws BaseException
     */
    private function checkLogin(): bool
    {
        // 验证当前请求是否在白名单
        if (in_array($this->routeUri, $this->allowAllAction)) {
            return true;
        }
        // 验证登录状态
        if (empty($this->store) || (int)$this->store['is_login'] !== 1) {
            throwError('请先登录后再访问', config('status.not_logged'));
        }
        return true;
    }

    /**
     * 获取当前store_id
     * @return int|null
     */
    protected function getStoreId(): ?int
    {
        // app/store/common.php
        return getStoreId();
    }

    /**
     * 强制验证当前访问的控制器方法method
     * @return void
     * @throws \cores\exception\BaseException
     */
    private function checkMethodRules(): void
    {
        if (!isset($this->methodRules[$this->action])) {
            return;
        }
        $methodRule = $this->methodRules[$this->action];
        $currentMethod = $this->request->method();
        if (empty($methodRule)) {
            return;
        }
        if (is_array($methodRule) && in_array($currentMethod, $methodRule)) {
            return;
        }
        if (is_string($methodRule) && $methodRule == $currentMethod) {
            return;
        }
        throwError('illegal request method');
    }
}
