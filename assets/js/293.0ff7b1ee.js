(window.webpackJsonp=window.webpackJsonp||[]).push([[293],{758:function(t,v,e){"use strict";e.r(v);var _=e(24),r=Object(_.a)({},(function(){var t=this,v=t.$createElement,e=t._self._c||v;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"vue-对比"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vue-对比"}},[t._v("#")]),t._v(" vue 对比")]),t._v(" "),e("h3",{attrs:{id:"vue-和-react-区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vue-和-react-区别"}},[t._v("#")]),t._v(" vue 和 react 区别")]),t._v(" "),e("ol",[e("li",[t._v("数据流向的不同。")])]),t._v(" "),e("p",[t._v("react 从诞生开始就推崇单向数据流，而 Vue 是双向数据流")]),t._v(" "),e("ol",{attrs:{start:"2"}},[e("li",[t._v("数据变化的实现原理不同。")])]),t._v(" "),e("p",[t._v("react 使用的是不可变数据（手动 setState），而 Vue 使用的是可变的数据")]),t._v(" "),e("ol",{attrs:{start:"3"}},[e("li",[t._v("模板渲染方式的不同")])]),t._v(" "),e("p",[t._v("react 是通过 JSX 渲染模板，Vue 是通过一种拓展的 HTML 语法进行渲染")]),t._v(" "),e("h3",{attrs:{id:"watch-和-computed-区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#watch-和-computed-区别"}},[t._v("#")]),t._v(" watch 和 computed 区别")]),t._v(" "),e("ol",[e("li",[t._v("缓存支持")])]),t._v(" "),e("p",[t._v("watch 不支持缓存，数据变，直接会触发相应的操作；")]),t._v(" "),e("p",[t._v("computed 支持缓存，只有依赖数据发生改变，才会重新进行计算")]),t._v(" "),e("ol",{attrs:{start:"2"}},[e("li",[t._v("异步支持")])]),t._v(" "),e("p",[t._v("watch 支持异步；")]),t._v(" "),e("p",[t._v("computed 不支持异步，当 computed 内有异步操作时无效，无法监听数据的变化")]),t._v(" "),e("ol",{attrs:{start:"3"}},[e("li",[t._v("使用场景")])]),t._v(" "),e("p",[t._v("watch 当一个属性发生变化时，需要执行对应的操作；一对多或者一对一；")]),t._v(" "),e("p",[t._v("computed 如果一个属性是由其他属性计算而来的，这个属性依赖其他属性，是一个多对一或者一对一，一般用 computed")]),t._v(" "),e("h3",{attrs:{id:"v-if-和-v-show-的区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#v-if-和-v-show-的区别"}},[t._v("#")]),t._v(" v-if 和 v-show 的区别")]),t._v(" "),e("ol",[e("li",[t._v("控制手段不同")])]),t._v(" "),e("p",[t._v("v-show 隐藏则是为该元素添加 css--display:none，dom 元素依旧还在。v-if 显示隐藏是将 dom 元素整个添加或删除")]),t._v(" "),e("ol",{attrs:{start:"2"}},[e("li",[t._v("编译过程不同")])]),t._v(" "),e("p",[t._v("v-if 切换有一个局部编译/卸载的过程，切换过程中合适地销毁和重建内部的事件监听和子组件；v-show 只是简单的基于 css 切换")]),t._v(" "),e("ol",{attrs:{start:"3"}},[e("li",[t._v("编译条件不同")])]),t._v(" "),e("p",[t._v("v-if 是真正的条件渲染，它会确保在切换过程中条件块内的事件监听器和子组件适当地被销毁和重建。只有渲染条件为假时，并不做操作，直到为真才渲染")]),t._v(" "),e("p",[t._v("v-show 不管初始条件是什么，元素总是会被渲染")]),t._v(" "),e("ol",{attrs:{start:"4"}},[e("li",[t._v("性能消耗")])]),t._v(" "),e("p",[t._v("v-if 有更高的切换消耗；v-show 有更高的初始渲染消耗")]),t._v(" "),e("ol",{attrs:{start:"5"}},[e("li",[t._v("使用场景")])]),t._v(" "),e("p",[t._v("如果需要非常频繁地切换，则使用 v-show 较好")]),t._v(" "),e("p",[t._v("如果在运行时条件很少改变，则使用 v-if 较好")]),t._v(" "),e("h3",{attrs:{id:"proxy-和-object-defineproperty-的对比"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#proxy-和-object-defineproperty-的对比"}},[t._v("#")]),t._v(" Proxy 和 Object.defineProperty 的对比")]),t._v(" "),e("p",[t._v("Proxy 的优势如下")]),t._v(" "),e("ol",[e("li",[t._v("Proxy 可以直接监听整个对象而非属性。")]),t._v(" "),e("li",[t._v("Proxy 可以直接监听数组的变化。")]),t._v(" "),e("li",[t._v("Proxy 有 13 中拦截方法，如 ownKeys、deleteProperty、has 等是 Object.defineProperty 不具备的。")]),t._v(" "),e("li",[t._v("Proxy 返回的是一个新对象，我们可以只操作新的对象达到目的，而 Object.defineProperty 只能遍历对象属性直接修改;")]),t._v(" "),e("li",[t._v("Proxy 做为新标准将受到浏览器产商重点持续的性能优化,也就是传说中的新标准的性能红利。")])]),t._v(" "),e("p",[t._v("Object.defineProperty 的优势如下")]),t._v(" "),e("p",[t._v("兼容性好，支持 IE9，而 Proxy 的存在浏览器兼容性问题,而且无法用 polyfill 磨平。")]),t._v(" "),e("p",[t._v("Object.defineProperty 不足在于：")]),t._v(" "),e("ol",[e("li",[t._v("Object.defineProperty 只能劫持对象的属性,因此我们需要对每个对象的每个属性进行遍历。")]),t._v(" "),e("li",[t._v("Object.defineProperty 不能监听数组。是通过重写数据的那 7 个可以改变数据的方法来对数组进行监听的。")]),t._v(" "),e("li",[t._v("Object.defineProperty 也不能对 es6 新产生的 Map,Set 这些数据结构做出监听。")]),t._v(" "),e("li",[t._v("Object.defineProperty 也不能监听新增和删除操作，通过 Vue.set()和 Vue.delete 来实现响应式的。")])])])}),[],!1,null,null,null);v.default=r.exports}}]);