(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{460:function(t,s,a){"use strict";a.r(s);var n=a(19),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"回溯法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#回溯法"}},[t._v("#")]),t._v(" 回溯法")]),t._v(" "),a("p",[t._v("回溯法是一种选优搜索法又称为试探法")]),t._v(" "),a("p",[t._v("按选优条件向前搜索以达到目标但当探索到某一步时发现原先选择并不优或达不到目标就退回一步,重新选择这种走不通就退回再走的技术为回溯法")]),t._v(" "),a("p",[t._v("而满足回溯条件的某个状态的点称为回溯点")]),t._v(" "),a("h3",{attrs:{id:"回溯法三个关键点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#回溯法三个关键点"}},[t._v("#")]),t._v(" 回溯法三个关键点")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("路径：也就是已经做出的选择。")])]),t._v(" "),a("li",[a("p",[t._v("选择列表：也就是你当前可以做的选择。")])]),t._v(" "),a("li",[a("p",[t._v("结束条件：也就是到达决策树底层，无法再做选择的条件。")])])]),t._v(" "),a("h3",{attrs:{id:"回溯法算法框架"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#回溯法算法框架"}},[t._v("#")]),t._v(" 回溯法算法框架")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("\nresult "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("backtrack")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("路径"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 选择列表")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("满足结束条件"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        result"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("路径"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" 选择列表的长度 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        做选择\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("backtrack")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("路径"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 选择列表"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        撤销选择\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br")])]),a("h3",{attrs:{id:"解决问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解决问题"}},[t._v("#")]),t._v(" 解决问题")]),t._v(" "),a("p",[t._v("回溯算法能进行暴力的搜索，它解决的问题是需要暴力才能解决的问题, 以下列举回溯能解决的六种常见问题类型。")]),t._v(" "),a("ol",[a("li",[t._v("组合问题")])]),t._v(" "),a("p",[t._v("比如请给出数字[1, 2, 3, 4]两两组合的每种可能性，结果就是[12, 13, 14, 23, 24, 34]，因为23和32是一个组合，所以忽略32。如果你说这个很简答了，使用循环也可以解决，那题目条件换一下，给出数字1 - 20之间每12种组合的可能性，这时遍历就不好使了。")]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[t._v("排列问题")])]),t._v(" "),a("p",[t._v("给出[1, 2, 3]所有的全排列的可能性，结果就是[123, 132, 213, 231, 312, 321]。")]),t._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[t._v("子集问题")])]),t._v(" "),a("p",[t._v("给出数字[1, 2, 3]所有的子集(幂集)的可能性，结果就是[[], [1], [1,2], [1,2,3], [1,3], [2], [2,3], [3]]。")]),t._v(" "),a("ol",{attrs:{start:"4"}},[a("li",[t._v("分割问题")])]),t._v(" "),a("p",[t._v('给出一个数字字符串25525511135，返回它所有组成IP地址格式的可能，结果就是["255.255.11.135", "255.255.111.35"]。')]),t._v(" "),a("ol",{attrs:{start:"5"}},[a("li",[t._v("floodFill填色问题")])]),t._v(" "),a("p",[t._v("问题类型参考力扣200岛屿和547朋友圈，之后详细介绍。")]),t._v(" "),a("ol",{attrs:{start:"6"}},[a("li",[t._v("棋盘问题")])]),t._v(" "),a("p",[t._v("类型参考解数独和8皇后问题，之后详细介绍。")]),t._v(" "),a("p",[t._v("上述的六种类型看着区别可能挺大，其实它们都是树型问题这个类型，这个到具体问题讲解时再说明其中的道道。")])])}),[],!1,null,null,null);s.default=r.exports}}]);