(window.webpackJsonp=window.webpackJsonp||[]).push([[337],{803:function(t,s,a){"use strict";a.r(s);var n=a(24),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"vue-组件通信"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue-组件通信"}},[t._v("#")]),t._v(" vue 组件通信")]),t._v(" "),a("p",[t._v("组件间通信的分类可以分成以下四种情况：")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("父子组件之间的通信")])]),t._v(" "),a("li",[a("p",[t._v("兄弟组件之间的通信")])]),t._v(" "),a("li",[a("p",[t._v("跨级（祖孙与后代）组件之间的通信")])]),t._v(" "),a("li",[a("p",[t._v("非关系组件间之间的通信")])])]),t._v(" "),a("h3",{attrs:{id:"_1-emit和-props"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-emit和-props"}},[t._v("#")]),t._v(" 1. "),a("code",[t._v("$emit")]),t._v("和 "),a("code",[t._v("props")])]),t._v(" "),a("p",[t._v("适用场景：父子组件通信")]),t._v(" "),a("h3",{attrs:{id:"_2-parent和-children"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-parent和-children"}},[t._v("#")]),t._v(" 2. "),a("code",[t._v("$parent")]),t._v("和"),a("code",[t._v("$children")])]),t._v(" "),a("p",[t._v("适用场景：父子、跨级组件通信")]),t._v(" "),a("h3",{attrs:{id:"_3-provide-和-inject"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-provide-和-inject"}},[t._v("#")]),t._v(" 3. "),a("code",[t._v("provide")]),t._v(" 和 "),a("code",[t._v("inject")])]),t._v(" "),a("p",[t._v("适用场景：跨级组件通信")]),t._v(" "),a("p",[t._v("provide 和 inject 绑定不是响应的，它被设计是为组件库和高阶组件服务的，平常业务中的代码不建议使用。")]),t._v(" "),a("h3",{attrs:{id:"_4-attrs和-listeners"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-attrs和-listeners"}},[t._v("#")]),t._v(" 4. "),a("code",[t._v("$attrs")]),t._v("和"),a("code",[t._v("$listeners")])]),t._v(" "),a("p",[t._v("适用场景：跨级组件通信")]),t._v(" "),a("p",[a("code",[t._v("$attrs")]),t._v("包含了父作用域中不作为 prop 被识别 (且获取) 的特性绑定 (class 和 style 除外)。当一个组件没有声明任何 prop 时，这里会包含所有父作用域的绑定 (class 和 style 除外)，并且可以通过 "),a("code",[t._v('v-bind="$attrs"')]),t._v(" 传入内部组件——在创建高级别的组件时非常有用。（父传孙专用）")]),t._v(" "),a("p",[a("code",[t._v("$listeners")]),t._v("包含了父作用域中的 (不含 .native 修饰器的) v-on 事件监听器。它可以通过 "),a("code",[t._v('v-on="$listeners"')]),t._v(" 传入内部组件——在创建更高层次的组件时非常有用。（孙传父专用）")]),t._v(" "),a("h3",{attrs:{id:"_5-eventbus-中央事件总线"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-eventbus-中央事件总线"}},[t._v("#")]),t._v(" 5. eventBus 中央事件总线")]),t._v(" "),a("p",[t._v("适用场景：父子、兄弟、跨级，非关系组件通信")]),t._v(" "),a("p",[t._v("使用场景：对于比较小型的项目，没有必要引入 vuex 的情况下，可以使用 eventBus")]),t._v(" "),a("p",[t._v("实现原理：")]),t._v(" "),a("p",[t._v("EventBus 是消息传递的一种方式，基于一个消息中心，订阅和发布消息的模式，称为发布订阅者模式。")]),t._v(" "),a("p",[a("code",[t._v("on('name', fn)")]),t._v(" 订阅消息，name:订阅的消息名称， fn: 订阅的消息")]),t._v(" "),a("p",[a("code",[t._v("emit('name', args)")]),t._v(" 发布消息, name:发布的消息名称 ， args：发布的消息")]),t._v(" "),a("p",[t._v("实现：")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Bus")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("constructor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("callbacks "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("$on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" fn")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("callbacks"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("callbacks"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("callbacks"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("$emit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" args")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("callbacks"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("callbacks"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("forEach")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("cb")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cb")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br")])]),a("p",[t._v("注：只不过在 vue 中已经替我们实现好了$emit,$on 这些方法，所以直接用的时候去 new Vue()就可以了.")]),t._v(" "),a("p",[t._v("缺点：")]),t._v(" "),a("ol",[a("li",[t._v("代码逻辑性极具下降，可阅读性变低")]),t._v(" "),a("li",[t._v("对于每一个 action 父组件都需要一个 on(或 dispatch)一个事件来处理")]),t._v(" "),a("li",[t._v("你将很难查找到每一个事件是从哪里触发，满篇都是业务逻辑")])]),t._v(" "),a("h3",{attrs:{id:"_6-vuex"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-vuex"}},[t._v("#")]),t._v(" 6. vuex")]),t._v(" "),a("p",[t._v("适用场景：父子、兄弟、跨级，非关系组件通信")]),t._v(" "),a("p",[t._v("Vuex 状态管理的流程：view———­>actions———–>mutations—–>state————­>view")]),t._v(" "),a("p",[t._v("Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。对一个中大型单页应用来说是不二之选。")])])}),[],!1,null,null,null);s.default=e.exports}}]);