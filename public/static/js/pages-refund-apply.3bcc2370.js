(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-refund-apply"],{"02ac":function(e,t,a){var i=a("24fb");t=i(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/* 引入uView全局scss变量文件 */.container[data-v-f47266da]{padding-bottom:calc(constant(safe-area-inset-bottom) + %?140?%);padding-bottom:calc(env(safe-area-inset-bottom) + %?140?%)}.row-title[data-v-f47266da]{color:#888;margin-bottom:%?20?%}.goods-detail[data-v-f47266da]{padding:%?24?% %?20?%}.goods-detail .left .goods-image[data-v-f47266da]{display:block;width:%?150?%;height:%?150?%}.goods-detail .right[data-v-f47266da]{padding-left:%?20?%}.goods-detail .goods-props[data-v-f47266da]{margin-top:%?14?%;height:%?40?%;color:#ababab;font-size:%?24?%;overflow:hidden}.goods-detail .goods-props .goods-props-item[data-v-f47266da]{display:inline-block;margin-right:%?14?%;padding:%?4?% %?16?%;border-radius:%?12?%;background-color:#f5f5f5;width:auto}\r\n/* 服务类型 */.row-service[data-v-f47266da]{padding:%?24?% %?20?%}.service-switch .switch-item[data-v-f47266da]{padding:%?6?% %?30?%;margin-right:%?25?%;border-radius:%?10?%;border:1px solid #b1b1b1;color:#888}.service-switch .switch-item.active[data-v-f47266da]{color:#fc1e56;border:1px solid #fc1e56}\r\n/* 申请原因 */.row-textarea[data-v-f47266da]{padding:%?24?% %?20?%}.row-textarea .textarea[data-v-f47266da]{width:100%;height:%?220?%;padding:%?12?%;border:%?1?% solid #e8e8e8;border-radius:%?5?%;box-sizing:border-box;font-size:%?26?%}\r\n/* 退款金额 */.row-money[data-v-f47266da]{padding:%?24?% %?20?%}.row-money .row-title[data-v-f47266da]{margin-bottom:0;margin-right:%?30?%}.row-voucher[data-v-f47266da]{padding:%?24?% %?20?%}.row-voucher .image-list[data-v-f47266da]{padding:0 %?20?%;margin-top:%?20?%;margin-bottom:%?-20?%}.row-voucher .image-list[data-v-f47266da]:after{clear:both;content:" ";display:table}.row-voucher .image-list .image[data-v-f47266da]{display:block;width:100%;height:100%}.row-voucher .image-list .image-picker[data-v-f47266da],\r\n.row-voucher .image-list .image-preview[data-v-f47266da]{width:%?184?%;height:%?184?%;margin-right:%?30?%;margin-bottom:%?30?%;float:left}.row-voucher .image-list .image-picker[data-v-f47266da]:nth-child(3n+0),\r\n.row-voucher .image-list .image-preview[data-v-f47266da]:nth-child(3n+0){margin-right:0}.row-voucher .image-list .image-picker[data-v-f47266da]{display:flex;flex-direction:column;justify-content:center;align-items:center;border:%?1?% dashed #ccc;color:#ccc}.row-voucher .image-list .image-picker .choose-icon[data-v-f47266da]{font-size:%?48?%;margin-bottom:%?6?%}.row-voucher .image-list .image-picker .choose-text[data-v-f47266da]{font-size:%?24?%}.row-voucher .image-list .image-preview[data-v-f47266da]{position:relative}.row-voucher .image-list .image-preview .image-delete[data-v-f47266da]{position:absolute;top:%?-15?%;right:%?-15?%;height:%?42?%;width:%?42?%;line-height:%?42?%;background:rgba(0,0,0,.64);border-radius:50%;color:#fff;font-weight:bolder;font-size:%?22?%;z-index:10;text-align:center}.footer-fixed[data-v-f47266da]{position:fixed;bottom:var(--window-bottom);left:0;right:0;z-index:11;box-shadow:0 %?-4?% %?40?% 0 hsla(0,0%,59.2%,.24);background:#fff;padding-bottom:constant(safe-area-inset-bottom);padding-bottom:env(safe-area-inset-bottom)}.footer-fixed .btn-wrapper[data-v-f47266da]{height:%?120?%;display:flex;align-items:center;padding:0 %?20?%}.footer-fixed .btn-item[data-v-f47266da]{flex:1;font-size:%?28?%;height:%?80?%;line-height:%?80?%;text-align:center;color:#fff;border-radius:%?50?%}.footer-fixed .btn-item-main[data-v-f47266da]{background:linear-gradient(90deg,#f9211c,#ff6335)}.footer-fixed .btn-item-main.disabled[data-v-f47266da]{background:#ff9779}',""]),e.exports=t},"055d":function(e,t,a){"use strict";a("7a82");var i=a("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"AuditStatusEnum",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"RefundStatusEnum",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"RefundTypeEnum",{enumerable:!0,get:function(){return r.default}});var n=i(a("27be")),o=i(a("63360")),r=i(a("8394"))},"05e0":function(e,t,a){"use strict";a.r(t);var i=a("8c42"),n=a.n(i);for(var o in i)["default"].indexOf(o)<0&&function(e){a.d(t,e,(function(){return i[e]}))}(o);t["default"]=n.a},"0663":function(e,t,a){"use strict";a("7a82");var i=a("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.image=void 0,a("d3b7"),a("d81d");var n=i(a("0227"));t.image=function(e){return new Promise((function(t,a){n.default.urlFileUpload({files:e,maxSize:2097152}).then((function(e){return t(e.map((function(e){return e.data.fileInfo.file_id})),e)})).catch(a)}))}},"102c":function(e,t,a){"use strict";a.r(t);var i=a("4285"),n=a("05e0");for(var o in n)["default"].indexOf(o)<0&&function(e){a.d(t,e,(function(){return n[e]}))}(o);a("2c7c");var r=a("f0c5"),d=Object(r["a"])(n["default"],i["b"],i["c"],!1,null,"f47266da",null,!1,i["a"],void 0);t["default"]=d.exports},"27be":function(e,t,a){"use strict";a("7a82");var i=a("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(a("5bd6")),o=new n.default([{key:"WAIT",name:"待审核",value:0},{key:"REVIEWED",name:"已同意",value:10},{key:"REJECTED",name:"已拒绝",value:20}]);t.default=o},"2c7c":function(e,t,a){"use strict";var i=a("d102"),n=a.n(i);n.a},4285:function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"c",(function(){return n})),a.d(t,"a",(function(){}));var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.isLoading?e._e():a("v-uni-view",{staticClass:"container"},[a("v-uni-view",{staticClass:"goods-detail b-f dis-flex flex-dir-row"},[a("v-uni-view",{staticClass:"left"},[a("v-uni-image",{staticClass:"goods-image",attrs:{src:e.goods.goods_image}})],1),a("v-uni-view",{staticClass:"right dis-flex flex-box flex-dir-column flex-x-around"},[a("v-uni-view",{staticClass:"goods-name"},[a("v-uni-text",{staticClass:"twoline-hide"},[e._v(e._s(e.goods.goods_name))])],1),a("v-uni-view",{staticClass:"dis-flex col-9 f-24"},[a("v-uni-view",{staticClass:"flex-box"},[a("v-uni-view",{staticClass:"goods-props clearfix"},e._l(e.goods.goods_props,(function(t,i){return a("v-uni-view",{key:i,staticClass:"goods-props-item"},[a("v-uni-text",[e._v(e._s(t.value.name))])],1)})),1)],1),a("v-uni-text",{staticClass:"t-r"},[e._v("×"+e._s(e.goods.total_num))])],1)],1)],1),a("v-uni-view",{staticClass:"row-service b-f m-top20"},[a("v-uni-view",{staticClass:"row-title"},[e._v("服务类型")]),a("v-uni-view",{staticClass:"service-switch dis-flex"},e._l(e.RefundTypeEnum.data,(function(t,i){return a("v-uni-view",{key:i,staticClass:"switch-item",class:{active:e.formData.type==t.value},on:{click:function(a){arguments[0]=a=e.$handleEvent(a),e.onSwitchService(t.value)}}},[e._v(e._s(t.name))])})),1)],1),a("v-uni-view",{staticClass:"row-textarea b-f m-top20"},[a("v-uni-view",{staticClass:"row-title"},[e._v("申请原因")]),a("v-uni-view",{staticClass:"content"},[a("v-uni-textarea",{staticClass:"textarea",attrs:{maxlength:"2000",placeholder:"请详细填写申请原因，注意保持商品的完好，建议您先与卖家沟通",placeholderStyle:"color:#ccc"},model:{value:e.formData.content,callback:function(t){e.$set(e.formData,"content",t)},expression:"formData.content"}})],1)],1),e.formData.type==e.RefundTypeEnum.RETURN.value?a("v-uni-view",{staticClass:"row-money b-f m-top20 dis-flex"},[a("v-uni-view",{staticClass:"row-title"},[e._v("退款金额")]),a("v-uni-view",{staticClass:"money col-m"},[e._v("￥"+e._s(e.goods.total_pay_price))])],1):e._e(),a("v-uni-view",{staticClass:"row-voucher b-f m-top20"},[a("v-uni-view",{staticClass:"row-title"},[e._v("上传凭证 (最多6张)")]),a("v-uni-view",{staticClass:"image-list"},[e._l(e.imageList,(function(t,i){return a("v-uni-view",{key:i,staticClass:"image-preview"},[a("v-uni-text",{staticClass:"image-delete iconfont icon-shanchu",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.deleteImage(i)}}}),a("v-uni-image",{staticClass:"image",attrs:{mode:"aspectFill",src:t.path}})],1)})),e.imageList.length<e.maxImageLength?a("v-uni-view",{staticClass:"image-picker",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.chooseImage()}}},[a("v-uni-text",{staticClass:"choose-icon iconfont icon-camera"}),a("v-uni-text",{staticClass:"choose-text"},[e._v("上传图片")])],1):e._e()],2)],1),a("v-uni-view",{staticClass:"footer-fixed"},[a("v-uni-view",{staticClass:"btn-wrapper"},[a("v-uni-view",{staticClass:"btn-item btn-item-main",class:{disabled:e.disabled},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.handleSubmit()}}},[e._v("确认提交")])],1)],1)],1)},n=[]},"5bd6":function(e,t,a){"use strict";a("7a82");var i=a("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("d9e2"),a("d401"),a("d81d"),a("14d9"),a("c975");var n=i(a("d4ec")),o=i(a("bee2")),r=function(){function e(t){var a=this;(0,n.default)(this,e);var i=[],o=[];if(!Array.isArray(t))throw new Error("param is not an array!");t.map((function(e){e.key&&e.name&&(i.push(e.key),o.push(e.value),a[e.key]=e,e.key!==e.value&&(a[e.value]=e))})),this.data=t,this.keyArr=i,this.valueArr=o}return(0,o.default)(e,[{key:"keyOf",value:function(e){return this.data[this.keyArr.indexOf(e)]}},{key:"valueOf",value:function(e){return this.data[this.valueArr.indexOf(e)]}},{key:"getNameByKey",value:function(e){var t=this.keyOf(e);if(!t)throw new Error("No enum constant"+e);return t.name}},{key:"getNameByValue",value:function(e){var t=this.valueOf(e);if(!t)throw new Error("No enum constant"+e);return t.name}},{key:"getValueByKey",value:function(e){var t=this.keyOf(e);if(!t)throw new Error("No enum constant"+e);return t.key}},{key:"getData",value:function(){return this.data}}]),e}(),d=r;t.default=d},63360:function(e,t,a){"use strict";a("7a82");var i=a("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(a("5bd6")),o=new n.default([{key:"NORMAL",name:"进行中",value:0},{key:"REJECTED",name:"已拒绝",value:10},{key:"COMPLETED",name:"已完成",value:20},{key:"CANCELLED",name:"已取消",value:30}]);t.default=o},8394:function(e,t,a){"use strict";a("7a82");var i=a("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(a("5bd6")),o=new n.default([{key:"RETURN",name:"退货退款",value:10},{key:"EXCHANGE",name:"换货",value:20}]);t.default=o},"8c42":function(e,t,a){"use strict";(function(e){a("7a82");var i=a("dbce").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("99af"),a("a434"),a("d3b7");var n=a("055d"),o=i(a("0663")),r=i(a("bea1")),d={data:function(){return{RefundTypeEnum:n.RefundTypeEnum,isLoading:!0,orderGoodsId:null,goods:{},formData:{images:[],type:10,content:""},imageList:[],maxImageLength:6,disabled:!1}},onLoad:function(e){var t=e.orderGoodsId;this.orderGoodsId=t,this.getGoodsDetail()},methods:{getGoodsDetail:function(){var e=this;e.isLoading=!0,r.goods(e.orderGoodsId).then((function(t){e.goods=t.data.goods,e.isLoading=!1}))},onSwitchService:function(e){this.formData.type=e},chooseImage:function(){var e=this,t=e.imageList;uni.chooseImage({count:6-t.length,sizeType:["original","compressed"],sourceType:["album","camera"],success:function(a){var i=a.tempFiles;e.imageList=t.concat(i)}})},deleteImage:function(e){this.imageList.splice(e,1)},handleSubmit:function(){var t=this,a=t.imageList;if(!0===t.disabled)return!1;t.disabled=!0,a.length>0?t.uploadFile().then((function(){return t.onSubmit()})).catch((function(a){t.disabled=!1,0!==a.statusCode&&t.$toast(a.errMsg),e("log","err",a," at pages/refund/apply.vue:178")})):t.onSubmit()},onSubmit:function(){var e=this;r.apply(e.orderGoodsId,e.formData).then((function(t){e.$toast(t.message),setTimeout((function(){e.disabled=!1,uni.navigateBack()}),1500)})).catch((function(t){return e.disabled=!1}))},uploadFile:function(){var e=this,t=e.imageList;return new Promise((function(a,i){t.length>0?o.image(t).then((function(t){e.formData.images=t,a(t)})).catch(i):a()}))}}};t.default=d}).call(this,a("0de9")["log"])},bea1:function(e,t,a){"use strict";a("7a82");var i=a("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.list=t.goods=t.detail=t.delivery=t.apply=void 0;var n=i(a("5530")),o=i(a("0227")),r={list:"refund/list",goods:"refund/goods",apply:"refund/apply",detail:"refund/detail",delivery:"refund/delivery"};t.list=function(e,t){return o.default.get(r.list,e,t)};t.goods=function(e,t){return o.default.get(r.goods,(0,n.default)({orderGoodsId:e},t))};t.apply=function(e,t){return o.default.post(r.apply,{orderGoodsId:e,form:t})};t.detail=function(e,t){return o.default.get(r.detail,(0,n.default)({orderRefundId:e},t))};t.delivery=function(e,t){return o.default.post(r.delivery,{orderRefundId:e,form:t})}},d102:function(e,t,a){var i=a("02ac");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var n=a("4f06").default;n("32ff9b1d",i,!0,{sourceMap:!1,shadowMode:!1})}}]);