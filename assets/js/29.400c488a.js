(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{456:function(t,e,r){t.exports=r.p+"assets/img/template_render.f0570125.png"},791:function(t,e,r){"use strict";r.r(e);var s=r(24),a=Object(s.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"vue-模板编译"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue-模板编译"}},[t._v("#")]),t._v(" vue 模板编译")]),t._v(" "),s("h3",{attrs:{id:"整体渲染流程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#整体渲染流程"}},[t._v("#")]),t._v(" 整体渲染流程")]),t._v(" "),s("p",[t._v("所谓渲染流程，就是把用户写的类似于原生 HTML 的模板经过一系列处理最终反应到视图中称之为整个渲染流程。这个流程在上文中其实已经说到了，下面我们以流程图的形式宏观的了解一下")]),t._v(" "),s("p",[s("img",{attrs:{src:r(456),alt:"image"}})]),t._v(" "),s("h3",{attrs:{id:"模板编译具体流程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#模板编译具体流程"}},[t._v("#")]),t._v(" 模板编译具体流程")]),t._v(" "),s("p",[t._v("具体流程可大致分为三个阶段：")]),t._v(" "),s("ol",[s("li",[t._v("模板解析阶段：将一堆模板字符串用正则等方式解析成抽象语法树 AST；解析器——源码路径："),s("code",[t._v("src/compiler/parser/index.js")])])]),t._v(" "),s("p",[t._v("根据解析内容的不同分为 HTML 解析器，文本解析器和过滤器解析器")]),t._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[s("p",[t._v("优化阶段：遍历 AST，找出其中的静态节点，并打上标记；优化器——源码路径："),s("code",[t._v("src/compiler/optimizer.js")])])]),t._v(" "),s("li",[s("p",[t._v("代码生成阶段：将 AST 转换成渲染函数；代码生成器——源码路径："),s("code",[t._v("src/compiler/codegen/index.js")])])])])])}),[],!1,null,null,null);e.default=a.exports}}]);