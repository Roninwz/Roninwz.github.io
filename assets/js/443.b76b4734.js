(window.webpackJsonp=window.webpackJsonp||[]).push([[443],{995:function(t,e,r){"use strict";r.r(e);var a=r(14),s=Object(a.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h2",{attrs:{id:"vue-router-面试题"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#vue-router-面试题"}},[t._v("#")]),t._v(" vue-router 面试题")]),t._v(" "),r("ul",[r("li",[r("p",[t._v("vue-router 路由模式有哪些，实现方式及原理")])]),t._v(" "),r("li",[r("p",[t._v("vue-router 有哪几种导航钩子（路由守卫）？")])]),t._v(" "),r("li",[r("p",[t._v("route 和 router 有什么区别")])]),t._v(" "),r("li",[r("p",[t._v("vue-router 的实现原理")])]),t._v(" "),r("li",[r("p",[t._v("讲讲 window.history 的原理, 为什么 popState 能够实现前端路由")])]),t._v(" "),r("li",[r("p",[t._v("active-class 是哪个组件的属性？")])]),t._v(" "),r("li",[r("p",[t._v("切换路由时，需要保存草稿的功能，怎么实现呢？")])]),t._v(" "),r("li",[r("p",[t._v("说说你对 router-link 的了解")])]),t._v(" "),r("li",[r("p",[t._v("vue-router 如何响应路由参数的变化？")])]),t._v(" "),r("li",[r("p",[t._v("你有看过 vue-router 的源码吗？说说看")])]),t._v(" "),r("li",[r("p",[t._v("切换到新路由时，页面要滚动到顶部或保持原先的滚动位置怎么做呢？")])]),t._v(" "),r("li",[r("p",[t._v("在什么场景下会用到嵌套路由？")])]),t._v(" "),r("li",[r("p",[t._v("如何获取路由传过来的参数？")])]),t._v(" "),r("li",[r("p",[t._v("在 vue 组件中怎么获取到当前的路由信息？")])]),t._v(" "),r("li",[r("p",[t._v("vue-router 怎么重定向页面？")])]),t._v(" "),r("li",[r("p",[t._v("怎样动态加载路由？")])]),t._v(" "),r("li",[r("p",[t._v("怎么实现路由懒加载呢？")])]),t._v(" "),r("li",[r("p",[t._v("如果让你从零开始写一个 vue 路由，说说你的思路")])]),t._v(" "),r("li",[r("p",[t._v("说说 vue-router 完整的导航解析流程是什么？")])]),t._v(" "),r("li",[r("p",[t._v("路由之间是怎么跳转的？有哪些方式？")])]),t._v(" "),r("li",[r("p",[t._v("如果 vue-router 使用 history 模式，部署时要注意什么？")])]),t._v(" "),r("li",[r("p",[t._v("vue-router 是用来做什么的？它有哪些组件？")])]),t._v(" "),r("li",[r("p",[t._v("spa 应用的路由设计，vue 的路由怎么实现的")])]),t._v(" "),r("li",[r("p",[t._v("hash 和 history 的方法，两种路由方式传参的区别")])]),t._v(" "),r("li",[r("p",[t._v("前端路由 hash 模式和 history 模式为什么页面不会刷新？切换路由会不会重新请求页面资源，")])])]),t._v(" "),r("p",[t._v("vue-router 中路由方法 pushState 和 replaceState 能否触发 popSate 事件")]),t._v(" "),r("h2",{attrs:{id:"vue-router-面试题及答案"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#vue-router-面试题及答案"}},[t._v("#")]),t._v(" vue-router 面试题及答案")]),t._v(" "),r("h3",{attrs:{id:"_1-vue-router-路由模式有几种"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-vue-router-路由模式有几种"}},[t._v("#")]),t._v(" 1.vue-router 路由模式有几种？")]),t._v(" "),r("ul",[r("li",[r("p",[t._v("hash: 使用 URL hash 值来作路由。支持所有浏览器，包括不支持 HTML5 History Api 的浏览器；")])]),t._v(" "),r("li",[r("p",[t._v("history : 依赖 HTML5 History API 和服务器配置。具体可以查看 HTML5 History 模式；")])]),t._v(" "),r("li",[r("p",[t._v("abstract : 支持所有 JavaScript 运行环境，如 Node.js 服务器端。如果发现没有浏览器的 API，路由会自动强制进入这个模式.")])])]),t._v(" "),r("h3",{attrs:{id:"_2-vue-router-路由模式-hash-与-histary-的区别"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-vue-router-路由模式-hash-与-histary-的区别"}},[t._v("#")]),t._v(" "),r("strong",[t._v("2.vue-router 路由模式 hash 与 histary 的区别")])]),t._v(" "),r("ul",[r("li",[r("p",[t._v("1、url 不同 hash 带#，histary 不带#")])]),t._v(" "),r("li",[r("p",[t._v("2、pushState 设置的新 URL 可以与当前 URL 一模一样，这样也会把记录添加到栈中；而 hash 设置的新值必须与原来不一样才会触发记录添加到栈中")])]),t._v(" "),r("li",[r("p",[t._v("3、兼容性不同，hash 兼容 IE8 以上，history 兼容 IE10 以上 ,hash 支持低版本浏览器和 IE 浏览器，history 模式下需要支持 H5 的浏览器，使用的是 H5 的 api")])]),t._v(" "),r("li",[r("p",[t._v("第三种路由模式 Abstract： 支持所有 javascript 运行模式。如果发现没有浏览器的 API，路由会自动强制进入这个模式。")])]),t._v(" "),r("li",[r("p",[t._v("监听 hash 模式用的是 hashchange ,")])]),t._v(" "),r("li",[r("p",[t._v("history 模式基于 window.history 对象的方法")]),t._v(" "),r("p",[t._v("history 模式用的是 popstate (history.replaceState() history.pushState)")])])]),t._v(" "),r("h3",{attrs:{id:"_3-能说下-vue-router-中常用的-hash-和-history-路由模式实现原理吗"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-能说下-vue-router-中常用的-hash-和-history-路由模式实现原理吗"}},[t._v("#")]),t._v(" 3. 能说下 vue-router 中常用的 hash 和 history 路由模式实现原理吗？")]),t._v(" "),r("ul",[r("li",[r("p",[t._v("（1）hash 模式的实现原理\n早期的前端路由的实现就是基于 location.hash 来实现的。其实现原理很简单，location.hash 的值就是 URL 中 # 后面的内容。比如下面这个网站，它的 location.hash 的值为 '#search'：\nhttps://www.word.com#search")])]),t._v(" "),r("li",[r("p",[t._v("hash 路由模式的实现主要是基于下面几个特性：")]),t._v(" "),r("blockquote",[r("p",[t._v("URL 中 hash 值只是客户端的一种状态，也就是说当向服务器端发出请求时，hash 部分不会被发送；\nhash 值的改变，都会在浏览器的访问历史中增加一个记录。因此我们能通过浏览器的回退、前进按钮控制 hash 的切换；\n可以通过  a  标签，并设置  href  属性，当用户点击这个标签后，URL  的 hash 值会发生改变；或者使用  JavaScript 来对  loaction.hash  进行赋值，改变 URL 的 hash 值；\n我们可以使用 hashchange 事件来监听 hash 值的变化，从而对页面进行跳转（渲染）。")])])]),t._v(" "),r("li",[r("p",[t._v("（2）history 模式的实现原理")]),t._v(" "),r("blockquote",[r("p",[t._v("HTML5 提供了 History API 来实现 URL 的变化。其中做最主要的 API 有以下两个：history.pushState() 和 history.repalceState()。这两个 API 可以在不进行刷新的情况下，操作浏览器的历史纪录。唯一不同的是，前者是新增一个历史记录，后者是直接替换当前的历史记录，如下所示：\nwindow.history.pushState(null, null, path);\nwindow.history.replaceState(null, null, path);\n复制代码 history 路由模式的实现主要基于存在下面几个特性：")])]),t._v(" "),r("blockquote",[r("p",[t._v("pushState 和 repalceState 两个 API 来操作实现 URL 的变化 ；\n我们可以使用 popstate 事件来监听 url 的变化，从而对页面进行跳转（渲染）；\nhistory.pushState() 或 history.replaceState() 不会触发 popstate 事件，这时我们需要手动触发页面跳转（渲染）。")])])])]),t._v(" "),r("h3",{attrs:{id:"vue-router-的实现原理"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#vue-router-的实现原理"}},[t._v("#")]),t._v(" vue-router 的实现原理")]),t._v(" "),r("h3",{attrs:{id:"route-和-router-有什么区别"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#route-和-router-有什么区别"}},[t._v("#")]),t._v(" route 和 router 有什么区别？")]),t._v(" "),r("ul",[r("li",[r("p",[t._v("$route 是“路由信息对象”， 包括 path，params，hash，query，fullPath，matched，name 等路由信息参数。")]),t._v(" "),r("ul",[r("li",[t._v("$route.path\n"),r("blockquote",[r("p",[t._v('字符串，等于当前路由对象的路径，会被解析为绝对路径，如 "/home/news" 。')])])]),t._v(" "),r("li",[t._v("$route.params\n"),r("blockquote",[r("p",[t._v("对象，包含路由中的动态片段和全匹配片段的键值对")])])]),t._v(" "),r("li",[t._v("$route.query\n"),r("blockquote",[r("p",[t._v("对象，包含路由中查询参数的键值对。例如，对于 /home/news/detail/01?favorite=yes ，会得到$route.query.favorite == 'yes' 。")])])]),t._v(" "),r("li",[t._v("$route.router\n"),r("blockquote",[r("p",[t._v("路由规则所属的路由器（以及其所属的组件）。")])])]),t._v(" "),r("li",[t._v("$route.matched\n"),r("blockquote",[r("p",[t._v("数组，包含当前匹配的路径中所包含的所有片段所对应的配置参数对象。")])])]),t._v(" "),r("li",[t._v("$route.name\n"),r("blockquote",[r("p",[t._v("当前路径的名字，如果没有使用具名路径，则名字为空。")])])])])]),t._v(" "),r("li",[r("p",[t._v("$router 是“路由实例”对象包括了路由的跳转方法，钩子函数,是 VueRouter 的一个对象，通过 Vue.use(VueRouter)和 VueRouter 构造函数得到一个 router 的实例对象")])])]),t._v(" "),r("h3",{attrs:{id:"vue-router-钩子函数有哪些-都有哪些参数"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#vue-router-钩子函数有哪些-都有哪些参数"}},[t._v("#")]),t._v(" vue-router 钩子函数有哪些？都有哪些参数？")]),t._v(" "),r("ul",[r("li",[r("p",[t._v("钩子函数")]),t._v(" "),r("ul",[r("li",[t._v("(1) 全局守卫\n"),r("ul",[r("li",[t._v("全局前置守卫 beforeEach")])]),t._v(" "),r("div",{staticClass:"language-js line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-js"}},[r("code",[r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" router "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("VueRouter")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nrouter"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("beforeEach")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("to"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" from"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" next")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[t._v("1")]),r("br"),r("span",{staticClass:"line-number"},[t._v("2")]),r("br"),r("span",{staticClass:"line-number"},[t._v("3")]),r("br"),r("span",{staticClass:"line-number"},[t._v("4")]),r("br")])]),r("ul",[r("li",[t._v("全局解析守卫 beforeEach\n"),r("blockquote",[r("p",[t._v("在导航被确认之前，同时在所有组件内守卫和异步路由组件被解析之后，解析守卫就被调用")])])]),t._v(" "),r("li",[t._v("全局后置钩子 afterEach\n"),r("blockquote",[r("p",[t._v("不会接受 next 函数也不会改变导航本身\n"),r("code",[t._v("router.afterEach((to, from) => {})")])])])])])]),t._v(" "),r("li",[t._v("(2) 路由独享的守卫\n"),r("ul",[r("li",[t._v("beforeEnter")])])]),t._v(" "),r("li",[t._v("(3) 组件内的守卫\n"),r("ul",[r("li",[t._v("beforeRouteEnter")]),t._v(" "),r("li",[t._v("beforeRouteUpdate (2.2 新增)")]),t._v(" "),r("li",[t._v("beforeRouteLeave")])])])])]),t._v(" "),r("li",[r("p",[t._v("参数")]),t._v(" "),r("ul",[r("li",[r("p",[t._v("to: Route: 即将要进入的目标 路由对象")])]),t._v(" "),r("li",[r("p",[t._v("from: Route: 当前导航正要离开的路由")])]),t._v(" "),r("li",[r("p",[t._v("next: Function: 一定要调用该方法来 resolve 这个钩子。执行效果依赖 next 方法的调用参数。")]),t._v(" "),r("blockquote",[r("p",[t._v("next(): 进行管道中的下一个钩子。如果全部钩子执行完了，则导航的状态就是 confirmed (确认的)。\nnext(false): 中断当前的导航。如果浏览器的 URL 改变了 (可能是用户手动或者浏览器后退按钮)，那么 URL 地址会重置到 from 路由对应的地址。\nnext('/') 或者 next({ path: '/' }): 跳转到一个不同的地址。当前的导航被中断，然后进行一个新的导航。你可以向 next 传递任意位置对象，且允许设置诸如 replace:true、name: 'home' 之类的选项以及任何用在 router-link 的 to prop 或 router.push 中的选项。"),r("br"),t._v("\nnext(error): (2.4.0+) 如果传入 next 的参数是一个 Error 实例，则导航会被终止且该错误会被传递给 router.onError() 注册过的回调。")])])])])])]),t._v(" "),r("h3",{attrs:{id:"vue-router-怎么配置-404-页面"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#vue-router-怎么配置-404-页面"}},[t._v("#")]),t._v(" vue-router 怎么配置 404 页面？")]),t._v(" "),r("div",{staticClass:"language-js line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-js"}},[r("code",[r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  path"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v("'*'")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  name"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v("'error'")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  component"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Error\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[t._v("1")]),r("br"),r("span",{staticClass:"line-number"},[t._v("2")]),r("br"),r("span",{staticClass:"line-number"},[t._v("3")]),r("br"),r("span",{staticClass:"line-number"},[t._v("4")]),r("br"),r("span",{staticClass:"line-number"},[t._v("5")]),r("br")])])])}),[],!1,null,null,null);e.default=s.exports}}]);