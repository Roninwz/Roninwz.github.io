(window.webpackJsonp=window.webpackJsonp||[]).push([[217],{741:function(t,r,a){"use strict";a.r(r);var e=a(14),s=Object(e.a)({},(function(){var t=this,r=t.$createElement,a=t._self._c||r;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"虚拟列表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#虚拟列表"}},[t._v("#")]),t._v(" 虚拟列表")]),t._v(" "),a("p",[t._v("虚拟列表其实是按需显示的一种实现，即只对可见区域进行渲染，对非可见区域中的数据不渲染或部分渲染的技术，从而达到极高的渲染性能。")]),t._v(" "),a("h3",{attrs:{id:"定高虚拟列表实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#定高虚拟列表实现"}},[t._v("#")]),t._v(" 定高虚拟列表实现")]),t._v(" "),a("h3",{attrs:{id:"不定高虚拟列表实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#不定高虚拟列表实现"}},[t._v("#")]),t._v(" 不定高虚拟列表实现")]),t._v(" "),a("p",[t._v("两种方案：")]),t._v(" "),a("ol",[a("li",[t._v("传入一个 estimateHeight 属性先对行高进行估计并渲染，然后渲染完成后获得真实行高并进行更新和缓存")])]),t._v(" "),a("blockquote",[a("p",[t._v("会引入多余的 transform（可以接受）")])]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[t._v("将当前元素先在屏外进行绘制并对齐高度进行测量后再将其渲染到用户可视区域内")])]),t._v(" "),a("blockquote",[a("p",[t._v("这种方法相当于双倍渲染消耗（不切实际）")])]),t._v(" "),a("h2",{attrs:{id:"长列表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#长列表"}},[t._v("#")]),t._v(" 长列表")]),t._v(" "),a("p",[t._v("前端的业务开发中会遇到一些数据量较大且无法使用分页方式来加载的列表，我们一般把这种列表叫做长列表")]),t._v(" "),a("p",[t._v("完整渲染的长列表基本上很难达到业务上的要求的，非完整渲染的长列表一般有两种方式：")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("懒渲染：这个就是常见的无线滚动的，每次只渲染一部分（比如 10 条），等剩余部分滚到可见区域，就再渲染一部分。")])]),t._v(" "),a("li",[a("p",[t._v("可视区域渲染：只渲染可见部分，不可见部分不渲染。")])])]),t._v(" "),a("hr"),t._v(" "),a("p",[t._v("参考："),a("a",{attrs:{href:"https://juejin.cn/post/6948011958075392036",target:"_blank",rel:"noopener noreferrer"}},[t._v("如何实现一个高度自适应的虚拟列表"),a("OutboundLink")],1)])])}),[],!1,null,null,null);r.default=s.exports}}]);