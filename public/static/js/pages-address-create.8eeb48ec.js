(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-address-create"],{"12d4":function(e,a,t){"use strict";t("7a82");var r=t("dbce").default,n=t("4ea4").default;Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0,t("d3b7");var o=n(t("530f")),i=t("eecf"),d=r(t("0823")),s={name:"",phone:"",region:[],detail:""},u={name:[{required:!0,message:"请输入姓名",trigger:["blur","change"]}],phone:[{required:!0,message:"请输入手机号",trigger:["blur","change"]},{validator:function(e,a,t){return(0,i.isMobile)(a)},message:"手机号码不正确",trigger:["blur"]}],region:[{required:!0,message:"请选择省市区",trigger:["blur","change"],type:"array"}],detail:[{required:!0,message:"请输入详细地址",trigger:["blur","change"]}]},f={components:{SelectRegion:o.default},data:function(){return{form:s,rules:u,disabled:!1}},onLoad:function(e){},onReady:function(){this.$refs.uForm.setRules(this.rules)},methods:{handleSubmit:function(){var e=this;if(e.disabled)return!1;e.$refs.uForm.validate((function(a){a&&(e.disabled=!0,d.add(e.form).then((function(a){e.$toast(a.message),uni.navigateBack()})).finally((function(){return e.disabled=!1})))}))}}};a.default=f},"1f2c":function(e,a,t){var r=t("c90f");r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var n=t("4f06").default;n("74b617f2",r,!0,{sourceMap:!1,shadowMode:!1})},"2b7b":function(e,a,t){"use strict";t.r(a);var r=t("12d4"),n=t.n(r);for(var o in r)["default"].indexOf(o)<0&&function(e){t.d(a,e,(function(){return r[e]}))}(o);a["default"]=n.a},"5e09":function(e,a,t){"use strict";t.r(a);var r=t("97b8"),n=t("2b7b");for(var o in n)["default"].indexOf(o)<0&&function(e){t.d(a,e,(function(){return n[e]}))}(o);t("e264"),t("66f1");var i=t("f0c5"),d=Object(i["a"])(n["default"],r["b"],r["c"],!1,null,"a5d704de",null,!1,r["a"],void 0);a["default"]=d.exports},"66f1":function(e,a,t){"use strict";var r=t("1f2c"),n=t.n(r);n.a},"6c95":function(e,a,t){var r=t("24fb");a=r(!1),a.push([e.i,"uni-page-body[data-v-a5d704de]{background:#f7f8fa}body.?%PAGE?%[data-v-a5d704de]{background:#f7f8fa}",""]),e.exports=a},"97b8":function(e,a,t){"use strict";t.d(a,"b",(function(){return n})),t.d(a,"c",(function(){return o})),t.d(a,"a",(function(){return r}));var r={uForm:t("aa5b").default,uFormItem:t("98af").default,uInput:t("34ab").default,selectRegion:t("530f").default},n=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("v-uni-view",{staticClass:"container"},[t("v-uni-view",{staticClass:"page-title"},[e._v("收货地址")]),t("v-uni-view",{staticClass:"form-wrapper"},[t("u-form",{ref:"uForm",attrs:{model:e.form,"label-width":"140rpx"}},[t("u-form-item",{attrs:{label:"姓名",prop:"name"}},[t("u-input",{attrs:{placeholder:"请输入收货人姓名"},model:{value:e.form.name,callback:function(a){e.$set(e.form,"name",a)},expression:"form.name"}})],1),t("u-form-item",{attrs:{label:"电话",prop:"phone"}},[t("u-input",{attrs:{placeholder:"请输入收货人手机号"},model:{value:e.form.phone,callback:function(a){e.$set(e.form,"phone",a)},expression:"form.phone"}})],1),t("u-form-item",{attrs:{label:"地区",prop:"region"}},[t("select-region",{model:{value:e.form.region,callback:function(a){e.$set(e.form,"region",a)},expression:"form.region"}})],1),t("u-form-item",{attrs:{label:"详细地址",prop:"detail","border-bottom":!1}},[t("u-input",{attrs:{placeholder:"街道门牌、楼层等信息"},model:{value:e.form.detail,callback:function(a){e.$set(e.form,"detail",a)},expression:"form.detail"}})],1)],1)],1),t("v-uni-view",{staticClass:"footer"},[t("v-uni-view",{staticClass:"btn-wrapper"},[t("v-uni-view",{staticClass:"btn-item btn-item-main",class:{disabled:e.disabled},on:{click:function(a){arguments[0]=a=e.$handleEvent(a),e.handleSubmit()}}},[e._v("保存")])],1)],1)],1)},o=[]},c90f:function(e,a,t){var r=t("24fb");a=r(!1),a.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/* 引入uView全局scss变量文件 */.page-title[data-v-a5d704de]{width:94%;margin:0 auto;padding-top:%?40?%;font-size:%?28?%;color:rgba(69,90,100,.6)}.form-wrapper[data-v-a5d704de]{margin:%?20?% auto %?20?% auto;padding:0 %?40?%;width:94%;box-shadow:0 %?1?% %?5?% 0 rgba(0,0,0,.05);border-radius:%?16?%;background:#fff}\r\n/* 底部操作栏 */.footer[data-v-a5d704de]{margin-top:%?60?%}.footer .btn-wrapper[data-v-a5d704de]{height:100%;display:flex;align-items:center;padding:0 %?20?%}.footer .btn-item[data-v-a5d704de]{flex:1;font-size:%?28?%;height:%?100?%;line-height:%?100?%;text-align:center;color:#fff;border-radius:%?50?%}.footer .btn-item-main[data-v-a5d704de]{background:linear-gradient(90deg,#f9211c,#ff6335)}.footer .btn-item-main.disabled[data-v-a5d704de]{background:#ff9779}',""]),e.exports=a},cab6:function(e,a,t){var r=t("6c95");r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var n=t("4f06").default;n("77f08180",r,!0,{sourceMap:!1,shadowMode:!1})},e264:function(e,a,t){"use strict";var r=t("cab6"),n=t.n(r);n.a}}]);