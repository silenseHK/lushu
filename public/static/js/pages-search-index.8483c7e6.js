(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-search-index"],{"29f7":function(a,t,i){var e=i("3139");"string"===typeof e&&(e=[[a.i,e,""]]),e.locals&&(a.exports=e.locals);var n=i("4f06").default;n("321bfe0f",e,!0,{sourceMap:!1,shadowMode:!1})},3139:function(a,t,i){var e=i("24fb");t=e(!1),t.push([a.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/* 引入uView全局scss变量文件 */.container[data-v-a5f2a7a2]{padding:%?20?%;min-height:100vh;background:#f7f7f7}.search-wrapper[data-v-a5f2a7a2]{display:flex;height:%?64?%}.search-input[data-v-a5f2a7a2]{width:80%;background:#fff;border-radius:%?10?% 0 0 %?10?%;box-sizing:border-box;overflow:hidden}.search-input .search-input-wrapper[data-v-a5f2a7a2]{display:flex}.search-input .search-input-wrapper .left[data-v-a5f2a7a2]{display:flex;width:%?60?%;justify-content:center;align-items:center}.search-input .search-input-wrapper .left .search-icon[data-v-a5f2a7a2]{display:block;color:#b4b4b4;font-size:%?28?%}.search-input .search-input-wrapper .right[data-v-a5f2a7a2]{flex:1}.search-input .search-input-wrapper .right uni-input[data-v-a5f2a7a2]{font-size:%?28?%;height:%?64?%;display:flex;align-items:center}.search-input .search-input-wrapper .right uni-input .input-placeholder[data-v-a5f2a7a2]{color:#aba9a9}.search-button[data-v-a5f2a7a2]{width:20%;box-sizing:border-box}.search-button .button[data-v-a5f2a7a2]{height:%?64?%;font-size:%?28?%;border-radius:0 %?10?% %?10?% 0;background:#fa2209;color:#fff;display:flex;justify-content:center;align-items:center}.history .his-head[data-v-a5f2a7a2]{font-size:%?28?%;padding:%?50?% 0 0 0;color:#777}.history .his-head .icon[data-v-a5f2a7a2]{float:right}.history .his-list[data-v-a5f2a7a2]{padding:%?20?% 0;overflow:hidden}.history .his-list .his-item[data-v-a5f2a7a2]{width:33.3%;float:left;padding:%?10?%;box-sizing:border-box}.history .his-list .his-item .history-button[data-v-a5f2a7a2]{text-align:center;padding:%?14?%;line-height:%?30?%;border-radius:%?100?%;background:#fff;font-size:%?26?%;border:%?1?% solid #efefef;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}',""]),a.exports=t},"82ad":function(a,t,i){"use strict";i.r(t);var e=i("8360"),n=i.n(e);for(var r in e)"default"!==r&&function(a){i.d(t,a,(function(){return e[a]}))}(r);t["default"]=n.a},8360:function(a,t,i){"use strict";i("c975"),i("a434"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e="historySearch",n={data:function(){return{historySearch:[],searchValue:""}},onLoad:function(a){this.historySearch=this.getHistorySearch()},methods:{getHistorySearch:function(){return uni.getStorageSync(e)||[]},onSearch:function(){var a=this.searchValue;a&&(this.setHistory(a),this.$navTo("pages/goods/list",{search:a}))},setHistory:function(a){var t=this.getHistorySearch(),i=t.indexOf(a);i>-1&&t.splice(i,1),t.unshift(a),this.historySearch=t,this.onUpdateStorage()},clearSearch:function(){this.historySearch=[],this.onUpdateStorage()},onUpdateStorage:function(a){uni.setStorageSync(e,this.historySearch)},handleQuick:function(a){this.$navTo("pages/goods/list",{search:a})}}};t.default=n},c31d:function(a,t,i){"use strict";var e=i("29f7"),n=i.n(e);n.a},d881:function(a,t,i){"use strict";var e;i.d(t,"b",(function(){return n})),i.d(t,"c",(function(){return r})),i.d(t,"a",(function(){return e}));var n=function(){var a=this,t=a.$createElement,i=a._self._c||t;return i("v-uni-view",{staticClass:"container"},[i("v-uni-view",{staticClass:"search-wrapper"},[i("v-uni-view",{staticClass:"search-input"},[i("v-uni-view",{staticClass:"search-input-wrapper"},[i("v-uni-view",{staticClass:"left"},[i("v-uni-text",{staticClass:"search-icon iconfont icon-search"})],1),i("v-uni-view",{staticClass:"right"},[i("v-uni-input",{staticClass:"input",attrs:{focus:"true",placeholder:"请输入您搜索的商品",type:"text"},model:{value:a.searchValue,callback:function(t){a.searchValue=t},expression:"searchValue"}})],1)],1)],1),i("v-uni-view",{staticClass:"search-button"},[i("v-uni-view",{staticClass:"button",on:{click:function(t){arguments[0]=t=a.$handleEvent(t),a.onSearch.apply(void 0,arguments)}}},[a._v("搜索")])],1)],1),a.historySearch.length?i("v-uni-view",{staticClass:"history"},[i("v-uni-view",{staticClass:"his-head"},[i("v-uni-text",{staticClass:"title"},[a._v("最近搜索")]),i("v-uni-text",{staticClass:"icon iconfont icon-delete",on:{click:function(t){arguments[0]=t=a.$handleEvent(t),a.clearSearch.apply(void 0,arguments)}}})],1),i("v-uni-view",{staticClass:"his-list"},a._l(a.historySearch,(function(t,e){return i("v-uni-view",{key:e,staticClass:"his-item"},[i("v-uni-view",{staticClass:"history-button",on:{click:function(i){arguments[0]=i=a.$handleEvent(i),a.handleQuick(t)}}},[a._v(a._s(t))])],1)})),1)],1):a._e()],1)},r=[]},e129:function(a,t,i){"use strict";i.r(t);var e=i("d881"),n=i("82ad");for(var r in n)"default"!==r&&function(a){i.d(t,a,(function(){return n[a]}))}(r);i("c31d");var s,c=i("f0c5"),o=Object(c["a"])(n["default"],e["b"],e["c"],!1,null,"a5f2a7a2",null,!1,e["a"],s);t["default"]=o.exports}}]);