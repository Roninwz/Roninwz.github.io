(window.webpackJsonp=window.webpackJsonp||[]).push([[521],{1e3:function(a,t,e){"use strict";e.r(t);var v=e(13),s=Object(v.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h2",{attrs:{id:"ast"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ast"}},[a._v("#")]),a._v(" AST")]),a._v(" "),e("p",[a._v("抽象语法树（abstract syntax code，AST）是源代码的抽象语法结构的树状表示")]),a._v(" "),e("p",[a._v("树上的每个节点都表示源代码中的一种结构，这所以说是抽象的，是因为抽象语法树并不会表示出真实语法出现的每一个细节，")]),a._v(" "),e("p",[a._v("AST的流程：词法分析和语法分析")]),a._v(" "),e("h3",{attrs:{id:"词法分析"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#词法分析"}},[a._v("#")]),a._v(" 词法分析")]),a._v(" "),e("p",[a._v("扫描scanner，是将字符流转换为记号流(tokens)，它会读取我们的代码然后按照一定的规则合成一个个的标识")]),a._v(" "),e("p",[a._v("同时，它会移除空白符、注释等。最后，整个代码将被分割进一个 tokens 列表（或者说一维数组）。")]),a._v(" "),e("h3",{attrs:{id:"语法分析"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#语法分析"}},[a._v("#")]),a._v(" 语法分析")]),a._v(" "),e("p",[a._v("也称解析器，它会根据语言的文法规则(rules of grammar)将词法分析出来的数组转换成树形的形式，同时，验证语法。语法如果有错的话，抛出语法错误。")]),a._v(" "),e("p",[a._v("当生成树的时候，解析器会删除一些没必要的标识 tokens（比如：不完整的括号），因此 AST 不是 100% 与源码匹配的")]),a._v(" "),e("blockquote",[e("p",[a._v("解析器100%覆盖所有代码结构生成树叫做CST（具体语法树）。")])]),a._v(" "),e("h3",{attrs:{id:"ast在-javascript-中的体现"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ast在-javascript-中的体现"}},[a._v("#")]),a._v(" AST在 JavaScript 中的体现")]),a._v(" "),e("p",[a._v("esprima、estraverse 和 escodegen 模块是操作 AST 的三个重要模块，也是实现 babel 的核心依赖")]),a._v(" "),e("ol",[e("li",[e("p",[a._v("esprima 将 JS 转换成 AST")])]),a._v(" "),e("li",[e("p",[a._v("estraverse 遍历和修改 AST")])]),a._v(" "),e("li",[e("p",[a._v("escodegen 将 AST 转换成 JS")])])]),a._v(" "),e("p",[a._v("实现 Babel 语法转换插件过程：")]),a._v(" "),e("ol",[e("li",[e("p",[a._v("解析(parsing) — 将代码字符串转换成 AST抽象语法树，")])]),a._v(" "),e("li",[e("p",[a._v("转译(transforming) — 对抽象语法树进行变换操作，")])]),a._v(" "),e("li",[e("p",[a._v("生成(generation) — 根据变换后的抽象语法树生成新的代码字符串。")])])]),a._v(" "),e("p",[a._v("需要借助 babel-core 和 babel-types 两个模块，其实这两个模块就是依赖 esprima、estraverse 和 escodegen 的")]),a._v(" "),e("h3",{attrs:{id:"作用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#作用"}},[a._v("#")]),a._v(" 作用")]),a._v(" "),e("ol",[e("li",[e("p",[a._v("语法检查、代码风格检查、格式化代码、语法高亮、错误提示、自动补全等")])]),a._v(" "),e("li",[e("p",[a._v("代码混淆压缩")])]),a._v(" "),e("li",[e("p",[a._v("优化变更代码，改变代码结构等")])])]),a._v(" "),e("h3",{attrs:{id:"应用场景"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#应用场景"}},[a._v("#")]),a._v(" 应用场景")]),a._v(" "),e("p",[a._v("babel、eslint、prettier")]),a._v(" "),e("p",[a._v("浏览器，")]),a._v(" "),e("p",[a._v("智能编辑器，")]),a._v(" "),e("p",[a._v("编译器")])])}),[],!1,null,null,null);t.default=s.exports}}]);