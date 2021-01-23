(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{424:function(t,a,s){"use strict";s.r(a);var n=s(27),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"页签规则"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#页签规则"}},[t._v("#")]),t._v(" 页签规则")]),t._v(" "),s("p",[s("strong",[t._v("页签规则")]),t._v("定义了路由"),s("strong",[t._v("打开页签的方式")]),t._v("。")]),t._v(" "),s("p",[t._v("通过配置"),s("strong",[t._v("路由")]),t._v("的 "),s("code",[t._v("meta.key")]),t._v(" 属性，您可以定制路由页签规则")]),t._v(" "),s("h2",{attrs:{id:"默认规则"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#默认规则"}},[t._v("#")]),t._v(" 默认规则")]),t._v(" "),s("p",[t._v("默认情况下，同一路由打开同一个页签")]),t._v(" "),s("h2",{attrs:{id:"内置规则"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#内置规则"}},[t._v("#")]),t._v(" 内置规则")]),t._v(" "),s("h3",{attrs:{id:"path"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#path"}},[t._v("#")]),t._v(" "),s("code",[t._v("path")])]),t._v(" "),s("ul",[s("li",[t._v("规则："),s("code",[t._v("route => route.path")])]),t._v(" "),s("li",[t._v("说明：相同 "),s("code",[t._v("route.params")]),t._v(" 的路由，"),s("code",[t._v("route.path")]),t._v(" 一致，共用页签")]),t._v(" "),s("li",[s("demo-link",{attrs:{href:"/default/rule/path/a/1"}})],1)]),t._v(" "),s("p",[s("strong",[t._v("示例：")])]),t._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("div",{staticClass:"highlight-lines"},[s("br"),s("br"),s("br"),s("br"),s("br"),s("div",{staticClass:"highlighted"},[t._v(" ")]),s("br"),s("br"),s("br")]),s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" route "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  path"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/my-page/:id'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  component"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" MyPage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  meta"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    title"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'页面'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    key"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'path'")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br")])]),s("p",[t._v("根据示例中的页签规则：")]),t._v(" "),s("ol",[s("li",[s("code",[t._v("/my-page/1")]),t._v("和"),s("code",[t._v("/my-page/2")]),t._v(" 的 "),s("code",[t._v("params")]),t._v(" 参数不同，会打开"),s("strong",[t._v("独立")]),t._v("的页签")]),t._v(" "),s("li",[s("code",[t._v("/my-page/1")]),t._v("、"),s("code",[t._v("/my-page/1?a=1")]),t._v("和"),s("code",[t._v("/my-page/1?b=2")]),t._v(" 的 "),s("code",[t._v("params")]),t._v(" 参数相同，会共用"),s("strong",[t._v("同一个")]),t._v("页签")])]),t._v(" "),s("h3",{attrs:{id:"fullpath"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fullpath"}},[t._v("#")]),t._v(" "),s("code",[t._v("fullPath")])]),t._v(" "),s("ul",[s("li",[t._v("规则："),s("code",[t._v("route => route.fullPath.replace(route.hash, '')")])]),t._v(" "),s("li",[t._v("说明：相同 "),s("code",[t._v("route.params")]),t._v(" 和 "),s("code",[t._v("route.query")]),t._v(" 的路由，"),s("code",[t._v("route.fullPath")]),t._v(" 去除 "),s("code",[t._v("hash")]),t._v(" 后一致，共用页签")]),t._v(" "),s("li",[s("demo-link",{attrs:{href:"/default/rule/fullPath/a/1"}})],1)]),t._v(" "),s("p",[s("strong",[t._v("示例：")])]),t._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("div",{staticClass:"highlight-lines"},[s("br"),s("br"),s("br"),s("br"),s("br"),s("div",{staticClass:"highlighted"},[t._v(" ")]),s("br"),s("br"),s("br")]),s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" route "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  path"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/my-page/:id'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  component"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" MyPage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  meta"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    title"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'页面'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    key"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'fullPath'")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br")])]),s("p",[t._v("根据示例中的页签规则：")]),t._v(" "),s("ol",[s("li",[s("code",[t._v("/my-page/1")]),t._v("和"),s("code",[t._v("/my-page/2")]),t._v(" 的 "),s("code",[t._v("params")]),t._v(" 参数不同，会打开"),s("strong",[t._v("独立")]),t._v("的页签")]),t._v(" "),s("li",[s("code",[t._v("/my-page/1")]),t._v("、"),s("code",[t._v("/my-page/1?a=1")]),t._v("和"),s("code",[t._v("/my-page/1?b=2")]),t._v(" 的 "),s("code",[t._v("query")]),t._v(" 参数不同，会打开"),s("strong",[t._v("独立")]),t._v("的页签")])]),t._v(" "),s("h2",{attrs:{id:"自定义规则"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#自定义规则"}},[t._v("#")]),t._v(" 自定义规则")]),t._v(" "),s("p",[t._v("除了使用内置规则，你还可以用函数自定义控制")]),t._v(" "),s("p",[s("strong",[t._v("示例：")])]),t._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("div",{staticClass:"highlight-lines"},[s("br"),s("br"),s("br"),s("br"),s("br"),s("div",{staticClass:"highlighted"},[t._v(" ")]),s("div",{staticClass:"highlighted"},[t._v(" ")]),s("div",{staticClass:"highlighted"},[t._v(" ")]),s("br"),s("br"),s("br")]),s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" route "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  path"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/my-page/:catalog/:type'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  component"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" MyPage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  meta"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    title"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'定制规则'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("key")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("route")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("/my-page/")]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("route"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("params"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("catalog"),s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br")])]),s("p",[t._v("根据示例中的页签规则：")]),t._v(" "),s("ol",[s("li",[s("code",[t._v("/my-page/a/1")]),t._v(" 和 "),s("code",[t._v("/my-page/a/2")]),t._v("，"),s("code",[t._v("params.catalog")]),t._v(" 相同，打开的是"),s("strong",[t._v("同一个")]),t._v("页签")]),t._v(" "),s("li",[s("code",[t._v("/my-page/a/1")]),t._v(" 和 "),s("code",[t._v("/my-page/b/1")]),t._v("，"),s("code",[t._v("params.catalog")]),t._v(" 不同，则打开"),s("strong",[t._v("独立")]),t._v("的页签")])])])}),[],!1,null,null,null);a.default=e.exports}}]);