(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["p-Rule-vue"],{"007a":function(t,e,a){},1874:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v(" 你在 "),a("strong",{staticClass:"text-strong"},[t._v(t._s(t.pageTime))]),t._v(" 秒前打开本页面 ")])},l=[],s={name:"PageTimer",data:function(){return{openTime:new Date,pageTime:0}},mounted:function(){this.updatePageTime()},activated:function(){this.updatePageTime()},deactivated:function(){this.clearPageTimer()},beforeDestroy:function(){this.clearPageTimer()},methods:{calcPageTime:function(){this.pageTime=Math.floor((new Date-this.openTime)/1e3)},updatePageTime:function(){this.calcPageTime(),this.clearPageTimer(),this.pageTimer=setInterval(this.calcPageTime,1e3)},clearPageTimer:function(){clearInterval(this.pageTimer)}}},n=s,u=a("2877"),i=Object(u["a"])(n,r,l,!1,null,null,null);e["a"]=i.exports},"2dd9":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h2",[t._v("页签规则")]),t._m(0),a("page-timer"),a("table",{staticClass:"demo-table"},[t._m(1),a("tbody",t._l(t.rules,(function(e){return a("tr",{key:e.id,class:{on:t.curRole===e.id},style:{cursor:t.curRole===e.id?"default":"pointer"},attrs:{title:"点击切换当前规则"},on:{click:function(a){t.curRole!==e.id&&t.$tabs.reset("../../"+e.id)}}},[a("td",[t._v(t._s(e.label))]),a("td",[e.value?a("code",[t._v(t._s(e.value))]):t._e()]),a("td",[t._v(t._s(e.desc))])])})),0)]),a("h4",[t._v("选定规则后，点击下面的链接，并观察页签的变化")]),a("ul",{staticClass:"btn-list"},t._l(t.catalogs,(function(e){return a("li",{key:e},[t._l(t.types,(function(r){return a("router-link",{key:r,staticClass:"demo-btn link",attrs:{to:"../"+e+"/"+r}},[t._v(" "+t._s(e)+"/"+t._s(r)+" ")])})),a("router-link",{staticClass:"demo-btn link",attrs:{to:"../"+e+"/1?q=abc"}},[t._v(" "+t._s(e)+"/1?q=abc ")]),a("router-link",{staticClass:"demo-btn link",attrs:{to:"../"+e+"/1?q=def"}},[t._v(" "+t._s(e)+"/1?q=def ")])],2)})),0),a("h3",[t._v("路由信息")]),a("page-route-info")],1)},l=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v("通过配置路由元信息 "),a("code",[t._v("meta.key")]),t._v(" 来设置页签规则")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",[t._v("规则")]),a("th",[t._v("配置")]),a("th",[t._v("说明")])])])}],s=(a("ac1f"),a("1874")),n=a("ce92"),u={name:"Rule",components:{PageTimer:s["a"],PageRouteInfo:n["a"]},data:function(){var t=this.$route,e=t.params,a=e.catalog,r=e.type;return{rules:[{id:"default",label:"默认",value:"",desc:"同一路由共用同一个页签"},{id:"path",label:"path",value:"path",desc:"相同 route.params 的路由共用页签"},{id:"fullPath",label:"fullPath",value:"fullPath",desc:"相同 route.params 和 route.query 的路由共用页签"},{id:"custom",label:"自定义",value:"route => 'route-rule/' + route.params.catalog",desc:"相同 catalog 参数的路由共用页签"}],curRole:/\/rule\/([^/]+)\//.exec(t.path)[1],catalog:a,type:r,catalogs:["a","b","c"],types:[1,2],link:{catalog:a,type:r}}}},i=u,c=(a("4772"),a("2877")),o=Object(c["a"])(i,r,l,!1,null,"350084c0",null);e["default"]=o.exports},4772:function(t,e,a){"use strict";a("007a")},ce92:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("table",{staticClass:"demo-table"},[a("tr",[a("th",{attrs:{width:"80"}},[t._v(" name ")]),a("td",[t._v(t._s(t.$route.name))])]),a("tr",[a("th",[t._v("path")]),a("td",[t._v(t._s(t.$route.path))])]),a("tr",[a("th",[t._v("params")]),a("td",[t._v(t._s(t.$route.params))])]),a("tr",[a("th",[t._v("query")]),a("td",[t._v(t._s(t.$route.query))])]),a("tr",[a("th",[t._v("hash")]),a("td",[t._v(t._s(t.$route.hash))])]),a("tr",[a("th",[t._v("fullPath")]),a("td",[t._v(t._s(t.$route.fullPath))])]),a("tr",[t._m(0),a("td",[t._v(t._s(t.$route.meta))])])])},l=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("th",[a("b",[t._v("meta")])])}],s=a("2877"),n={},u=Object(s["a"])(n,r,l,!1,null,null,null);e["a"]=u.exports}}]);
//# sourceMappingURL=p-Rule-vue.45b3543a.js.map