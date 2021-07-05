(window.webpackJsonp=window.webpackJsonp||[]).push([[264],{694:function(v,_,e){"use strict";e.r(_);var d=e(19),o=Object(d.a)({},(function(){var v=this,_=v.$createElement,e=v._self._c||_;return e("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[e("h2",{attrs:{id:"虚拟dom"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#虚拟dom"}},[v._v("#")]),v._v(" 虚拟DOM")]),v._v(" "),e("p",[v._v("虚拟DOM，就是用一个JS对象来描述一个DOM节点，就是以JS的计算性能来换取操作真实DOM所消耗的性能")]),v._v(" "),e("p",[v._v("源码解析：")]),v._v(" "),e("p",[v._v("vue源码中存在一个VNode类，通过这个类，我们就可以实例化出不同类型的虚拟DOM节点")]),v._v(" "),e("p",[v._v("VNode的类型：")]),v._v(" "),e("ol",[e("li",[v._v("注释节点")]),v._v(" "),e("li",[v._v("文本节点")]),v._v(" "),e("li",[v._v("元素节点")]),v._v(" "),e("li",[v._v("组件节点")]),v._v(" "),e("li",[v._v("函数式组件节点")]),v._v(" "),e("li",[v._v("克隆节点")])]),v._v(" "),e("p",[v._v("VNode的作用：")]),v._v(" "),e("p",[v._v("在视图渲染之前，把写好的template模板先编译成VNode并缓存下来，等到数据发生变化页面需要重新渲染的时候，我们把数据发生变化后生成的VNode与前一次缓存下来的VNode进行对比，找出差异，然后有差异的VNode对应的真实DOM节点就是需要重新渲染的节点，最后根据有差异的VNode创建出真实的DOM节点再插入到视图中，最终完成一次视图更新")]),v._v(" "),e("h2",{attrs:{id:"diff算法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#diff算法"}},[v._v("#")]),v._v(" diff算法")]),v._v(" "),e("p",[v._v("优化的diff算法时间复杂度：O(n)")]),v._v(" "),e("p",[v._v("优化的diff算法：广度优先算法，比较新旧节点只会在同层级进行, 不会跨层级比较。")]),v._v(" "),e("p",[v._v("Diff算法就是patch（打补丁）过程：")]),v._v(" "),e("ol",[e("li",[e("p",[v._v("创建节点：新的VNode中有而旧的oldVNode中没有，就在旧的oldVNode中创建。")])]),v._v(" "),e("li",[e("p",[v._v("删除节点：新的VNode中没有而旧的oldVNode中有，就从旧的oldVNode中删除。")])]),v._v(" "),e("li",[e("p",[v._v("更新节点：新的VNode和旧的oldVNode中都有，就以新的VNode为准，更新旧的oldVNode。")])])]),v._v(" "),e("h3",{attrs:{id:"传统的diff算法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#传统的diff算法"}},[v._v("#")]),v._v(" 传统的diff算法")]),v._v(" "),e("p",[v._v("传统的diff算法时间复杂度：O(n³)")]),v._v(" "),e("p",[v._v("传统Diff算法需要找到两个树的最小更新方式，所以需要两两对比每个叶子节点是否相同，对比就需要O(n^2)次了，再加上更新（移动、创建、删除）时需要遍历一次，所以是O(n^3)。")])])}),[],!1,null,null,null);_.default=o.exports}}]);