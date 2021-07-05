(window.webpackJsonp=window.webpackJsonp||[]).push([[197],{626:function(t,s,a){"use strict";a.r(s);var n=a(19),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"js-事件相关概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#js-事件相关概念"}},[t._v("#")]),t._v(" js 事件相关概念")]),t._v(" "),a("h3",{attrs:{id:"事件机制组成"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#事件机制组成"}},[t._v("#")]),t._v(" 事件机制组成")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("1.事件源：即事件的发送者")])]),t._v(" "),a("li",[a("p",[t._v("2.事件：事件源发出的一种信息或状态")])]),t._v(" "),a("li",[a("p",[t._v("3.事件侦听者：对事件作出反应的对象")])])]),t._v(" "),a("h3",{attrs:{id:"事件流"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#事件流"}},[t._v("#")]),t._v(" 事件流")]),t._v(" "),a("p",[t._v("事件流描述的是从页面中接受事件的顺序")]),t._v(" "),a("p",[t._v("IE 的事件流是事件冒泡流(event bubbling)，而 Netscape(网景开发团队) 的事件流是事件捕获流(event capturing)。")]),t._v(" "),a("p",[t._v("事件流：分为捕获阶段、处于目标阶段、冒泡阶段三个阶段")]),t._v(" "),a("h3",{attrs:{id:"事件冒泡"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#事件冒泡"}},[t._v("#")]),t._v(" 事件冒泡")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("事件冒泡：是自下而上的去触发事件")])]),t._v(" "),a("li",[a("p",[t._v("设置冒泡：通过 addEventListener() 的第三个属性来设置 false,事件冒泡")])]),t._v(" "),a("li",[a("p",[t._v("阻止冒泡：e.stopPropagation")])]),t._v(" "),a("li",[a("p",[t._v("支持事件冒泡的事件：")])])]),t._v(" "),a("p",[t._v("click，input")]),t._v(" "),a("p",[t._v("keydown，keyup")]),t._v(" "),a("p",[t._v("mousedown，mousemove，mouseout，mouseover，mouseup")]),t._v(" "),a("p",[t._v("scroll，select")]),t._v(" "),a("p",[t._v("drag 相关事件 dragstart 、 drag 、 dragenter 、 dragexit 、 dragleave 、 dragover 、 drop 、 dragend 均冒泡")]),t._v(" "),a("ol",{attrs:{start:"5"}},[a("li",[t._v("不支持冒泡的事件：")])]),t._v(" "),a("p",[t._v("blur，focus")]),t._v(" "),a("p",[t._v("mouseenter，mouseleave")]),t._v(" "),a("p",[t._v("resize")]),t._v(" "),a("h3",{attrs:{id:"事件捕获"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#事件捕获"}},[t._v("#")]),t._v(" 事件捕获")]),t._v(" "),a("p",[t._v("事件捕获指的是从 document 到触发事件的那个节点，即自上而下的去触发事件")]),t._v(" "),a("p",[t._v("通过 addEventListener() 的第三个属性来设置 true,事件捕获")]),t._v(" "),a("h3",{attrs:{id:"事件委托"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#事件委托"}},[t._v("#")]),t._v(" 事件委托")]),t._v(" "),a("p",[t._v("事件委托就是利用 js 事件冒泡的特性，将内层元素的事件委托给外层处理")]),t._v(" "),a("p",[t._v("优点：")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("可以大量节省内存占用，减少事件注册")])]),t._v(" "),a("li",[a("p",[t._v("可以实现当新增子对象时无需再次对其绑定事件")])])]),t._v(" "),a("p",[t._v("最适合采用事件委托技术的事件包括 click、mousedown、mouseup、keydown、keyup 和 keypress")]),t._v(" "),a("h3",{attrs:{id:"js-异步执行的运行机制。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#js-异步执行的运行机制。"}},[t._v("#")]),t._v(" js 异步执行的运行机制。")]),t._v(" "),a("blockquote",[a("p",[t._v('所有任务都在主线程上执行，形成一个执行栈。\n主线程之外，还存在一个"任务队列"（task queue）。只要异步任务有了运行结果，就在"任务队列"之中放置一个事件。\n一旦"执行栈"中的所有同步任务执行完毕，系统就会读取"任务队列"。那些对应的异步任务，结束等待状态，进入执行栈并开始执行。\n主线程不断重复上面的第三步。')])]),t._v(" "),a("h3",{attrs:{id:"事件执行"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#事件执行"}},[t._v("#")]),t._v(" 事件执行")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("事件的执行顺序，是先执行宏任务，然后执行微任务")])]),t._v(" "),a("li",[a("p",[t._v("队列的特征是先进先出")])]),t._v(" "),a("li",[a("p",[t._v("js 是单线程的，任务都是排队执行，不会同步执行对个任务")])]),t._v(" "),a("li",[a("p",[t._v("js 分为同步（赋值，循环，分支语句）和异步（ajax，dom 事件，定时器）")])])]),t._v(" "),a("h3",{attrs:{id:"js-执行机制（事件循环）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#js-执行机制（事件循环）"}},[t._v("#")]),t._v(" js 执行机制（事件循环）")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("取且仅取一个宏任务来执行（第一个宏任务就是 script 任务）。执行过程中判断是同步还是异步任务，如果是同步任务就进入主线程执行栈中，如果是异步任务就进入异步处理模块，这些异步处理模块的任务当满足触发条件后，进入任务队列，进入任务队列后，按照宏任务和微任务进行划分，划分完毕后，执行下一步。")])]),t._v(" "),a("li",[a("p",[t._v("如果微任务队列不为空，则依次取出微任务来执行，直到微任务队列为空（即当前 loop 所有微任务执行完），执行下一步。")])]),t._v(" "),a("li",[a("p",[t._v("进入下一轮 loop 或更新 UI 渲染。")])])]),t._v(" "),a("h3",{attrs:{id:"js-任务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#js-任务"}},[t._v("#")]),t._v(" js 任务")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("宏任务(macro)task 主要包含："),a("br"),t._v("\nscript( 整体代码)、"),a("br"),t._v("\nsetTimeout、"),a("br"),t._v("\nsetInterval、"),a("br"),t._v("\nI/O、UI 交互事件、"),a("br"),t._v("\nsetImmediate(Node.js 环境或 IE10)")])]),t._v(" "),a("li",[a("p",[t._v("微任务 microtask 主要包含："),a("br"),t._v("\nPromise 的 then 或 catch,"),a("br"),t._v("\nObject.observer（已废弃）,"),a("br"),t._v("\nMutationObserver."),a("br"),t._v("\nprocess.nextTick(Node.js 环境)")])])]),t._v(" "),a("h3",{attrs:{id:"消息队列"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#消息队列"}},[t._v("#")]),t._v(" 消息队列")]),t._v(" "),a("p",[t._v("异步过程中，工作线程在异步操作完成后需要通知主线程，那么通知机制是怎么样的呢？就是利用消息队列和事件循环。")]),t._v(" "),a("p",[t._v("工作线程将消息放到消息队列，主线程通过事件循环过程去取消息。\n消息队列： 消息队列是一个先进先出的队列，里面放着各种各样的消息；\n事件循环： 事件循环是指主线程重复从消息队列中取消息，执行的过程。\n实际上，主线程只会做一件事情，就是从消息队列里面取消息、执行消息，再取消息、再执行。当消息队列为空时，就会等待直到消息队列变成非空。而且主线程只有在将当前的消息执行完成后，才会去取下一个消息。这种机制就叫做事件循环机制，取一个消息并执行的过程叫做一次循环。")]),t._v(" "),a("p",[t._v("事件循环用代码表示大概是这样的：")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" message "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" queue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("execute")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("message"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("p",[t._v("那么，消息队列中放的消息具体是什么东西？消息的具体结构当然跟具体的实现有关，但是为了简单起见，我们可以认为：")]),t._v(" "),a("p",[t._v("消息就是注册异步任务时添加的回调函数。\n再次以异步 AJAX 为例，假设存在如下的代码：")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("\\$"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ajax")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://segmentfault.com"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("resp")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"我是响应："')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" resp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[t._v("主线程在发起 AJAX 请求后，会继续执行其他代码。AJAX 线程负责请求 segmentfault.com，拿到响应后，它会把响应封装成一个 JavaScript 对象，然后构造一条消息：")]),t._v(" "),a("p",[t._v("// 消息队列中的消息就长这个样子")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("message")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("callbackFn")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("response"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[t._v("// 其中的 callbackFn 就是前面代码中得到成功响应时的回调函数。\n主线程在执行完当前循环中的所有代码后，就会到消息队列取出这条消息(也就是 message 函数)，并执行它。到此为止，就完成了工作线程对主线程的通知，回调函数也就得到了执行。如果一开始主线程就没有提供回调函数，AJAX 线程在收到 HTTP 响应后，也就没必要通知主线程，从而也没必要往消息队列放消息。")]),t._v(" "),a("h2",{attrs:{id:"js-事件的操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#js-事件的操作"}},[t._v("#")]),t._v(" JS 事件的操作")]),t._v(" "),a("h3",{attrs:{id:"添加监听事件和删除事件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#添加监听事件和删除事件"}},[t._v("#")]),t._v(" 添加监听事件和删除事件")]),t._v(" "),a("p",[t._v("DOM 2 级事件定义了两方法：用于处理添加事件和删除事件的操作：")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("添加事件 addEventListener()")])]),t._v(" "),a("li",[a("p",[t._v("删除事件 removeEventListener()")])])]),t._v(" "),a("p",[t._v("所有 DOM 节点中都包含这两个方法，并且他们都包含 3 个参数：")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("要处理的事件方式（例如：click，mouseover,dbclick.....）")])]),t._v(" "),a("li",[a("p",[t._v("事件处理的函数，可以为匿名函数，也可以为命名函数（但如果需要删除事件，必须是命名函数）")])]),t._v(" "),a("li",[a("p",[t._v("一个布尔值，代表是处于事件冒泡阶段处理还是事件捕获阶段（true：表示在捕获阶段调用事件处理程序；false:表示在冒泡阶段调用事件处理程序）")])])]),t._v(" "),a("h3",{attrs:{id:"js-阻止事件冒泡"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#js-阻止事件冒泡"}},[t._v("#")]),t._v(" JS 阻止事件冒泡")]),t._v(" "),a("p",[t._v("w3c 的方法是"),a("code",[t._v("e.stopPropagation()")]),t._v("，IE 则是使用"),a("code",[t._v("e.cancelBubble = true")])]),t._v(" "),a("p",[t._v("阻止冒泡代码：")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("stopBubble")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//如果提供了事件对象，则这是一个非IE浏览器")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("stopPropagation"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//因此它支持W3C的stopPropagation()方法")]),t._v("\n    e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("stopPropagation")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//否则，我们需要使用IE的方式来取消事件冒泡")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("event "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("event"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cancelBubble "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br")])]),a("h3",{attrs:{id:"取消默认事件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#取消默认事件"}},[t._v("#")]),t._v(" 取消默认事件")]),t._v(" "),a("p",[t._v("w3c 的方法是"),a("code",[t._v("e.preventDefault()")]),t._v("，IE 则是使用"),a("code",[t._v("e.returnValue = false;")])]),t._v(" "),a("p",[t._v("javascript 的"),a("code",[t._v("return false")]),t._v("只会阻止默认行为，而是用 jQuery 的话则既阻止默认行为又防止对象冒泡。")]),t._v(" "),a("p",[t._v("例子：阻止 a 标签的跳转")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"testA"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\na"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onclick")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("preventDefault"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("preventDefault")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("event"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("returnValue "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br")])]),a("h3",{attrs:{id:"监听滚动条事件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#监听滚动条事件"}},[t._v("#")]),t._v(" 监听滚动条事件")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"scroll"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" winScroll"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("winScroll")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" scrollTop "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("documentElement"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("scrollTop"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" clientHeight "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("documentElement"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("clientHeight"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" scrollHeight "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("documentElement"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("scrollHeight"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("scrollHeight "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),t._v(" clientHeight "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" scrollTop"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 到底部了")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br")])]),a("h3",{attrs:{id:"mouseover-和-mouseenter-区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mouseover-和-mouseenter-区别"}},[t._v("#")]),t._v(" mouseover 和 mouseenter 区别")]),t._v(" "),a("h2",{attrs:{id:"js-单线程问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#js-单线程问题"}},[t._v("#")]),t._v(" js 单线程问题")]),t._v(" "),a("h3",{attrs:{id:"_1、什么是单线程？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、什么是单线程？"}},[t._v("#")]),t._v(" 1、什么是单线程？")]),t._v(" "),a("p",[t._v("单线程在程序执行时，所走的程序路径按照连续顺序排下来，前面的必须处理好，后面的才会执行。简单来说，即同一时间只能做一件事件。")]),t._v(" "),a("h3",{attrs:{id:"_2、js-为什么是单线程？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、js-为什么是单线程？"}},[t._v("#")]),t._v(" 2、Js 为什么是单线程？")]),t._v(" "),a("p",[t._v("Js 是一种运行在网页的简单的脚本语言，由于设计的初衷是作为浏览器脚本语言，用于与用户互动，以及操作 DOM。这决定它是单线程的。")]),t._v(" "),a("h3",{attrs:{id:"_3、单线程带来的问题？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3、单线程带来的问题？"}},[t._v("#")]),t._v(" 3、单线程带来的问题？")]),t._v(" "),a("p",[t._v("单线程就意味着，所有任务都需要排队，前一个任务结束，才会执行后一个任务。如果前一个任务耗时很长，后一个任务就需要一直等着。这就会导致 IO 操作（耗时但 cpu 闲置）时造成性能浪费的问题。")]),t._v(" "),a("h3",{attrs:{id:"_4、如何解决单线程的性能问题？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4、如何解决单线程的性能问题？"}},[t._v("#")]),t._v(" 4、如何解决单线程的性能问题？")]),t._v(" "),a("p",[t._v("采用异步可以解决。主线程完全可以不管 IO 操作，暂时挂起处于等待中的任务，先运行排在后面的任务。等到 IO 操作返回了结果，再回过头，把挂起的任务继续执行下去。于是，所有任务可以分成两种，一种是同步任务，另一种是异步任务。")]),t._v(" "),a("h2",{attrs:{id:"js-中自定义事件的使用与触发"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#js-中自定义事件的使用与触发"}},[t._v("#")]),t._v(" JS 中自定义事件的使用与触发")]),t._v(" "),a("h3",{attrs:{id:"_1-事件的创建"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-事件的创建"}},[t._v("#")]),t._v(" 1. 事件的创建")]),t._v(" "),a("p",[t._v("JS 中，最简单的创建事件方法，是使用 Event 构造器：\n"),a("code",[t._v("var myEvent = new Event('event_name');")]),t._v("\n但是为了能够传递数据，就需要使用 CustomEvent 构造器：")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" myEvent "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CustomEvent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"event_name"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  detail"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 将需要传递的数据写在 detail 中，以便在 EventListener 中获取")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 数据将会在 event.detail 中得到")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])]),a("h3",{attrs:{id:"_2-事件的监听"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-事件的监听"}},[t._v("#")]),t._v(" 2. 事件的监听")]),t._v(" "),a("p",[t._v("JS 的 EventListener 是根据事件的名称来进行监听的，比如我们在上文中已经创建了一个名称为‘event_name’ 的事件，那么当某个元素需要监听它的时候，就需要创建相应的监听器：")]),t._v(" "),a("p",[t._v("复制代码\n//假设 listener 注册在 window 对象上")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"event_name"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("event")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果是 CustomEvent，传入的数据在 event.detail 中")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"得到数据为："')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" event"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("detail"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...后续相关操作")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])]),a("p",[t._v("至此，window 对象上就有了对‘event_name’ 这个事件的监听器，当 window 上触发这个事件的时候，相关的 callback 就会执行。")]),t._v(" "),a("h3",{attrs:{id:"_3-事件的触发"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-事件的触发"}},[t._v("#")]),t._v(" 3. 事件的触发")]),t._v(" "),a("p",[t._v("对于一些内置（built-in）的事件，通常都是有一些操作去做触发，比如鼠标单击对应 MouseEvent 的 click 事件，利用鼠标（ctrl+滚轮上下）去放大缩小页面对应 WheelEvent 的 resize 事件。\n然而，自定义的事件由于不是 JS 内置的事件，所以我们需要在 JS 代码中去显式地触发它。方法是使用 dispatchEvent 去触发（IE8 低版本兼容，使用 fireEvent）：\n// 首先需要提前定义好事件，并且注册相关的 EventListener")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" myEvent "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CustomEvent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"event_name"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  detail"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" title"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"This is title!"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nwindow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"event_name"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("event")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"得到标题为："')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" event"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("detail"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("title"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 随后在对应的元素上触发该事件")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dispatchEvent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("dispatchEvent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("myEvent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fireEvent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("myEvent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br")])]),a("p",[t._v('// 根据 listener 中的 callback 函数定义，应当会在 console 中输出 "得到标题为： This is title!"\n需要特别注意的是，当一个事件触发的时候，如果相应的 element 及其上级元素没有对应的 EventListener，就不会有任何回调操作。\n对于子元素的监听，可以对父元素添加事件托管，让事件在事件冒泡阶段被监听器捕获并执行。这时候，使用 event.target 就可以获取到具体触发事件的元素。')])])}),[],!1,null,null,null);s.default=e.exports}}]);