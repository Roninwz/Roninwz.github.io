(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{449:function(t,_,v){t.exports=v.p+"assets/img/monitor_module.f4f881ea.png"},664:function(t,_,v){"use strict";v.r(_);var a=v(24),r=Object(a.a)({},(function(){var t=this,_=t.$createElement,a=t._self._c||_;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"前端监控"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前端监控"}},[t._v("#")]),t._v(" 前端监控")]),t._v(" "),a("p",[t._v("前端监控目的：获取用户行为以及跟踪产品在用户端的使用情况，并以监控数据为基础，指明产品优化的方向。")]),t._v(" "),a("h3",{attrs:{id:"监控指标"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#监控指标"}},[t._v("#")]),t._v(" 监控指标")]),t._v(" "),a("p",[a("code",[t._v("const timing = window.performance.timing")])]),t._v(" "),a("p",[t._v("前端性能指标主要有一下几种：")]),t._v(" "),a("p",[t._v("重定向耗时："),a("code",[t._v("timing.redirectEnd - timing.redirectStart")])]),t._v(" "),a("p",[t._v("DNS 查询耗时: "),a("code",[t._v("timing.domainLookupEnd - timing.domainLookupStart")])]),t._v(" "),a("p",[t._v("TCP 链接耗时 ："),a("code",[t._v("timing.connectEnd - timing.connectStart")])]),t._v(" "),a("p",[t._v("HTTP 请求耗时 ："),a("code",[t._v("timing.responseEnd - timing.responseStart")])]),t._v(" "),a("p",[t._v("解析 dom 树耗时 ： "),a("code",[t._v("timing.domComplete - timing.domInteractive")])]),t._v(" "),a("p",[t._v("首次渲染时间(First Paint Time 白屏时间) ："),a("code",[t._v("timing.responseEnd - timing.fetchStart")]),t._v(" 从请求开始到浏览器开始解析第一批 HTML 文档字节的时间差。")]),t._v(" "),a("p",[t._v("DOM ready 耗时 ："),a("code",[t._v("timing.domContentLoadedEventEnd - timing.navigationStart")])]),t._v(" "),a("p",[t._v("onload 时间："),a("code",[t._v("timing.loadEventEnd - timing.navigationStart")]),t._v("，也即是 onload 回调函数执行的时间。")]),t._v(" "),a("h2",{attrs:{id:"前端监控种类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前端监控种类"}},[t._v("#")]),t._v(" 前端监控种类")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("行为监控（数据监控）")])]),t._v(" "),a("li",[a("p",[t._v("异常监控")])]),t._v(" "),a("li",[a("p",[t._v("性能监控")])])]),t._v(" "),a("h3",{attrs:{id:"行为监控-数据监控"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#行为监控-数据监控"}},[t._v("#")]),t._v(" 行为监控（数据监控）")]),t._v(" "),a("p",[t._v("行为监控（数据监控）：监听用户的行为")]),t._v(" "),a("p",[t._v("常见的监控项有：")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("PV/UV:PV(page view)：即页面浏览量或点击量；UV：指访问某个站点或点击某条新闻的不同 IP 地址的人数")])]),t._v(" "),a("li",[a("p",[t._v("用户在每一个页面的停留时间")])]),t._v(" "),a("li",[a("p",[t._v("用户通过什么入口来访问该网页")])]),t._v(" "),a("li",[a("p",[t._v("用户在相应的页面中触发的行为")])])]),t._v(" "),a("p",[t._v("统计这些数据是有意义的，比如我们知道了用户来源的渠道，可以促进产品的推广，知道用户在每一个页面停留的时间，可以针对停留较长的页面，增加广告推送等等。")]),t._v(" "),a("h3",{attrs:{id:"异常监控"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#异常监控"}},[t._v("#")]),t._v(" 异常监控")]),t._v(" "),a("p",[t._v("由于产品的前端代码在执行过程中也会发生异常，因此需要引入异常监控。及时的上报异常情况，可以避免线上故障的发上。虽然大部分异常可以通过 try catch 的方式捕获，但是比如内存泄漏以及其他偶现的异常难以捕获。")]),t._v(" "),a("p",[t._v("常见的需要监控的异常包括：")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("Javascript 的异常监控")])]),t._v(" "),a("li",[a("p",[t._v("样式丢失的异常监控")])])]),t._v(" "),a("h3",{attrs:{id:"性能监控"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#性能监控"}},[t._v("#")]),t._v(" 性能监控")]),t._v(" "),a("p",[t._v("性能监控：监听前端的性能")]),t._v(" "),a("p",[t._v("常见的性能监控项包括：")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("不同用户，不同机型和不同系统下的首屏加载时间")])]),t._v(" "),a("li",[a("p",[t._v("白屏时间")])]),t._v(" "),a("li",[a("p",[t._v("http 等请求的响应时间")])]),t._v(" "),a("li",[a("p",[t._v("静态资源整体下载时间")])]),t._v(" "),a("li",[a("p",[t._v("页面渲染时间")])]),t._v(" "),a("li",[a("p",[t._v("页面交互动画完成时间")])])]),t._v(" "),a("p",[t._v("这些性能监控的结果，可以展示前端性能的好坏，根据性能监测的结果可以进一步的去优化前端性能，比如兼容低版本浏览器的动画效果，加快首屏加载等等。")]),t._v(" "),a("p",[t._v("参考地址："),a("a",{attrs:{href:"https://www.cnblogs.com/haishen/p/12018095.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.cnblogs.com/haishen/p/12018095.html"),a("OutboundLink")],1)]),t._v(" "),a("hr"),t._v(" "),a("h2",{attrs:{id:"前端监控流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前端监控流程"}},[t._v("#")]),t._v(" 前端监控流程")]),t._v(" "),a("p",[a("img",{attrs:{src:v(449),alt:"image"}})]),t._v(" "),a("p",[t._v("前端监控的流程：采集 -> 上传 -> 分析 -> 报警")]),t._v(" "),a("h3",{attrs:{id:"采集"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#采集"}},[t._v("#")]),t._v(" 采集")]),t._v(" "),a("p",[t._v("前端监控的第一个步骤就是数据采集，采集的信息包含环境信息、性能信息、异常信息、业务信息。")]),t._v(" "),a("p",[t._v("采集方式有：进入、离开、点击、滚屏、代码植入")]),t._v(" "),a("h3",{attrs:{id:"上传"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#上传"}},[t._v("#")]),t._v(" 上传")]),t._v(" "),a("p",[t._v("后端接收前端上报的异常日志，经过一定处理，按照一定的存储方案存储。")]),t._v(" "),a("h3",{attrs:{id:"分析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分析"}},[t._v("#")]),t._v(" 分析")]),t._v(" "),a("p",[t._v("分为机器自动分析和人工分析。")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("机器自动分析，通过预设的条件和算法，对存储的日志信息进行统计和筛选，发现问题，触发报警。")])]),t._v(" "),a("li",[a("p",[t._v("人工分析，通过提供一个可视化的数据面板，让系统用户可以看到具体的日志数据，根据信息，发现异常问题根源。")])])]),t._v(" "),a("h3",{attrs:{id:"报警"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#报警"}},[t._v("#")]),t._v(" 报警")]),t._v(" "),a("p",[t._v("分为告警和预警。")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("告警按照一定的级别自动报警，通过设定的渠道，按照一定的触发规则进行。")])]),t._v(" "),a("li",[a("p",[t._v("预警则在异常发生前，提前预判，给出警告。")])])]),t._v(" "),a("h2",{attrs:{id:"前端埋点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前端埋点"}},[t._v("#")]),t._v(" 前端埋点")]),t._v(" "),a("p",[t._v("前端埋点种类：")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("代码埋点（手动埋点）")])]),t._v(" "),a("li",[a("p",[t._v("可视化埋点")])]),t._v(" "),a("li",[a("p",[t._v("无埋点")])])]),t._v(" "),a("h3",{attrs:{id:"_1-代码埋点-手动埋点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-代码埋点-手动埋点"}},[t._v("#")]),t._v(" 1.代码埋点（手动埋点）")]),t._v(" "),a("p",[t._v("手动埋点，也叫代码埋点，即纯手动写代码，调用埋点 SDK 的函数，在需要埋点的业务逻辑功能位置调用接口，上报埋点数据，像友盟、百度统计等第三方数据统计服务商大都采用这种方案。")]),t._v(" "),a("p",[t._v("手动埋点让使用者可以方便地设置自定义属性、自定义事件；所以当你需要深入下钻，并精细化自定义分析时，比较适合使用手动埋点。")]),t._v(" "),a("p",[t._v("手动埋点的缺陷就是，项目工程量大，需要埋点的位置太多，而且需要产品开发运营之间相互反复沟通，容易出现手动差错，如果错误，重新埋点的成本也很高。这会导致整个数据收集周期变的很长，收集成本变的很高，而且效率很低。因为手动埋点需要开发人员完成，所以每次有埋点更新，或者漏埋点，都需要重新走上线发布流程，更新成本也高，对线上系统稳定性也有一定危害。")]),t._v(" "),a("h3",{attrs:{id:"_2-可视化埋点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-可视化埋点"}},[t._v("#")]),t._v(" 2.可视化埋点")]),t._v(" "),a("p",[t._v("通过可视化交互的手段，代替上述的代码埋点。将业务代码和埋点代码分离，提供一个可视化交互的页面，输入为业务代码，通过这个可视化系统，可以在业务代码中自定义的增加埋点事件等等，最后输出的代码耦合了业务代码和埋点代码。缺点就是可以埋点的控件有限，不能手动定制。")]),t._v(" "),a("p",[t._v("可视化埋点听起来比较高大上，实际上跟代码埋点还是区别不大。也就是用一个系统来实现手动插入代码埋点的过程。比如国外比较早做可视化的是 Mixpanel，国内较早支持可视化埋点的有 TalkingData、诸葛 IO，2017 年腾讯的 MTA 也宣布支持可视化埋点；相比于手动埋点更新困难，埋点成本高的问题，可视化埋点优化了移动运营中数据采集的流程，能够支持产品运营随时调整埋点，无需再走发版流程，直接把配置结果推入到前端，数据采集流程更简化，也更方便产品的迭代。")]),t._v(" "),a("p",[t._v("可视化埋点中多数基于 Xpath 的方案，XPath 是一门在 XML 文档中查找信息的语言，XPath 可用来在 XML 文档中对元素和属性进行遍历。")]),t._v(" "),a("h3",{attrs:{id:"_3-无埋点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-无埋点"}},[t._v("#")]),t._v(" 3.无埋点")]),t._v(" "),a("p",[t._v("无埋点则是前端自动采集全部事件，上报埋点数据，由后端来过滤和计算出有用的数据。优点是前端只要一次加载埋点脚本，缺点是流量和采集的数据过于庞大，服务器性能压力山大。")]),t._v(" "),a("p",[t._v("采用无埋点技术的有主流的 GrowingIO、神策。")]),t._v(" "),a("h2",{attrs:{id:"前端监控其它"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前端监控其它"}},[t._v("#")]),t._v(" 前端监控其它")]),t._v(" "),a("h3",{attrs:{id:"前端监控用-gif-打点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前端监控用-gif-打点"}},[t._v("#")]),t._v(" 前端监控用 GIF 打点")]),t._v(" "),a("p",[t._v("前端监控使用 GIF 进行上报主要是因为：")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("没有跨域问题；")])]),t._v(" "),a("li",[a("p",[t._v("不会阻塞页面加载，影响用户体验；")])]),t._v(" "),a("li",[a("p",[t._v("在所有图片中体积最小，相较 BMP/PNG，可以节约 41%/35%的网络资源。")])])]),t._v(" "),a("blockquote",[a("p",[t._v("参考："),a("a",{attrs:{href:"https://mp.weixin.qq.com/s/v6R2w26qZkEilXY0mPUBCw?utm_source=tuicool&utm_medium=referral",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://mp.weixin.qq.com/s/v6R2w26qZkEilXY0mPUBCw?utm_source=tuicool&utm_medium=referral"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);_.default=r.exports}}]);