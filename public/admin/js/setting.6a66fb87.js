(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["setting"],{"1cdf":function(e,t,a){},7334:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e._self._c;return t("a-card",{attrs:{bordered:!1}},[t("content-header",{attrs:{title:"服务器信息"}}),t("a-table",{attrs:{rowKey:"key",size:"middle",columns:e.columns.server,"data-source":e.scienceInfo.server,loading:e.isLoading,rowClassName:e.rowClassName,pagination:!1},scopedSlots:e._u([{key:"remark",fn:function(a,n){return t("span",{},["normal"!==n.status?[e._v(e._s(a))]:e._e()],2)}}])}),t("content-header",{staticStyle:{"margin-top":"50px"},attrs:{title:"PHP环境要求"}}),t("a-table",{attrs:{rowKey:"key",size:"middle",columns:e.columns.phpinfo,"data-source":e.scienceInfo.phpinfo,loading:e.isLoading,rowClassName:e.rowClassName,pagination:!1},scopedSlots:e._u([{key:"status",fn:function(e){return t("span",{},[t("a-icon",{class:["icon","status-icon"],attrs:{type:"normal"===e?"check":"close"}})],1)}},{key:"remark",fn:function(a,n){return t("span",{},["normal"!==n.status?[e._v(e._s(a))]:e._e()],2)}}])}),t("content-header",{staticStyle:{"margin-top":"50px"},attrs:{title:"目录权限监测"}}),t("a-table",{attrs:{rowKey:"key",size:"middle",columns:e.columns.writeable,"data-source":e.scienceInfo.writeable,loading:e.isLoading,rowClassName:e.rowClassName,pagination:!1},scopedSlots:e._u([{key:"status",fn:function(e){return t("span",{},[t("a-icon",{class:["icon","status-icon"],attrs:{type:"normal"===e?"check":"close"}})],1)}}])})],1)},o=[],s=(a("d3b7"),a("f6ae")),r=a("b775");function i(){return Object(r["b"])({url:s["a"].store.setting.science,method:"get"})}var c=a("2af9"),l={name:"TableList",components:{ContentHeader:c["a"]},data:function(){return{isLoading:!1,scienceInfo:{server:[],phpinfo:[],writeable:[]},columns:{server:[{title:"参数",dataIndex:"name",width:"30%"},{title:"值",dataIndex:"value"},{title:"备注",dataIndex:"remark",scopedSlots:{customRender:"remark"}}],phpinfo:[{title:"选项",dataIndex:"name"},{title:"要求",dataIndex:"value"},{title:"状态",dataIndex:"status",scopedSlots:{customRender:"status"}},{title:"备注",dataIndex:"remark",scopedSlots:{customRender:"remark"}}],writeable:[{title:"名称",dataIndex:"name"},{title:"路径",dataIndex:"value"},{title:"状态",dataIndex:"status",scopedSlots:{customRender:"status"}}]}}},created:function(){var e=this;this.$nextTick((function(){e.getScienceInfo()}))},methods:{getScienceInfo:function(){var e=this;this.isLoading=!0,i().then((function(t){e.scienceInfo=t.data.scienceInfo})).finally((function(){e.isLoading=!1}))},rowClassName:function(e){return e.status}}},d=l,u=(a("9bc1"),a("2877")),m=Object(u["a"])(d,n,o,!1,null,"4de45856",null);t["default"]=m.exports},"9b7d":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e._self._c;return t("a-card",{attrs:{bordered:!1}},[t("content-header",{attrs:{title:"清理缓存"}}),t("a-form",{attrs:{form:e.form}},[t("a-form-item",{attrs:{label:"缓存项目",labelCol:{span:6},wrapperCol:{span:13}}},[t("a-checkbox-group",{directives:[{name:"decorator",rawName:"v-decorator",value:["item",{initialValue:["data","temp"]}],expression:"['item', { initialValue: ['data', 'temp'] }]"}]},[t("a-checkbox",{attrs:{value:"data"}},[e._v("数据缓存")]),t("a-checkbox",{attrs:{value:"temp"}},[e._v("临时图片")])],1)],1),t("a-form-item",{attrs:{label:"强制模式",labelCol:{span:6},wrapperCol:{span:13},extra:"强制清空所有缓存文件，包含用户授权登录状态的数据，正式运营环境中请勿勾选"}},[t("a-switch",{directives:[{name:"decorator",rawName:"v-decorator",value:["isForce",{valuePropName:"checked"}],expression:"['isForce', { valuePropName: 'checked' }]"}]})],1),t("a-form-item",{attrs:{wrapperCol:{span:13,offset:6}}},[t("a-button",{attrs:{type:"primary",loading:e.isLoading,disabled:e.isLoading},on:{click:e.handleSubmit}},[e._v("提交")])],1)],1)],1)},o=[],s=(a("d3b7"),a("f6ae")),r=a("b775");function i(e){return Object(r["b"])({url:s["a"].store.setting.cache.clear,method:"post",data:e})}var c=a("2af9"),l=a("4360"),d={name:"TableList",components:{ContentHeader:c["a"],STable:c["d"]},data:function(){return{isLoading:!1,form:this.$form.createForm(this)}},created:function(){},methods:{handleSubmit:function(){var e=this,t=this.form.validateFields;t((function(t,a){t||(e.isLoading=!0,e.onFormSubmit(a).finally((function(){e.isLoading=!1})))}))},onFormSubmit:function(e){var t=this;return i({form:e}).then((function(a){t.$message.success(a.message),!0===e.isForce&&l["a"].dispatch("Logout").then((function(){setTimeout((function(){window.location.reload()}),1200)}))}))}}},u=d,m=a("2877"),f=Object(m["a"])(u,n,o,!1,null,null,null);t["default"]=f.exports},"9bc1":function(e,t,a){"use strict";a("1cdf")}}]);