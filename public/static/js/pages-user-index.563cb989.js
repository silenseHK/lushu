(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-index"],{"0a2d":function(t,e,n){"use strict";n("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={props:{url:{type:String,default:""},width:{type:Number,default:90},borderWidth:{type:Number,default:0},borderColor:{type:String,default:"#000000"}},data:function(){return{}},methods:{}};e.default=i},1185:function(t,e,n){"use strict";n.r(e);var i=n("909c"),a=n("fa49");for(var s in a)"default"!==s&&function(t){n.d(e,t,(function(){return a[t]}))}(s);n("5219");var r,o=n("f0c5"),u=Object(o["a"])(a["default"],i["b"],i["c"],!1,null,"a422b776",null,!1,i["a"],r);e["default"]=u.exports},1249:function(t,e,n){var i=n("8ed9");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("69985b32",i,!0,{sourceMap:!1,shadowMode:!1})},"15f6":function(t,e,n){"use strict";var i=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.bindMobile=e.assets=e.info=void 0;var a=i(n("5530")),s=i(n("c05a")),r={userInfo:"user/info",assets:"user/assets",bindMobile:"user/bindMobile"},o=function(t,e){var n=(0,a.default)({isPrompt:!0,load:!0},e);return s.default.get(r.userInfo,t,n)};e.info=o;var u=function(t,e){return s.default.get(r.assets,t,e)};e.assets=u;var c=function(t,e){return s.default.post(r.bindMobile,t,e)};e.bindMobile=c},1727:function(t,e,n){"use strict";var i=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("43dc")),s=new a.default([{key:"REGISTER",name:"账户注册设置",value:"register"},{key:"PAGE_CATEGORY_TEMPLATE",name:"分类页模板",value:"page_category_template"},{key:"POINTS",name:"积分设置",value:"points"},{key:"RECHARGE",name:"充值设置",value:"recharge"}]);e.default=s},4094:function(t,e,n){"use strict";n.r(e);var i=n("41d0"),a=n("fcb6");for(var s in a)"default"!==s&&function(t){n.d(e,t,(function(){return a[t]}))}(s);n("a3b1");var r,o=n("f0c5"),u=Object(o["a"])(a["default"],i["b"],i["c"],!1,null,"33483a45",null,!1,i["a"],r);e["default"]=u.exports},"41d0":function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return s})),n.d(e,"a",(function(){return i}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"avatar-image"},[n("v-uni-image",{staticClass:"image",style:{width:t.width+"rpx",height:t.width+"rpx",borderWidth:t.borderWidth+"rpx",borderColor:t.borderColor},attrs:{src:t.url?t.url:"/static/default-avatar.png"}})],1)},s=[]},"43dc":function(t,e,n){"use strict";var i=n("4ea4");n("c975"),n("d81d"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("d4ec")),s=i(n("bee2")),r=function(){function t(e){var n=this;(0,a.default)(this,t);var i=[],s=[];if(!Array.isArray(e))throw new Error("param is not an array!");e.map((function(t){t.key&&t.name&&(i.push(t.key),s.push(t.value),n[t.key]=t,t.key!==t.value&&(n[t.value]=t))})),this.data=e,this.keyArr=i,this.valueArr=s}return(0,s.default)(t,[{key:"keyOf",value:function(t){return this.data[this.keyArr.indexOf(t)]}},{key:"valueOf",value:function(t){return this.data[this.valueArr.indexOf(t)]}},{key:"getNameByKey",value:function(t){var e=this.keyOf(t);if(!e)throw new Error("No enum constant"+t);return e.name}},{key:"getNameByValue",value:function(t){var e=this.valueOf(t);if(!e)throw new Error("No enum constant"+t);return e.name}},{key:"getValueByKey",value:function(t){var e=this.keyOf(t);if(!e)throw new Error("No enum constant"+t);return e.key}},{key:"getData",value:function(){return this.data}}]),t}(),o=r;e.default=o},5219:function(t,e,n){"use strict";var i=n("1249"),a=n.n(i);a.a},5933:function(t,e,n){"use strict";var i=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.todoCounts=o,e.list=u,e.detail=c,e.express=d,e.cancel=l,e.receipt=f,e.pay=v;var a=i(n("5530")),s=i(n("c05a")),r={todoCounts:"order/todoCounts",list:"order/list",detail:"order/detail",express:"order/express",cancel:"order/cancel",receipt:"order/receipt",pay:"order/pay"};function o(t,e){return s.default.get(r.todoCounts,t,e)}function u(t,e){return s.default.get(r.list,t,e)}function c(t,e){return s.default.get(r.detail,(0,a.default)({orderId:t},e))}function d(t,e){return s.default.get(r.express,(0,a.default)({orderId:t},e))}function l(t,e){return s.default.post(r.cancel,(0,a.default)({orderId:t},e))}function f(t,e){return s.default.post(r.receipt,(0,a.default)({orderId:t},e))}function v(t,e,n){return s.default.get(r.pay,(0,a.default)({orderId:t,payType:e},n))}},"5dab":function(t,e,n){"use strict";var i=n("dbce"),a=n("4ea4");n("4160"),n("d3b7"),n("3ca3"),n("ddb0"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=a(n("bfc8")),r=a(n("4094")),o=n("c824"),u=a(n("1727")),c=a(n("64fa")),d=i(n("15f6")),l=i(n("5933")),f=[{id:"all",name:"全部订单",icon:"qpdingdan"},{id:"payment",name:"待支付",icon:"daifukuan",count:0},{id:"delivery",name:"待发货",icon:"daifahuo",count:0},{id:"received",name:"待收货",icon:"daishouhuo",count:0}],v=[{id:"address",name:"收货地址",icon:"shouhuodizhi",type:"link",url:"pages/address/index"},{id:"coupon",name:"领券中心",icon:"lingquan",type:"link",url:"pages/coupon/index"},{id:"myCoupon",name:"优惠券",icon:"youhuiquan",type:"link",url:"pages/my-coupon/index"},{id:"help",name:"我的帮助",icon:"bangzhu",type:"link",url:"pages/help/index"},{id:"contact",name:"在线客服",icon:"kefu",type:"button",openType:"contact"},{id:"points",name:"我的积分",icon:"jifen",type:"link",url:"pages/points/log"},{id:"refund",name:"退换/售后",icon:"shouhou",type:"link",url:"pages/refund/index",count:0}],g={components:{AvatarImage:r.default},data:function(){return{SettingKeyEnum:u.default,isLoading:!0,isFirstload:!0,isLogin:!1,setting:{},userInfo:{},assets:{balance:"--",points:"--",coupon:"--"},service:v,orderNavbar:f,todoCounts:{payment:0,deliver:0,received:0}}},onShow:function(t){this.onRefreshPage()},methods:{onRefreshPage:function(){(0,o.setCartTabBadge)(),this.isLogin=(0,o.checkLogin)(),this.getPageData()},getPageData:function(t){var e=this;e.isLoading=!0,Promise.all([e.getSetting(),e.getUserInfo(),e.getUserAssets(),e.getTodoCounts()]).then((function(n){e.isFirstload=!1,e.initService(),e.initOrderTabbar(),t&&t()})).catch((function(t){return console.log("catch",t)})).finally((function(){return e.isLoading=!1}))},initService:function(){var t=this,e=[];v.forEach((function(n){"points"===n.id&&(n.name="我的"+t.setting[u.default.POINTS.value].points_name),void 0!=n.count&&(n.count=t.todoCounts[n.id]),e.push(n)})),t.service=e},initOrderTabbar:function(){var t=this,e=[];f.forEach((function(n){void 0!=n.count&&(n.count=t.todoCounts[n.id]),e.push(n)})),t.orderNavbar=e},getSetting:function(){var t=this;return new Promise((function(e,n){c.default.data().then((function(n){t.setting=n,e(n)})).catch(n)}))},getUserInfo:function(){var t=this;return new Promise((function(e,n){t.isLogin?d.info({},{load:t.isFirstload}).then((function(n){t.userInfo=n.data.userInfo,e(t.userInfo)})).catch((function(i){i.result&&401==i.result.status?(t.isLogin=!1,e(null)):n(i)})):e(null)}))},getUserAssets:function(){var t=this;return new Promise((function(e,n){t.isLogin?d.assets({},{load:t.isFirstload}).then((function(n){t.assets=n.data.assets,e(t.assets)})).catch((function(i){i.result&&401==i.result.status?(t.isLogin=!1,e(null)):n(i)})):e(null)}))},getTodoCounts:function(){var t=this;return new Promise((function(e,n){t.isLogin?l.todoCounts({},{load:t.isFirstload}).then((function(n){t.todoCounts=n.data.counts,e(t.todoCounts)})).catch((function(i){i.result&&401==i.result.status?(t.isLogin=!1,e(null)):n(i)})):e(null)}))},handleLogin:function(){!this.isLogin&&this.$navTo("pages/login/index")},handleLogout:function(){var t=this;uni.showModal({title:"友情提示",content:"您确定要退出登录吗?",success:function(e){e.confirm&&s.default.dispatch("Logout",{}).then((function(e){return t.onRefreshPage()}))}})},onTargetWallet:function(){this.$navTo("pages/wallet/index")},onTargetOrder:function(t){this.$navTo("pages/order/index",{dataType:t.id})},onTargetPoints:function(){this.$navTo("pages/points/log")},onTargetMyCoupon:function(){this.$navTo("pages/my-coupon/index")},handleService:function(t){var e=t.url;this.$navTo(e)}},onPullDownRefresh:function(){this.getPageData((function(){uni.stopPullDownRefresh()}))}};e.default=g},"64fa":function(t,e,n){"use strict";var i=n("dbce"),a=n("4ea4");n("d3b7"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=a(n("4f1b")),r=a(n("893c")),o=i(n("81fd")),u="Setting",c="_other",d=function(t){var e=600;r.default.set(u,t,e)},l=function(){return r.default.get(u)},f=function(){return new Promise((function(t,e){o.data().then((function(e){t(e.data.setting)}))}))},v=function(t){return void 0==t&&(t=s.default.get("enabledSettingCache")),new Promise((function(e,n){var i=l();t&&i?e(i):f().then((function(t){d(t),e(t)}))}))},g=function(t,e){return new Promise((function(n,i){v(e).then((function(e){n(e[t])}))}))},m=function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return new Promise((function(e,n){v(t).then((function(t){var n=t[c]["h5Url"];e(n)}))}))},p={data:v,item:g,h5Url:m};e.default=p},"7b88":function(t,e,n){var i=n("be7d");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("482f864e",i,!0,{sourceMap:!1,shadowMode:!1})},"81fd":function(t,e,n){"use strict";var i=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.data=r;var a=i(n("c05a")),s={data:"setting/data"};function r(){return a.default.get(s.data)}},"8ed9":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/* 引入uView全局scss变量文件 */.main-header[data-v-a422b776]{background-color:#fff;position:relative;width:100%;height:%?280?%;background-size:100% 100%;overflow:hidden;display:flex;align-items:center;padding-left:%?30?%}.main-header .bg-image[data-v-a422b776]{position:absolute;top:0;left:0;width:100%;height:100%;z-index:0}.main-header .user-info[data-v-a422b776]{display:flex;height:%?100?%;z-index:1}.main-header .user-info .user-content[data-v-a422b776]{display:flex;flex-direction:column;justify-content:center;margin-left:%?30?%;color:#c59a46}.main-header .user-info .user-content .nick-name[data-v-a422b776]{font-size:%?34?%;font-weight:700;max-width:%?270?%}.main-header .user-info .user-content .mobile[data-v-a422b776]{margin-top:%?15?%;font-size:%?28?%}.main-header .user-info .user-content .user-grade[data-v-a422b776]{align-self:baseline;display:flex;align-items:center;background:#3c3c3c;margin-top:%?12?%;border-radius:%?10?%;padding:%?4?% %?12?%}.main-header .user-info .user-content .user-grade .user-grade_icon .image[data-v-a422b776]{display:block;width:%?32?%;height:%?32?%}.main-header .user-info .user-content .user-grade .user-grade_name[data-v-a422b776]{margin-left:%?5?%;font-size:%?26?%;color:#eee0c3}.main-header .user-info .user-content .login-tips[data-v-a422b776]{margin-top:%?12?%;font-size:%?30?%}.item-badge[data-v-a422b776]{position:absolute;top:0;right:%?55?%;background:#fa2209;color:#fff;border-radius:100%;min-width:%?38?%;height:%?38?%;display:flex;justify-content:center;align-items:center;padding:%?1?%;font-size:%?24?%}.my-asset[data-v-a422b776]{display:flex;background:#fff;padding:%?40?% 0}.my-asset .asset-right[data-v-a422b776]{width:%?200?%;border-left:%?1?% solid #eee}.my-asset .asset-right-item[data-v-a422b776]{text-align:center;color:#545454}.my-asset .asset-right-item .item-icon[data-v-a422b776]{font-size:%?44?%}.my-asset .asset-right-item .item-name[data-v-a422b776]{margin-top:%?14?%;font-size:%?28?%}.my-asset .asset-left-item[data-v-a422b776]{text-align:center;color:#666;padding:0 %?42?%}.my-asset .asset-left-item .item-value[data-v-a422b776]{font-size:%?34?%;color:red}.my-asset .asset-left-item .item-name[data-v-a422b776]{margin-top:%?6?%}.my-asset .asset-left-item .item-name[data-v-a422b776]{margin-top:%?14?%;font-size:%?28?%}.order-navbar[data-v-a422b776]{display:flex;margin:%?20?% auto %?20?% auto;padding:%?20?% 0;width:94%;box-shadow:0 %?1?% %?5?% 0 rgba(0,0,0,.05);font-size:%?30?%;border-radius:%?5?%;background:#fff}.order-navbar-item[data-v-a422b776]{position:relative;width:25%}.order-navbar-item .item-icon[data-v-a422b776]{text-align:center;margin:0 auto;padding:%?10?% 0;color:#545454;font-size:%?44?%}.order-navbar-item .item-name[data-v-a422b776]{font-size:%?28?%;color:#545454;text-align:center;margin-right:%?10?%}.my-service[data-v-a422b776]{margin:%?22?% auto %?22?% auto;padding:%?22?% 0;width:94%;box-shadow:0 %?1?% %?5?% 0 rgba(0,0,0,.05);border-radius:%?5?%;background:#fff}.my-service .service-title[data-v-a422b776]{padding-left:%?24?%;margin-bottom:%?20?%;font-size:%?30?%}.my-service .service-content[data-v-a422b776]{margin-bottom:%?-20?%}.my-service .service-content .service-item[data-v-a422b776]{position:relative;width:25%;float:left;margin-bottom:%?30?%}.my-service .service-content .service-item .item-icon[data-v-a422b776]{text-align:center;margin:0 auto;padding:%?14?% 0;color:#ff3800;font-size:%?44?%}.my-service .service-content .service-item .item-name[data-v-a422b776]{font-size:%?28?%;color:#545454;text-align:center;margin-right:%?10?%}.my-logout[data-v-a422b776]{display:flex;justify-content:center;margin-top:%?50?%}.my-logout .logout-btn[data-v-a422b776]{width:60%;margin:0 auto;font-size:%?28?%;color:#616161;border-radius:%?20?%;border:1px solid #dcdcdc;padding:%?16?% 0;text-align:center}',""]),t.exports=e},"909c":function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return s})),n.d(e,"a",(function(){return i}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isFirstload?t._e():n("v-uni-view",{staticClass:"container"},[n("v-uni-view",{staticClass:"main-header",style:{height:"H5"==t.platform?"260rpx":"320rpx",paddingTop:"H5"==t.platform?"0":"80rpx"}},[n("v-uni-image",{staticClass:"bg-image",attrs:{src:"/static/background/user-header2.png",mode:"scaleToFill"}}),t.isLogin?n("v-uni-view",{staticClass:"user-info"},[n("v-uni-view",{staticClass:"user-avatar"},[n("avatar-image",{attrs:{url:t.userInfo.avatar_url,width:100}})],1),n("v-uni-view",{staticClass:"user-content"},[n("v-uni-view",{staticClass:"nick-name oneline-hide"},[t._v(t._s(t.userInfo.nick_name))]),t.userInfo.grade_id>0&&t.userInfo.grade?n("v-uni-view",{staticClass:"user-grade"},[n("v-uni-view",{staticClass:"user-grade_icon"},[n("v-uni-image",{staticClass:"image",attrs:{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAA0lBMVEUAAAD/tjL/tzH/uDP/uC7/tjH/tzH/tzL/tTH+tTL+tjP/tDD/tTD+tzD/tjL/szD/uDH/tjL/tjL+tjD/tjT/szb/tzL/tTL+uTH+tjL/tjL/tjL/tTT/tjL/tjL+tjH/uTL/vDD/tjL/tjH/tzL9uS//tTL/nBr/sS7/tjH/ujL/szD/uTv+rzf/tzL+tzH+vDP+uzL+tjP+ry7+tDL9ki/7szf/sEX/tTL/tjL+tjL/tTH/tTT/tzH/tzL/tjP/sTX/uTP/wzX+rTn/vDX9vC8m8ckhAAAAOXRSTlMAlnAMB/vjxKWGMh0S6drMiVxPRkEY9PLy0ru0sKagmo5+dGtgVCMgBP716eXWyMGxqJGRe2o5KSmFNjaYAAABP0lEQVQ4y8XS13KDMBAF0AWDDe4t7r3ETu9lVxJgJ/n/X8rKAzHG5TE+Twz3zki7I/g/KXdghIbGJewrU4yzn08Ebgl6TuZzzuOC6W5es3HX6qsSz3NFShRU0MpucytDmOSpu3yULx3CA9RD1HjVedc0jSjqm6ZzhUjDsFDQhSp/OKj5GQvg0+ZCOixsbtDLAeTTOm/yGi8GyIphIVsgH737FEDV44LJa88IRKK/SetrwT9G/GUIr6vXjoy4GXn7+RboVXnghuSjaoGecwQxL2su3CwAKlO+QFoqxI4FMctHQhQd2OhxTu184jWUlI+rMTBTn1/IQcJHQ6GQdZ7pWiDaNdhTt330efISeiqYwQEzQpTlsURJLhzkEmpCPsERfeIUVyXr6MNuIyp5uziW6xURtt7hhGwzmMNJExfO4Bd9X0ZPqAxdNwAAAABJRU5ErkJggg=="}})],1),n("v-uni-view",{staticClass:"user-grade_name"},[n("v-uni-text",[t._v(t._s(t.userInfo.grade.name))])],1)],1):n("v-uni-view",{staticClass:"mobile"},[t._v(t._s(t.userInfo.mobile))])],1)],1):n("v-uni-view",{staticClass:"user-info",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleLogin.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"user-avatar"},[n("avatar-image",{attrs:{width:100}})],1),n("v-uni-view",{staticClass:"user-content"},[n("v-uni-view",{staticClass:"nick-name"},[t._v("未登录")]),n("v-uni-view",{staticClass:"login-tips"},[t._v("点击登录账号")])],1)],1)],1),n("v-uni-view",{staticClass:"my-asset"},[n("v-uni-view",{staticClass:"asset-left flex-box dis-flex flex-x-around"},[n("v-uni-view",{staticClass:"asset-left-item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onTargetWallet.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"item-value dis-flex flex-x-center"},[n("v-uni-text",[t._v(t._s(t.isLogin?t.assets.balance:"--"))])],1),n("v-uni-view",{staticClass:"item-name dis-flex flex-x-center"},[n("v-uni-text",[t._v("账户余额")])],1)],1),n("v-uni-view",{staticClass:"asset-left-item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onTargetPoints.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"item-value dis-flex flex-x-center"},[n("v-uni-text",[t._v(t._s(t.isLogin?t.assets.points:"--"))])],1),n("v-uni-view",{staticClass:"item-name dis-flex flex-x-center"},[n("v-uni-text",[t._v(t._s(t.setting[t.SettingKeyEnum.POINTS.value].points_name))])],1)],1),n("v-uni-view",{staticClass:"asset-left-item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onTargetMyCoupon.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"item-value dis-flex flex-x-center"},[n("v-uni-text",[t._v(t._s(t.isLogin?t.assets.coupon:"--"))])],1),n("v-uni-view",{staticClass:"item-name dis-flex flex-x-center"},[n("v-uni-text",[t._v("优惠券")])],1)],1)],1),n("v-uni-view",{staticClass:"asset-right"},[n("v-uni-view",{staticClass:"asset-right-item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onTargetWallet.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"item-icon dis-flex flex-x-center"},[n("v-uni-text",{staticClass:"iconfont icon-qianbao"})],1),n("v-uni-view",{staticClass:"item-name dis-flex flex-x-center"},[n("v-uni-text",[t._v("我的钱包")])],1)],1)],1)],1),n("v-uni-view",{staticClass:"order-navbar"},t._l(t.orderNavbar,(function(e,i){return n("v-uni-view",{key:i,staticClass:"order-navbar-item",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.onTargetOrder(e)}}},[n("v-uni-view",{staticClass:"item-icon"},[n("v-uni-text",{staticClass:"iconfont",class:["icon-"+e.icon]})],1),n("v-uni-view",{staticClass:"item-name"},[t._v(t._s(e.name))]),e.count&&e.count>0?n("v-uni-view",{staticClass:"item-badge"},[e.count<=99?n("v-uni-text",{staticClass:"text"},[t._v(t._s(e.count))]):n("v-uni-text",{staticClass:"text"},[t._v("99+")])],1):t._e()],1)})),1),n("v-uni-view",{staticClass:"my-service"},[n("v-uni-view",{staticClass:"service-title"},[t._v("我的服务")]),n("v-uni-view",{staticClass:"service-content clearfix"},[t._l(t.service,(function(e,i){return["link"==e.type?n("v-uni-view",{key:i+"_0",staticClass:"service-item",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.handleService(e)}}},[n("v-uni-view",{staticClass:"item-icon"},[n("v-uni-text",{staticClass:"iconfont",class:["icon-"+e.icon]})],1),n("v-uni-view",{staticClass:"item-name"},[t._v(t._s(e.name))]),e.count&&e.count>0?n("v-uni-view",{staticClass:"item-badge"},[e.count<=99?n("v-uni-text",{staticClass:"text"},[t._v(t._s(e.count))]):n("v-uni-text",{staticClass:"text"},[t._v("99+")])],1):t._e()],1):t._e(),"button"==e.type&&"MP-WEIXIN"==t.platform?n("v-uni-view",{key:i+"_1",staticClass:"service-item"},[n("v-uni-button",{staticClass:"btn-normal",attrs:{"open-type":e.openType}},[n("v-uni-view",{staticClass:"item-icon"},[n("v-uni-text",{staticClass:"iconfont",class:["icon-"+e.icon]})],1),n("v-uni-view",{staticClass:"item-name"},[t._v(t._s(e.name))])],1)],1):t._e()]}))],2)],1),t.isLogin?n("v-uni-view",{staticClass:"my-logout"},[n("v-uni-view",{staticClass:"logout-btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleLogout()}}},[n("v-uni-text",[t._v("退出登录")])],1)],1):t._e()],1)},s=[]},a3b1:function(t,e,n){"use strict";var i=n("7b88"),a=n.n(i);a.a},be7d:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/* 引入uView全局scss变量文件 */.avatar-image .image[data-v-33483a45]{display:block;width:%?60?%;height:%?60?%;border-radius:50%;border-style:solid}',""]),t.exports=e},fa49:function(t,e,n){"use strict";n.r(e);var i=n("5dab"),a=n.n(i);for(var s in i)"default"!==s&&function(t){n.d(e,t,(function(){return i[t]}))}(s);e["default"]=a.a},fcb6:function(t,e,n){"use strict";n.r(e);var i=n("0a2d"),a=n.n(i);for(var s in i)"default"!==s&&function(t){n.d(e,t,(function(){return i[t]}))}(s);e["default"]=a.a}}]);