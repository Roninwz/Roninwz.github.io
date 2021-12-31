(window.webpackJsonp=window.webpackJsonp||[]).push([[360],{896:function(s,e,t){"use strict";t.r(e);var a=t(14),v=Object(a.a)({},(function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"scoped-原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#scoped-原理"}},[s._v("#")]),s._v(" scoped 原理")]),s._v(" "),t("h3",{attrs:{id:"scoped-的作用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#scoped-的作用"}},[s._v("#")]),s._v(" scoped 的作用")]),s._v(" "),t("p",[s._v("实现组件的私有化, 当前 style 属性只属于当前模块.")]),s._v(" "),t("h3",{attrs:{id:"scoped-的实现原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#scoped-的实现原理"}},[s._v("#")]),s._v(" scoped 的实现原理")]),s._v(" "),t("p",[s._v("在 DOM 结构中可以发现,vue 通过在 DOM 结构以及 css 样式上加了唯一标记,达到样式私有化,不污染全局的作用,")]),s._v(" "),t("p",[s._v("可以看出,加上 scoped 后的组件里的会多 data-v-5db9451a 属性, css 样式中可以看出;")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("给 DOM 节点加一个不重复属性 data-v-5db9451a 标志唯一性.")])]),s._v(" "),t("li",[t("p",[s._v('使每个样式选择器后添加类似于"不重复属性"的字段, 类似于作用域的作用,不影响全局.')])]),s._v(" "),t("li",[t("p",[s._v("如果组件内部还有组件,只会给最外层的组件里的标签加上唯一属性字段,不影响组件内部引用的组件.")])])]),s._v(" "),t("p",[s._v("谨慎使用:")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("父组件无 scoped 属性,子组件带有 scoped,父组件是无法操作子组件的.")])]),s._v(" "),t("li",[t("p",[s._v("父组件有 scoped 属性,子组件无 scoped.父组件也无法设置子组件样式.因为父组件的所有标签都会带有 data-v-5db9451a 唯一标志，但子组件不会带有这个唯一标志属性.")])]),s._v(" "),t("li",[t("p",[s._v("父子组件都有，同理也无法设置样式，更改起来增加代码量.")])])]),s._v(" "),t("h3",{attrs:{id:"scoped-穿透"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#scoped-穿透"}},[s._v("#")]),s._v(" scoped 穿透")]),s._v(" "),t("ol",[t("li",[s._v("穿透 scoped")])]),s._v(" "),t("p",[s._v("stylus 的样式穿透 使用 "),t("code",[s._v(">>>")])]),s._v(" "),t("p",[s._v("sass 和 less 的样式穿透 使用"),t("code",[s._v("/deep/")])]),s._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[s._v("添加单独的 style 标签")])]),s._v(" "),t("hr"),s._v(" "),t("p",[s._v("参考："),t("a",{attrs:{href:"https://mp.weixin.qq.com/s/sMmhl9ZZ5K3eLL7dydWw2g",target:"_blank",rel:"noopener noreferrer"}},[s._v("刨根问底，揭开 Vue 中 Scope CSS 实现的幕后（原理）"),t("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=v.exports}}]);