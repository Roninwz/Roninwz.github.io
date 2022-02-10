(window.webpackJsonp=window.webpackJsonp||[]).push([[210],{743:function(s,t,a){"use strict";a.r(t);var e=a(14),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"less-简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#less-简介"}},[s._v("#")]),s._v(" less 简介")]),s._v(" "),a("ul",[a("li",[s._v("网址")])]),s._v(" "),a("blockquote",[a("p",[s._v("bootcss 中文网： "),a("a",{attrs:{href:"https://less.bootcss.com/",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://less.bootcss.com/"),a("OutboundLink")],1)])]),s._v(" "),a("blockquote",[a("p",[s._v("lesscss 中文网："),a("a",{attrs:{href:"http://lesscss.cn/",target:"_blank",rel:"noopener noreferrer"}},[s._v("http://lesscss.cn/"),a("OutboundLink")],1)])]),s._v(" "),a("h3",{attrs:{id:"vue-cli3-中使用-less"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue-cli3-中使用-less"}},[s._v("#")]),s._v(" vue-cli3 中使用 less")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("安装依赖： "),a("code",[s._v("npm install less-loader --save-dev")])])]),s._v(" "),a("li",[a("p",[s._v("局部导入外部 less")])])]),s._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("style")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("scoped")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("lang")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("less"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),a("span",{pre:!0,attrs:{class:"token style"}},[a("span",{pre:!0,attrs:{class:"token language-css"}},[s._v("\n  "),a("span",{pre:!0,attrs:{class:"token atrule"}},[a("span",{pre:!0,attrs:{class:"token rule"}},[s._v("@import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"../assets/styles/varibles.less"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token atrule"}},[a("span",{pre:!0,attrs:{class:"token rule"}},[s._v("@import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"../assets/styles/mixins.less"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* 样式代码 */")]),s._v("\n")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("style")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("ul",[a("li",[s._v("全局引入外部 less")])]),s._v(" "),a("blockquote",[a("p",[s._v("全局 less 文件，只需在 main.js 里引入即可："),a("code",[s._v("import './../theme/theme.less'")])])]),s._v(" "),a("h3",{attrs:{id:"less-和-sass-的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#less-和-sass-的区别"}},[s._v("#")]),s._v(" less 和 sass 的区别")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("实现方式不同")]),s._v(" "),a("p",[s._v("Less 是基于 JavaScript，是在客户端处理的。")]),s._v(" "),a("p",[s._v("Sass 是基于 Ruby 的，是在服务器端处理的，以前是 Ruby，现在是 Dart-Sass 或 Node-Sass。")])]),s._v(" "),a("li",[a("p",[s._v("变量符不同")])])]),s._v(" "),a("p",[s._v("Less 用"),a("code",[s._v("@")]),s._v("，Sass 用"),a("code",[s._v("$")]),s._v("。")]),s._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[s._v("输出设置不同")])]),s._v(" "),a("p",[s._v("Less 没有输出设置，Sass 提供 4 中输出选项：nested, compact, compressed 和 expanded。")]),s._v(" "),a("p",[s._v("输出样式的风格可以有四种选择，默认为 nested")]),s._v(" "),a("ul",[a("li",[s._v("nested：嵌套缩进的 css 代码")]),s._v(" "),a("li",[s._v("expanded：展开的多行 css 代码")]),s._v(" "),a("li",[s._v("compact：简洁格式的 css 代码")]),s._v(" "),a("li",[s._v("compressed：压缩后的 css 代码")])]),s._v(" "),a("ol",{attrs:{start:"4"}},[a("li",[a("p",[s._v("Sass 支持条件语句，可以使用 if{}else{},for{}循环等等。而 Less 不支持。")])]),s._v(" "),a("li",[a("p",[s._v("引用外部 CSS 文件不同")])])]),s._v(" "),a("p",[s._v("scss@import 引用的外部文件如果不想编译时多生成同名的.css 文件，命名必须以"),a("em",[s._v("开头, 文件名如果以下划线")]),s._v("开头的话，Sass 会认为该文件是一个引用文件，不会将其编译为同名 css 文件.")]),s._v(" "),a("p",[s._v("Less 引用外部文件和 css 中的@import 没什么差异。")])])}),[],!1,null,null,null);t.default=n.exports}}]);