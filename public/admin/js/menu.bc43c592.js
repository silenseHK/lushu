(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["menu"],{"378f":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e._self._c;return t("a-card",{attrs:{bordered:!1}},[t("content-header",{attrs:{title:"API权限"}}),t("a-alert",{staticStyle:{"margin-bottom":"20px"},attrs:{message:e.warningText,type:"warning","show-icon":""}}),t("div",{staticClass:"table-operator"},[t("a-button",{attrs:{type:"primary",icon:"plus"},on:{click:e.handleAdd}},[e._v("新增")])],1),t("a-table",{attrs:{rowKey:"api_id",columns:e.columns,"data-source":e.list,loading:e.isLoading,pagination:!1},scopedSlots:e._u([{key:"action",fn:function(r,n){return t("span",{},[[t("a",{on:{click:function(t){return e.handleEdit(n)}}},[e._v("编辑")]),t("a-divider",{attrs:{type:"vertical"}}),t("a",{on:{click:function(t){return e.handleDelete(n)}}},[e._v("删除")])]],2)}}])}),t("add-form",{ref:"AddForm",attrs:{apiList:e.list},on:{handleSubmit:e.handleRefresh}}),t("edit-form",{ref:"EditForm",attrs:{apiList:e.list},on:{handleSubmit:e.handleRefresh}})],1)},a=[],i=(r("d3b7"),r("db8a")),o=r("2af9"),s=function(){var e=this,t=e._self._c;return t("a-modal",{attrs:{title:"新增权限",width:720,visible:e.visible,confirmLoading:e.confirmLoading,maskClosable:!1},on:{ok:e.handleSubmit,cancel:e.handleCancel}},[t("a-spin",{attrs:{spinning:e.confirmLoading}},[t("a-form",{attrs:{form:e.form}},[t("a-form-item",{attrs:{label:"权限名称",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["name",{rules:[{required:!0,min:2,message:"请输入至少2个字符"}]}],expression:"['name', {rules: [{required: true, min: 2, message: '请输入至少2个字符'}]}]"}]})],1),t("a-form-item",{attrs:{label:"上级权限",labelCol:e.labelCol,wrapperCol:e.wrapperCol,extra:"默认为顶级权限"}},[t("a-tree-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["parent_id"],expression:"['parent_id']"}],attrs:{"tree-data":e.apiListTreeData,"dropdown-style":{maxHeight:"400px",overflow:"auto"},"allow-clear":""}})],1),t("a-form-item",{attrs:{label:"权限url",labelCol:e.labelCol,wrapperCol:e.wrapperCol,extra:"例如：index/index"}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["url",{rules:[{required:!0,message:"请输入权限url"}]}],expression:"['url', {rules: [{required: true, message: '请输入权限url'}]}]"}]})],1),t("a-form-item",{attrs:{label:"排序",labelCol:e.labelCol,wrapperCol:e.wrapperCol,extra:"数字越小越靠前"}},[t("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["sort",{initialValue:100,rules:[{required:!0,message:"请输入至少1个数字"}]}],expression:"['sort', {initialValue: 100, rules: [{required: true, message: '请输入至少1个数字'}]}]"}],attrs:{min:0}})],1)],1)],1)],1)},l=[],c=(r("159b"),r("b0c0"),{props:{apiList:{type:Array,required:!0}},data:function(){return{labelCol:{xs:{span:24},sm:{span:7}},wrapperCol:{xs:{span:24},sm:{span:13}},visible:!1,confirmLoading:!1,form:this.$form.createForm(this),apiListTreeData:[]}},methods:{show:function(){this.visible=!0,this.getAccessList(),this.setFieldsValue()},setFieldsValue:function(){var e=this;this.$nextTick((function(){e.form.resetFields(),e.form.setFieldsValue({parent_id:0})}))},getAccessList:function(){var e=this.apiList,t=this.formatTreeData(e);t.unshift({title:"顶级权限",key:0,value:0}),this.apiListTreeData=t},formatTreeData:function(e){var t=this,r=[];return e.forEach((function(e){var n={title:e.name,key:e.api_id,value:e.api_id};e.children&&e.children.length&&(n["children"]=t.formatTreeData(e["children"])),r.push(n)})),r},handleSubmit:function(){var e=this,t=this.form.validateFields;this.confirmLoading=!0,t((function(t,r){t?e.confirmLoading=!1:e.onFormSubmit(r)}))},handleCancel:function(){this.visible=!1},onFormSubmit:function(e){var t=this;i["a"]({form:e}).then((function(r){t.$message.success(r.message),t.visible=!1,t.form.resetFields(),t.$emit("handleSubmit",e)})).finally((function(e){t.confirmLoading=!1}))}}}),u=c,d=r("2877"),m=Object(d["a"])(u,s,l,!1,null,null,null),f=m.exports,h=function(){var e=this,t=e._self._c;return t("a-modal",{attrs:{title:"编辑权限",width:720,visible:e.visible,confirmLoading:e.confirmLoading,maskClosable:!1},on:{ok:e.handleSubmit,cancel:e.handleCancel}},[t("a-spin",{attrs:{spinning:e.confirmLoading}},[t("a-form",{attrs:{form:e.form}},[t("a-form-item",{attrs:{label:"权限名称",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["name",{rules:[{required:!0,min:2,message:"请输入至少2个字符"}]}],expression:"['name', {rules: [{required: true, min: 2, message: '请输入至少2个字符'}]}]"}]})],1),t("a-form-item",{attrs:{label:"上级权限",labelCol:e.labelCol,wrapperCol:e.wrapperCol,extra:"默认为顶级权限"}},[t("a-tree-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["parent_id"],expression:"['parent_id']"}],attrs:{"tree-data":e.apiListTreeData,"dropdown-style":{maxHeight:"400px",overflow:"auto"},"allow-clear":""}})],1),t("a-form-item",{attrs:{label:"权限url",labelCol:e.labelCol,wrapperCol:e.wrapperCol,extra:"例如：index/index"}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["url",{rules:[{required:!0,message:"请输入权限url"}]}],expression:"['url', {rules: [{required: true, message: '请输入权限url'}]}]"}]})],1),t("a-form-item",{attrs:{label:"排序",labelCol:e.labelCol,wrapperCol:e.wrapperCol,extra:"数字越小越靠前"}},[t("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["sort",{initialValue:100,rules:[{required:!0,message:"请输入至少1个数字"}]}],expression:"['sort', {initialValue: 100, rules: [{required: true, message: '请输入至少1个数字'}]}]"}],attrs:{min:0}})],1)],1)],1)],1)},p=[],v=(r("caad"),r("2532"),r("88bc")),b=r.n(v),g={props:{apiList:{type:Array,required:!0}},data:function(){return{labelCol:{xs:{span:24},sm:{span:7}},wrapperCol:{xs:{span:24},sm:{span:13}},visible:!1,confirmLoading:!1,form:this.$form.createForm(this),apiListTreeData:[],record:{}}},methods:{show:function(e){this.visible=!0,this.record=e,this.getAccessList(),this.setFieldsValue()},setFieldsValue:function(){var e=this;this.$nextTick((function(){e.form.setFieldsValue(b()(e.record,["name","url","parent_id","sort"]))}))},getAccessList:function(){var e=this.apiList,t=this.formatTreeData(e);t.unshift({title:"顶级权限",key:0,value:0}),this.apiListTreeData=t},formatTreeData:function(e){var t=this,r=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=[];return e.forEach((function(e){var a={title:e.name,key:e.api_id,value:e.api_id};([e.api_id,e.parent_id].includes(t.record.api_id)||!0===r)&&(a.disabled=!0),null!=e.children&&(a["children"]=t.formatTreeData(e["children"],a.disabled)),n.push(a)})),n},handleSubmit:function(){var e=this,t=this.form.validateFields;this.confirmLoading=!0,t((function(t,r){t?e.confirmLoading=!1:e.onFormSubmit(r)}))},handleCancel:function(){this.visible=!1},onFormSubmit:function(e){var t=this;i["c"]({apiId:this.record["api_id"],form:e}).then((function(r){t.$message.success(r.message),t.visible=!1,t.form.resetFields(),t.$emit("handleSubmit",e)})).finally((function(e){t.confirmLoading=!1}))}}},w=g,y=Object(d["a"])(w,h,p,!1,null,null,null),L=y.exports,x={components:{ContentHeader:o["a"],STable:o["d"],AddForm:f,EditForm:L},data:function(){return{warningText:"此处用于管理商户后台的菜单数据，请勿对本页面数据进行更改（会导致系统无法更新升级）",isLoading:!1,columns:[{title:"权限ID",dataIndex:"api_id",scopedSlots:{customRender:"api_id"}},{title:"权限名称",dataIndex:"name",scopedSlots:{customRender:"name"}},{title:"权限url",dataIndex:"url",scopedSlots:{customRender:"url"}},{title:"排序",dataIndex:"sort",scopedSlots:{customRender:"sort"}},{title:"添加时间",dataIndex:"create_time",scopedSlots:{customRender:"create_time"}},{title:"操作",dataIndex:"action",width:"150px",scopedSlots:{customRender:"action"}}],list:[]}},created:function(){this.getListData()},methods:{getListData:function(){var e=this;this.isLoading=!0,i["d"]().then((function(t){e.list=t.data.list})).finally((function(){e.isLoading=!1}))},handleAdd:function(){this.$refs.AddForm.show()},handleEdit:function(e){this.$refs.EditForm.show(e)},handleDelete:function(e){var t=this;t.$confirm({title:"您确定要删除该记录吗?",content:"确认后将无法恢复",onOk:function(){return t.onSubmitDelete(e)}})},onSubmitDelete:function(e){var t=this;return i["b"]({apiId:e["api_id"]}).then((function(e){t.$message.success(e.message),t.handleRefresh()}))},handleRefresh:function(){this.getListData()}}},C=x,_=Object(d["a"])(C,n,a,!1,null,null,null);t["default"]=_.exports},"5ba4":function(e,t,r){"use strict";r("e367")},"88bc":function(e,t,r){(function(t){var r=1/0,n=9007199254740991,a="[object Arguments]",i="[object Function]",o="[object GeneratorFunction]",s="[object Symbol]",l="object"==typeof t&&t&&t.Object===Object&&t,c="object"==typeof self&&self&&self.Object===Object&&self,u=l||c||Function("return this")();function d(e,t,r){switch(r.length){case 0:return e.call(t);case 1:return e.call(t,r[0]);case 2:return e.call(t,r[0],r[1]);case 3:return e.call(t,r[0],r[1],r[2])}return e.apply(t,r)}function m(e,t){var r=-1,n=e?e.length:0,a=Array(n);while(++r<n)a[r]=t(e[r],r,e);return a}function f(e,t){var r=-1,n=t.length,a=e.length;while(++r<n)e[a+r]=t[r];return e}var h=Object.prototype,p=h.hasOwnProperty,v=h.toString,b=u.Symbol,g=h.propertyIsEnumerable,w=b?b.isConcatSpreadable:void 0,y=Math.max;function L(e,t,r,n,a){var i=-1,o=e.length;r||(r=F),a||(a=[]);while(++i<o){var s=e[i];t>0&&r(s)?t>1?L(s,t-1,r,n,a):f(a,s):n||(a[a.length]=s)}return a}function x(e,t){return e=Object(e),C(e,t,(function(t,r){return r in e}))}function C(e,t,r){var n=-1,a=t.length,i={};while(++n<a){var o=t[n],s=e[o];r(s,o)&&(i[o]=s)}return i}function _(e,t){return t=y(void 0===t?e.length-1:t,0),function(){var r=arguments,n=-1,a=y(r.length-t,0),i=Array(a);while(++n<a)i[n]=r[t+n];n=-1;var o=Array(t+1);while(++n<t)o[n]=r[n];return o[t]=i,d(e,this,o)}}function F(e){return A(e)||S(e)||!!(w&&e&&e[w])}function k(e){if("string"==typeof e||q(e))return e;var t=e+"";return"0"==t&&1/e==-r?"-0":t}function S(e){return T(e)&&p.call(e,"callee")&&(!g.call(e,"callee")||v.call(e)==a)}var A=Array.isArray;function j(e){return null!=e&&O(e.length)&&!D(e)}function T(e){return I(e)&&j(e)}function D(e){var t=E(e)?v.call(e):"";return t==i||t==o}function O(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=n}function E(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function I(e){return!!e&&"object"==typeof e}function q(e){return"symbol"==typeof e||I(e)&&v.call(e)==s}var $=_((function(e,t){return null==e?{}:x(e,m(L(t,1),k))}));e.exports=$}).call(this,r("c8ba"))},db8a:function(e,t,r){"use strict";r.d(t,"d",(function(){return i})),r.d(t,"a",(function(){return o})),r.d(t,"c",(function(){return s})),r.d(t,"b",(function(){return l}));var n=r("f6ae"),a=r("b775");function i(e){return Object(a["b"])({url:n["a"].store.api.list,method:"get",params:e})}function o(e){return Object(a["b"])({url:n["a"].store.api.add,method:"post",data:e})}function s(e){return Object(a["b"])({url:n["a"].store.api.edit,method:"post",data:e})}function l(e){return Object(a["b"])({url:n["a"].store.api.delete,method:"post",data:e})}},e367:function(e,t,r){},f833:function(e,t,r){"use strict";r.r(t);r("b0c0");var n=function(){var e=this,t=e._self._c;return t("a-card",{attrs:{bordered:!1}},[t("content-header",{attrs:{title:"菜单列表"}}),t("a-alert",{staticStyle:{"margin-bottom":"20px"},attrs:{message:e.warningText,type:"warning","show-icon":""}}),t("div",{staticClass:"table-operator"},[t("a-button",{attrs:{type:"primary",icon:"plus"},on:{click:e.handleAdd}},[e._v("新增")])],1),t("a-table",{attrs:{rowKey:"menu_id",columns:e.columns,"data-source":e.list,loading:e.isLoading,pagination:!1},scopedSlots:e._u([{key:"actions",fn:function(r,n){return t("span",{},e._l(n.actions,(function(r,n){return t("a-dropdown",{key:n,attrs:{title:"操作"}},[t("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[t("a-menu-item",{on:{click:function(t){return e.handleActionEdit(r)}}},[e._v("编辑")]),t("a-menu-item",{on:{click:function(t){return e.handleSetApi(r)}}},[e._v("API权限")]),t("a-menu-item",{on:{click:function(t){return e.handleDelete(r)}}},[e._v("删除")])],1),t("a-tag",[e._v(e._s(r.name))])],1)})),1)}},{key:"action",fn:function(r,n){return t("span",{},[[t("a",{on:{click:function(t){return e.handleEdit(n)}}},[e._v("编辑")]),t("a-divider",{attrs:{type:"vertical"}}),t("a-dropdown",[t("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[t("a-menu-item",[t("a",{on:{click:function(t){return e.handleSetApi(n)}}},[e._v("API权限")])]),t("a-menu-item",[t("a",{on:{click:function(t){return e.handleActionAdd(n)}}},[e._v("新增操作")])]),t("a-menu-item",[t("a",{on:{click:function(t){return e.handleDelete(n)}}},[e._v("删除")])])],1),t("a",[e._v(" 更多 "),t("a-icon",{attrs:{type:"down"}})],1)],1)]],2)}}])}),t("add-form",{ref:"AddForm",attrs:{menuList:e.list},on:{handleSubmit:e.handleRefresh}}),t("edit-form",{ref:"EditForm",attrs:{menuList:e.list},on:{handleSubmit:e.handleRefresh}}),t("action-form",{ref:"ActionForm",attrs:{menuList:e.list},on:{handleSubmit:e.handleRefresh}}),t("set-api-form",{ref:"SetApiForm",attrs:{apiList:e.apiList},on:{handleSubmit:e.handleRefresh}})],1)},a=[],i=(r("a4d3"),r("e01a"),r("d3b7"),r("d28b"),r("3ca3"),r("ddb0"),r("b636"),r("944a"),r("0c47"),r("23dc"),r("3410"),r("159b"),r("131a"),r("fb6a"),r("53ca"));function o(){
/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
o=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n=Object.defineProperty||function(e,t,r){e[t]=r.value},a="function"==typeof Symbol?Symbol:{},s=a.iterator||"@@iterator",l=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(T){u=function(e,t,r){return e[t]=r}}function d(e,t,r,a){var i=t&&t.prototype instanceof h?t:h,o=Object.create(i.prototype),s=new S(a||[]);return n(o,"_invoke",{value:C(e,r,s)}),o}function m(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(T){return{type:"throw",arg:T}}}e.wrap=d;var f={};function h(){}function p(){}function v(){}var b={};u(b,s,(function(){return this}));var g=Object.getPrototypeOf,w=g&&g(g(A([])));w&&w!==t&&r.call(w,s)&&(b=w);var y=v.prototype=h.prototype=Object.create(b);function L(e){["next","throw","return"].forEach((function(t){u(e,t,(function(e){return this._invoke(t,e)}))}))}function x(e,t){function a(n,o,s,l){var c=m(e[n],e,o);if("throw"!==c.type){var u=c.arg,d=u.value;return d&&"object"==Object(i["a"])(d)&&r.call(d,"__await")?t.resolve(d.__await).then((function(e){a("next",e,s,l)}),(function(e){a("throw",e,s,l)})):t.resolve(d).then((function(e){u.value=e,s(u)}),(function(e){return a("throw",e,s,l)}))}l(c.arg)}var o;n(this,"_invoke",{value:function(e,r){function n(){return new t((function(t,n){a(e,r,t,n)}))}return o=o?o.then(n,n):n()}})}function C(e,t,r){var n="suspendedStart";return function(a,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw i;return j()}for(r.method=a,r.arg=i;;){var o=r.delegate;if(o){var s=_(o,r);if(s){if(s===f)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=m(e,t,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===f)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}function _(e,t){var r=t.method,n=e.iterator[r];if(void 0===n)return t.delegate=null,"throw"===r&&e.iterator["return"]&&(t.method="return",t.arg=void 0,_(e,t),"throw"===t.method)||"return"!==r&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+r+"' method")),f;var a=m(n,e.iterator,t.arg);if("throw"===a.type)return t.method="throw",t.arg=a.arg,t.delegate=null,f;var i=a.arg;return i?i.done?(t[e.resultName]=i.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,f):i:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,f)}function F(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function k(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function S(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(F,this),this.reset(!0)}function A(e){if(e){var t=e[s];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,a=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return a.next=a}}return{next:j}}function j(){return{value:void 0,done:!0}}return p.prototype=v,n(y,"constructor",{value:v,configurable:!0}),n(v,"constructor",{value:p,configurable:!0}),p.displayName=u(v,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===p||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,v):(e.__proto__=v,u(e,c,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},L(x.prototype),u(x.prototype,l,(function(){return this})),e.AsyncIterator=x,e.async=function(t,r,n,a,i){void 0===i&&(i=Promise);var o=new x(d(t,r,n,a),i);return e.isGeneratorFunction(r)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},L(y),u(y,c,"Generator"),u(y,s,(function(){return this})),u(y,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=A,S.prototype={constructor:S,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return o.type="throw",o.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],o=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var s=r.call(i,"catchLoc"),l=r.call(i,"finallyLoc");if(s&&l){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var i=a;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var o=i?i.completion:{};return o.type=e,o.arg=t,i?(this.method="next",this.next=i.finallyLoc,f):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),f},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),k(r),f}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;k(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:A(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},e}function s(e,t,r,n,a,i,o){try{var s=e[i](o),l=s.value}catch(c){return void r(c)}s.done?t(l):Promise.resolve(l).then(n,a)}function l(e){return function(){var t=this,r=arguments;return new Promise((function(n,a){var i=e.apply(t,r);function o(e){s(i,n,a,o,l,"next",e)}function l(e){s(i,n,a,o,l,"throw",e)}o(void 0)}))}}r("4de4");var c=r("f6ae"),u=r("b775");function d(e){return Object(u["b"])({url:c["a"].store.menu.list,method:"get",params:e})}function m(e){return Object(u["b"])({url:c["a"].store.menu.info,method:"get",params:e})}function f(e){return Object(u["b"])({url:c["a"].store.menu.add,method:"post",data:e})}function h(e){return Object(u["b"])({url:c["a"].store.menu.edit,method:"post",data:e})}function p(e){return Object(u["b"])({url:c["a"].store.menu.setApis,method:"post",data:e})}function v(e){return Object(u["b"])({url:c["a"].store.menu.delete,method:"post",data:e})}var b=r("db8a"),g=r("2af9"),w=function(){var e=this,t=e._self._c;return t("a-modal",{attrs:{title:"新增菜单",width:720,visible:e.visible,confirmLoading:e.confirmLoading,maskClosable:!1},on:{ok:e.handleSubmit,cancel:e.handleCancel}},[t("a-spin",{attrs:{spinning:e.confirmLoading}},[t("a-form",{attrs:{form:e.form}},[t("a-form-item",{attrs:{label:"菜单名称",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["name",{rules:[{required:!0,min:2,message:"请输入至少2个字符"}]}],expression:"['name', {rules: [{required: true, min: 2, message: '请输入至少2个字符'}]}]"}]})],1),t("a-form-item",{attrs:{label:"上级菜单",labelCol:e.labelCol,wrapperCol:e.wrapperCol,extra:"默认为顶级菜单"}},[t("a-tree-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["parent_id"],expression:"['parent_id']"}],attrs:{"tree-data":e.menuListTreeData,"dropdown-style":{maxHeight:"400px",overflow:"auto"},"allow-clear":""}})],1),t("a-form-item",{attrs:{label:"菜单path",labelCol:e.labelCol,wrapperCol:e.wrapperCol,extra:"指向的页面path"}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["path",{rules:[{required:!0,message:"请输入菜单path"}]}],expression:"['path', {rules: [{required: true, message: '请输入菜单path'}]}]"}]})],1),t("a-form-item",{attrs:{label:"排序",labelCol:e.labelCol,wrapperCol:e.wrapperCol,extra:"数字越小越靠前"}},[t("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["sort",{initialValue:100,rules:[{required:!0,message:"请输入至少1个数字"}]}],expression:"['sort', {initialValue: 100, rules: [{required: true, message: '请输入至少1个数字'}]}]"}],attrs:{min:0}})],1)],1)],1)],1)},y=[],L=r("5530"),x={props:{menuList:{type:Array,required:!0}},data:function(){return{labelCol:{xs:{span:24},sm:{span:7}},wrapperCol:{xs:{span:24},sm:{span:13}},visible:!1,confirmLoading:!1,form:this.$form.createForm(this),menuListTreeData:[]}},methods:{show:function(){this.visible=!0,this.getMenuList(),this.setFieldsValue()},setFieldsValue:function(){var e=this;this.$nextTick((function(){e.form.resetFields(),e.form.setFieldsValue({parent_id:0})}))},getMenuList:function(){var e=this.menuList,t=this.formatTreeData(e);t.unshift({title:"顶级菜单",key:0,value:0}),this.menuListTreeData=t},formatTreeData:function(e){var t=this,r=[];return e.forEach((function(e){var n={title:e.name,key:e.menu_id,value:e.menu_id};e.hasOwnProperty("children")&&(n["children"]=t.formatTreeData(e["children"])),r.push(n)})),r},handleSubmit:function(){var e=this,t=this.form.validateFields;t((function(t,r){t||e.onFormSubmit(r)}))},handleCancel:function(){this.visible=!1,this.form.resetFields()},onFormSubmit:function(e){var t=this;this.confirmLoading=!0,f({form:Object(L["a"])({module:10},e)}).then((function(r){t.$message.success(r.message),t.handleCancel(),t.$emit("handleSubmit",e)})).finally((function(e){t.confirmLoading=!1}))}}},C=x,_=r("2877"),F=Object(_["a"])(C,w,y,!1,null,null,null),k=F.exports,S=function(){var e=this,t=e._self._c;return t("a-modal",{attrs:{title:"编辑菜单",width:720,visible:e.visible,confirmLoading:e.confirmLoading,maskClosable:!1},on:{ok:e.handleSubmit,cancel:e.handleCancel}},[t("a-spin",{attrs:{spinning:e.confirmLoading}},[t("a-form",{attrs:{form:e.form}},[t("a-form-item",{attrs:{label:"菜单名称",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["name",{rules:[{required:!0,min:2,message:"请输入至少2个字符"}]}],expression:"['name', {rules: [{required: true, min: 2, message: '请输入至少2个字符'}]}]"}]})],1),t("a-form-item",{attrs:{label:"上级菜单",labelCol:e.labelCol,wrapperCol:e.wrapperCol,extra:"默认为顶级菜单"}},[t("a-tree-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["parent_id"],expression:"['parent_id']"}],attrs:{"tree-data":e.menuListTreeData,"dropdown-style":{maxHeight:"400px",overflow:"auto"},"allow-clear":""}})],1),t("a-form-item",{attrs:{label:"菜单path",labelCol:e.labelCol,wrapperCol:e.wrapperCol,extra:"指向的页面path"}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["path",{rules:[{required:!0,message:"请输入菜单path"}]}],expression:"['path', {rules: [{required: true, message: '请输入菜单path'}]}]"}]})],1),t("a-form-item",{attrs:{label:"排序",labelCol:e.labelCol,wrapperCol:e.wrapperCol,extra:"数字越小越靠前"}},[t("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["sort",{initialValue:100,rules:[{required:!0,message:"请输入至少1个数字"}]}],expression:"['sort', {initialValue: 100, rules: [{required: true, message: '请输入至少1个数字'}]}]"}],attrs:{min:0}})],1)],1)],1)],1)},A=[],j=(r("caad"),r("2532"),r("88bc")),T=r.n(j),D={props:{menuList:{type:Array,required:!0}},data:function(){return{labelCol:{xs:{span:24},sm:{span:7}},wrapperCol:{xs:{span:24},sm:{span:13}},visible:!1,confirmLoading:!1,form:this.$form.createForm(this),record:{},menuListTreeData:[]}},created:function(){},methods:{show:function(e){var t=this;return l(o().mark((function r(){return o().wrap((function(r){while(1)switch(r.prev=r.next){case 0:return t.visible=!0,r.next=3,t.getMenuInfo(e);case 3:t.getMenuList(),t.setFieldsValue();case 5:case"end":return r.stop()}}),r)})))()},getMenuInfo:function(e){var t=this;return l(o().mark((function r(){return o().wrap((function(r){while(1)switch(r.prev=r.next){case 0:return t.confirmLoading=!0,r.next=3,m({menu_id:e.menu_id}).then((function(e){return e.data.info}));case 3:t.record=r.sent,t.confirmLoading=!1;case 5:case"end":return r.stop()}}),r)})))()},setFieldsValue:function(){var e=this;this.$nextTick((function(){e.form.setFieldsValue(T()(e.record,["name","path","parent_id","sort"]))}))},getMenuList:function(){var e=this.menuList,t=this.formatTreeDataForMenuList(e);t.unshift({title:"顶级菜单",key:0,value:0}),this.menuListTreeData=t},formatTreeDataForMenuList:function(e){var t=this,r=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=[];return e.forEach((function(e){var a={title:e.name,key:e.menu_id,value:e.menu_id};([e.menu_id,e.parent_id].includes(t.record.menu_id)||!0===r)&&(a.disabled=!0),e.children&&e.children.length&&(a["children"]=t.formatTreeDataForMenuList(e["children"],a.disabled)),n.push(a)})),n},handleSubmit:function(){var e=this,t=this.form.validateFields;this.confirmLoading=!0,t((function(t,r){t?e.confirmLoading=!1:e.onFormSubmit(r)}))},handleCancel:function(){this.visible=!1,this.form.resetFields()},onFormSubmit:function(e){var t=this;h({menuId:this.record["menu_id"],form:e}).then((function(r){t.$message.success(r.message),t.handleCancel(),t.$emit("handleSubmit",e)})).finally((function(e){t.confirmLoading=!1}))}}},O=D,E=Object(_["a"])(O,S,A,!1,null,null,null),I=E.exports,q=function(){var e=this,t=e._self._c;return t("a-modal",{attrs:{title:e.title,width:720,visible:e.visible,confirmLoading:e.confirmLoading,maskClosable:!1},on:{ok:e.handleSubmit,cancel:e.handleCancel}},[t("a-spin",{attrs:{spinning:e.confirmLoading}},[t("a-form",{attrs:{form:e.form}},[t("a-form-item",{attrs:{label:"权限名称",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["name",{rules:[{required:!0,min:2,message:"请输入至少2个字符"}]}],expression:"['name', {rules: [{required: true, min: 2, message: '请输入至少2个字符'}]}]"}]})],1),t("a-form-item",{attrs:{label:"权限标识",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["action_mark",{rules:[{required:!0,min:2,message:"请输入至少2个字符"}]}],expression:"['action_mark', {rules: [{required: true, min: 2, message: '请输入至少2个字符'}]}]"}]})],1),t("a-form-item",{attrs:{label:"排序",labelCol:e.labelCol,wrapperCol:e.wrapperCol,extra:"数字越小越靠前"}},[t("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["sort",{initialValue:100,rules:[{required:!0,message:"请输入至少1个数字"}]}],expression:"['sort', {initialValue: 100, rules: [{required: true, message: '请输入至少1个数字'}]}]"}],attrs:{min:0}})],1)],1)],1)],1)},$=[],N={props:{menuList:{type:Array,required:!0}},data:function(){return{scene:"add",title:"新增权限",labelCol:{xs:{span:24},sm:{span:7}},wrapperCol:{xs:{span:24},sm:{span:13}},visible:!1,confirmLoading:!1,form:this.$form.createForm(this),parentId:0,record:{}}},methods:{add:function(e){this.visible=!0,this.scene="add",this.title="新增操作权限",this.parentId=e,this.setFieldsValue()},edit:function(e){this.visible=!0,this.scene="edit",this.title="编辑操作权限",this.record=e,this.setFieldsValue(e)},setFieldsValue:function(e){var t=this;this.$nextTick((function(){t.form.resetFields(),e&&t.form.setFieldsValue(T()(e,["name","action_mark","sort"]))}))},handleSubmit:function(){var e=this,t=this.form.validateFields;t((function(t,r){t?e.confirmLoading=!1:e.onFormSubmit(r)}))},handleCancel:function(){this.visible=!1},onFormSubmit:function(e){var t=this;this.confirmLoading=!0;var r=function(r){t.$message.success(r.message),t.visible=!1,t.form.resetFields(),t.$emit("handleSubmit",e)};"add"===this.scene?(e.parent_id=this.parentId,f({form:Object(L["a"])({module:20},e)}).then((function(e){return r(e)})).finally((function(){t.confirmLoading=!1}))):"edit"===this.scene&&h({menuId:this.record["menu_id"],form:e}).then((function(e){return r(e)})).finally((function(){t.confirmLoading=!1}))}}},V=N,P=Object(_["a"])(V,q,$,!1,null,null,null),R=P.exports,M=function(){var e=this,t=e._self._c;return t("a-modal",{attrs:{title:e.title,width:720,visible:e.visible,confirmLoading:e.confirmLoading,maskClosable:!1},on:{ok:e.handleSubmit,cancel:e.handleCancel}},[t("a-spin",{attrs:{spinning:e.confirmLoading}},[t("a-form",{attrs:{form:e.form}},[t("a-form-item",{staticStyle:{"margin-bottom":"5px"},attrs:{label:(10===e.record.module?"菜单":"操作")+"名称",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[t("span",{staticStyle:{"margin-left":"23px",color:"rgba(0, 0, 0, 0.85)"}},[e._v(e._s(e.record.name))])]),t("a-form-item",{attrs:{label:"API权限",labelCol:e.labelCol,wrapperCol:e.wrapperCol,extra:"设置该菜单或操作使用的API权限"}},[t("a-tree",{ref:"ApiTree",attrs:{checkable:"",multiple:"",treeData:e.apiListTreeData,autoExpandParent:!1},model:{value:e.checkedKeys,callback:function(t){e.checkedKeys=t},expression:"checkedKeys"}})],1)],1)],1)],1)},K=[],G=r("2909"),H=(r("99af"),r("2ef0")),J=r.n(H),Y={props:{apiList:{type:Array,required:!0}},data:function(){return{title:"设置API权限",labelCol:{xs:{span:24},sm:{span:7}},wrapperCol:{xs:{span:24},sm:{span:13}},visible:!1,confirmLoading:!1,form:this.$form.createForm(this),record:{},apiListTreeData:[],checkedKeys:[]}},methods:{show:function(e){this.visible=!0,this.record=e,this.menuId=e.menu_id,this.getApiList(),this.setApiChecked()},getApiList:function(){var e=this.apiList,t=this.formatTreeDataForApiList(e);this.apiListTreeData=t},setApiChecked:function(){var e=function e(t){var r=[];return t.forEach((function(t){if(t.children&&t.children.length){var n=e(t.children);n.length&&(r=r.concat(n))}else r.push(t.key)})),r},t=this.apiListTreeData,r=this.record,n=e(t);this.checkedKeys=J.a.intersection(r.apiIds,n)},formatTreeDataForApiList:function(e){var t=this,r=[];return e.forEach((function(e){var n={title:e.name,key:e.api_id};e.children&&e.children.length&&(n["children"]=t.formatTreeDataForApiList(e["children"])),r.push(n)})),r},handleSubmit:function(){var e=this.$refs.ApiTree,t={apiIds:[].concat(Object(G["a"])(e.getCheckedKeys()),Object(G["a"])(e.getHalfCheckedKeys()))};this.onFormSubmit(t)},handleCancel:function(){this.visible=!1,this.form.resetFields();var e=this.$refs.ApiTree;e.clearExpandedKeys(),this.checkedKeys=[]},onFormSubmit:function(e){var t=this;this.confirmLoading=!0;var r=function(r){t.$message.success(r.message),t.handleCancel(),t.$emit("handleSubmit",e)};p({menu_id:this.record["menu_id"],form:e}).then((function(e){return r(e)})).finally((function(){t.confirmLoading=!1}))}}},z=Y,B=Object(_["a"])(z,M,K,!1,null,null,null),Q=B.exports,U={components:{ContentHeader:g["a"],STable:g["d"],AddForm:k,EditForm:I,ActionForm:R,SetApiForm:Q},data:function(){return{warningText:"此处用于管理商户后台的菜单数据，请勿对本页面数据进行更改（会导致系统无法更新升级）",isLoading:!1,columns:[{title:"菜单ID",dataIndex:"menu_id"},{title:"菜单名称",dataIndex:"name"},{title:"path",dataIndex:"path"},{title:"可操作权限",dataIndex:"actions",scopedSlots:{customRender:"actions"}},{title:"排序",dataIndex:"sort"},{title:"操作",dataIndex:"action",width:"250px",scopedSlots:{customRender:"action"}}],list:[],apiList:[]}},created:function(){this.getListData()},methods:{getListData:function(){var e=this;this.isLoading=!0,d().then((function(t){e.list=e.onFormatMenuList(t.data.list)})).finally((function(){e.isLoading=!1}))},onFormatMenuList:function(e){var t=this,r=[];return e.forEach((function(e){10===e.module&&(e.children&&(e.actions=e.children.filter((function(e){return 20===e.module})),e.children=t.onFormatMenuList(e.children),!e.children.length&&delete e.children,!e.actions.length&&delete e.actions),r.push(e))})),r},getApiList:function(){var e=this;return l(o().mark((function t(){return o().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.apiList.length){t.next=4;break}return e.isLoading=!0,t.next=4,b["d"]().then((function(t){e.apiList=t.data.list})).finally((function(){e.isLoading=!1}));case 4:case"end":return t.stop()}}),t)})))()},handleAdd:function(){this.$refs.AddForm.show()},handleEdit:function(e){this.$refs.EditForm.show(e)},handleSetApi:function(e){var t=this;return l(o().mark((function r(){return o().wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.getApiList();case 2:t.$refs.SetApiForm.show(e);case 3:case"end":return r.stop()}}),r)})))()},handleDelete:function(e){var t=this;t.$confirm({title:"您确定要删除该记录吗?",content:"确认后将无法恢复",onOk:function(){return t.onSubmitDelete(e)}})},onSubmitDelete:function(e){var t=this;return v({menuId:e["menu_id"]}).then((function(e){t.$message.success(e.message),t.handleRefresh()}))},handleRefresh:function(){this.getListData()},handleActionAdd:function(e){this.$refs.ActionForm.add(e.menu_id)},handleActionEdit:function(e){this.$refs.ActionForm.edit(e)}}},W=U,X=(r("5ba4"),Object(_["a"])(W,n,a,!1,null,"b7200bca",null));t["default"]=X.exports}}]);