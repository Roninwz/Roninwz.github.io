(window.webpackJsonp=window.webpackJsonp||[]).push([[460],{908:function(t,e,s){"use strict";s.r(e);var a=s(19),i=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"git-命令大全"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git-命令大全"}},[t._v("#")]),t._v(" git 命令大全")]),t._v(" "),s("h3",{attrs:{id:"git-其它命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git-其它命令"}},[t._v("#")]),t._v(" git 其它命令")]),t._v(" "),s("ul",[s("li",[t._v("一个 commit 应用于多个分支 "),s("code",[t._v("cherry-pick")])])]),t._v(" "),s("blockquote",[s("p",[t._v("develop 分支有个 commit，test 下输入命令："),s("code",[t._v("git cherry-pick develop")]),t._v("，会把 develop 唔知的最新一个 commit 应用到 test 分支")])]),t._v(" "),s("ul",[s("li",[t._v("添加远程仓库 "),s("code",[t._v("git remote add origin 远程仓库地址")])])]),t._v(" "),s("h3",{attrs:{id:"git-回退代码命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git-回退代码命令"}},[t._v("#")]),t._v(" git 回退代码命令")]),t._v(" "),s("ol",[s("li",[t._v("add 之后回退")])]),t._v(" "),s("blockquote",[s("p",[t._v("本地仓库代码覆盖缓存区代码: "),s("code",[t._v("git reset")])])]),t._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("// 将本地仓库某一文件覆盖缓存区：\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" reset HEAD testReset.txt\n\n// 将匹配的文件覆盖缓存区：\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" reset HEAD *.txt\n\n// 将所有文件覆盖缓存区：\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" reset HEAD "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br")])]),s("blockquote",[s("p",[t._v("注意： 改变的是缓存区代码， 工作区间代码不变（编辑器代码不会改变）")])]),t._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[t._v("commit 之后回退")])]),t._v(" "),s("p",[t._v("(1) 本地仓库代码覆盖工作区代码 "),s("code",[t._v("git checkout")])]),t._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("// 将本地仓库某一文件代码 覆盖本地工作区： \n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("head")]),t._v(" testReset.txt\n\n// 将本地仓库所有文件代码 覆盖本地工作区："),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("谨慎操作"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("：\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("head")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("p",[t._v("(2) 本地仓库代码覆盖工作区代码 "),s("code",[t._v("git reset --hard")])]),t._v(" "),s("blockquote",[s("p",[t._v("查看commit列表")])]),t._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("// 查看commit id， 查看提交记录（git commit的记录）\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" log \n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" log --pretty"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("oneline \n\n// 查看以往提交历史（包括 撤销回退 记录） \n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" reflog \n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br")])]),s("blockquote",[s("p",[t._v("根据commit回退")])]),t._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("// 本地工作区间代码 回退到上一次版本、上上次、前10个版本 \n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" reset --hard HEAD^ \n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" reset --hard HEAD^^ \n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" reset --hard HEAD~10 \n\n// 本地工作区间代码 回退到指定版本"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("“d362816”为commit id） \n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" reset --hard d362816 \n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br")])]),s("p",[t._v("(3) 远程仓库代码覆盖本地仓库代码（清除 未push 的commit）")]),t._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("// 本地工作区间代码回退到远程版本 \n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" reset –-hard origin/master \n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("ol",{attrs:{start:"3"}},[s("li",[t._v("push 之后回退")])]),t._v(" "),s("blockquote",[s("p",[t._v("远程仓库代码回滚（线上代码回滚）")])]),t._v(" "),s("p",[t._v("(1) 使用"),s("code",[t._v("git revert")]),t._v("将新的commit替换掉(回退某一个或极少个commit)")]),t._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("// 替换掉上次提交的代码文件（上次的commit记录会保留）\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" revert HEAD\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -m "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"回滚上次commit"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push origin master\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("p",[t._v("(2) git 回退到某个 commit(回退许多个commit)")]),t._v(" "),s("p",[t._v("1.查找 commit_id，"),s("code",[t._v("git log")])]),t._v(" "),s("p",[t._v("2.重置命令 "),s("code",[t._v("git reset --hard commit_id")])]),t._v(" "),s("blockquote",[s("p",[t._v("回滚到上个版本 "),s("code",[t._v("git reset --hard HEAD^")]),t._v("\n回滚到前 3 次提交之前，以此类推，回退到 n 次提交之前 "),s("code",[t._v("git reset --hard HEAD~3")]),t._v("\n回滚到指定 commit 的 sha 版本 "),s("code",[t._v("git reset --hard commit_id")])])]),t._v(" "),s("p",[t._v("3.强制推送到远程 "),s("code",[t._v("git push origin branch --force")])]),t._v(" "),s("blockquote",[s("p",[t._v("参考blog:"),s("a",{attrs:{href:"https://segmentfault.com/a/1190000007070302",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://segmentfault.com/a/1190000007070302"),s("OutboundLink")],1)])]),t._v(" "),s("h3",{attrs:{id:"git-分支命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git-分支命令"}},[t._v("#")]),t._v(" git 分支命令")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("查看 git 的所有本地分支")]),t._v(" "),s("blockquote",[s("p",[s("code",[t._v("git branch")])])])]),t._v(" "),s("li",[s("p",[t._v("查看远程分支")]),t._v(" "),s("blockquote",[s("p",[s("code",[t._v("git branch -r")])])])]),t._v(" "),s("li",[s("p",[t._v("创建 dev 分支")]),t._v(" "),s("blockquote",[s("p",[s("code",[t._v("git branch dev")])])])]),t._v(" "),s("li",[s("p",[t._v("切换分支")]),t._v(" "),s("blockquote",[s("p",[s("code",[t._v("git checkout dev")])])])]),t._v(" "),s("li",[s("p",[t._v("创建分支,并切换到 dev 分支")]),t._v(" "),s("blockquote",[s("p",[s("code",[t._v("git checkout -b dev")])])])]),t._v(" "),s("li",[s("p",[t._v("创建 dev 分支并关联远程分支")]),t._v(" "),s("blockquote",[s("p",[s("code",[t._v("git checkout --track origin/branch_name")])])])]),t._v(" "),s("li",[s("p",[t._v("根据远程 dev 创建本地 dev 分支但没有关联,并切换到 dev 分支")]),t._v(" "),s("blockquote",[s("p",[s("code",[t._v("git checkout -b dev origin/dev")])])])]),t._v(" "),s("li",[s("p",[t._v("删除本地 dev 分支")]),t._v(" "),s("blockquote",[s("p",[s("code",[t._v("git branch -d dev")])])])]),t._v(" "),s("li",[s("p",[t._v("合并分支")]),t._v(" "),s("blockquote",[s("p",[s("code",[t._v("git merge dev")])])]),t._v(" "),s("blockquote",[s("p",[s("code",[t._v("git merge –no-ff")]),t._v(" 可以保存你之前的分支历史。能够更好的查看 merge 历史，以及 branch 状态。")])])]),t._v(" "),s("li",[s("p",[t._v("本地分支关联远程分支")]),t._v(" "),s("blockquote",[s("p",[s("code",[t._v("git branch --set-upstream-to=origin/dev dev")])])])]),t._v(" "),s("li",[s("p",[t._v("重命名分支")])])]),t._v(" "),s("blockquote",[s("p",[t._v("重命名 "),s("code",[t._v("git branch -m oldBranchName newBranchName")])])]),t._v(" "),s("blockquote",[s("p",[t._v("删除远程分支 "),s("code",[t._v("git push origin :oldBranchName")])])]),t._v(" "),s("blockquote",[s("p",[t._v("将重命名过的分支提交  "),s("code",[t._v("git push origin newBranchName")])])]),t._v(" "),s("h3",{attrs:{id:"git-help-帮助命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git-help-帮助命令"}},[t._v("#")]),t._v(" git help(帮助命令)")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("展示 config 的相关命令")]),t._v(" "),s("blockquote",[s("p",[s("code",[t._v("git config -h")])])])]),t._v(" "),s("li",[s("p",[t._v("会通过浏览器打开本地帮助文档")]),t._v(" "),s("blockquote",[s("p",[s("code",[t._v("git help config")])])])])]),t._v(" "),s("h3",{attrs:{id:"git-打标签"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git-打标签"}},[t._v("#")]),t._v(" git 打标签")]),t._v(" "),s("h3",{attrs:{id:"git-rebase"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git-rebase"}},[t._v("#")]),t._v(" git rebase")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("使用 rebase 拉取代码")]),t._v(" "),s("blockquote",[s("p",[t._v("git pull --rebase")])])]),t._v(" "),s("li",[s("p",[t._v("解决冲突后使用 git add 表示冲突已经解决")])]),t._v(" "),s("li",[s("p",[t._v("继续下一个冲突")]),t._v(" "),s("blockquote",[s("p",[s("code",[t._v("git rebase --continue")])])])]),t._v(" "),s("li",[s("p",[t._v("跳过冲突")]),t._v(" "),s("blockquote",[s("p",[s("code",[t._v("git rebase --skip")])])])]),t._v(" "),s("li",[s("p",[t._v("退出 rebase 模式")]),t._v(" "),s("blockquote",[s("p",[s("code",[t._v("git rebase --abort")])])])]),t._v(" "),s("li",[s("p",[t._v("设置 rebase 为 pull 时候默认执行的动作")]),t._v(" "),s("blockquote",[s("p",[s("code",[t._v("git config --global pull.rebase true")])])])])]),t._v(" "),s("h2",{attrs:{id:"git-命令应用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git-命令应用"}},[t._v("#")]),t._v(" git 命令应用")]),t._v(" "),s("h3",{attrs:{id:"git-初始化到提交流程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git-初始化到提交流程"}},[t._v("#")]),t._v(" git 初始化到提交流程")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("git init")])]),t._v(" "),s("li",[s("p",[t._v("git add .")])]),t._v(" "),s("li",[s("p",[t._v('git commit -m "first commit"')])]),t._v(" "),s("li",[s("p",[t._v("git remote add origin https://git.oschina.net/name/package.git")])]),t._v(" "),s("li",[s("p",[t._v("git push -u origin master")])])]),t._v(" "),s("h3",{attrs:{id:"使-gitignore-中的内容生效"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使-gitignore-中的内容生效"}},[t._v("#")]),t._v(" 使.gitignore 中的内容生效")]),t._v(" "),s("ul",[s("li",[t._v("git rm -r --cached .")]),t._v(" "),s("li",[t._v("git add .")]),t._v(" "),s("li",[t._v("git commit -m 'update .gitignore'")])]),t._v(" "),s("h3",{attrs:{id:"创建忽略文件："}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建忽略文件："}},[t._v("#")]),t._v(" 创建忽略文件：")]),t._v(" "),s("p",[t._v("touch .gitignore")]),t._v(" "),s("p",[t._v("git 阮一峰总结命令： "),s("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2015/12/git-cheat-sheet.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://www.ruanyifeng.com/blog/2015/12/git-cheat-sheet.html"),s("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=i.exports}}]);