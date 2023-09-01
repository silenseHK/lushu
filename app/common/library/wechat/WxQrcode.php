<?php

namespace app\common\library\wechat;

use app\api\model\wxapp\Setting as WxappSettingModel;
use app\common\enum\OrderType as OrderTypeEnum;
use app\common\library\helper;
use cores\exception\BaseException;

class WxQrcode extends WxBase
{

    public function __construct()
    {
        parent::__construct();
        $config = self::getWxConfig();
        $this->setConfig($config['app_id'], $config['app_secret']);
    }

    /**
     * 生成小程序码API
     * @param $orderNo
     * @param $openid
     * @param $totalFee
     * @param int $orderType 订单类型
     * @return array
     * @throws \cores\exception\BaseException
     */
    public function getQRCode($path, $scene='order'): string
    {
        $access_token = $this->getAccessToken();
        $params = [
            'path' => $path,
        ];
        // 请求API
        $url = 'https://api.weixin.qq.com/wxa/getwxacode?access_token=' . $access_token;
        $result = $this->post($url, json_encode($params));

        $filePath = public_path() . '/uploads/' . $scene . '/' . date('Ymd');
        if(!is_dir($filePath)){
            mkdir($filePath);
        }
        $fileName = time() . '.png';
        $filePathName = 'uploads/' . $scene . '/' . date('Ymd') . '/' . $fileName;
        file_put_contents($filePath . '/' . $fileName,$result);
        return $filePathName;
    }

    /**
     * 获取微信支付配置
     * @return array
     * @throws BaseException
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    private static function getWxConfig(): array
    {
        $storeId = getStoreId();
        return WxappSettingModel::getWxappConfig($storeId);
    }

}