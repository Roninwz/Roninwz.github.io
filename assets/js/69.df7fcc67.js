(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{517:function(t,a,v){"use strict";v.r(a);var e=v(24),_=Object(e.a)({},(function(){var t=this,a=t.$createElement,v=t._self._c||a;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h2",{attrs:{id:"链表概览"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#链表概览"}},[t._v("#")]),t._v(" 链表概览")]),t._v(" "),v("h3",{attrs:{id:"单向链表"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#单向链表"}},[t._v("#")]),t._v(" 单向链表")]),t._v(" "),v("blockquote",[v("p",[t._v("只能从头遍历到尾或者从尾遍历到头。"),v("br"),t._v("\n节点的相连是单向的，原理就是上一个节点中有下一个节点的引用。"),v("br"),t._v("\n可以轻松的到达下一个节点，但是返回上一个节点比较难。")])]),t._v(" "),v("h3",{attrs:{id:"双向链表"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#双向链表"}},[t._v("#")]),t._v(" 双向链表")]),t._v(" "),v("blockquote",[v("p",[t._v("既可以从头遍历到尾也可以从尾遍历到头。"),v("br"),t._v("\n节点相连的过程是双向的，原理为本节点有下一个节点的引用，也有上一个节点的引用。")])]),t._v(" "),v("ul",[v("li",[t._v("双链表的缺点：")])]),t._v(" "),v("blockquote",[v("p",[t._v("每次添加或者删除节点时，要操作 4 个引用，比较麻烦。"),v("br"),t._v("\n相对于单向链表，所占内存空间大一点")])]),t._v(" "),v("ul",[v("li",[t._v("双链表的结构：")])]),t._v(" "),v("blockquote",[v("p",[t._v("双向链表不仅有 head 节点存放首节点的引用，还有 tail 存放尾结点的引用。"),v("br"),t._v("\n每个节点由三个部分组成：data：存放数据，next：存放下一个节点的引用，previous：存放上一个节点的引用。"),v("br"),t._v("\n双向链表首节点的 previous 指向 null，尾结点的 next 指向 null。")])]),t._v(" "),v("ul",[v("li",[v("p",[t._v("双向链表常用方法")]),t._v(" "),v("ul",[v("li",[t._v("append(data) 向尾部添加一个节点")]),t._v(" "),v("li",[t._v("insert(position, data) 指定位置插入数据")]),t._v(" "),v("li",[t._v("getData(position) 获取指定位置的链表节点")]),t._v(" "),v("li",[t._v("indexOf(data) 查找数据对应的")]),t._v(" "),v("li",[t._v("indexremoveAt(position) 删除指定位置的节点")]),t._v(" "),v("li",[t._v("update(position, data) 修改指定位置的节点")]),t._v(" "),v("li",[t._v("remove(data) 删除指定 data 所在的节点（继承单向链表）")]),t._v(" "),v("li",[t._v("isEmpty() 判断链表是否为空")]),t._v(" "),v("li",[t._v("size() 获取链表的长度")]),t._v(" "),v("li",[t._v("forwardToString() 链表数据从前往后以字符串形式返回")]),t._v(" "),v("li",[t._v("backwardString() 链表数据从后往前以字符串形式返回")])])])]),t._v(" "),v("h3",{attrs:{id:"循环链表"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#循环链表"}},[t._v("#")]),t._v(" 循环链表")]),t._v(" "),v("blockquote",[v("p",[t._v("循环链表可以像链表一样只有单向引用，也可以像双向链表一样有双向引用。"),v("br"),t._v("\n循环链表和链表之间唯一的区别在于，最后一个元素指向下一个元素的指针（tail.next）不是引用 null，而是指向第一个元素（head）"),v("br"),t._v("\n双向循环链表有指向 head 元素的 tail.next，和指向 tail 元素的 head.prev")])]),t._v(" "),v("blockquote",[v("p",[t._v("参考"),v("a",{attrs:{href:"https://www.cnblogs.com/xiaohuochai/p/8175716.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.cnblogs.com/xiaohuochai/p/8175716.html"),v("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=_.exports}}]);