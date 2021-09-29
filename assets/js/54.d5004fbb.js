(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{503:function(s,t,a){"use strict";a.r(t);var n=a(24),r=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"动态规划"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#动态规划"}},[s._v("#")]),s._v(" 动态规划")]),s._v(" "),a("p",[a("strong",[s._v("一般是二维问题")])]),s._v(" "),a("p",[s._v("首先，**动态规划问题的一般形式就是求最值。**动态规划其实是运筹学的一种最优化方法，只不过在计算机问题上应用比较多，比如说让你求最长递增子序列呀，最小编辑距离呀等等。")]),s._v(" "),a("p",[s._v("既然是要求最值，核心问题是什么呢？"),a("strong",[s._v("求解动态规划的核心问题是穷举")]),s._v("。因为要求最值，肯定要把所有可行的答案穷举出来，然后在其中找最值呗。")]),s._v(" "),a("p",[s._v("动态规划这么简单，就是穷举就完事了？我看到的动态规划问题都很难啊！")]),s._v(" "),a("p",[s._v("首先，动态规划的穷举有点特别，因为这类问题"),a("strong",[s._v("存在「重叠子问题」")]),s._v("，如果暴力穷举的话效率会极其低下，所以需要「备忘录」或者「DP table」来优化穷举过程，避免不必要的计算。")]),s._v(" "),a("p",[s._v("而且，动态规划问题一定会"),a("strong",[s._v("具备「最优子结构」")]),s._v("，才能通过子问题的最值得到原问题的最值。")]),s._v(" "),a("p",[s._v("另外，虽然动态规划的核心思想就是穷举求最值，但是问题可以千变万化，穷举所有可行解其实并不是一件容易的事，只有列出正确的「状态转移方程」，才能正确地穷举。")]),s._v(" "),a("p",[s._v("以上提到的重叠子问题、最优子结构、状态转移方程就是动态规划三要素。具体什么意思等会会举例详解，但是在实际的算法问题中，写出状态转移方程是最困难的，这也就是为什么很多朋友觉得动态规划问题困难的原因，我来提供我研究出来的一个思维框架，辅助你思考状态转移方程：")]),s._v(" "),a("p",[a("strong",[s._v("明确 base case -> 明确「状态」-> 明确「选择」 -> 定义 dp 数组/函数的含义。")])]),s._v(" "),a("h3",{attrs:{id:"备忘录方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#备忘录方法"}},[s._v("#")]),s._v(" 备忘录方法")]),s._v(" "),a("p",[s._v("备忘录方法是动态规划方法的变形。与动态规划算法不同的是，备忘录方法的递归方式是自顶向下的，而动态规划算法则是自底向上的")]),s._v(" "),a("h3",{attrs:{id:"动态规划的-3-个性质-必要条件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#动态规划的-3-个性质-必要条件"}},[s._v("#")]),s._v(" 动态规划的 3 个性质（必要条件）")]),s._v(" "),a("p",[s._v("能采用动态规划求解的问题的一般要具有 3 个性质：")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("最优化原理：如果问题的最优解所包含的子问题的解也是最优的，就称该问题具有最优子结构，即满足最优化原理。")])]),s._v(" "),a("li",[a("p",[s._v("无后效性：即某阶段状态一旦确定，就不受这个状态以后决策的影响。也就是说，某状态以后的过程不会影响以前的状态，只与当前状态有关。")])]),s._v(" "),a("li",[a("p",[s._v("有重叠子问题：即子问题之间是不独立的，一个子问题在下一阶段决策中可能被多次使用到。（该性质并不是动态规划适用的必要条件，但是如果没有这条性质，动态规划算法同其他算法相比就不具备优势）")])])]),s._v(" "),a("h3",{attrs:{id:"和分治法区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#和分治法区别"}},[s._v("#")]),s._v(" 和分治法区别")]),s._v(" "),a("p",[s._v("动态规划适用于分解得到的子问题往往不是相互独立的。在这种情况下如果采用分治法，有些子问题会被重复计算多次，动态规划通过记录已解决的子问题，可以避免重复计算。")]),s._v(" "),a("h3",{attrs:{id:"和贪心算法区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#和贪心算法区别"}},[s._v("#")]),s._v(" 和贪心算法区别")]),s._v(" "),a("p",[s._v("动规是由前一个状态推导出来的，而贪心是局部直接选最优")]),s._v(" "),a("h3",{attrs:{id:"动态规划流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#动态规划流程"}},[s._v("#")]),s._v(" 动态规划流程")]),s._v(" "),a("p",[s._v("一般流程就是三步："),a("strong",[s._v("暴力的递归解法 -> 带备忘录的递归解法 -> 迭代的动态规划解法。")])]),s._v(" "),a("p",[s._v("就思考流程来说，就分为一下几步："),a("strong",[s._v("找到状态和选择 -> 明确 dp 数组/函数的定义 -> 寻找状态之间的关系")])]),s._v(" "),a("ol",[a("li",[s._v("确定状态")])]),s._v(" "),a("p",[s._v("研究最优策略的最后一步、化为子问题")]),s._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[s._v("转移方程")])]),s._v(" "),a("p",[s._v("根据子问题定义直接得到")]),s._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[s._v("初始条件和边界情况")])]),s._v(" "),a("p",[s._v("细心，考虑周全")]),s._v(" "),a("ol",{attrs:{start:"4"}},[a("li",[s._v("计算顺序")])]),s._v(" "),a("p",[s._v("利用之前的计算结果")]),s._v(" "),a("h3",{attrs:{id:"动态规划框架"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#动态规划框架"}},[s._v("#")]),s._v(" 动态规划框架")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("# 初始化 base "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("case")]),s._v("\ndp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" base\n# 进行状态转移\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" 状态"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" 状态"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("的所有取值：\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" 状态"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" 状态"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("的所有取值：\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),s._v("\n            dp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("状态"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("状态"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("求最值")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("选择"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("，选择"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("h3",{attrs:{id:"动态规划题目特点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#动态规划题目特点"}},[s._v("#")]),s._v(" 动态规划题目特点")]),s._v(" "),a("ol",[a("li",[s._v("计数")])]),s._v(" "),a("p",[s._v("(1) 有多少种方式走到右下角")]),s._v(" "),a("p",[s._v("(2) 有多少种方法选出 k 个数使得和是 Sum")]),s._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[s._v("求最大值最小值")])]),s._v(" "),a("p",[s._v("(1) 从左上角走到右下角路径的最大数字和")]),s._v(" "),a("p",[s._v("(2) 最长上升序列长度")]),s._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[s._v("求存在性")])]),s._v(" "),a("p",[s._v("(1) 取石子游戏， 先手是否必胜")]),s._v(" "),a("p",[s._v("(2) 能不能选出 k 个数使得和是 Sum")]),s._v(" "),a("h3",{attrs:{id:"动态规划应用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#动态规划应用"}},[s._v("#")]),s._v(" 动态规划应用")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("路径问题(最小路径和、不同路径)")])]),s._v(" "),a("li",[a("p",[s._v("子序列问题(最长回文子序列、不同的子序列)")])])]),s._v(" "),a("h2",{attrs:{id:"动态规划算法题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#动态规划算法题"}},[s._v("#")]),s._v(" 动态规划算法题")]),s._v(" "),a("h3",{attrs:{id:"_1-最长回文子序列"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-最长回文子序列"}},[s._v("#")]),s._v(" 1. 最长回文子序列")]),s._v(" "),a("p",[s._v("核心思想就是两个字“延伸”：")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("如果一个字符串是回文串，那么在它左右分别加上一个相同的字符，那么它一定还是一个回文串，因此回文长度增加 2")])]),s._v(" "),a("li",[a("p",[s._v("如果一个字符串不是回文串，或者在回文串左右分别加不同的字符，得到的一定不是回文串,因此回文长度不变，我们取[i][j-1]和[i+1][j]的较大值")])])]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*\n * @lc app=leetcode id=516 lang=javascript\n *\n * [516] Longest Palindromic Subsequence\n */")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n * @param {string} s\n * @return {number}\n */")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("longestPalindromeSubseq")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("s")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// bbbab 返回4")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// tag : dp")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" dp "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("length "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    dp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Array")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("fill")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" j "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" j "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" j"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("i "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" j "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" dp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("j"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),s._v(" s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("j"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        dp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("j"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" dp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("i "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("j "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        dp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("j"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Math"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("max")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("dp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("j "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" dp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("i "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("j"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" dp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("length "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br")])])])}),[],!1,null,null,null);t.default=r.exports}}]);