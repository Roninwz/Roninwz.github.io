(window.webpackJsonp=window.webpackJsonp||[]).push([[384],{934:function(v,t,_){"use strict";_.r(t);var a=_(14),r=Object(a.a)({},(function(){var v=this,t=v.$createElement,_=v._self._c||t;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h2",{attrs:{id:"虚拟-dom"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#虚拟-dom"}},[v._v("#")]),v._v(" 虚拟 DOM")]),v._v(" "),_("p",[v._v("虚拟 DOM，就是用一个 JS 对象来描述一个 DOM 节点")]),v._v(" "),_("p",[v._v("VNode 的类型：")]),v._v(" "),_("ol",[_("li",[v._v("注释节点")]),v._v(" "),_("li",[v._v("文本节点")]),v._v(" "),_("li",[v._v("元素节点")]),v._v(" "),_("li",[v._v("组件节点")]),v._v(" "),_("li",[v._v("函数式组件节点")]),v._v(" "),_("li",[v._v("克隆节点")])]),v._v(" "),_("h3",{attrs:{id:"为什么要有虚拟-dom"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#为什么要有虚拟-dom"}},[v._v("#")]),v._v(" 为什么要有虚拟 DOM")]),v._v(" "),_("p",[v._v("操作真实的 DOM 是很消耗性能的，所以就用 JS 的计算性能来换取操作 DOM 所消耗的性能")]),v._v(" "),_("p",[v._v("当数据发生变化时，我们对比变化前后的虚拟 DOM 节点，通过 DOM-Diff 算法计算出需要更新的地方，然后去更新需要更新的视图。")]),v._v(" "),_("h3",{attrs:{id:"虚拟-dom-的作用"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#虚拟-dom-的作用"}},[v._v("#")]),v._v(" 虚拟 DOM 的作用")]),v._v(" "),_("ol",[_("li",[_("p",[v._v("服务于 diff 算法，减少 JavaScript 操作真实 DOM 的带来的性能消耗")])]),v._v(" "),_("li",[_("p",[v._v("抽象了原本的渲染过程，实现了跨平台的能力，而不仅仅局限于浏览器的 DOM，可以是安卓和 IOS 的原生组件，可以是近期很火热的小程序，也可以是各种 GUI")])])]),v._v(" "),_("h3",{attrs:{id:"虚拟-dom-的优缺点"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#虚拟-dom-的优缺点"}},[v._v("#")]),v._v(" 虚拟 DOM 的优缺点？")]),v._v(" "),_("ul",[_("li",[v._v("优点：")])]),v._v(" "),_("p",[v._v("保证性能下限： 框架的虚拟 DOM 需要适配任何上层 API 可能产生的操作，它的一些 DOM 操作的实现必须是普适的，所以它的性能并不是最优的；但是比起粗暴的 DOM 操作性能要好很多，因此框架的虚拟 DOM 至少可以保证在你不需要手动优化的情况下，依然可以提供还不错的性能，即保证性能的下限；\n无需手动操作 DOM： 我们不再需要手动去操作 DOM，只需要写好 View-Model 的代码逻辑，框架会根据虚拟 DOM 和 数据双向绑定，帮我们以可预期的方式更新视图，极大提高我们的开发效率；\n跨平台： 虚拟 DOM 本质上是 JavaScript 对象, 而 DOM 与平台强相关，相比之下虚拟 DOM 可以进行更方便地跨平台操作，例如服务器渲染、weex 开发等等。")]),v._v(" "),_("ul",[_("li",[v._v("缺点:")])]),v._v(" "),_("p",[v._v("无法进行极致优化： 虽然虚拟 DOM + 合理的优化，足以应对绝大部分应用的性能需求，但在一些性能要求极高的应用中虚拟 DOM 无法进行针对性的极致优化。")]),v._v(" "),_("h3",{attrs:{id:"虚拟-dom-实现原理"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#虚拟-dom-实现原理"}},[v._v("#")]),v._v(" 虚拟 DOM 实现原理")]),v._v(" "),_("p",[v._v("虚拟 DOM 的实现原理主要包括以下 3 部分：")]),v._v(" "),_("p",[v._v("用 JavaScript 对象模拟真实 DOM 树，对真实 DOM 进行抽象；\ndiff 算法 — 比较两棵虚拟 DOM 树的差异；\npach 算法 — 将两个虚拟 DOM 对象的差异应用到真正的 DOM 树。")]),v._v(" "),_("p",[v._v("如果对以上 3 个部分还不是很了解的同学，可以查看本文作者写的另一篇详解虚拟 DOM 的文章《深入剖析：Vue 核心之虚拟 DOM》")]),v._v(" "),_("h3",{attrs:{id:"虚拟-dom-流程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#虚拟-dom-流程"}},[v._v("#")]),v._v(" 虚拟 dom 流程")]),v._v(" "),_("ol",[_("li",[v._v("用 JavaScript 模拟 DOM 树")])]),v._v(" "),_("p",[v._v("(1) 实现一个 VNode 类来描述 DOM 树")]),v._v(" "),_("p",[v._v("(2) 实现一个 createElement 方法创建虚拟 DOM")]),v._v(" "),_("ol",{attrs:{start:"2"}},[_("li",[_("p",[v._v("比较新老 DOM 树，得到比较的差异对象（diff 算法）")])]),v._v(" "),_("li",[_("p",[v._v("把差异对象应用到渲染的 DOM 树。（render 函数和 mount 函数）")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);