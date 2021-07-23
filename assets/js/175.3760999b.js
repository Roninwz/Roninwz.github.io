(window.webpackJsonp=window.webpackJsonp||[]).push([[175],{614:function(t,a,l){"use strict";l.r(a);var v=l(19),_=Object(v.a)({},(function(){var t=this,a=t.$createElement,l=t._self._c||a;return l("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[l("h2",{attrs:{id:"客户端渲染、预渲染、服务器端渲染"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#客户端渲染、预渲染、服务器端渲染"}},[t._v("#")]),t._v(" 客户端渲染、预渲染、服务器端渲染")]),t._v(" "),l("p",[t._v("用户请求前的服务器渲染即为「预渲染」。")]),t._v(" "),l("p",[t._v("用户请求后的服务器渲染即为「服务端渲染」。")]),t._v(" "),l("ol",[l("li",[l("p",[t._v("客户端渲染：用户访问 url，请求 html 文件，前端根据路由动态渲染页面内容。关键链路较长，有一定的白屏时间；")])]),t._v(" "),l("li",[l("p",[t._v("服务端渲染：用户访问 url，服务端根据访问路径请求所需数据，拼接成 html 字符串，返回给前端。前端接收到 html 时已有部分内容；")]),t._v(" "),l("p",[t._v("服务端渲染的过程：解析执行 JS => 构建 HTML 页面 => 输出给浏览器")])]),t._v(" "),l("li",[l("p",[t._v("预渲染：构建阶段生成匹配预渲染路径的 html 文件（注意：每个需要预渲染的路由都有一个对应的 html）。构建出来的 html 文件已有部分内容")]),t._v(" "),l("p",[t._v("预渲染过程：直接输出 HTML 页面给浏览器")])])]),t._v(" "),l("h2",{attrs:{id:"预渲染"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#预渲染"}},[t._v("#")]),t._v(" 预渲染")]),t._v(" "),l("p",[t._v("预渲染基本上是在启动无头浏览器，加载应用程序的路由并将结果保存到静态 HTML 文件中。")]),t._v(" "),l("h3",{attrs:{id:"预渲染不适用场景"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#预渲染不适用场景"}},[t._v("#")]),t._v(" 预渲染不适用场景")]),t._v(" "),l("ol",[l("li",[l("p",[t._v("大量路由-如果您的站点有成百上千个路由，则预渲染将非常缓慢。当然，每个更新只需要执行一次，但是可能要花一些时间。大多数人并没有最终获得数千个静态网页，而是以防万一。")])]),t._v(" "),l("li",[l("p",[t._v("动态内容-如果您的渲染页面包含特定于用户查看其内容或其他动态源的内容，则应确保拥有可以显示的占位符组件，直到动态内容加载到客户端为止。否则可能有点怪异。比如说股票代码网站，天气预报网站。因为此时的数据是动态的，而预渲染时已经生成好了 dom 节点。")])])])])}),[],!1,null,null,null);a.default=_.exports}}]);