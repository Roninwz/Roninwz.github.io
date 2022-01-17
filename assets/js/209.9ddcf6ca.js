(window.webpackJsonp=window.webpackJsonp||[]).push([[209],{733:function(t,s,a){"use strict";a.r(s);var v=a(14),_=Object(v.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"前端动画"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前端动画"}},[t._v("#")]),t._v(" 前端动画")]),t._v(" "),a("p",[t._v("动画选择：js+canvas(没有回流)+水平 > css3 > js+dom")]),t._v(" "),a("h3",{attrs:{id:"css-动画"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#css-动画"}},[t._v("#")]),t._v(" css 动画")]),t._v(" "),a("p",[t._v("CSS3 动画也被称为补间动画，原因是只需要添加关键帧的位置，其他的未定义的帧会被自动生成")]),t._v(" "),a("p",[t._v("因为我们只设置了几个关键帧的位置，所以在进行动画控制的时候比较困难，不能再半路暂停动画，或者在动画过程中添加一些其他操作，都不大容易")]),t._v(" "),a("p",[t._v("但是 CSS 动画也有很多的好处浏览器可以对动画进行优化帧速不好的浏览器，CSS3 可以自然降级兼容代码简单，调优方向固定")]),t._v(" "),a("p",[t._v("但是 CSS 动画也有很多的好处")]),t._v(" "),a("ol",[a("li",[t._v("浏览器可以对动画进行优化")]),t._v(" "),a("li",[t._v("帧速不好的浏览器，CSS3 可以自然降级兼容")]),t._v(" "),a("li",[t._v("代码简单，调优方向固定")])]),t._v(" "),a("h3",{attrs:{id:"js-动画"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#js-动画"}},[t._v("#")]),t._v(" js 动画")]),t._v(" "),a("p",[t._v("js 动画是逐帧动画，是在时间帧上逐帧绘制帧内容，由于是一帧一帧的话，所以他的可操作性很高，几乎可以完成任何你想要的动画形式。但是由于逐帧动画的帧序列内容不一样，会增加制作负担，且资源占有比较大。但它的优势也很明显：因为它相似与电影播放模式，很适合于表演很细腻的动画，如 3D 效果、人物或动物急剧转身等等效果。但是，如果帧率过低的话，会帧与帧之间的过渡很可能会不自然、不连贯。")]),t._v(" "),a("p",[t._v("js 是单线程的脚本语言，当 js 在浏览器主线程运行时，主线程还有其他需要运行的 js 脚本、样式、计算、布局、交互等一系列任务，对其干扰线程可能出现阻塞，造成丢帧的情况。")]),t._v(" "),a("p",[t._v("其次，js 在做动画的时候，其复杂度是高于 css3 的，需要考虑一些计算，操作等方便问题。")]),t._v(" "),a("p",[t._v("但是正是由于 js 对动画的操作复杂度比较高，能对动画有一个比较好的控制，如开始、暂定、回放、终止、取帧等，可以很精确的做到。因此可以 js 可以通过操作 DOM 和 BOM 来做一些酷炫的动态效果，以及爆炸特效，且兼容性比较好。")]),t._v(" "),a("h3",{attrs:{id:"实现前端动画的六种方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实现前端动画的六种方式"}},[t._v("#")]),t._v(" 实现前端动画的六种方式")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("setInterval 或 setTimeout 实现")])]),t._v(" "),a("li",[a("p",[t._v("requestAnimationFrame")])]),t._v(" "),a("li",[a("p",[t._v("Canvas")])]),t._v(" "),a("li",[a("p",[t._v("SVG（可伸缩矢量图形）")])]),t._v(" "),a("li",[a("p",[t._v("CSS3 transition")])]),t._v(" "),a("li",[a("p",[t._v("CSS3 animation")])])]),t._v(" "),a("h3",{attrs:{id:"_1-定时器实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-定时器实现"}},[t._v("#")]),t._v(" 1.定时器实现")]),t._v(" "),a("p",[t._v("其主要思想是通过 setInterval 或 setTimeout 方法的回调函数来持续调用改变某个元素的 CSS 样式以达到元素样式变化的效果。")]),t._v(" "),a("p",[t._v("Jquery 的 animate()方法就是这种方式实现的。")]),t._v(" "),a("p",[t._v("缺点：")]),t._v(" "),a("p",[t._v("javascript 实现动画通常会导致页面频繁性重排重绘，消耗性能，一般应该在桌面端浏览器。在移动端上使用会有明显的卡顿。")]),t._v(" "),a("h3",{attrs:{id:"_2-requestanimationframe"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-requestanimationframe"}},[t._v("#")]),t._v(" 2. requestAnimationFrame")]),t._v(" "),a("p",[t._v("window.requestAnimationFrame() 浏览器在下次重绘之前调用指定的回调函数")]),t._v(" "),a("p",[t._v("requestAnimationFrame 是浏览器用于定时循环操作的一个接口，类似于 setTimeout，主要用途是按帧对网页进行重绘。")]),t._v(" "),a("p",[t._v("显示器有固定的刷新频率（60Hz 或 75Hz），也就是说，每秒最多只能重绘 60 次或 75 次，requestAnimationFrame 的基本思想就是与这个刷新频率保持同步，利用这个刷新频率进行页面重绘。")]),t._v(" "),a("p",[t._v("此外，使用这个 API，一旦页面不处于浏览器的当前标签，就会自动停止刷新。这就节省了 CPU、GPU 和电力。")]),t._v(" "),a("p",[t._v("requestAnimationFrame 是在主线程上完成。这意味着，如果主线程非常繁忙，requestAnimationFrame 的动画效果会大打折扣。")]),t._v(" "),a("p",[t._v("requestAnimationFrame 使用一个回调函数作为参数。这个回调函数会在浏览器重绘之前调用")]),t._v(" "),a("p",[t._v("结束动画： "),a("code",[t._v("cancelAnimationFrame(animationId);")])]),t._v(" "),a("h2",{attrs:{id:"前端动画相关问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前端动画相关问题"}},[t._v("#")]),t._v(" 前端动画相关问题")]),t._v(" "),a("h3",{attrs:{id:"css-动画和-js-动画的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#css-动画和-js-动画的区别"}},[t._v("#")]),t._v(" css 动画和 js 动画的区别")]),t._v(" "),a("ol",[a("li",[t._v("复杂度不同")])]),t._v(" "),a("p",[t._v("css 动画相对简单，js 动画相对复杂")]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[t._v("兼容性不同")])]),t._v(" "),a("p",[t._v("CSS 动画 有兼容性问题，而 JS 大多时候没有兼容性问题")]),t._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[t._v("灵活性不同")])]),t._v(" "),a("p",[t._v("CSS 在动画控制上不够灵活，JavaScript 动画控制能力很强，可以在动画播放过程中对动画进行控制：开始、暂停、回放、终止、取消都是可以做到的。")]),t._v(" "),a("ol",{attrs:{start:"4"}},[a("li",[t._v("性能不同")])]),t._v(" "),a("p",[t._v("css 动画相对于优一些，css 动画通过 GUI 解析，js 动画需要经过 j s 引擎代码解析，然后再进行 GUI 解析渲染。")]),t._v(" "),a("ol",{attrs:{start:"5"}},[a("li",[t._v("适用场景不同")])]),t._v(" "),a("p",[t._v("对于一些复杂控制的动画，使用 javascript 会比较靠谱。而在实现一些小的交互动效的时候，就多考虑考虑 CSS 吧")])])}),[],!1,null,null,null);s.default=_.exports}}]);