(window.webpackJsonp=window.webpackJsonp||[]).push([[368],{908:function(t,e,a){"use strict";a.r(e);var r=a(14),c=Object(r.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"computed-原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#computed-原理"}},[t._v("#")]),t._v(" computed 原理")]),t._v(" "),a("p",[t._v("computed 实质是一个惰性的 watcher")]),t._v(" "),a("p",[t._v("计算属性可以通过闭包进行传参，传参的计算属性结果并没有缓存，而是重新进行了计算")]),t._v(" "),a("h2",{attrs:{id:"computed-源码分析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#computed-源码分析"}},[t._v("#")]),t._v(" computed 源码分析")]),t._v(" "),a("ol",[a("li",[t._v("根据 computed 语法取 定义的 computed 属性的 getter")])]),t._v(" "),a("p",[t._v("如果是函数，则该函数默认为取值器 getter")]),t._v(" "),a("p",[t._v("如果是一个对象，则取对象中的 get 属性作为取值器赋给变量 getter")]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[t._v("为每个 computed 属性生成对应的 Watcher 实例")])]),t._v(" "),a("p",[t._v("创建一个 watcher 实例，并将当前循环到的 computed 属性名作为键，创建的 watcher 实例作为值存入 watchers 对象")]),t._v(" "),a("p",[t._v("Watcher 实例的作用：")]),t._v(" "),a("p",[t._v("（1）把用户设置的 computed-getter，存放到 watcher.getter 中，用于后面的计算")]),t._v(" "),a("p",[t._v("（2）watcher.value 存放计算结果")]),t._v(" "),a("p",[t._v("（3）控制缓存计算结果是否有效：computed 新建 watcher 的时候，传入 lazy， lazy 赋值给了 dirty，dirty 控制缓存计算结果是否有效")]),t._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[t._v("把每个 computed 属性通过 Object.defineProperty 变成响应式对象")])]),t._v(" "),a("p",[t._v("将 computed 属性添加到组件实例, 通过 get、set 进行属性值的获取或设置，并且重新定义 getter 方法")]),t._v(" "),a("h2",{attrs:{id:"computed-触发场景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#computed-触发场景"}},[t._v("#")]),t._v(" computed 触发场景")]),t._v(" "),a("h3",{attrs:{id:"页面初始化时"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#页面初始化时"}},[t._v("#")]),t._v(" 页面初始化时")]),t._v(" "),a("p",[t._v("页面初始化时，会读取 computed 属性值，触发重新定义的 getter，由于观察者的 dirty 值为 true，将会调用原始的 getter 函数，当 getter 方法读取 data 数据时会触发原始的 get 方法(数据劫持中的 get 方法)，将 computed 对应的 watcher 添加到 data 依赖收集器(dep)中。观察者的 get 方法执行完后，更新观察者的 value，并将 dirty 置为 false，表示 value 值已更新，之后执行观察者的 depend 方法，将上层观察者也添加到 getter 函数中 data 的依赖收集器(dep)中，最后返回 computed 的 value 值；")]),t._v(" "),a("h3",{attrs:{id:"computed-属性-getter-函数依赖的-data-改变时"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#computed-属性-getter-函数依赖的-data-改变时"}},[t._v("#")]),t._v(" computed 属性 getter 函数依赖的 data 改变时")]),t._v(" "),a("p",[t._v("当更改了 computed 属性 getter 函数依赖的 data 值时，将会触发之前 dep 收集的 watcher，依次调用 watcher 的 update 方法，先调用 computed 的观察者的 update 方法，由于 lazy 为 true，会将 dirty 先设置为 true，表示 computed 属性 getter 函数依赖 data 发生变化，但不调用观察者的 get 方法更新 value 值。这时调用包含更新页面方法的观察者的 update 方法，在更新页面时会读取 computed 属性值，触发重新定义的 getter 函数，由于 dirty 为 true，调用该观察者的 get 方法，更新 value 并返回，完成页面渲染；")]),t._v(" "),a("h2",{attrs:{id:"computed-问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#computed-问题"}},[t._v("#")]),t._v(" computed 问题")]),t._v(" "),a("h3",{attrs:{id:"computed-与-method-的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#computed-与-method-的区别"}},[t._v("#")]),t._v(" computed 与 method 的区别")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("computed 是属性访问，而 methods 是函数调用")])]),t._v(" "),a("li",[a("p",[t._v("computed 带有缓存功能，只有在它的相关依赖发生改变时才会重新求值；而 methods 调用总会执行该函数。")])])]),t._v(" "),a("h3",{attrs:{id:"watch-与-computed-的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#watch-与-computed-的区别"}},[t._v("#")]),t._v(" watch 与 computed 的区别")]),t._v(" "),a("ol",[a("li",[t._v("缓存支持")])]),t._v(" "),a("p",[t._v("watch 不支持缓存，数据变，直接会触发相应的操作；")]),t._v(" "),a("p",[t._v("computed 支持缓存，只有依赖数据发生改变，才会重新进行计算")]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[t._v("异步支持")])]),t._v(" "),a("p",[t._v("watch 支持异步；")]),t._v(" "),a("p",[t._v("computed 不支持异步，当 computed 内有异步操作时无效，无法监听数据的变化")]),t._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[t._v("使用场景")])]),t._v(" "),a("p",[t._v("watch 当需要在数据变化时执行异步或开销较大的操作时，应该使用 watch，使用 watch 选项允许执行异步操作 ( 访问一个 API )，限制执行该操作的频率，并在得到最终结果前，设置中间状态。这些都是计算属性无法做到的。")]),t._v(" "),a("p",[t._v("computed 当需要进行数值计算,并且依赖于其它数据时，应该使用 computed，因为可以利用 computed 的缓存特性，避免每次获取值时都要重新计算。")]),t._v(" "),a("h3",{attrs:{id:"computed-计算值为什么还可以依赖另外一个-computed-计算值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#computed-计算值为什么还可以依赖另外一个-computed-计算值"}},[t._v("#")]),t._v(" computed 计算值为什么还可以依赖另外一个 computed 计算值")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.cnblogs.com/yangzhou33/p/13809534.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.cnblogs.com/yangzhou33/p/13809534.html"),a("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=c.exports}}]);