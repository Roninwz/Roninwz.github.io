(window.webpackJsonp=window.webpackJsonp||[]).push([[434],{879:function(e,t,s){"use strict";s.r(t);var n=s(19),r=Object(n.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h2",{attrs:{id:"本地搭建-web-服务器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#本地搭建-web-服务器"}},[e._v("#")]),e._v(" 本地搭建 web 服务器")]),e._v(" "),s("h3",{attrs:{id:"前端-npm-包"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前端-npm-包"}},[e._v("#")]),e._v(" 前端 npm 包")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("1.npm 安装 anywhere 包"),s("br"),e._v(" "),s("code",[e._v("npm install anywhere -g")])]),e._v(" "),s("blockquote",[s("p",[e._v("找到要启动本地服务器的静态文件夹，执行命令：anywhere")])])]),e._v(" "),s("li",[s("p",[e._v("2.npm 安装 http-server 包"),s("br"),e._v(" "),s("code",[e._v("npm install http-server -g")])])]),e._v(" "),s("li",[s("p",[e._v("找到你的文件夹,在当前文件夹下打开命令行,输入 http-server,默认启动 8080 端口,")])]),e._v(" "),s("li",[s("p",[e._v("3.使用 Simple HTTP Server"),s("br"),e._v(" "),s("code",[e._v("npm install -g simple-http-server")]),e._v(" "),s("code",[e._v("nserver")])])])]),e._v(" "),s("h3",{attrs:{id:"编程语言"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#编程语言"}},[e._v("#")]),e._v(" 编程语言")]),e._v(" "),s("ul",[s("li",[e._v("node 搭建本地 web 服务器\n"),s("blockquote",[s("p",[e._v("简易静态服务 "),s("a",{attrs:{href:"https://www.w3cways.com/2131.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://www.w3cways.com/2131.html"),s("OutboundLink")],1),e._v("\n简单 web 服务器")])])])]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("//引入http模块\nvar http = require(\"http\");\n//设置主机名\nvar hostName = '127.0.0.1';\n//设置端口\nvar port = 8080;\n//创建服务\nvar server = http.createServer(function(req,res){\n    res.setHeader('Content-Type','text/plain');\n    res.end(\"hello nodejs\");\n});\nserver.listen(port,hostName,function(){\n    console.log(`服务器运行在http://${hostName}:${port}`);\n});\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br"),s("span",{staticClass:"line-number"},[e._v("14")]),s("br")])]),s("ul",[s("li",[e._v("python 搭建本地 web 服务器\n"),s("blockquote",[s("p",[e._v("https://blog.csdn.net/qq_34215281/article/details/77714586"),s("br"),e._v("\npython2 "),s("code",[e._v("python -m SimpleHTTPServer 8000")]),s("br"),e._v("\npython3 "),s("code",[e._v("python -m http.server 8000")])])])])]),e._v(" "),s("ul",[s("li",[e._v("php"),s("br"),e._v(" "),s("code",[e._v("php -S localhost:8000")])])]),e._v(" "),s("h3",{attrs:{id:"服务器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#服务器"}},[e._v("#")]),e._v(" 服务器")]),e._v(" "),s("p",[e._v("nginx、IIS、apache、tomcat")]),e._v(" "),s("h3",{attrs:{id:"集成安装包"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#集成安装包"}},[e._v("#")]),e._v(" 集成安装包")]),e._v(" "),s("p",[e._v("xampp -- linux\nwamp\nphpStudy")])])}),[],!1,null,null,null);t.default=r.exports}}]);