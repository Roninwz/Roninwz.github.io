(window.webpackJsonp=window.webpackJsonp||[]).push([[199],{628:function(t,s,a){"use strict";a.r(s);var n=a(19),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"js-循环"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#js-循环"}},[t._v("#")]),t._v(" js 循环")]),t._v(" "),a("h3",{attrs:{id:"for"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#for"}},[t._v("#")]),t._v(" for")]),t._v(" "),a("ul",[a("li",[t._v("1、for 有三个表达式：① 声明循环变量；② 判断循环条件；③ 更新循环变量；三个表达式之间，用;分割，for 循环三个表达式都可以省略，但是两个“;”缺一不可。")]),t._v(" "),a("li",[t._v("2、for 循环的执行特点：先判断再执行，与 while 相同")]),t._v(" "),a("li",[t._v("3、for 循环三个表达式都可以有多部分组成，第二部分多个判断条件用&& ||连接，第一三部分用逗号分割；")])]),t._v(" "),a("h3",{attrs:{id:"for-in"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#for-in"}},[t._v("#")]),t._v(" for in")]),t._v(" "),a("p",[t._v("for-in 循环主要用于遍历对象")]),t._v(" "),a("p",[t._v("for-in语法："),a("code",[t._v("for(keys in zhangsan){}")])]),t._v(" "),a("p",[t._v("keys 表示 obj 对象的每一个键值对的键！！所有循环中，需要使用 obj[keys]来取到每一个值！！！")]),t._v(" "),a("p",[t._v("for-in 循环，遍历时不仅能读取对象自身上面的成员属性，也能延续原型链遍历出对象的原型属性")]),t._v(" "),a("p",[t._v("所以，可以使用 hasOwnProperty 判断一个属性是不是对象自身上的属性。")]),t._v(" "),a("p",[t._v("obj.hasOwnProperty(keys)==true 表示这个属性是对象的成员属性，而不是原先属性")]),t._v(" "),a("p",[t._v("使用for in 也可以遍历数组，但是会存在以下问题：")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("for in遍历的是数组的索引（即键名），而for of遍历的是数组元素值。")])]),t._v(" "),a("li",[a("p",[t._v("遍历顺序有可能不是按照实际数组的内部顺序")])]),t._v(" "),a("li",[a("p",[t._v("使用for in会遍历数组所有的可枚举属性，包括原型属性")])]),t._v(" "),a("li",[a("p",[t._v("index索引为字符串型数字，不能直接进行几何运算")])])]),t._v(" "),a("h3",{attrs:{id:"for-of"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#for-of"}},[t._v("#")]),t._v(" for of")]),t._v(" "),a("blockquote",[a("p",[t._v("ES6 借鉴 C++、Java、C# 和 Python 语言，引入了 for...of 循环，作为遍历所有数据结构的统一的方法。")])]),t._v(" "),a("blockquote",[a("p",[t._v("一个数据结构只要部署了 Symbol.iterator 属性，就被视为具有 iterator 接口，就可以用 for...of 循环遍历它的成员。\n也就是说，for...of 循环内部调用的是数据结构的 Symbol.iterator 方法。\nfor...of 循环可以使用的范围包括数组、Set 和 Map 结构、某些类似数组的对象（比如 arguments 对象、DOM NodeList 对象）、后文的 Generator 对象，以及字符串。")])]),t._v(" "),a("h3",{attrs:{id:"map"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#map"}},[t._v("#")]),t._v(" map")]),t._v(" "),a("p",[t._v("以一个数组的每一项为基础，构造出一个新数组。")]),t._v(" "),a("ul",[a("li",[t._v("语法： "),a("code",[t._v("arr.map(function(self,index,arr){},this);")]),t._v(" 和forEach一致")])]),t._v(" "),a("blockquote",[a("p",[t._v("self：数组当前遍历的元素，默认从左往右依次获取数组元素。")])]),t._v(" "),a("blockquote",[a("p",[t._v("index：数组当前元素的索引，第一个元素索引为 0，依次类推。")])]),t._v(" "),a("blockquote",[a("p",[t._v("arr：当前遍历的数组。")])]),t._v(" "),a("blockquote",[a("p",[t._v("this：回调函数中 this 指向。")])]),t._v(" "),a("h3",{attrs:{id:"foreach"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#foreach"}},[t._v("#")]),t._v(" forEach")]),t._v(" "),a("p",[t._v("forEach对数组的每一项执行同样的操作")]),t._v(" "),a("ul",[a("li",[t._v("语法： "),a("code",[t._v("arr.forEach(function(self,index,arr){},this);")])])]),t._v(" "),a("blockquote",[a("p",[t._v("self：数组当前遍历的元素，默认从左往右依次获取数组元素。")])]),t._v(" "),a("blockquote",[a("p",[t._v("index：数组当前元素的索引，第一个元素索引为 0，依次类推。")])]),t._v(" "),a("blockquote",[a("p",[t._v("arr：当前遍历的数组。")])]),t._v(" "),a("blockquote",[a("p",[t._v("this：回调函数中 this 指向。")])]),t._v(" "),a("ul",[a("li",[a("p",[t._v("注意点")]),t._v(" "),a("ol",[a("li",[t._v("forEach 不支持 break")]),t._v(" "),a("li",[t._v("forEach 中使用 return 无效")]),t._v(" "),a("li",[t._v("forEach 删除自身元素 index 不会被重置")])])])]),t._v(" "),a("p",[t._v("可改变原数组情况：")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'1'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("num"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\na"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("forEach")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("item"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" index"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" arr")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    item"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("num "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n    item "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// [1,'1',{num:2},true]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 改变原因：由于对象是引用类型，新对象和旧对象指向的都是同一个地址，所以新对象把num变成了2，原数组中的对象也改变了")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\na"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("forEach")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("item"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" index"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" arr")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    arr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("index"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" item "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// [2,4,6,8,10]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 改变原因：同上，参数中的arr也只是原数组的一个拷贝，如果修改数组中的某一项则原数组也改变因为指向同一引用地址")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br")])]),a("p",[t._v("不可改变原数组情况：")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\na"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("forEach")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("item")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    item "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" item "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// [1,2,3,4,5]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 不改变原因：因为item的值并不是相应的原数组中的值，而是重新建立的一个新变量，值和原数组相同。")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'1'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("num"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\na"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("forEach")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("item"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" index"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" arr")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    item "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// [1,'1',{num:1},true]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 不改变原因：数组中的对象的值也没有改变，是因为新创建的变量和原数组中的对象虽然指向同一个地址，但改变的是新变量的值，即新对象的值为2，原数组中的对象还是{num:1}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br")])]),a("p",[t._v("上面改变不改变的原因：")]),t._v(" "),a("p",[t._v("核心原理：栈(stack)内存和堆(heap)内存")]),t._v(" "),a("p",[t._v("JS中的基本数据类型是存在于栈内存中，在栈内存中储存变量名及相应的值。而Object,Array,Function存在于堆内存中，栈中储存对象的地址指针，堆内存储存变量名及相应的值")]),t._v(" "),a("blockquote",[a("p",[t._v("详解： "),a("a",{attrs:{href:"https://www.cnblogs.com/echolun/p/11544045.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.cnblogs.com/echolun/p/11544045.html"),a("OutboundLink")],1)])]),t._v(" "),a("h3",{attrs:{id:"for-in和for-of区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#for-in和for-of区别"}},[t._v("#")]),t._v(" for-in和for-of区别")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("for...in 循环有几个缺点\n　　 ① 数组的键名是数字，但是 for...in 循环是以字符串作为键名“0”、“1”、“2”等等。\n　　 ②for...in 循环不仅遍历数字键名，还会遍历手动添加的其他键，甚至包括原型链上的键。\n　　 ③ 某些情况下，for...in 循环会以任意顺序遍历键名。\n　　 for...in 循环主要是为遍历对象而设计的，不适用于遍历数组。")])]),t._v(" "),a("li",[a("p",[t._v("for...of 循环\n　　有着同 for...in 一样的简洁语法，但是没有 for...in 那些缺点。\n　　不同于 forEach 方法，它可以与 break、continue 和 return 配合使用。\n　　提供了遍历所有数据结构的统一操作接口。")])]),t._v(" "),a("li",[a("p",[t._v("详解： "),a("a",{attrs:{href:"https://www.cnblogs.com/baiyunke/p/7821299.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.cnblogs.com/baiyunke/p/7821299.html"),a("OutboundLink")],1)])])]),t._v(" "),a("h3",{attrs:{id:"map和foreach区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#map和foreach区别"}},[t._v("#")]),t._v(" map和forEach区别")]),t._v(" "),a("ol",[a("li",[t._v("返回值：")])]),t._v(" "),a("p",[t._v("forEach()方法不会返回执行结果，而是undefined，不可以链式调用。")]),t._v(" "),a("p",[t._v("map()方法会得到一个新的数组并返回，可以与其他方法(如reduce()、sort()、filter())链接在一起")]),t._v(" "),a("p",[t._v("相同点：")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("对空数组不会调用回调函数")])]),t._v(" "),a("li",[a("p",[t._v("两种方法都不能用 break 中断，否则会引发异常（不能使用break跳出整个循环，不能使用continue跳出本次循环）")])]),t._v(" "),a("li",[a("p",[t._v("map和forEach都没有for循环快")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);