(window.webpackJsonp=window.webpackJsonp||[]).push([[365],{899:function(e,v,_){"use strict";_.r(v);var t=_(14),a=Object(t.a)({},(function(){var e=this,v=e.$createElement,_=e._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[_("h2",{attrs:{id:"key-的原理"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#key-的原理"}},[e._v("#")]),e._v(" key 的原理")]),e._v(" "),_("ol",[_("li",[_("p",[e._v("是什么：key 是给每一个 vnode 的唯一 id，也是 diff 的一种优化策略，可以根据 key，更准确， 更快的找到对应的 vnode 节点")])]),e._v(" "),_("li",[_("p",[e._v("作用：")])])]),e._v(" "),_("p",[e._v("（1）维持组件的状态")]),e._v(" "),_("p",[e._v("（2）查找性能上的提升")]),e._v(" "),_("p",[e._v("（3）节点复用带来的性能提升")]),e._v(" "),_("ol",{attrs:{start:"3"}},[_("li",[e._v("原理：")])]),e._v(" "),_("h2",{attrs:{id:"key"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#key"}},[e._v("#")]),e._v(" key")]),e._v(" "),_("p",[e._v("key 的作用就是更新组件时判断两个节点是否相同。相同就复用，不相同就删除旧的创建新的(key 的作用主要是为了高效的更新虚拟 DOM )")]),e._v(" "),_("p",[e._v("因为不带 key 时节点能够复用，省去了销毁/创建组件的开销，同时只需要修改 DOM 文本内容而不是移除/添加节点，这就是文档中所说的“刻意依赖默认行为以获取性能上的提升”。")]),e._v(" "),_("p",[e._v("既然如此，为什么还要建议带 key 呢？因为这种模式只适用于渲染简单的无状态组件。对于大多数场景来说，列表组件都有自己的状态。")]),e._v(" "),_("p",[e._v('举个例子：一个新闻列表，可点击列表项来将其标记为"已访问"，可通过 tab 切换“娱乐新闻”或是“社会新闻”。')]),e._v(" "),_("p",[e._v('不带 key 属性的情况下，在“娱乐新闻”下选中第二项然后切换到“社会新闻”，"社会新闻"里的第二项也会是被选中的状态，因为这里复用了组件，保留了之前的状态。要解决这个问题，可以为列表项带上新闻 id 作为唯一 key，那么每次渲染列表时都会完全替换所有组件，使其拥有正确状态。')]),e._v(" "),_("p",[e._v("这只是个简单的例子，实际应用会更复杂。带上唯一 key 虽然会增加开销，但是对于用户来说基本感受不到差距，而且能保证组件状态正确，这应该就是为什么推荐使用唯一 id 作为 key 的原因。至于具体怎么使用，就要根据实际情况来选择了。")]),e._v(" "),_("h2",{attrs:{id:"有-key-和无-key-对比"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#有-key-和无-key-对比"}},[e._v("#")]),e._v(" 有 key 和无 key 对比")]),e._v(" "),_("h3",{attrs:{id:"不用-key"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#不用-key"}},[e._v("#")]),e._v(" 不用 key")]),e._v(" "),_("ol",[_("li",[_("p",[e._v("就地复用节点。在比较新旧两个节点是否是同一个节点的过程中会判断成新旧两个节点是同一个节点，因为 a.key 和 b.key 都是 undefined。所以不会重新创建节点和删除节点，只会在节点的属性层面上进行比较和更新。所以可能在某种程度上（创建和删除节点方面）会有渲染性能上的提升；")])]),e._v(" "),_("li",[_("p",[e._v("无法维持组件的状态。由于就地复用节点的关系，可能在维持组件状态方面会导致不可预知的错误，比如无法维持改组件的动画效果、开关等状态；")])]),e._v(" "),_("li",[_("p",[e._v("也有可能会带来性能下降。因为是直接就地复用节点，如果修改的组件，需要复用的很多节点，顺序又和原来的完全不同的话，那么创建和删除的节点数量就会比带 key 的时候增加很多，性能就会有所下降；")])])]),e._v(" "),_("h3",{attrs:{id:"用-key"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#用-key"}},[e._v("#")]),e._v(" 用 key")]),e._v(" "),_("ol",[_("li",[_("p",[e._v("维持组件的状态，保证组件的复用。因为有 key 唯一标识了组件，不会在每次比较新旧两个节点是否是同一个节点的时候直接判断为同一个节点，而是会继续在接下来的节点中找到 key 相同的节点去比较，能找到相同的 key 的话就复用节点，不能找到的话就增加或者删除节点。")])]),e._v(" "),_("li",[_("p",[e._v("查找性能上的提升。有 key 的时候，会生成 hash，这样在查找的时候就是 hash 查找了，基本上就是 O(1) 的复杂度。")])]),e._v(" "),_("li",[_("p",[e._v("节点复用带来的性能提升。因为有 key 唯一标识了组件，所以会尽可能多的对组件进行复用（尽管组件顺序不同），那么创建和删除节点数量就会变少，这方面的消耗就会下降，带来性能的提升。")])])]),e._v(" "),_("p",[e._v("总结：性能提升不能只考虑一方面，不是 diff 快了性能就快，不是增删节点少了性能就快，不考虑量级的去评价性能，都只是泛泛而谈。")]),e._v(" "),_("h2",{attrs:{id:"key-相关问题"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#key-相关问题"}},[e._v("#")]),e._v(" key 相关问题")]),e._v(" "),_("h3",{attrs:{id:"设置-key-值一定能提高-diff-效率吗"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#设置-key-值一定能提高-diff-效率吗"}},[e._v("#")]),e._v(" 设置 key 值一定能提高 diff 效率吗？")]),e._v(" "),_("p",[e._v("其实不然，文档中也明确表示：")]),e._v(" "),_("p",[e._v("当 Vue.js 用 v-for 正在更新已渲染过的元素列表时，它默认用“就地复用”策略。如果数据项的顺序被改变，Vue 将不会移动 DOM 元素来匹配数据项的顺序， 而是简单复用此处每个元素，并且确保它在特定索引下显示已被渲染过的每个元素")]),e._v(" "),_("p",[e._v("这个默认的模式是高效的，但是只适用于不依赖子组件状态或临时 DOM 状态 (例如：表单输入值) 的列表渲染输出")]),e._v(" "),_("p",[e._v("建议尽可能在使用 v-for 时提供 key，除非遍历输出的 DOM 内容非常简单，或者是刻意依赖默认行为以获取性能上的提升")]),e._v(" "),_("h3",{attrs:{id:"不能用-index-做-key"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#不能用-index-做-key"}},[e._v("#")]),e._v(" 不能用 index 做 key")]),e._v(" "),_("p",[e._v("影响性能：当用 index 作为 key 的时候，删除节点后面的所有节点都会导致重新渲染，因为 index 变化了")]),e._v(" "),_("blockquote",[_("p",[e._v("有人说，当你的列表数据没有变化的时候可以用 index 作为 key。也就是说列表不会触发更新元素，只有静态展示。这种说法你怎么看呢？\n之所以说到这个问题，是在 vue 官方群里面一群人应为这个问题讨论半天。我弱弱回复一句，任何情况下都不要用 index 作为 key。结果遭到炮轰，哎！（除非前端写死的 list，且无操作不会引起 key 变化，只要是后端数据，前端怎么能保证数据不变呢）。")])]),e._v(" "),_("ol",[_("li",[_("p",[e._v("更新 DOM 的时候会出现性能问题")])]),e._v(" "),_("li",[_("p",[e._v("会发生一些状态 bug")])])]),e._v(" "),_("h3",{attrs:{id:"不能用随机数做-key"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#不能用随机数做-key"}},[e._v("#")]),e._v(" 不能用随机数做 key")]),e._v(" "),_("ol",[_("li",[_("p",[e._v("千万别用随机数作为 key，老的 dom 树和新 dom 树中节点对应的 id 是不一样的，旧节点会被全部删掉，新节点重新创建，会降低渲染性能.")])]),e._v(" "),_("li",[_("p",[e._v("random 是生成随机数，有一定概率多个 item 会生成相同的值，不能保证唯一。")])])]),e._v(" "),_("hr"),e._v(" "),_("p",[e._v("参考："),_("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/124019708",target:"_blank",rel:"noopener noreferrer"}},[e._v("为什么 Vue 中不要用 index 作为 key？（diff 算法详解）"),_("OutboundLink")],1)])])}),[],!1,null,null,null);v.default=a.exports}}]);