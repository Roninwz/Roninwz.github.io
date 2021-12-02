(window.webpackJsonp=window.webpackJsonp||[]).push([[485],{1010:function(n,s,a){"use strict";a.r(s);var e=a(24),t=Object(e.a)({},(function(){var n=this,s=n.$createElement,a=n._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[a("h2",{attrs:{id:"nginx-使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nginx-使用"}},[n._v("#")]),n._v(" nginx 使用")]),n._v(" "),a("blockquote",[a("p",[n._v("下载地址: "),a("a",{attrs:{href:"http://nginx.org/en/download.html",target:"_blank",rel:"noopener noreferrer"}},[n._v("http://nginx.org/en/download.html"),a("OutboundLink")],1)])]),n._v(" "),a("blockquote",[a("p",[n._v("中文网："),a("a",{attrs:{href:"https://www.nginx.cn/",target:"_blank",rel:"noopener noreferrer"}},[n._v("https://www.nginx.cn/"),a("OutboundLink")],1)])]),n._v(" "),a("h3",{attrs:{id:"windows-使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#windows-使用"}},[n._v("#")]),n._v(" windows 使用")]),n._v(" "),a("blockquote",[a("p",[n._v("以管理员身份启动 cmd 命令面板，进入 nginx 目录\n输入 start nginx 启动\n浏览器地址栏输入网址http://localhost:80")])]),n._v(" "),a("h3",{attrs:{id:"windows-命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#windows-命令"}},[n._v("#")]),n._v(" windows 命令")]),n._v(" "),a("ul",[a("li",[n._v("修改 nginx 配置后执行检查配置是否正确")])]),n._v(" "),a("blockquote",[a("p",[n._v("nginx -t")])]),n._v(" "),a("ul",[a("li",[a("p",[n._v("启动 Nginx")]),n._v(" "),a("blockquote",[a("p",[a("code",[n._v("start nginx")])])])]),n._v(" "),a("li",[a("p",[n._v("关闭 Nginx")]),n._v(" "),a("blockquote",[a("p",[a("code",[n._v("nginx -s stop")])])]),n._v(" "),a("blockquote",[a("p",[a("code",[n._v("nginx -s quit")])])])]),n._v(" "),a("li",[a("p",[n._v("重启 Nginx")]),n._v(" "),a("blockquote",[a("p",[a("code",[n._v("nginx -s reload")])])])]),n._v(" "),a("li",[a("p",[n._v("查看 nginx 进程")])])]),n._v(" "),a("blockquote",[a("p",[a("code",[n._v('tasklist /fi "imagename eq nginx.exe"')]),a("br"),n._v("\n杀死 nginx 进程 "),a("code",[n._v("taskkill /f /pid 25720 /pid 7556")])])]),n._v(" "),a("h3",{attrs:{id:"配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[n._v("#")]),n._v(" 配置")]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("server {\n        listen       80; # 端口\n        server_name  localhost; # 默认的访问路径\n\n        #charset koi8-r;\n\n        #access_log  logs/host.access.log  main;\n\n        location / {\n            root   html;\n            index  index.html index.htm;\n        }\n    }\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br"),a("span",{staticClass:"line-number"},[n._v("13")]),a("br")])]),a("h3",{attrs:{id:"https-证书配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#https-证书配置"}},[n._v("#")]),n._v(" https 证书配置")]),n._v(" "),a("div",{staticClass:"language-conf line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("server {\n    listen 8081 ssl; # 监听端口 ssl 是配置 https 证书必备\n    server_name localhost;\n\n    location / {\n        root   html;\n        index  index.html index.htm;\n    }\n    location /api{\n        proxy_pass http://127.0.0.1:3000/api;  ## api代理\n    }\n\n    ssl_certificate server.crt; #证书位置 例： E:\\software\\nginx-1.16.1\\conf\\server.crt\n    ssl_certificate_key server.key; #私钥位置 例： E:\\software\\nginx-1.16.1\\conf\\server.key\n}\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br"),a("span",{staticClass:"line-number"},[n._v("13")]),a("br"),a("span",{staticClass:"line-number"},[n._v("14")]),a("br"),a("span",{staticClass:"line-number"},[n._v("15")]),a("br")])]),a("h3",{attrs:{id:"nginx-启动小助手"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nginx-启动小助手"}},[n._v("#")]),n._v(" nginx 启动小助手")]),n._v(" "),a("blockquote",[a("p",[n._v("修改第三行和第四行")])]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v('@echo off\nchcp 65001\nD:\ncd D:\\SoftWare\\nginx-1.18.0\n:menu\necho -------Nginx启动助手---------\necho 1."重启服务器"\necho 2."启动服务器"\necho 3."关闭服务器"\n@echo off\nset /p choose="请选择："\nif %choose%==1 (goto rs)\nif %choose%==2 (goto start)\nif %choose%==3 (goto stop)\n:: 不合法输入符号\nif %choose%!=1 || %choose%!=2 || %choose%!=3 ( goto menu)\n\n:: 重启服务器\n@echo off\n:rs\n::tskill nginx\n    taskkill /f /im nginx.exe\n    echo 已终止所有ginx进程\n\n    nginx.exe -t\n    nginx.exe -v\n    start nginx.exe\n    echo nginx已启动\n   ( goto menu )\n\n::启动服务器\n@echo off\n:start\n    nginx.exe -t\n    nginx.exe -v\n    start nginx.exe\n    echo nginx已启动\n\n    ( goto menu )\n\n::关闭服务器\n@echo off\n:stop\n::tskill nginx\n\ttaskkill /f /im nginx.exe\n    echo 已终止所有ginx进程\n    ( goto menu )\n')])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br"),a("span",{staticClass:"line-number"},[n._v("13")]),a("br"),a("span",{staticClass:"line-number"},[n._v("14")]),a("br"),a("span",{staticClass:"line-number"},[n._v("15")]),a("br"),a("span",{staticClass:"line-number"},[n._v("16")]),a("br"),a("span",{staticClass:"line-number"},[n._v("17")]),a("br"),a("span",{staticClass:"line-number"},[n._v("18")]),a("br"),a("span",{staticClass:"line-number"},[n._v("19")]),a("br"),a("span",{staticClass:"line-number"},[n._v("20")]),a("br"),a("span",{staticClass:"line-number"},[n._v("21")]),a("br"),a("span",{staticClass:"line-number"},[n._v("22")]),a("br"),a("span",{staticClass:"line-number"},[n._v("23")]),a("br"),a("span",{staticClass:"line-number"},[n._v("24")]),a("br"),a("span",{staticClass:"line-number"},[n._v("25")]),a("br"),a("span",{staticClass:"line-number"},[n._v("26")]),a("br"),a("span",{staticClass:"line-number"},[n._v("27")]),a("br"),a("span",{staticClass:"line-number"},[n._v("28")]),a("br"),a("span",{staticClass:"line-number"},[n._v("29")]),a("br"),a("span",{staticClass:"line-number"},[n._v("30")]),a("br"),a("span",{staticClass:"line-number"},[n._v("31")]),a("br"),a("span",{staticClass:"line-number"},[n._v("32")]),a("br"),a("span",{staticClass:"line-number"},[n._v("33")]),a("br"),a("span",{staticClass:"line-number"},[n._v("34")]),a("br"),a("span",{staticClass:"line-number"},[n._v("35")]),a("br"),a("span",{staticClass:"line-number"},[n._v("36")]),a("br"),a("span",{staticClass:"line-number"},[n._v("37")]),a("br"),a("span",{staticClass:"line-number"},[n._v("38")]),a("br"),a("span",{staticClass:"line-number"},[n._v("39")]),a("br"),a("span",{staticClass:"line-number"},[n._v("40")]),a("br"),a("span",{staticClass:"line-number"},[n._v("41")]),a("br"),a("span",{staticClass:"line-number"},[n._v("42")]),a("br"),a("span",{staticClass:"line-number"},[n._v("43")]),a("br"),a("span",{staticClass:"line-number"},[n._v("44")]),a("br"),a("span",{staticClass:"line-number"},[n._v("45")]),a("br"),a("span",{staticClass:"line-number"},[n._v("46")]),a("br"),a("span",{staticClass:"line-number"},[n._v("47")]),a("br")])])])}),[],!1,null,null,null);s.default=t.exports}}]);