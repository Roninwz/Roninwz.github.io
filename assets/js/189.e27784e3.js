(window.webpackJsonp=window.webpackJsonp||[]).push([[189],{722:function(t,a,i){"use strict";i.r(a);var v=i(14),l=Object(v.a)({},(function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[i("h2",{attrs:{id:"bfc"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#bfc"}},[t._v("#")]),t._v(" BFC")]),t._v(" "),i("p",[t._v("BFC (Block Formatting Context)块级格式化上下文，主要针对块级元素")]),t._v(" "),i("p",[t._v("注意：一个 BFC 的范围包含创建该上下文元素的所有子元素，但不包括创建了新 BFC 的子元素的内部元素。这从另一方角度说明，一个元素不能同时存在于两个 BFC 中。因为如果一个元素能够同时处于两个 BFC 中，那么就意味着这个元素能与两个 BFC 中的元素发生作用，就违反了 BFC 的隔离作用。")]),t._v(" "),i("h3",{attrs:{id:"bfc-触发方式"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#bfc-触发方式"}},[t._v("#")]),t._v(" BFC 触发方式")]),t._v(" "),i("p",[t._v("BFC = OFDP")]),t._v(" "),i("ol",[i("li",[t._v("根元素，即 HTML 标签")]),t._v(" "),i("li",[t._v("浮动元素：float 值为 left、right")]),t._v(" "),i("li",[t._v("overflow 值不为 visible，为 auto、scroll、hidden")]),t._v(" "),i("li",[t._v("display 值为 inline-block、table-cell、table-caption、table、inline-table、flex、inline-flex、grid、inline-grid")]),t._v(" "),i("li",[t._v("定位元素：position 值为 absolute、fixed")])]),t._v(" "),i("p",[t._v("注意：display:table 也可以生成 BFC 的原因在于 Table 会默认生成一个匿名的 table-cell，是这个匿名的 table-cell 生成了 BFC。")]),t._v(" "),i("h3",{attrs:{id:"bfc-约束规则"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#bfc-约束规则"}},[t._v("#")]),t._v(" BFC 约束规则")]),t._v(" "),i("h4",{attrs:{id:"浏览器对-bfc-区域的约束规则"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#浏览器对-bfc-区域的约束规则"}},[t._v("#")]),t._v(" 浏览器对 BFC 区域的约束规则：")]),t._v(" "),i("ol",[i("li",[i("p",[t._v("生成 BFC 元素的子元素(块级)会一个接一个的放置。")])]),t._v(" "),i("li",[i("p",[t._v("垂直方向上他们的起点是一个包含块的顶部，两个相邻子元素之间的垂直距离取决于元素的 margin 特性。在 BFC 中相邻的块级元素的外边距会折叠(Mastering margin collapsing)。")])]),t._v(" "),i("li",[i("p",[t._v("生成 BFC 元素的子元素中，每一个子元素左外边距与包含块的左边界相接触（对于从右到左的格式化，右外边距接触右边界），即使浮动元素也是如此（尽管子元素的内容区域会由于浮动而压缩），除非这个子元素也创建了一个新的 BFC（如它自身也是一个浮动元素）。")])])]),t._v(" "),i("h4",{attrs:{id:"规则解读"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#规则解读"}},[t._v("#")]),t._v(" 规则解读：")]),t._v(" "),i("ol",[i("li",[i("p",[t._v("内部的 Box 会在垂直方向上一个接一个的放置")])]),t._v(" "),i("li",[i("p",[t._v("内部的 Box 垂直方向上的距离由 margin 决定。（完整的说法是：属于同一个 BFC 的两个相邻 Box 的 margin 会发生折叠，不同 BFC 不会发生折叠。）")])]),t._v(" "),i("li",[i("p",[t._v("每个元素的左外边距与包含块的左边界相接触（从左向右），即使浮动元素也是如此。（这说明 BFC 中子元素不会超出他的包含块，而 position 为 absolute 的元素可以超出他的包含块边界）")])]),t._v(" "),i("li",[i("p",[t._v("BFC 的区域不会与 float 的元素区域重叠")])]),t._v(" "),i("li",[i("p",[t._v("计算 BFC 的高度时，浮动子元素也参与计算")])])]),t._v(" "),i("h3",{attrs:{id:"bfc-作用"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#bfc-作用"}},[t._v("#")]),t._v(" BFC 作用")]),t._v(" "),i("p",[t._v("BFC 是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面元素，反之亦然。我们可以利用 BFC 的这个特性来做很多事。")]),t._v(" "),i("ol",[i("li",[t._v("阻止元素被浮动元素覆盖")])]),t._v(" "),i("p",[t._v("一个正常文档流的 block 元素可能被一个 float 元素覆盖，挤占正常文档流，因此可以设置一个元素的 float、display、position 值等方式触发 BFC，以阻止被浮动盒子覆盖。")]),t._v(" "),i("ol",{attrs:{start:"2"}},[i("li",[t._v("阻止垂直外边距（margin-top、margin-bottom）折叠")])]),t._v(" "),i("p",[t._v("属于同一个 BFC 的两个相邻块级子元素（元素都要在文档流中）的上下 margin 会发生重叠—— 分为两个 BFC 就可以消除这种 margin 重叠。")]),t._v(" "),i("p",[t._v("解决：触发其中一个 div 的 BFC，使得两个 div 不在同一个 BFC 内，这样就可以阻止这两个 div 的 margin 重叠。")]),t._v(" "),i("ol",{attrs:{start:"3"}},[i("li",[t._v("可以包含浮动元素，清除内部浮动，防止高度塌陷")])]),t._v(" "),i("p",[t._v("通过改变包含浮动子元素的父盒子的属性值，触发 BFC，以此来包含子元素的浮动盒子。")]),t._v(" "),i("p",[t._v("注意，这里触发 BFC 并不能阻止其它形式的脱离文档流的元素覆盖正常流元素。(BFC 内部其他形式脱离文档流(absolute fixed))")]),t._v(" "),i("ol",{attrs:{start:"4"}},[i("li",[t._v("阻止因为浏览器因为四舍五入造成的多列布局换行的情况")])]),t._v(" "),i("p",[t._v("有时候因为多列布局采用小数点位的 width 导致因为浏览器因为四舍五入造成的换行的情况，可以在最后一列触发 BFC 的形式来阻止换行的发生。比如下面栗子的特殊情况")]),t._v(" "),i("hr"),t._v(" "),i("p",[t._v("参考："),i("a",{attrs:{href:"https://segmentfault.com/a/1190000013023485",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://segmentfault.com/a/1190000013023485"),i("OutboundLink")],1)]),t._v(" "),i("h2",{attrs:{id:"ifc"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#ifc"}},[t._v("#")]),t._v(" IFC")]),t._v(" "),i("p",[t._v("(Inline Formatting Context)行内格式化上下文，主要针对行内元素")]),t._v(" "),i("p",[t._v("IFC 布局规则")]),t._v(" "),i("ol",[i("li",[i("p",[t._v("子元素水平方向横向排列，并且垂直方向起点为元素顶部。")])]),t._v(" "),i("li",[i("p",[t._v("子元素只会计算横向样式空间，【padding、border、margin】，垂直方向样式空间不会被计算，【padding、border、margin】。")])]),t._v(" "),i("li",[i("p",[t._v("在垂直方向上，子元素会以不同形式来对齐（vertical-align）")])]),t._v(" "),i("li",[i("p",[t._v("能把在一行上的框都完全包含进去的一个矩形区域，被称为该行的行框（line box）。行框的宽度是由包含块（containing box）和与其中的浮动来决定。")])]),t._v(" "),i("li",[i("p",[t._v("IFC 中的“line box”一般左右边贴紧其包含块，但 float 元素会优先排列。")])]),t._v(" "),i("li",[i("p",[t._v("IFC 中的“line box”高度由 CSS 行高计算规则来确定，同个 IFC 下的多个 line box 高度可能会不同。")])]),t._v(" "),i("li",[i("p",[t._v("当 inline-level boxes 的总宽度少于包含它们的 line box 时，其水平渲染规则由 text-align 属性值来决定。")])]),t._v(" "),i("li",[i("p",[t._v("当一个“inline box”超过父元素的宽度时，它会被分割成多个 boxes，这些 oxes 分布在多个“line box”中。如果子元素未设置强制换行的情况下，“inline box”将不可被分割，将会溢出父元素。")])])]),t._v(" "),i("h2",{attrs:{id:"gfc"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#gfc"}},[t._v("#")]),t._v(" GFC")]),t._v(" "),i("p",[t._v("GFC（GrideLayout formatting contexts）：网格布局格式化上下文")]),t._v(" "),i("h2",{attrs:{id:"ffc"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#ffc"}},[t._v("#")]),t._v(" FFC")]),t._v(" "),i("p",[t._v("FFC（Flex formatting contexts）:自适应格式上下文")])])}),[],!1,null,null,null);a.default=l.exports}}]);