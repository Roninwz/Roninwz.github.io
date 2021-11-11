(window.webpackJsonp=window.webpackJsonp||[]).push([[336],{804:function(o,v,a){"use strict";a.r(v);var _=a(24),t=Object(_.a)({},(function(){var o=this,v=o.$createElement,a=o._self._c||v;return a("ContentSlotsDistributor",{attrs:{"slot-key":o.$parent.slotKey}},[a("h2",{attrs:{id:"微信小程序生命周期"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#微信小程序生命周期"}},[o._v("#")]),o._v(" 微信小程序生命周期")]),o._v(" "),a("p",[o._v("后台： 点击左上角关闭，或者按了设备 Home 键离开微信，并没有直接销毁，而是进入后台\n前台：再次进入微信或再次打开小程序，相当于从后台进入前台。")]),o._v(" "),a("h3",{attrs:{id:"应用生命周期"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#应用生命周期"}},[o._v("#")]),o._v(" 应用生命周期")]),o._v(" "),a("ol",[a("li",[a("p",[o._v("onLaunch 监听小程序初始化。 （初始化小程序时触发，全局只触发一次）")])]),o._v(" "),a("li",[a("p",[o._v("onShow 监听小程序启动或切前台。（小程序初始化完成或用户从后台切换到前台显示时触发）")])]),o._v(" "),a("li",[a("p",[o._v("onHide 用户从前台切换到后台隐藏时触发")])]),o._v(" "),a("li",[a("p",[o._v("onError: 错误监听函数。（小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息）")])])]),o._v(" "),a("h3",{attrs:{id:"页面生命周期"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#页面生命周期"}},[o._v("#")]),o._v(" 页面生命周期")]),o._v(" "),a("ol",[a("li",[a("p",[o._v("onLoad 监听页面加载")])]),o._v(" "),a("li",[a("p",[o._v("onShow 监听页面显示")])]),o._v(" "),a("li",[a("p",[o._v("onReady 监听页面初次渲染完成")])]),o._v(" "),a("li",[a("p",[o._v("onHide 生命周期回调—监听页面隐藏")])]),o._v(" "),a("li",[a("p",[o._v("onUnload 监听页面卸载")])])]),o._v(" "),a("h3",{attrs:{id:"应用及页面生命周期的触发顺序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#应用及页面生命周期的触发顺序"}},[o._v("#")]),o._v(" 应用及页面生命周期的触发顺序")]),o._v(" "),a("ol",[a("li",[o._v("首次进入小程序")])]),o._v(" "),a("p",[o._v("先触发应用生命周期 onLaunch -> onShow 再触发页面生命周期 onLoad -> onShow -> onReady")]),o._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[o._v("前台切换到后台时")])]),o._v(" "),a("p",[o._v("先触发页面生命周期中 onHide 方法，再触发应用生命周期的 onHide 方法。")]),o._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[o._v("后台切换到前台时")])]),o._v(" "),a("p",[o._v("先触发应用生命周期中 onShow 方法，再触发页面生命周期的 onShow 方法。")]),o._v(" "),a("blockquote",[a("p",[o._v("小程序后台运行一定时间，或系统资源占用过高，会被销毁。")])]),o._v(" "),a("ol",{attrs:{start:"4"}},[a("li",[o._v("wx.navigateTo 跳转状态下")])]),o._v(" "),a("p",[o._v("（1）进入 A 页面：A 执行 onLoad()--\x3eonShow()--\x3eonReady()；")]),o._v(" "),a("p",[o._v("（2）A 页面 navigateTo B 页面：A 执行 onHide()，B 执行 onLoad()--\x3eonShow()--\x3eonReady()；")]),o._v(" "),a("p",[o._v("（3）B 页面返回 A 页面：B 执行 onUnload()，A 执行 onShow()；")]),o._v(" "),a("p",[o._v("（4）退出 A 页面：A 执行 onUnload()。")]),o._v(" "),a("h3",{attrs:{id:"组件生命周期"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#组件生命周期"}},[o._v("#")]),o._v(" 组件生命周期")]),o._v(" "),a("ol",[a("li",[o._v("created 在组件实例刚刚被创建时执行")]),o._v(" "),a("li",[o._v("attached 在组件实例进入页面节点树时执行")]),o._v(" "),a("li",[o._v("ready 在组件在视图层布局完成后执行")]),o._v(" "),a("li",[o._v("moved 在组件实例被移动到节点树另一个位置时执行")]),o._v(" "),a("li",[o._v("detached 在组件实例被从页面节点树移除时执行")]),o._v(" "),a("li",[o._v("error 每当组件方法抛出错误时执行")])])])}),[],!1,null,null,null);v.default=t.exports}}]);