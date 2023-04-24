(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["client"],{2147:function(e,t,a){"use strict";a("7545")},"2fa9":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e._self._c;return t("a-card",{attrs:{bordered:!1}},[t("div",{staticClass:"card-title"},[e._v(e._s(e.$route.meta.title))]),t("a-spin",{attrs:{spinning:e.isLoading}},[t("a-form",{attrs:{form:e.form},on:{submit:e.handleSubmit}},[t("a-form-item",{staticClass:"mt-30",attrs:{label:"是否开启访问",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[t("a-radio-group",{directives:[{name:"decorator",rawName:"v-decorator",value:["enabled",{rules:[{required:!0}]}],expression:"['enabled', { rules: [{ required: true }] }]"}]},[t("a-radio",{attrs:{value:1}},[e._v("开启")]),t("a-radio",{attrs:{value:0}},[e._v("关闭")])],1),t("div",{staticClass:"form-item-help"},[t("p",{staticClass:"extra"},[t("span",[e._v("注：如关闭，用户则无法通过H5端访问商城")])])])],1),t("a-form-item",{attrs:{label:"H5站点地址",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["baseUrl",{rules:[{required:!0,message:"请输入H5站点地址"}]}],expression:"['baseUrl', { rules: [{ required: true, message: '请输入H5站点地址' }] }]"}]}),t("div",{staticClass:"form-item-help"},[t("p",{staticClass:"extra"},[t("span",[e._v("请填写H5端实际的访问地址，以")]),t("a-tag",{staticClass:"mlr-5"},[e._v("https://")]),e._v("开头； 斜杠 "),t("a-tag",{staticClass:"mlr-5"},[e._v("/")]),t("span",[e._v("结尾")])],1),t("p",{staticClass:"extra"},[t("span",[e._v("例如：https://www.aaa.com/")])])])],1),t("a-form-item",{attrs:{"wrapper-col":{span:e.wrapperCol.span,offset:e.labelCol.span}}},[t("a-button",{attrs:{type:"primary","html-type":"submit"}},[e._v("提交")])],1)],1)],1)],1)},i=[],n=(a("d3b7"),a("88bc")),s=a.n(n),o=a("ca00"),l=a("5530"),u=a("b775"),c={detail:"/client.h5.setting/detail",update:"/client.h5.setting/update"};function d(e){return Object(u["b"])({url:c.detail,method:"get",params:{key:e}})}function p(e,t){return Object(u["b"])({url:c.update,method:"post",data:Object(l["a"])({key:e},t)})}var m={data:function(){return{labelCol:{span:4},wrapperCol:{span:10},isLoading:!1,form:this.$form.createForm(this),key:"basic",record:{}}},created:function(){this.getDetail()},methods:{getDetail:function(){var e=this;this.isLoading=!0,d(this.key).then((function(t){e.record=t.data.detail,e.setFieldsValue()})).finally((function(t){e.isLoading=!1}))},setFieldsValue:function(){var e=this.record,t=this.$nextTick,a=this.form;!Object(o["f"])(a.getFieldsValue())&&t((function(){a.setFieldsValue(s()(e,["enabled","baseUrl"]))}))},handleSubmit:function(e){var t=this;e.preventDefault();var a=this.form.validateFields;a((function(e,a){!e&&t.onFormSubmit(a)}))},onFormSubmit:function(e){var t=this;this.isLoading=!0,p(this.key,{form:e}).then((function(e){t.$message.success(e.message,1.5)})).finally((function(e){t.isLoading=!1}))}}},f=m,v=(a("e42b"),a("2877")),b=Object(v["a"])(f,r,i,!1,null,"0d8ee9ca",null);t["default"]=b.exports},3267:function(e,t,a){"use strict";var r=a("5c06");t["a"]=new r["a"]([{key:"CAPTCHA",name:"短信验证码",value:"captcha"},{key:"ORDER_PAY",name:"新付款订单",value:"order_pay"}])},"4bcb":function(e,t,a){},"5b60":function(e,t,a){"use strict";a("e7a6")},"5c06":function(e,t,a){"use strict";var r=a("d4ec"),i=a("bee2"),n=(a("d81d"),a("b0c0"),a("dca8"),function(){function e(t){var a=this;Object(r["a"])(this,e);var i=[],n=[];if(!Array.isArray(t))throw new Error("param is not an array!");t.map((function(e){e.key&&e.name&&(i.push(e.key),n.push(e.value),a[e.key]=e,e.key!==e.value&&(a[e.value]=e))})),this.data=t,this.keyArr=i,this.valueArr=n,Object.freeze(this)}return Object(i["a"])(e,[{key:"keyOf",value:function(e){return this.data[this.keyArr.indexOf(e)]}},{key:"valueOf",value:function(e){return this.data[this.valueArr.indexOf(e)]}},{key:"getNameByKey",value:function(e){var t=this.keyOf(e);if(!t)throw new Error("No enum constant"+e);return t.name}},{key:"getNameByValue",value:function(e){var t=this.valueOf(e);if(!t)throw new Error("No enum constant"+e);return t.name}},{key:"getValueByKey",value:function(e){var t=this.keyOf(e);if(!t)throw new Error("No enum constant"+e);return t.value}},{key:"getData",value:function(){return this.data}}]),e}());t["a"]=n},7545:function(e,t,a){},"88bc":function(e,t,a){(function(t){var a=1/0,r=9007199254740991,i="[object Arguments]",n="[object Function]",s="[object GeneratorFunction]",o="[object Symbol]",l="object"==typeof t&&t&&t.Object===Object&&t,u="object"==typeof self&&self&&self.Object===Object&&self,c=l||u||Function("return this")();function d(e,t,a){switch(a.length){case 0:return e.call(t);case 1:return e.call(t,a[0]);case 2:return e.call(t,a[0],a[1]);case 3:return e.call(t,a[0],a[1],a[2])}return e.apply(t,a)}function p(e,t){var a=-1,r=e?e.length:0,i=Array(r);while(++a<r)i[a]=t(e[a],a,e);return i}function m(e,t){var a=-1,r=t.length,i=e.length;while(++a<r)e[i+a]=t[a];return e}var f=Object.prototype,v=f.hasOwnProperty,b=f.toString,h=c.Symbol,w=f.propertyIsEnumerable,g=h?h.isConcatSpreadable:void 0,y=Math.max;function C(e,t,a,r,i){var n=-1,s=e.length;a||(a=O),i||(i=[]);while(++n<s){var o=e[n];t>0&&a(o)?t>1?C(o,t-1,a,r,i):m(i,o):r||(i[i.length]=o)}return i}function _(e,t){return e=Object(e),x(e,t,(function(t,a){return a in e}))}function x(e,t,a){var r=-1,i=t.length,n={};while(++r<i){var s=t[r],o=e[s];a(o,s)&&(n[s]=o)}return n}function k(e,t){return t=y(void 0===t?e.length-1:t,0),function(){var a=arguments,r=-1,i=y(a.length-t,0),n=Array(i);while(++r<i)n[r]=a[t+r];r=-1;var s=Array(t+1);while(++r<t)s[r]=a[r];return s[t]=n,d(e,this,s)}}function O(e){return S(e)||j(e)||!!(g&&e&&e[g])}function F(e){if("string"==typeof e||D(e))return e;var t=e+"";return"0"==t&&1/e==-a?"-0":t}function j(e){return M(e)&&v.call(e,"callee")&&(!w.call(e,"callee")||b.call(e)==i)}var S=Array.isArray;function A(e){return null!=e&&q(e.length)&&!V(e)}function M(e){return L(e)&&A(e)}function V(e){var t=N(e)?b.call(e):"";return t==n||t==s}function q(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=r}function N(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function L(e){return!!e&&"object"==typeof e}function D(e){return"symbol"==typeof e||L(e)&&b.call(e)==o}var B=k((function(e,t){return null==e?{}:_(e,p(C(t,1),F))}));e.exports=B}).call(this,a("c8ba"))},"8c72":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e._self._c;return t("a-card",{attrs:{bordered:!1}},[t("div",{staticClass:"card-title"},[e._v(e._s(e.$route.meta.title))]),t("a-spin",{attrs:{spinning:e.isLoading}},[t("a-form",{attrs:{form:e.form},on:{submit:e.handleSubmit}},[t("a-form-item",{attrs:{label:"默认登录/注册方式",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[t("a-radio-group",{directives:[{name:"decorator",rawName:"v-decorator",value:["registerMethod",{rules:[{required:!0}]}],expression:"['registerMethod', { rules: [{ required: true }] }]"}]},[t("a-radio",{attrs:{value:10}},[e._v("手机号 + 短信验证码")])],1),t("div",{staticClass:"form-item-help"},[t("p",{staticClass:"extra"},[t("small",[e._v("发送短信服务需要先配置")]),t("router-link",{attrs:{target:"_blank",to:{path:"/setting/sms"}}},[e._v("短信通知设置")])],1),t("p",{staticClass:"extra"},[e._v("使用手机号作为主账户可以实现多种客户端的账户统一，例如H5和微信小程序")])])],1),t("a-divider",{attrs:{orientation:"left"}},[e._v("微信小程序授权登录")]),t("a-form-item",{attrs:{label:"一键授权登录/注册",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[t("a-radio-group",{directives:[{name:"decorator",rawName:"v-decorator",value:["isOauthMpweixin",{rules:[{required:!0}]}],expression:"['isOauthMpweixin', { rules: [{ required: true }] }]"}]},[t("a-radio",{attrs:{value:1}},[t("span",[e._v("开启")]),t("a-tag",{staticClass:"ml-5",attrs:{color:"green"}},[e._v("推荐")])],1),t("a-radio",{attrs:{value:0}},[e._v("关闭")])],1),t("div",{staticClass:"form-item-help"},[t("small",[e._v("开启后在微信小程序端一键获取用户授权并登录和注册")])])],1),t("a-form-item",{directives:[{name:"show",rawName:"v-show",value:1==e.form.getFieldValue("isOauthMpweixin"),expression:"form.getFieldValue('isOauthMpweixin') == 1"}],attrs:{label:"注册时绑定手机号",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[t("a-radio-group",{directives:[{name:"decorator",rawName:"v-decorator",value:["isForceBindMpweixin",{rules:[{required:!0}]}],expression:"['isForceBindMpweixin', { rules: [{ required: true }] }]"}]},[t("a-radio",{attrs:{value:1}},[t("span",[e._v("强制绑定")]),t("a-tag",{staticClass:"ml-5",attrs:{color:"green"}},[e._v("推荐")])],1),t("a-radio",{attrs:{value:0}},[e._v("不绑定")])],1),t("div",{staticClass:"form-item-help"},[t("p",{staticClass:"extra"},[e._v("开启后在微信小程序端一键授权注册时强制绑定手机号，仅首次注册时弹出")]),t("p",{directives:[{name:"show",rawName:"v-show",value:0==e.form.getFieldValue("isForceBindMpweixin"),expression:"form.getFieldValue('isForceBindMpweixin') == 0"}],staticClass:"extra c-red"},[e._v("如果不强制绑定手机号，会造成多端情况下同一个用户注册多个账户，强烈推荐绑定手机号")])])],1),t("a-form-item",{directives:[{name:"show",rawName:"v-show",value:1==e.form.getFieldValue("isOauthMpweixin")&&0==e.form.getFieldValue("isForceBindMpweixin"),expression:"form.getFieldValue('isOauthMpweixin') == 1 && form.getFieldValue('isForceBindMpweixin') == 0"}],attrs:{label:"手动绑定手机号",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[t("a-radio-group",{directives:[{name:"decorator",rawName:"v-decorator",value:["isManualBind",{rules:[{required:!0}]}],expression:"['isManualBind', { rules: [{ required: true }] }]"}]},[t("a-radio",{attrs:{value:1}},[e._v("显示")]),t("a-radio",{attrs:{value:0}},[e._v("不显示")])],1),t("div",{staticClass:"form-item-help"},[t("small",[e._v("用户在个人中心页可以手动操作绑定手机号")])])],1),t("a-form-item",{attrs:{"wrapper-col":{span:e.wrapperCol.span,offset:e.labelCol.span}}},[t("a-button",{attrs:{type:"primary","html-type":"submit"}},[e._v("提交")])],1)],1)],1)],1)},i=[],n=(a("d3b7"),a("ddb0"),a("88bc")),s=a.n(n),o=a("ca00"),l=a("f585"),u=a("3267"),c={data:function(){return{SettingSmsSceneEnum:u["a"],key:"register",labelCol:{span:4},wrapperCol:{span:10},isLoading:!1,form:this.$form.createForm(this),record:{}}},created:function(){this.getDetail()},methods:{getDetail:function(){var e=this;this.isLoading=!0,l["a"](this.key).then((function(t){e.record=t.data.values,e.setFieldsValue()})).finally((function(t){e.isLoading=!1}))},setFieldsValue:function(){var e=this.record,t=this.$nextTick,a=this.form;!Object(o["f"])(a.getFieldsValue())&&t((function(){a.setFieldsValue(s()(e,["registerMethod","isManualBind","isOauthMpweixin","isForceBindMpweixin"]))}))},handleSubmit:function(e){var t=this;e.preventDefault();var a=this.form.validateFields;a((function(e,a){!e&&t.onFormSubmit(a)}))},onFormSubmit:function(e){var t=this;this.isLoading=!0,l["b"](this.key,{form:e}).then((function(e){t.$message.success(e.message,1.5)})).finally((function(e){t.isLoading=!1}))}}},d=c,p=(a("2147"),a("2877")),m=Object(p["a"])(d,r,i,!1,null,"1e3b16a8",null);t["default"]=m.exports},bee2:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var r=a("a38e");function i(e,t){for(var a=0;a<t.length;a++){var i=t[a];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,Object(r["a"])(i.key),i)}}function n(e,t,a){return t&&i(e.prototype,t),a&&i(e,a),Object.defineProperty(e,"prototype",{writable:!1}),e}},d4ec:function(e,t,a){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}a.d(t,"a",(function(){return r}))},e36a:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e._self._c;return t("a-card",{attrs:{bordered:!1}},[t("div",{staticClass:"card-title"},[e._v(e._s(e.$route.meta.title))]),t("a-spin",{attrs:{spinning:e.isLoading}},[t("a-form",{attrs:{form:e.form},on:{submit:e.handleSubmit}},[t("a-form-item",{staticClass:"mt-30",attrs:{label:"小程序 AppID",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["app_id",{rules:[{required:!0,message:"请输入小程序AppID"}]}],expression:"['app_id', { rules: [{ required: true, message: '请输入小程序AppID' }] }]"}]})],1),t("a-form-item",{attrs:{label:"小程序 AppSecret",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["app_secret",{rules:[{required:!0,message:"请输入小程序AppSecret"}]}],expression:"['app_secret', { rules: [{ required: true, message: '请输入小程序AppSecret' }] }]"}],attrs:{type:"password"}})],1),t("a-divider",{attrs:{orientation:"left"}},[e._v("微信小程序支付")]),t("a-form-item",{attrs:{label:"微信商户号 MCHID",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["mchid",{rules:[{required:!0,message:"请输入微信商户号mchid"}]}],expression:"['mchid', { rules: [{ required: true, message: '请输入微信商户号mchid' }] }]"}]})],1),t("a-form-item",{attrs:{label:"微信支付密钥 APIKEY",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["apikey",{rules:[{required:!0,message:"请输入微信支付密钥"}]}],expression:"['apikey', { rules: [{ required: true, message: '请输入微信支付密钥' }] }]"}],attrs:{type:"password"}})],1),t("a-form-item",{staticClass:"mt-40",attrs:{label:"证书文件cert",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[t("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["cert_pem"],expression:"['cert_pem']"}],attrs:{autoSize:{minRows:4,maxRows:6}}}),t("div",{staticClass:"form-item-help"},[t("small",[e._v("使用文本编辑器打开apiclient_cert.pem文件，将文件的全部内容复制进来")])])],1),t("a-form-item",{attrs:{label:"证书文件key",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[t("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["key_pem"],expression:"['key_pem']"}],attrs:{autoSize:{minRows:4,maxRows:6}}}),t("div",{staticClass:"form-item-help"},[t("small",[e._v("使用文本编辑器打开apiclient_key.pem文件，将文件的全部内容复制进来")])])],1),t("a-form-item",{attrs:{"wrapper-col":{span:e.wrapperCol.span,offset:e.labelCol.span}}},[t("a-button",{attrs:{type:"primary","html-type":"submit"}},[e._v("提交")])],1)],1)],1)],1)},i=[],n=(a("d3b7"),a("88bc")),s=a.n(n),o=a("ca00"),l=a("5530"),u=a("b775"),c={detail:"/client.wxapp.setting/detail",update:"/client.wxapp.setting/update"};function d(e){return Object(u["b"])({url:c.detail,method:"get",params:{key:e}})}function p(e,t){return Object(u["b"])({url:c.update,method:"post",data:Object(l["a"])({key:e},t)})}var m={data:function(){return{labelCol:{span:4},wrapperCol:{span:10},isLoading:!1,form:this.$form.createForm(this),key:"basic",record:{}}},created:function(){this.getDetail()},methods:{getDetail:function(){var e=this;this.isLoading=!0,d(this.key).then((function(t){e.record=t.data.detail,e.setFieldsValue()})).finally((function(t){e.isLoading=!1}))},setFieldsValue:function(){var e=this.record,t=this.$nextTick,a=this.form;!Object(o["f"])(a.getFieldsValue())&&t((function(){a.setFieldsValue(s()(e,["app_id","app_secret","mchid","apikey","cert_pem","key_pem"]))}))},handleSubmit:function(e){var t=this;e.preventDefault();var a=this.form.validateFields;a((function(e,a){!e&&t.onFormSubmit(a)}))},onFormSubmit:function(e){var t=this;this.isLoading=!0,p(this.key,{form:e}).then((function(e){t.$message.success(e.message,1.5)})).finally((function(e){t.isLoading=!1}))}}},f=m,v=(a("5b60"),a("2877")),b=Object(v["a"])(f,r,i,!1,null,"42865d94",null);t["default"]=b.exports},e42b:function(e,t,a){"use strict";a("4bcb")},e7a6:function(e,t,a){},f585:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return o}));var r=a("5530"),i=a("b775"),n={detail:"/setting/detail",update:"/setting/update"};function s(e){return Object(i["b"])({url:n.detail,method:"get",params:{key:e}})}function o(e,t){return Object(i["b"])({url:n.update,method:"post",data:Object(r["a"])({key:e},t)})}}}]);