(window.webpackJsonp=window.webpackJsonp||[]).push([[264],{725:function(t,e,r){"use strict";r.r(e);var a=r(24),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h2",{attrs:{id:"js-总结"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#js-总结"}},[t._v("#")]),t._v(" js 总结")]),t._v(" "),r("h3",{attrs:{id:"e-target-和-e-currenttarget-的区别"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#e-target-和-e-currenttarget-的区别"}},[t._v("#")]),t._v(" e.target 和 e.currentTarget 的区别")]),t._v(" "),r("p",[t._v("target 触发事件的源事件")]),t._v(" "),r("p",[t._v("currentTarget 事件触发的当前事件（当前事件，可能是触发事件的源组件，可能是触发的事件组件（即触发事件源组件的子元素）），")]),t._v(" "),r("p",[t._v("1、如果绑定的事件所在组件没有子元素，则用 e.target===e.currentTarget 一样；")]),t._v(" "),r("p",[t._v("2、如果事件绑定在父元素中，且该父元素有子元素，")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[t._v(" 当用e.currentTarget时，不管点击父元素所在区域还是子元素（当前事件），都正确执行，\n\n 若用e.target时，点击父元素所在区域无错，点击子元素区域，执行报错-------》\n\n 报错的原因是事件没绑定在子元素上，是在父元素上，子元素要用e.currentTarget才正确！\n")])])])])}),[],!1,null,null,null);e.default=n.exports}}]);