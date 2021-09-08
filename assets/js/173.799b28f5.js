(window.webpackJsonp=window.webpackJsonp||[]).push([[173],{635:function(_,v,t){"use strict";t.r(v);var s=t(24),a=Object(s.a)({},(function(){var _=this,v=_.$createElement,t=_._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[t("h2",{attrs:{id:"白屏"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#白屏"}},[_._v("#")]),_._v(" 白屏")]),_._v(" "),t("h3",{attrs:{id:"白屏原因"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#白屏原因"}},[_._v("#")]),_._v(" 白屏原因")]),_._v(" "),t("ol",[t("li",[t("p",[_._v("页面渲染被阻塞：在弱网络下(2G 网路或者 GPRS 网络) ,网络延迟，JS 加载延迟 ,会阻塞页面")])]),_._v(" "),t("li",[t("p",[_._v("客户端存在 bug，js 报错或者语法不兼容")])])]),_._v(" "),t("h2",{attrs:{id:"浏览器加载、解析、渲染过程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#浏览器加载、解析、渲染过程"}},[_._v("#")]),_._v(" 浏览器加载、解析、渲染过程")]),_._v(" "),t("ol",[t("li",[_._v("加载：")])]),_._v(" "),t("p",[_._v("了解浏览器如何进行加载，可以在引用外部样式文件，外部 js 时，将他们放到合适的位置，使浏览器以最快的速度将文件加载完毕。")]),_._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[_._v("解析：")])]),_._v(" "),t("p",[_._v("了解浏览器如何进行解析，我们可以在构建 DOM 结构，组织 css 选择器时，选择最优的写法，提高浏览器的解析速率。")]),_._v(" "),t("ol",{attrs:{start:"3"}},[t("li",[_._v("渲染：")])]),_._v(" "),t("p",[_._v('了解浏览人如何进行渲染，我们可以在设置元素属性，编写 js 文件时，可以减少"重排""重绘"的消耗。')]),_._v(" "),t("p",[_._v("总结：这三个过程在事件进行的时候不是完全独立，会有交叉。会一边加载，一遍解析，一遍渲染的工作想象。")]),_._v(" "),t("h3",{attrs:{id:"_1-输入-url-到页面展示的全过程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-输入-url-到页面展示的全过程"}},[_._v("#")]),_._v(" 1. 输入 url 到页面展示的全过程")]),_._v(" "),t("ol",[t("li",[_._v("解析 URL")])]),_._v(" "),t("p",[_._v("当在浏览器中输入 URL 后，浏览器首先对拿到的 URL 进行识别，抽取出域名字段。")]),_._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[_._v("DNS 解析（域名解析）")])]),_._v(" "),t("p",[_._v("通过 DNS 解析，获取到域名对应的 IP")]),_._v(" "),t("ol",{attrs:{start:"3"}},[t("li",[_._v("TCP 连接")])]),_._v(" "),t("h3",{attrs:{id:"_2-页面加载-解析过程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-页面加载-解析过程"}},[_._v("#")]),_._v(" 2. 页面加载,解析过程")]),_._v(" "),t("ol",[t("li",[t("p",[_._v("解析 HTML 结构。")])]),_._v(" "),t("li",[t("p",[_._v("加载外部脚本和样式表文件。")])]),_._v(" "),t("li",[t("p",[_._v("解析并执行脚本代码。//js 之类的")])]),_._v(" "),t("li",[t("p",[_._v("DOM 树构建完成。(DOMContentLoaded 事件触发,仅当 DOM 加载完成，不包括样式表，图片，flash)")])]),_._v(" "),t("li",[t("p",[_._v("加载图片等外部文件。")])]),_._v(" "),t("li",[t("p",[_._v("页面加载完毕。(onload 事件触发：页面上所有的 DOM，样式表，脚本，图片，flash 都已经加载完成了。)")])])]),_._v(" "),t("h3",{attrs:{id:"_3-页面渲染过程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-页面渲染过程"}},[_._v("#")]),_._v(" 3. 页面渲染过程")]),_._v(" "),t("ol",[t("li",[t("p",[_._v("解析 HTML 结构，构建 DOM 树。")])]),_._v(" "),t("li",[t("p",[_._v("解析 CSS ，构建 CSSOM 树")])]),_._v(" "),t("li",[t("p",[_._v("合并 DOM 树和 CSSOM 树构建渲染树")])])]),_._v(" "),t("p",[_._v("(1)、过滤掉不可见节点(脚本标记、元标记)")]),_._v(" "),t("p",[_._v("(2)、过滤掉样式隐藏的节点（display:none）")]),_._v(" "),t("ol",{attrs:{start:"4"}},[t("li",[t("p",[_._v("布局 Render 树：根据渲染树来布局，计算节点的几何信息（layout）")])]),_._v(" "),t("li",[t("p",[_._v("绘制 Render 树：将各个节点绘制在屏幕上（paint）")])])]),_._v(" "),t("h2",{attrs:{id:"css-加载、解析"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#css-加载、解析"}},[_._v("#")]),_._v(" css 加载、解析")]),_._v(" "),t("p",[_._v("CSS 的解析是从右往左逆向解析的(从 DOM 树的下－上解析比上－下解析效率高)，嵌套标签越多，解析越慢。")]),_._v(" "),t("p",[_._v("css 加载会阻塞 DOM 树的渲染\ncss 加载会阻塞后面 js 语句的执行")]),_._v(" "),t("ol",[t("li",[t("p",[_._v("CSS 的加载和解析不会阻塞 HTML 的解析（即：不会阻塞 Dom 树的生成）")])]),_._v(" "),t("li",[t("p",[_._v("CSS 的加载和解析会阻塞 渲染树 RenderTree 的生成，也会阻塞界面的渲染！")])])]),_._v(" "),t("p",[_._v("渲染树 RenderTree 是根据 Dom 和 CSSOM 生成的，所以，在 CSSOM 还未完成之前， 是无法生成渲染树的，之后的流程更是无法进行；所以 CSS 的加载和解析会阻塞 生成渲染树 RenderTre 及其之后的流程；")]),_._v(" "),t("h2",{attrs:{id:"js-加载、解析"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#js-加载、解析"}},[_._v("#")]),_._v(" js 加载、解析")]),_._v(" "),t("ol",[t("li",[_._v("没有设置 defer 或 async 的 js 的加载会阻塞 HTML 的解析（即：会阻塞 Dom 树的生成），设置了 defer 或 async 的 js 不阻塞 HTML 的解析；")])]),_._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[_._v("JS 的执行，都会阻塞 HTML 的解析")])]),_._v(" "),t("h3",{attrs:{id:"defer-和-async-属性的区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#defer-和-async-属性的区别"}},[_._v("#")]),_._v(" defer 和 async 属性的区别")]),_._v(" "),t("p",[_._v("script 标签存在两个属性，defer 和 async")]),_._v(" "),t("ol",[t("li",[_._v("async 属性")])]),_._v(" "),t("p",[_._v("顺序：加载优先顺序，脚本在文档中的顺序不重要，先加载完成先执行")]),_._v(" "),t("p",[_._v("表示后续文档的加载和渲染与 js 脚本的加载和执行是并行进行的，即异步执行")]),_._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[_._v("defer 属性")])]),_._v(" "),t("p",[_._v("顺序：文档顺序，")]),_._v(" "),t("p",[_._v("加载后续文档的过程和 js 脚本的加载(此时仅加载不执行)是并行进行的(异步)，js 脚本的执行需要等到文档所有元素解析完成之后，DOMContentLoaded 事件触发执行之前")]),_._v(" "),t("h2",{attrs:{id:"媒体资源加载、解析"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#媒体资源加载、解析"}},[_._v("#")]),_._v(" 媒体资源加载、解析")]),_._v(" "),t("ol",[t("li",[t("p",[_._v("媒体资源(如:图片音视频等)的加载不会阻塞 HTML 的解析！")])]),_._v(" "),t("li",[t("p",[_._v("媒体资源是并行加载的！")])])]),_._v(" "),t("p",[_._v("因为媒体资源的加载不会阻塞 HTML 的解析，那么，浏览器加载第一个媒体资源时，HTML 还可以继续往下解析，当解析到其它媒体资源的标签时，浏览器还可以继续加载相应的媒体资源，所以媒体资源是并行加载的！")])])}),[],!1,null,null,null);v.default=a.exports}}]);