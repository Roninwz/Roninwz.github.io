(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{520:function(v,_,r){v.exports=r.p+"assets/img/monitor_module.f4f881ea.png"},772:function(v,_,r){"use strict";r.r(_);var t=r(14),e=Object(t.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h2",{attrs:{id:"前端监控"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#前端监控"}},[v._v("#")]),v._v(" 前端监控")]),v._v(" "),t("p",[v._v("前端监控目的：获取用户行为以及跟踪产品在用户端的使用情况，并以监控数据为基础，指明产品优化的方向。")]),v._v(" "),t("h3",{attrs:{id:"监控指标"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#监控指标"}},[v._v("#")]),v._v(" 监控指标")]),v._v(" "),t("p",[t("code",[v._v("const timing = window.performance.timing")])]),v._v(" "),t("p",[v._v("前端性能指标主要有一下几种：")]),v._v(" "),t("p",[v._v("重定向耗时："),t("code",[v._v("timing.redirectEnd - timing.redirectStart")])]),v._v(" "),t("p",[v._v("DNS 查询耗时: "),t("code",[v._v("timing.domainLookupEnd - timing.domainLookupStart")])]),v._v(" "),t("p",[v._v("TCP 链接耗时 ："),t("code",[v._v("timing.connectEnd - timing.connectStart")])]),v._v(" "),t("p",[v._v("HTTP 请求耗时 ："),t("code",[v._v("timing.responseEnd - timing.responseStart")])]),v._v(" "),t("p",[v._v("解析 dom 树耗时 ： "),t("code",[v._v("timing.domComplete - timing.domInteractive")])]),v._v(" "),t("p",[v._v("首次渲染时间(First Paint Time 白屏时间) ："),t("code",[v._v("timing.responseEnd - timing.fetchStart")]),v._v(" 从请求开始到浏览器开始解析第一批 HTML 文档字节的时间差。")]),v._v(" "),t("p",[v._v("DOM ready 耗时 ："),t("code",[v._v("timing.domContentLoadedEventEnd - timing.navigationStart")])]),v._v(" "),t("p",[v._v("onload 时间："),t("code",[v._v("timing.loadEventEnd - timing.navigationStart")]),v._v("，也即是 onload 回调函数执行的时间。")]),v._v(" "),t("h2",{attrs:{id:"前端监控种类"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#前端监控种类"}},[v._v("#")]),v._v(" 前端监控种类")]),v._v(" "),t("ol",[t("li",[t("p",[v._v("行为监控（数据监控）")])]),v._v(" "),t("li",[t("p",[v._v("异常监控")])]),v._v(" "),t("li",[t("p",[v._v("性能监控")])])]),v._v(" "),t("h3",{attrs:{id:"行为监控-数据监控"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#行为监控-数据监控"}},[v._v("#")]),v._v(" 行为监控（数据监控）")]),v._v(" "),t("p",[v._v("行为监控（数据监控）：监听用户的行为")]),v._v(" "),t("p",[v._v("常见的监控项有：")]),v._v(" "),t("ol",[t("li",[t("p",[v._v("PV/UV:PV(page view)：即页面浏览量或点击量；UV：指访问某个站点或点击某条新闻的不同 IP 地址的人数")])]),v._v(" "),t("li",[t("p",[v._v("用户在每一个页面的停留时间")])]),v._v(" "),t("li",[t("p",[v._v("用户通过什么入口来访问该网页")])]),v._v(" "),t("li",[t("p",[v._v("用户在相应的页面中触发的行为")])])]),v._v(" "),t("p",[v._v("统计这些数据是有意义的，比如我们知道了用户来源的渠道，可以促进产品的推广，知道用户在每一个页面停留的时间，可以针对停留较长的页面，增加广告推送等等。")]),v._v(" "),t("h3",{attrs:{id:"异常监控"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#异常监控"}},[v._v("#")]),v._v(" 异常监控")]),v._v(" "),t("p",[v._v("由于产品的前端代码在执行过程中也会发生异常，因此需要引入异常监控。及时的上报异常情况，可以避免线上故障的发上。虽然大部分异常可以通过 try catch 的方式捕获，但是比如内存泄漏以及其他偶现的异常难以捕获。")]),v._v(" "),t("p",[v._v("常见的需要监控的异常包括：")]),v._v(" "),t("ol",[t("li",[t("p",[v._v("Javascript 的异常监控")])]),v._v(" "),t("li",[t("p",[v._v("样式丢失的异常监控")])])]),v._v(" "),t("p",[v._v("Web 规范中相关前端异常：")]),v._v(" "),t("p",[v._v("（1）ECMAScript exceptions")]),v._v(" "),t("ol",[t("li",[v._v("Error 通用错误类型")]),v._v(" "),t("li",[v._v("EvalError Eval 函数执行异常。")]),v._v(" "),t("li",[v._v("RangeError 范围错误")]),v._v(" "),t("li",[v._v("ReferenceError 引用错误")]),v._v(" "),t("li",[v._v("TypeError 类型错误")]),v._v(" "),t("li",[v._v("URIError URI 错误")]),v._v(" "),t("li",[v._v("SyntaxError 语法错误 (这个错误 WebIDL 中故意省略，保留给 ES 解析器使用)")]),v._v(" "),t("li",[v._v("Error 通用错误 （这个错误 WebIDL 中故意省略，保留给开发者使用使用）")])]),v._v(" "),t("p",[v._v("（2）DOMException 最新的 DOM 规范定义的错误类型集，兼容旧浏览的 DOMError 接口, 完善和规范化 DOM 错误类型。")]),v._v(" "),t("p",[v._v("除了 JavaScript 本身运行时会发生的错误。页面中还会有其他的异常，比如错误地操作了 DOM。")]),v._v(" "),t("ol",[t("li",[v._v("IndexSizeError 索引不在允许的范围内")]),v._v(" "),t("li",[v._v("HierarchyRequestError 节点树层次结构是不正确的。")]),v._v(" "),t("li",[v._v("WrongDocumentError 对象是错误的")]),v._v(" "),t("li",[v._v("InvalidCharacterError 字符串包含无效字符。")]),v._v(" "),t("li",[v._v("NoModificationAllowedError 对象不能被修改。")]),v._v(" "),t("li",[v._v("NotFoundError 对象不能在这里被找到。")]),v._v(" "),t("li",[v._v("NotSupportedError 不支持的操作")]),v._v(" "),t("li",[v._v("InvalidStateError 对象是一个无效的状态。")]),v._v(" "),t("li",[v._v("SyntaxError 字符串不匹配预期的模式")]),v._v(" "),t("li",[v._v("InvalidModificationError 对象不能以这种方式被修改")]),v._v(" "),t("li",[v._v("NamespaceError 操作在 XML 命名空间内是不被允许的")]),v._v(" "),t("li",[v._v("InvalidAccessError 对象不支持这种操作或参数。")]),v._v(" "),t("li",[v._v("TypeMismatchError 对象的类型不匹配预期的类型。")]),v._v(" "),t("li",[v._v("SecurityError 此操作是不安全的。")]),v._v(" "),t("li",[v._v("NetworkError 发生网络错误")]),v._v(" "),t("li",[v._v("AbortError 操作被中止")]),v._v(" "),t("li",[v._v("URLMismatchError 给定的 URL 不匹配另一个 URL。")]),v._v(" "),t("li",[v._v("QuotaExceededError 已经超过给定配额。")]),v._v(" "),t("li",[v._v("TimeoutError 操作超时。")]),v._v(" "),t("li",[v._v("InvalidNodeTypeError 这个操作的 节点或节点祖先 是不正确的")]),v._v(" "),t("li",[v._v("DataCloneError 对象不能克隆。")])]),v._v(" "),t("p",[v._v("DOMException 有以下三个属性：")]),v._v(" "),t("p",[v._v("(1) DOMException.code：错误编号。")]),v._v(" "),t("p",[v._v("(2) DOMException.message：错误描述。")]),v._v(" "),t("p",[v._v("(3) DOMException.name：错误名称。")]),v._v(" "),t("hr"),v._v(" "),t("p",[v._v("前端错误异常按照捕获方式分类：")]),v._v(" "),t("ol",[t("li",[v._v("语法错误")]),v._v(" "),t("li",[v._v("运行时异常")]),v._v(" "),t("li",[v._v("资源加载异常（img、script、link、audio、video、iframe、外链资源的 DOM 元素）")]),v._v(" "),t("li",[v._v("异步请求异常（XMLHttpRequest、fetch）")]),v._v(" "),t("li",[v._v("Promise 异常")])]),v._v(" "),t("p",[v._v("前端错误异常的捕获方式：")]),v._v(" "),t("ol",[t("li",[t("p",[v._v("try-catch (ES 提供基本的错误捕获语法)，只能捕获同步代码的异常")])]),v._v(" "),t("li",[t("p",[v._v("window.onerror = cb (DOM0)")])])]),v._v(" "),t("p",[v._v("当 JavaScript 运行时错误（包括语法错误）发生时，window 会触发一个 ErrorEvent 接口的事件，并执行 window.onerror();")]),v._v(" "),t("ol",{attrs:{start:"3"}},[t("li",[v._v("window.addEventListener('error', cb, true) (DOM2)")])]),v._v(" "),t("p",[v._v("window.onerror 和 window.addEventListener('error') 的区别：")]),v._v(" "),t("p",[v._v("（1）事件监听器和事件处理器的区别。监听器只能声明一次，后续的声明会覆盖之前的声明。而事件处理器则可以绑定多个回调函数。")]),v._v(" "),t("p",[v._v("（2）资源 ("),t("code",[v._v("<img>")]),v._v(" 或 "),t("code",[v._v("<script>")]),v._v(") 加载失败时，加载资源的元素会触发一个 Event 接口的 error 事件，并执行该元素上的 onerror() 处理函数。但这些 error 事件不会向上冒泡到 window。不过，这些 error 事件能被 window.addEventListener('error') 捕获。也就是说，面对资源加载失败的错误，只能用 window.addEventListerner('error')，window.onerror 无效。")]),v._v(" "),t("ol",{attrs:{start:"4"}},[t("li",[v._v('window.addEventListener("unhandledrejection", cb) (DOM4)')])]),v._v(" "),t("p",[v._v("捕获未处理的 Promise 错误，在使用 Promise 的时候，如果没有声明 catch 代码块，Promise 的异常会被抛出。我们可以通过监听 unhandledrejection 事件或者 window.onunhandledrejection 捕获到该异常。")]),v._v(" "),t("ol",{attrs:{start:"5"}},[t("li",[t("p",[v._v("Promise.then().catch(cb)")])]),v._v(" "),t("li",[t("p",[v._v("封装 XMLHttpRequest&fetch | 覆写请求接口对象")])])]),v._v(" "),t("p",[v._v("日志上报的方式：")]),v._v(" "),t("ol",[t("li",[t("p",[v._v("异步请求上报, 后端提供接口，或者直接发到日志服务器")])]),v._v(" "),t("li",[t("p",[v._v("img 请求上报, url 参数带上错误信息")])])]),v._v(" "),t("p",[v._v("根据异常代码的后果的程度分类：")]),v._v(" "),t("ol",[t("li",[t("p",[v._v("出错")])]),v._v(" "),t("li",[t("p",[v._v("呆滞")])]),v._v(" "),t("li",[t("p",[v._v("损坏")])]),v._v(" "),t("li",[t("p",[v._v("假死")])]),v._v(" "),t("li",[t("p",[v._v("崩溃")])])]),v._v(" "),t("hr"),v._v(" "),t("p",[v._v("参考："),t("a",{attrs:{href:"https://segmentfault.com/a/1190000016959011",target:"_blank",rel:"noopener noreferrer"}},[v._v("前端异常监控-看这篇就够了"),t("OutboundLink")],1),v._v(" "),t("a",{attrs:{href:"https://tding.top/archives/ff61036.html",target:"_blank",rel:"noopener noreferrer"}},[v._v("前端异常监控"),t("OutboundLink")],1)]),v._v(" "),t("h3",{attrs:{id:"性能监控"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#性能监控"}},[v._v("#")]),v._v(" 性能监控")]),v._v(" "),t("p",[v._v("性能监控：监听前端的性能")]),v._v(" "),t("p",[v._v("常见的性能监控项包括：")]),v._v(" "),t("ol",[t("li",[t("p",[v._v("不同用户，不同机型和不同系统下的首屏加载时间")])]),v._v(" "),t("li",[t("p",[v._v("白屏时间")])]),v._v(" "),t("li",[t("p",[v._v("http 等请求的响应时间")])]),v._v(" "),t("li",[t("p",[v._v("静态资源整体下载时间")])]),v._v(" "),t("li",[t("p",[v._v("页面渲染时间")])]),v._v(" "),t("li",[t("p",[v._v("页面交互动画完成时间")])])]),v._v(" "),t("p",[v._v("这些性能监控的结果，可以展示前端性能的好坏，根据性能监测的结果可以进一步的去优化前端性能，比如兼容低版本浏览器的动画效果，加快首屏加载等等。")]),v._v(" "),t("p",[v._v("参考地址："),t("a",{attrs:{href:"https://www.cnblogs.com/haishen/p/12018095.html",target:"_blank",rel:"noopener noreferrer"}},[v._v("https://www.cnblogs.com/haishen/p/12018095.html"),t("OutboundLink")],1)]),v._v(" "),t("hr"),v._v(" "),t("h2",{attrs:{id:"前端监控流程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#前端监控流程"}},[v._v("#")]),v._v(" 前端监控流程")]),v._v(" "),t("p",[t("img",{attrs:{src:r(520),alt:"image"}})]),v._v(" "),t("p",[v._v("前端监控的流程：采集 -> 上传 -> 分析 -> 报警")]),v._v(" "),t("h3",{attrs:{id:"采集"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#采集"}},[v._v("#")]),v._v(" 采集")]),v._v(" "),t("p",[v._v("前端监控的第一个步骤就是数据采集，采集的信息包含环境信息、性能信息、异常信息、业务信息。")]),v._v(" "),t("p",[v._v("采集方式有：进入、离开、点击、滚屏、代码植入")]),v._v(" "),t("h3",{attrs:{id:"上传"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#上传"}},[v._v("#")]),v._v(" 上传")]),v._v(" "),t("p",[v._v("后端接收前端上报的异常日志，经过一定处理，按照一定的存储方案存储。")]),v._v(" "),t("h3",{attrs:{id:"分析"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#分析"}},[v._v("#")]),v._v(" 分析")]),v._v(" "),t("p",[v._v("分为机器自动分析和人工分析。")]),v._v(" "),t("ol",[t("li",[t("p",[v._v("机器自动分析，通过预设的条件和算法，对存储的日志信息进行统计和筛选，发现问题，触发报警。")])]),v._v(" "),t("li",[t("p",[v._v("人工分析，通过提供一个可视化的数据面板，让系统用户可以看到具体的日志数据，根据信息，发现异常问题根源。")])])]),v._v(" "),t("h3",{attrs:{id:"报警"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#报警"}},[v._v("#")]),v._v(" 报警")]),v._v(" "),t("p",[v._v("分为告警和预警。")]),v._v(" "),t("ol",[t("li",[t("p",[v._v("告警按照一定的级别自动报警，通过设定的渠道，按照一定的触发规则进行。")])]),v._v(" "),t("li",[t("p",[v._v("预警则在异常发生前，提前预判，给出警告。")])])]),v._v(" "),t("h2",{attrs:{id:"前端埋点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#前端埋点"}},[v._v("#")]),v._v(" 前端埋点")]),v._v(" "),t("p",[v._v("前端埋点种类：")]),v._v(" "),t("ol",[t("li",[t("p",[v._v("代码埋点（手动埋点）")])]),v._v(" "),t("li",[t("p",[v._v("可视化埋点")])]),v._v(" "),t("li",[t("p",[v._v("无埋点")])])]),v._v(" "),t("h3",{attrs:{id:"_1-代码埋点-手动埋点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-代码埋点-手动埋点"}},[v._v("#")]),v._v(" 1.代码埋点（手动埋点）")]),v._v(" "),t("p",[v._v("手动埋点，也叫代码埋点，即纯手动写代码，调用埋点 SDK 的函数，在需要埋点的业务逻辑功能位置调用接口，上报埋点数据，像友盟、百度统计等第三方数据统计服务商大都采用这种方案。")]),v._v(" "),t("p",[v._v("手动埋点让使用者可以方便地设置自定义属性、自定义事件；所以当你需要深入下钻，并精细化自定义分析时，比较适合使用手动埋点。")]),v._v(" "),t("p",[v._v("手动埋点的缺陷就是，项目工程量大，需要埋点的位置太多，而且需要产品开发运营之间相互反复沟通，容易出现手动差错，如果错误，重新埋点的成本也很高。这会导致整个数据收集周期变的很长，收集成本变的很高，而且效率很低。因为手动埋点需要开发人员完成，所以每次有埋点更新，或者漏埋点，都需要重新走上线发布流程，更新成本也高，对线上系统稳定性也有一定危害。")]),v._v(" "),t("h3",{attrs:{id:"_2-可视化埋点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-可视化埋点"}},[v._v("#")]),v._v(" 2.可视化埋点")]),v._v(" "),t("p",[v._v("通过可视化交互的手段，代替上述的代码埋点。将业务代码和埋点代码分离，提供一个可视化交互的页面，输入为业务代码，通过这个可视化系统，可以在业务代码中自定义的增加埋点事件等等，最后输出的代码耦合了业务代码和埋点代码。缺点就是可以埋点的控件有限，不能手动定制。")]),v._v(" "),t("p",[v._v("可视化埋点听起来比较高大上，实际上跟代码埋点还是区别不大。也就是用一个系统来实现手动插入代码埋点的过程。比如国外比较早做可视化的是 Mixpanel，国内较早支持可视化埋点的有 TalkingData、诸葛 IO，2017 年腾讯的 MTA 也宣布支持可视化埋点；相比于手动埋点更新困难，埋点成本高的问题，可视化埋点优化了移动运营中数据采集的流程，能够支持产品运营随时调整埋点，无需再走发版流程，直接把配置结果推入到前端，数据采集流程更简化，也更方便产品的迭代。")]),v._v(" "),t("p",[v._v("可视化埋点中多数基于 Xpath 的方案，XPath 是一门在 XML 文档中查找信息的语言，XPath 可用来在 XML 文档中对元素和属性进行遍历。")]),v._v(" "),t("h3",{attrs:{id:"_3-无埋点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-无埋点"}},[v._v("#")]),v._v(" 3.无埋点")]),v._v(" "),t("p",[v._v("无埋点则是前端自动采集全部事件，上报埋点数据，由后端来过滤和计算出有用的数据。优点是前端只要一次加载埋点脚本，缺点是流量和采集的数据过于庞大，服务器性能压力山大。")]),v._v(" "),t("p",[v._v("采用无埋点技术的有主流的 GrowingIO、神策。")]),v._v(" "),t("h2",{attrs:{id:"前端监控其它"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#前端监控其它"}},[v._v("#")]),v._v(" 前端监控其它")]),v._v(" "),t("h3",{attrs:{id:"前端监控用-gif-打点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#前端监控用-gif-打点"}},[v._v("#")]),v._v(" 前端监控用 GIF 打点")]),v._v(" "),t("p",[v._v("前端监控使用 GIF 进行上报主要是因为：")]),v._v(" "),t("ol",[t("li",[t("p",[v._v("没有跨域问题（img 天然支持跨域）；")])]),v._v(" "),t("li",[t("p",[v._v("不会阻塞页面加载，影响用户体验；只要 new Image 对象就好了；（排除 JS/CSS 文件资源方式上报）")])]),v._v(" "),t("li",[t("p",[v._v("在所有图片中体积最小，相较 BMP/PNG，可以节约 41%/35%的网络资源。（最小的 BMP 文件需要 74 个字节，PNG 需要 67 个字节，而合法的 GIF，只需要 43 个字节）")])])]),v._v(" "),t("p",[t("strong",[t("em",[v._v("为什么不能直接用 GET/POST/HEAD 请求接口进行上报？")])])]),v._v(" "),t("blockquote",[t("p",[v._v("一般而言，打点域名都不是当前域名，所以所有的接口请求都会构成跨域。而跨域请求很容易出现由于配置不当被浏览器拦截并报错，这是不能接受的。所以，直接排除。")])]),v._v(" "),t("p",[t("strong",[t("em",[v._v("为什么不能用请求其他的文件资源（js/css/ttf）的方式进行上报？")])])]),v._v(" "),t("p",[v._v("通常，创建资源节点后只有将对象注入到浏览器 DOM 树后，浏览器才会实际发送资源请求。反复操作 DOM 不仅会引发性能问题，而且载入 js/css 资源还会阻塞页面渲染，影响用户体验。")]),v._v(" "),t("p",[v._v("但是图片请求例外。构造图片打点不仅不用插入 DOM，只要在 js 中 new 出 Image 对象就能发起请求，而且还没有阻塞问题，在没有 js 的浏览器环境中也能通过 img 标签正常打点，这是其他类型的资源请求所做不到的。")]),v._v(" "),t("p",[v._v("所以，在所有通过请求文件资源进行打点的方案中，使用图片是最好的解决方案。")]),v._v(" "),t("blockquote",[t("p",[v._v("参考："),t("a",{attrs:{href:"https://mp.weixin.qq.com/s/v6R2w26qZkEilXY0mPUBCw?utm_source=tuicool&utm_medium=referral",target:"_blank",rel:"noopener noreferrer"}},[v._v("https://mp.weixin.qq.com/s/v6R2w26qZkEilXY0mPUBCw?utm_source=tuicool&utm_medium=referral"),t("OutboundLink")],1)])])])}),[],!1,null,null,null);_.default=e.exports}}]);