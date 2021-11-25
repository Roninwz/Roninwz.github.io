(window.webpackJsonp=window.webpackJsonp||[]).push([[201],{664:function(t,a,v){"use strict";v.r(a);var _=v(24),e=Object(_.a)({},(function(){var t=this,a=t.$createElement,v=t._self._c||a;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h2",{attrs:{id:"微前端"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#微前端"}},[t._v("#")]),t._v(" 微前端")]),t._v(" "),v("h3",{attrs:{id:"qiankun-原理"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#qiankun-原理"}},[t._v("#")]),t._v(" qiankun 原理")]),t._v(" "),v("p",[t._v("qiankun 框架的编写基于两个十分重要框架，一个是 single-spa，另外一个是 import-html-entry")]),t._v(" "),v("h3",{attrs:{id:"通信"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#通信"}},[t._v("#")]),t._v(" 通信")]),t._v(" "),v("blockquote",[v("p",[t._v("参考："),v("a",{attrs:{href:"https://cloud.tencent.com/developer/article/1770605",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://cloud.tencent.com/developer/article/1770605"),v("OutboundLink")],1)])]),t._v(" "),v("ol",[v("li",[t._v("Actions")])]),t._v(" "),v("p",[t._v("适用场景：比较适合业务划分清晰，应用间通信较少的微前端应用场景。")]),t._v(" "),v("p",[t._v("通信原理：qiankun 内部提供了 initGlobalState 方法用于注册 MicroAppStateActions 实例用于通信")]),t._v(" "),v("p",[t._v("优点：")]),t._v(" "),v("p",[t._v("（1）使用简单；")]),t._v(" "),v("p",[t._v("（2）官方支持性高；")]),t._v(" "),v("p",[t._v("（3）适合通信较少的业务场景；")]),t._v(" "),v("p",[t._v("缺点：")]),t._v(" "),v("p",[t._v("（1）子应用独立运行时，需要额外配置无 Actions 时的逻辑；")]),t._v(" "),v("p",[t._v("（2）子应用需要先了解状态池的细节，再进行通信；")]),t._v(" "),v("p",[t._v("（3）由于状态池无法跟踪，通信场景较多时，容易出现状态混乱、维护困难等问题；")]),t._v(" "),v("ol",{attrs:{start:"2"}},[v("li",[t._v("Shared 通信")])]),t._v(" "),v("p",[t._v("适用场景：应用通信场景较多，希望子应用具备完全独立运行能力，希望主应用能够更好的管理子应用，")]),t._v(" "),v("p",[t._v("通信原理：Shared 通信方案的原理就是，主应用基于 redux/vuex 维护一个状态池，通过 shared 实例暴露一些方法给子应用使用。同时，子应用需要单独维护一份 shared 实例，在独立运行时使用自身的 shared 实例，在嵌入主应用时使用主应用的 shared 实例，这样就可以保证在使用和表现上的一致性。")]),t._v(" "),v("p",[t._v("优点：")]),t._v(" "),v("p",[t._v("（1）子应用无法随意污染主应用的状态池，只能通过主应用暴露的 shared 实例的特定方法操作状态池，从而避免状态池污染产生的问题。")]),t._v(" "),v("p",[t._v("（2）子应用将具备独立运行的能力")]),t._v(" "),v("h3",{attrs:{id:"沙箱隔离"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#沙箱隔离"}},[t._v("#")]),t._v(" 沙箱隔离")]),t._v(" "),v("p",[t._v("qiankun 做沙箱隔离主要分为三种：")]),t._v(" "),v("ol",[v("li",[t._v("legacySandBox")])]),t._v(" "),v("p",[t._v("legacySandBox 的本质上还是操作 window 对象")]),t._v(" "),v("ol",{attrs:{start:"2"}},[v("li",[t._v("proxySandBox")])]),t._v(" "),v("p",[t._v("proxySandBox 为了支持多实例的场景，proxySandBox 不会直接操作 window 对象。并且为了避免子应用操作或者修改主应用上诸如 window、document、location 这些重要的属性，会遍历这些属性到子应用 window 副本（fakeWindow）上")]),t._v(" "),v("ol",{attrs:{start:"3"}},[v("li",[t._v("snapshotSandBox。")])]),t._v(" "),v("p",[t._v("snapshotSandBox 的原理就是在子应用激活 / 卸载时分别去通过快照的形式记录/还原状态来实现沙箱的。")]),t._v(" "),v("p",[t._v("总结：其中 legacySandBox、proxySandBox 是基于 Proxy API 来实现的，在不支持 Proxy API 的低版本浏览器中，会降级为 snapshotSandBox。在现版本中，legacySandBox 仅用于 singular 单实例模式，而多实例模式会使用 proxySandBox。")]),t._v(" "),v("h2",{attrs:{id:"微前端问题"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#微前端问题"}},[t._v("#")]),t._v(" 微前端问题")]),t._v(" "),v("ol",[v("li",[v("p",[t._v("qiankun 是如何完善 single-spa 中留下的巨大缺口-————加载函数")])]),t._v(" "),v("li",[v("p",[t._v("qiankun 通过什么策略去加载子应用资源————window.fetch。")])])]),t._v(" "),v("p",[t._v("通过 window.fetch 去获取子应用的 js 代码")]),t._v(" "),v("p",[t._v("拿到了子应用的 js 代码字符串之后，把它进行包装处理。把代码包裹在了一个立即执行函数中，通过参数的形式改变了它的 window 环境，变成了沙箱环境。")]),t._v(" "),v("p",[t._v("最后通过 eval()去执行立即执行函数，正式去执行我们的子应用的 js 代码，去渲染出整个子应用。")]),t._v(" "),v("ol",{attrs:{start:"3"}},[v("li",[v("p",[t._v("qiankun 如何隔离子应用的 js 的全局环境————通过沙箱。")])]),t._v(" "),v("li",[v("p",[t._v("沙箱的隔离原理是什么")])])]),t._v(" "),v("p",[t._v("在支持 proxy 中有一个代理对象，子应用优先访问到了代理对象，如果代理对象没有的值再从 window 中获取。如果不支持 proxy，那么通过快照，缓存，复原的形式解决污染问题。")]),t._v(" "),v("ol",{attrs:{start:"5"}},[v("li",[t._v("qiankun 如何隔离 css 环境")])]),t._v(" "),v("p",[t._v("沙箱可以保证子应用之间的样式隔离")]),t._v(" "),v("p",[t._v("qiankun 自带的 css 沙箱保证主应用和子应用之间的样式隔离。")]),t._v(" "),v("p",[t._v("css 严格沙箱：shadowDOM ，配置"),v("code",[t._v("strictStyleIsolation: true")]),t._v("；")]),t._v(" "),v("p",[t._v("css 实验性沙箱：加上选择器隔离。qiankun 会自动为子应用所有的样式增加后缀标签，如： "),v("code",[t._v("div[data-qiankun-microName]")]),t._v(",配置："),v("code",[t._v("experimentalStyleIsolation: true")])]),t._v(" "),v("ol",{attrs:{start:"6"}},[v("li",[t._v("qiankun 如何获得子应用生命周期函数")])]),t._v(" "),v("p",[t._v("export 存储在对象中，然后解构出来。")]),t._v(" "),v("ol",{attrs:{start:"7"}},[v("li",[t._v("qiankun 如何该改变子应用的 window 环境")])]),t._v(" "),v("p",[t._v("通过立即执行函数，传入 window.proxy 为参数，改变 window 环境。")]),t._v(" "),v("blockquote",[v("p",[t._v("参考：")])]),t._v(" "),v("p",[t._v("微前端 qiankun 原理学习 "),v("a",{attrs:{href:"https://www.cnblogs.com/synY/p/13969785.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.cnblogs.com/synY/p/13969785.html"),v("OutboundLink")],1)]),t._v(" "),v("p",[t._v("万字长文+图文并茂+全面解析微前端框架 qiankun 源码 - qiankun 篇 "),v("a",{attrs:{href:"https://segmentfault.com/a/1190000022275991",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://segmentfault.com/a/1190000022275991"),v("OutboundLink")],1)]),t._v(" "),v("h3",{attrs:{id:"为什么不是-iframe"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#为什么不是-iframe"}},[t._v("#")]),t._v(" 为什么不是 iframe")]),t._v(" "),v("blockquote",[v("p",[t._v("iframe 最大的特性就是提供了浏览器原生的硬隔离方案，不论是样式隔离、js 隔离这类问题统统都能被完美解决。但他的最大问题也在于他的隔离性无法被突破，导致应用间上下文无法被共享，随之带来的开发体验、产品体验的问题。")])]),t._v(" "),v("ol",[v("li",[v("p",[t._v("url 不同步。浏览器刷新 iframe url 状态丢失、后退前进按钮无法使用。")])]),t._v(" "),v("li",[v("p",[t._v("UI 不同步，DOM 结构不共享。想象一下屏幕右下角 1/4 的 iframe 里来一个带遮罩层的弹框，同时我们要求这个弹框要浏览器居中显示，还要浏览器 resize 时自动居中..")])]),t._v(" "),v("li",[v("p",[t._v("全局上下文完全隔离，内存变量不共享。iframe 内外系统的通信、数据同步等需求，主应用的 cookie 要透传到根域名都不同的子应用中实现免登效果。")])]),t._v(" "),v("li",[v("p",[t._v("慢。每次子应用进入都是一次浏览器上下文重建、资源重新加载的过程。")])])]),t._v(" "),v("blockquote",[v("p",[t._v("参考："),v("a",{attrs:{href:"https://www.yuque.com/kuitos/gky7yw/gesexv",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.yuque.com/kuitos/gky7yw/gesexv"),v("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=e.exports}}]);