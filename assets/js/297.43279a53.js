(window.webpackJsonp=window.webpackJsonp||[]).push([[297],{841:function(e,r,t){"use strict";t.r(r);var o=t(14),v=Object(o.a)({},(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"proxy"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#proxy"}},[e._v("#")]),e._v(" Proxy")]),e._v(" "),t("p",[e._v("Proxy 对象用于定义基本操作的自定义行为（如属性查找，赋值，枚举，函数调用等）。")]),e._v(" "),t("blockquote",[t("p",[e._v("其实就是在对目标对象的操作之前提供了拦截，可以对外界的操作进行过滤和改写，修改某些操作的默认行为，这样我们可以不直接操作对象本身，而是通过操作对象的代理对象来间接来操作对象，达到预期的目的~")])]),e._v(" "),t("p",[e._v("Proxy 的优势如下")]),e._v(" "),t("ol",[t("li",[e._v("Proxy 可以直接监听整个对象而非属性。")]),e._v(" "),t("li",[e._v("Proxy 可以直接监听数组的变化。")]),e._v(" "),t("li",[e._v("Proxy 有 13 中拦截方法，如 ownKeys、deleteProperty、has 等是 Object.defineProperty 不具备的。")]),e._v(" "),t("li",[e._v("Proxy 返回的是一个新对象，我们可以只操作新的对象达到目的，而 Object.defineProperty 只能遍历对象属性直接修改;")]),e._v(" "),t("li",[e._v("Proxy 做为新标准将受到浏览器产商重点持续的性能优化,也就是传说中的新标准的性能红利。")])]),e._v(" "),t("p",[e._v("Proxy 的缺点如下：")]),e._v(" "),t("ol",[t("li",[e._v("proxy 有兼容性问题,无完全的 polyfill")])]),e._v(" "),t("p",[e._v("proxy 为 ES6 新出的 API,浏览器对其的支持情况可在 w3c 规范中查到,通过查找我们可以知道,")]),e._v(" "),t("p",[e._v("虽然大部分浏览器支持 proxy 特性,但是一些浏览器或者低版本不支持 proxy,")]),e._v(" "),t("p",[e._v("因此 proxy 有兼容性问题,那能否像 ES6 其他特性有 polyfill 解决方案呢?,")]),e._v(" "),t("p",[e._v("这时我们通过查询 babel 文档,发现在使用 babel 对代码进行降级处理的时候,并没有合适的 polyfill")]),e._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[e._v("第二个问题就是性能问题")])]),e._v(" "),t("p",[e._v("proxy 的性能其实比 promise 还差,")]),e._v(" "),t("p",[e._v("这就需要在性能和简单实用上进行权衡,例如 vue3 使用 proxy 后,")]),e._v(" "),t("p",[e._v("其对对象及数组的拦截很容易实现数据的响应式,尤其是数组")]),e._v(" "),t("h2",{attrs:{id:"object-defineproperty"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#object-defineproperty"}},[e._v("#")]),e._v(" Object.defineProperty")]),e._v(" "),t("p",[e._v("Object.defineProperty 的优势如下")]),e._v(" "),t("p",[e._v("兼容性好，支持 IE9，而 Proxy 的存在浏览器兼容性问题,而且无法用 polyfill 磨平。")]),e._v(" "),t("p",[e._v("Object.defineProperty 不足在于：")]),e._v(" "),t("ol",[t("li",[e._v("Object.defineProperty 只能劫持对象的属性,因此我们需要对每个对象的每个属性进行遍历。")]),e._v(" "),t("li",[e._v("Object.defineProperty 不能监听数组。是通过重写数据的那 7 个可以改变数据的方法来对数组进行监听的。")]),e._v(" "),t("li",[e._v("Object.defineProperty 也不能对 es6 新产生的 Map,Set 这些数据结构做出监听。")]),e._v(" "),t("li",[e._v("Object.defineProperty 也不能监听新增和删除操作，通过 Vue.set()和 Vue.delete 来实现响应式的。")])]),e._v(" "),t("p",[t("strong",[t("em",[e._v("问题：Object.defineProperty 真的无法监测数组下标的变化吗？")])])]),e._v(" "),t("p",[e._v("注意：Object.defineProperty 本身是可以监控到数组下标的变化的，只是在 Vue 的实现中，从性能/体验的性价比考虑")]),e._v(" "),t("p",[e._v("Object.defineProperty 在数组中的表现和在对象中的表现是一致的，数组的索引就可以看做是对象中的 key")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("通过索引访问或设置对应元素的值时，可以触发 getter 和 setter 方法。")])]),e._v(" "),t("li",[t("p",[e._v("通过 push 或 unshift 会增加索引，对于新增加的属性，需要再手动初始化才能被 observe。")])]),e._v(" "),t("li",[t("p",[e._v("通过 pop 或 shift 删除元素，会删除并更新索引，也会触发 setter 和 getter 方法。")])])]),e._v(" "),t("p",[e._v("所以，Object.defineProperty 是有监控数组下标变化的能力的，只是 Vue2.x 放弃了这个特性。")]),e._v(" "),t("h3",{attrs:{id:"proxy-和-object-defineproperty-的对比"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#proxy-和-object-defineproperty-的对比"}},[e._v("#")]),e._v(" Proxy 和 Object.defineProperty 的对比")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("Proxy 是直接代理对象；而 Object.defineProperty 只能劫持对象的属性，")])]),e._v(" "),t("li",[t("p",[e._v("Proxy 能监听对象的新增和删除操作；Object.defineProperty 不能监听对象的新增和删除操作，通过 Vue.set()和 Vue.delete 来实现响应式的。")])]),e._v(" "),t("li",[t("p",[e._v("Proxy 可以直接监听数组的变化；Object.defineProperty 本身是有监控数组下标变化的能力的，只是在 Vue 的实现中，从性能/体验的性价比考虑")])]),e._v(" "),t("li",[t("p",[e._v("Proxy 支持 13 种拦截操作，不限于 apply、ownKeys、deleteProperty、has 等等是 Object.defineProperty 不具备的。")])]),e._v(" "),t("li",[t("p",[e._v("Proxy 返回的是一个新对象，我们可以只操作新的对象达到目的；而 Object.defineProperty 只能遍历对象属性直接修改;")])]),e._v(" "),t("li",[t("p",[e._v("Proxy 兼容性差；Object.defineProperty 兼容性好，支持 IE9，")])]),e._v(" "),t("li",[t("p",[e._v("Proxy 有性能问题但是有新标准性能红利，从长远来看，JS 引擎会继续优化 Proxy")])])]),e._v(" "),t("hr"),e._v(" "),t("p",[e._v("参考："),t("a",{attrs:{href:"https://cloud.tencent.com/developer/news/485729",target:"_blank",rel:"noopener noreferrer"}},[e._v("为什么 Vue3.0 不再使用 defineProperty 实现数据监听？"),t("OutboundLink")],1)])])}),[],!1,null,null,null);r.default=v.exports}}]);