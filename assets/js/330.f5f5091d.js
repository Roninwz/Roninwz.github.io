(window.webpackJsonp=window.webpackJsonp||[]).push([[330],{800:function(t,a,c){"use strict";c.r(a);var e=c(24),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,c=t._self._c||a;return c("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[c("h2",{attrs:{id:"watch-源码分析"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#watch-源码分析"}},[t._v("#")]),t._v(" watch 源码分析")]),t._v(" "),c("ol",[c("li",[t._v("判断 watch 写法（字符串，数组，函数）")])]),t._v(" "),c("p",[t._v("调用 createWatcher ，从用户合起来传入的对象中把回调函数 cb 和参数 options 剥离出来，调用$watch 方法")]),t._v(" "),c("h2",{attrs:{id:"watch-问题"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#watch-问题"}},[t._v("#")]),t._v(" watch 问题")]),t._v(" "),c("h3",{attrs:{id:"watch-与-computed-的区别"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#watch-与-computed-的区别"}},[t._v("#")]),t._v(" watch 与 computed 的区别")]),t._v(" "),c("ol",[c("li",[t._v("缓存支持")])]),t._v(" "),c("p",[t._v("watch 不支持缓存，数据变，直接会触发相应的操作；")]),t._v(" "),c("p",[t._v("computed 支持缓存，只有依赖数据发生改变，才会重新进行计算")]),t._v(" "),c("ol",{attrs:{start:"2"}},[c("li",[t._v("异步支持")])]),t._v(" "),c("p",[t._v("watch 支持异步；")]),t._v(" "),c("p",[t._v("computed 不支持异步，当 computed 内有异步操作时无效，无法监听数据的变化")]),t._v(" "),c("ol",{attrs:{start:"3"}},[c("li",[t._v("使用场景")])]),t._v(" "),c("p",[t._v("watch 当需要在数据变化时执行异步或开销较大的操作时，应该使用 watch，使用 watch 选项允许执行异步操作 ( 访问一个 API )，限制执行该操作的频率，并在得到最终结果前，设置中间状态。这些都是计算属性无法做到的。")]),t._v(" "),c("p",[t._v("computed 当需要进行数值计算,并且依赖于其它数据时，应该使用 computed，因为可以利用 computed 的缓存特性，避免每次获取值时都要重新计算。")])])}),[],!1,null,null,null);a.default=r.exports}}]);