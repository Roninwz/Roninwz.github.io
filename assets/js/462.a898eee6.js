(window.webpackJsonp=window.webpackJsonp||[]).push([[462],{907:function(t,s,a){"use strict";a.r(s);var e=a(19),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"git-管理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-管理"}},[t._v("#")]),t._v(" git 管理")]),t._v(" "),a("h3",{attrs:{id:"分支管理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分支管理"}},[t._v("#")]),t._v(" 分支管理")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("开发 develop")]),t._v(" "),a("blockquote",[a("p",[t._v("develop 为开发分支，始终保持最新完成以及 bug 修复后的代码\n一般开发的新功能时，feature 分支都是基于 develop 分支下创建的")])])]),t._v(" "),a("li",[a("p",[t._v("测试 test")])]),t._v(" "),a("li",[a("p",[t._v("集成测试 itest")])]),t._v(" "),a("li",[a("p",[t._v("release 分支 release/xxx")]),t._v(" "),a("blockquote",[a("p",[t._v("命名： release/v1.0.0 ， 版本\nrelease 为预上线分支，拿到测试报告，以 test 分支为基准建立 release 分支，以准备发布预发和生产环境")])])]),t._v(" "),a("li",[a("p",[t._v("预发 pre")]),t._v(" "),a("blockquote",[a("p",[t._v("发布预发环境")])])]),t._v(" "),a("li",[a("p",[t._v("生产 master")]),t._v(" "),a("blockquote",[a("p",[t._v("master 为主分支，也是用于部署生产环境的分支，确保 master 分支稳定性\nmaster 分支一般由 pre(预发) 以及 hotfix 分支合并，任何时间都不能直接修改代码")])])]),t._v(" "),a("li",[a("p",[t._v("功能分支 feature/xxx")]),t._v(" "),a("blockquote",[a("p",[t._v("开发新功能时，以 develop 为基础创建 feature 分支\n分支命名: feature/ 开头的为特性分支， 命名规则: feature/user_module、 feature/cart_module")])])]),t._v(" "),a("li",[a("p",[t._v("hotfix 分支")]),t._v(" "),a("blockquote",[a("p",[t._v("命名： hotfix/xxx\n线上出现紧急问题时，需要及时修复，以 master 分支为基线，创建 hotfix 分支，修复完成后，需要合并到 master 分支和 develop 分支")])])])]),t._v(" "),a("h3",{attrs:{id:"commit-规范"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#commit-规范"}},[t._v("#")]),t._v(" commit 规范")]),t._v(" "),a("h4",{attrs:{id:"中文模板"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#中文模板"}},[t._v("#")]),t._v(" 中文模板")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("提交类型"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("提交内容概述"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n ​\n "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("空行"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n ​\n "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" 具体内容"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" 具体内容"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" 具体内容"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("\n ​\n "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("空行"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n ​\n "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" 其他备注\n "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" 其他备注\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br")])]),a("h4",{attrs:{id:"英文模板"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#英文模板"}},[t._v("#")]),t._v(" 英文模板")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("type"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("scope"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("subject"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("BLANK")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("LINE")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("body"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("BLANK")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("LINE")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("footer"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("h4",{attrs:{id:"commit-规范简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#commit-规范简介"}},[t._v("#")]),t._v(" commit 规范简介")]),t._v(" "),a("blockquote",[a("p",[t._v("头行(第一行) 50 个字符以内，描述主要变更内容")])]),t._v(" "),a("ul",[a("li",[a("p",[t._v("type:")]),t._v(" "),a("blockquote",[a("p",[t._v("本次 commit 的类型，诸如 bugfix docs style 等")])]),t._v(" "),a("ul",[a("li",[t._v("feat: 添加新特性")]),t._v(" "),a("li",[t._v("fix: 修复 bug")]),t._v(" "),a("li",[t._v("docs: 仅仅修改了文档")]),t._v(" "),a("li",[t._v("style: 仅仅修改了空格、格式缩进、都好等等，不改变代码逻辑")]),t._v(" "),a("li",[t._v("refactor: 代码重构，没有加新功能或者修复 bug")]),t._v(" "),a("li",[t._v("perf: 增加代码进行性能测试")]),t._v(" "),a("li",[t._v("test: 增加测试用例")]),t._v(" "),a("li",[t._v("chore: 改变构建流程、或者增加依赖库、工具等")]),t._v(" "),a("li",[t._v("scope: 本次 commit 波及的范围")])])]),t._v(" "),a("li",[a("p",[t._v("scope(可选)")]),t._v(" "),a("blockquote",[a("p",[t._v("范围可以是指定提交更改位置的任何内容，\n如：chore(package.json): 新增依赖库")])])]),t._v(" "),a("li",[a("p",[t._v("subject")]),t._v(" "),a("blockquote",[a("p",[t._v("简明扼要的阐述下本次 commit 的主旨，在原文中特意强调了几点"),a("br"),t._v("\n1.使用祈使句，是不是很熟悉又陌生的一个词，来传送门在此 祈使句"),a("br"),t._v("\n2.首字母不要大写"),a("br"),t._v("\n3.结尾无需添加标点")])])]),t._v(" "),a("li",[a("p",[t._v("body")])])]),t._v(" "),a("blockquote",[a("p",[t._v("主体内容：更详细的说明文本，建议 72 个字符以内。 需要描述的信息包括(如需换行，则使用 |):\n为什么这个变更是必须的? 它可能是用来修复一个 bug，增加一个 feature，提升性能、可靠性、稳定性等等\n他如何解决这个问题? 具体描述解决问题的步骤\n是否存在副作用、风险?")])]),t._v(" "),a("ul",[a("li",[t._v("footer")])]),t._v(" "),a("blockquote",[a("p",[t._v("描述下与之关联的 issue 或 break change")])]),t._v(" "),a("h2",{attrs:{id:"git-统计"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-统计"}},[t._v("#")]),t._v(" git 统计")]),t._v(" "),a("h3",{attrs:{id:"查看仓库提交者排名前-5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看仓库提交者排名前-5"}},[t._v("#")]),t._v(" 查看仓库提交者排名前 5")]),t._v(" "),a("p",[a("code",[t._v("git log --pretty='%aN' | sort | uniq -c | sort -k1 -n -r | head -n 5")])]),t._v(" "),a("h3",{attrs:{id:"查看-git-仓库个人代码量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看-git-仓库个人代码量"}},[t._v("#")]),t._v(" 查看 git 仓库个人代码量")]),t._v(" "),a("p",[t._v("(记得修改 username)")]),t._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" log --author"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"wangzhen"')]),t._v(" --pretty"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("tformat: --numstat "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("awk")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'{ add += "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$1")]),t._v("; subs += "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$2")]),t._v("; loc += "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$1")]),t._v(" - "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$2")]),t._v(' } END { printf "added lines: %s, removed lines: %s, total lines: %s'),a("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[t._v("\\n")]),t._v("\", add, subs, loc }'")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h3",{attrs:{id:"查看-git-提交数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看-git-提交数"}},[t._v("#")]),t._v(" 查看 git 提交数")]),t._v(" "),a("p",[a("code",[t._v("git log --oneline | wc -l")])])])}),[],!1,null,null,null);s.default=r.exports}}]);