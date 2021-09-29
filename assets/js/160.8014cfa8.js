(window.webpackJsonp=window.webpackJsonp||[]).push([[160],{618:function(s,a,t){"use strict";t.r(a);var e=t(24),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"css-隔离"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#css-隔离"}},[s._v("#")]),s._v(" css 隔离")]),s._v(" "),t("h3",{attrs:{id:"_1-命名空间"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-命名空间"}},[s._v("#")]),s._v(" 1. 命名空间")]),s._v(" "),t("p",[s._v("给每个不同模块使用的 css 规划好命名，这样所有的 css 就都不会出现冲突，这种方法虽然很好理解和简单，但是编写起来很繁琐，维护成本会很高，当然，现在也有打包工具很容易就可以实现就是了。")]),s._v(" "),t("p",[s._v("BEM 命名规范")]),s._v(" "),t("h3",{attrs:{id:"_2-css-modules"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-css-modules"}},[s._v("#")]),s._v(" 2. css Modules")]),s._v(" "),t("p",[s._v("CSS Modules 指的是我们像 import js 一样去引入我们的 css 代码，代码中的每一个类名都是引入对象的一个属性, 编译时会将 css 类名 加上唯一 hash。")]),s._v(" "),t("p",[s._v("实例：")]),s._v(" "),t("p",[s._v("css module 需要 webpack 配置 css-loader 或者 scss-loader , module 为 true")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    loader"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'css-loader'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    options"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        modules"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 开启模块化")]),s._v("\n        localIdentName"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'[path][name]-[local]-[hash:base64:5]'")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("h3",{attrs:{id:"_3-css-in-js"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-css-in-js"}},[s._v("#")]),s._v(" 3. css-in-js")]),s._v(" "),t("ol",[t("li",[s._v("Emotion")])]),s._v(" "),t("p",[s._v("Emotion 是一个专为使用 JavaScript 编写 css 样式而设计的库。除了通过源映射、标签和测试实用程序等功能提供出色的开发人员体验之外，它还提供强大且可预测的样式组合。支持字符串和对象样式。")]),s._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[s._v("styled-components")])]),s._v(" "),t("p",[s._v("styled-components 是针对 React 写的一套 css in js 框架, 在你使用 styled-components 进行样式定义的同时，你也就创建了一个 React 组件。css in js")]),s._v(" "),t("h3",{attrs:{id:"_4-shadow-dom"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-shadow-dom"}},[s._v("#")]),s._v(" 4. Shadow DOM")]),s._v(" "),t("p",[s._v("使用伪元素控制 shadow-dom 样式")]),s._v(" "),t("p",[s._v("术语：")]),s._v(" "),t("p",[s._v("Shadow host：一个常规 DOM 节点，Shadow DOM 会被附加到这个节点上。")]),s._v(" "),t("p",[s._v("Shadow tree：Shadow DOM 内部的 DOM 树。")]),s._v(" "),t("p",[s._v("Shadow boundary：Shadow DOM 结束的地方，也是常规 DOM 开始的地方。")]),s._v(" "),t("p",[s._v("Shadow root: Shadow tree 的根节点。")])])}),[],!1,null,null,null);a.default=n.exports}}]);