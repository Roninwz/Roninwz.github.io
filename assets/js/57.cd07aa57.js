(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{568:function(t,s,a){"use strict";a.r(s);var r=a(14),n=Object(r.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"动态规划"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#动态规划"}},[t._v("#")]),t._v(" 动态规划")]),t._v(" "),a("p",[a("strong",[t._v("一般是二维问题")])]),t._v(" "),a("p",[t._v("首先，**动态规划问题的一般形式就是求最值。**动态规划其实是运筹学的一种最优化方法，只不过在计算机问题上应用比较多，比如说让你求最长递增子序列呀，最小编辑距离呀等等。")]),t._v(" "),a("p",[t._v("既然是要求最值，核心问题是什么呢？"),a("strong",[t._v("求解动态规划的核心问题是穷举")]),t._v("。因为要求最值，肯定要把所有可行的答案穷举出来，然后在其中找最值呗。")]),t._v(" "),a("p",[t._v("动态规划这么简单，就是穷举就完事了？我看到的动态规划问题都很难啊！")]),t._v(" "),a("p",[t._v("首先，动态规划的穷举有点特别，因为这类问题"),a("strong",[t._v("存在「重叠子问题」")]),t._v("，如果暴力穷举的话效率会极其低下，所以需要「备忘录」或者「DP table」来优化穷举过程，避免不必要的计算。")]),t._v(" "),a("p",[t._v("而且，动态规划问题一定会"),a("strong",[t._v("具备「最优子结构」")]),t._v("，才能通过子问题的最值得到原问题的最值。")]),t._v(" "),a("p",[t._v("另外，虽然动态规划的核心思想就是穷举求最值，但是问题可以千变万化，穷举所有可行解其实并不是一件容易的事，只有列出正确的「状态转移方程」，才能正确地穷举。")]),t._v(" "),a("p",[t._v("以上提到的重叠子问题、最优子结构、状态转移方程就是动态规划三要素。具体什么意思等会会举例详解，但是在实际的算法问题中，写出状态转移方程是最困难的，这也就是为什么很多朋友觉得动态规划问题困难的原因，我来提供我研究出来的一个思维框架，辅助你思考状态转移方程：")]),t._v(" "),a("p",[a("strong",[t._v("明确 base case -> 明确「状态」-> 明确「选择」 -> 定义 dp 数组/函数的含义。")])]),t._v(" "),a("h3",{attrs:{id:"备忘录方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#备忘录方法"}},[t._v("#")]),t._v(" 备忘录方法")]),t._v(" "),a("p",[t._v("备忘录方法是动态规划方法的变形。与动态规划算法不同的是，备忘录方法的递归方式是自顶向下的，而动态规划算法则是自底向上的")]),t._v(" "),a("h3",{attrs:{id:"动态规划的-3-个性质-必要条件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#动态规划的-3-个性质-必要条件"}},[t._v("#")]),t._v(" 动态规划的 3 个性质（必要条件）")]),t._v(" "),a("p",[t._v("能采用动态规划求解的问题的一般要具有 3 个性质：")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("最优化原理：如果问题的最优解所包含的子问题的解也是最优的，就称该问题具有最优子结构，即满足最优化原理。")])]),t._v(" "),a("li",[a("p",[t._v("无后效性：即某阶段状态一旦确定，就不受这个状态以后决策的影响。也就是说，某状态以后的过程不会影响以前的状态，只与当前状态有关。")])]),t._v(" "),a("li",[a("p",[t._v("有重叠子问题：即子问题之间是不独立的，一个子问题在下一阶段决策中可能被多次使用到。（该性质并不是动态规划适用的必要条件，但是如果没有这条性质，动态规划算法同其他算法相比就不具备优势）")])])]),t._v(" "),a("h3",{attrs:{id:"和分治法区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#和分治法区别"}},[t._v("#")]),t._v(" 和分治法区别")]),t._v(" "),a("p",[t._v("动态规划适用于分解得到的子问题往往不是相互独立的。在这种情况下如果采用分治法，有些子问题会被重复计算多次，动态规划通过记录已解决的子问题，可以避免重复计算。")]),t._v(" "),a("h3",{attrs:{id:"和贪心算法区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#和贪心算法区别"}},[t._v("#")]),t._v(" 和贪心算法区别")]),t._v(" "),a("p",[t._v("动规是由前一个状态推导出来的，而贪心是局部直接选最优")]),t._v(" "),a("h3",{attrs:{id:"动态规划流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#动态规划流程"}},[t._v("#")]),t._v(" 动态规划流程")]),t._v(" "),a("p",[t._v("一般流程就是三步："),a("strong",[t._v("暴力的递归解法 -> 带备忘录的递归解法 -> 迭代的动态规划解法。")])]),t._v(" "),a("p",[t._v("就思考流程来说，就分为一下几步："),a("strong",[t._v("找到状态和选择 -> 明确 dp 数组/函数的定义 -> 寻找状态之间的关系")])]),t._v(" "),a("ol",[a("li",[t._v("确定状态")])]),t._v(" "),a("p",[t._v("研究最优策略的最后一步、化为子问题")]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[t._v("转移方程")])]),t._v(" "),a("p",[t._v("根据子问题定义直接得到")]),t._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[t._v("初始条件和边界情况")])]),t._v(" "),a("p",[t._v("细心，考虑周全")]),t._v(" "),a("ol",{attrs:{start:"4"}},[a("li",[t._v("计算顺序")])]),t._v(" "),a("p",[t._v("利用之前的计算结果")]),t._v(" "),a("h3",{attrs:{id:"动态规划框架"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#动态规划框架"}},[t._v("#")]),t._v(" 动态规划框架")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("# 初始化 base "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v("\ndp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" base\n# 进行状态转移\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" 状态"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" 状态"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("的所有取值：\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" 状态"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" 状态"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("的所有取值：\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n            dp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("状态"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("状态"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("求最值")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("选择"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("，选择"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])]),a("h3",{attrs:{id:"动态规划题目特点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#动态规划题目特点"}},[t._v("#")]),t._v(" 动态规划题目特点")]),t._v(" "),a("ol",[a("li",[t._v("计数")])]),t._v(" "),a("p",[t._v("(1) 有多少种方式走到右下角")]),t._v(" "),a("p",[t._v("(2) 有多少种方法选出 k 个数使得和是 Sum")]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[t._v("求最大值最小值")])]),t._v(" "),a("p",[t._v("(1) 从左上角走到右下角路径的最大数字和")]),t._v(" "),a("p",[t._v("(2) 最长上升序列长度")]),t._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[t._v("求存在性")])]),t._v(" "),a("p",[t._v("(1) 取石子游戏， 先手是否必胜")]),t._v(" "),a("p",[t._v("(2) 能不能选出 k 个数使得和是 Sum")]),t._v(" "),a("h3",{attrs:{id:"动态规划应用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#动态规划应用"}},[t._v("#")]),t._v(" 动态规划应用")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("路径问题(最小路径和、不同路径)")])]),t._v(" "),a("li",[a("p",[t._v("子序列问题(最长回文子序列、不同的子序列)")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);