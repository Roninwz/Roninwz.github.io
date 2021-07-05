(window.webpackJsonp=window.webpackJsonp||[]).push([[432],{877:function(a,s,t){"use strict";t.r(s);var e=t(19),r=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h2",{attrs:{id:"tomcat"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tomcat"}},[a._v("#")]),a._v(" tomcat")]),a._v(" "),t("h3",{attrs:{id:"安装配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装配置"}},[a._v("#")]),a._v(" 安装配置")]),a._v(" "),t("ul",[t("li",[a._v("下载\n"),t("blockquote",[t("p",[t("a",{attrs:{href:"https://tomcat.apache.org/download-80.cgi",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://tomcat.apache.org/download-80.cgi"),t("OutboundLink")],1)])])])]),a._v(" "),t("ul",[t("li",[t("p",[a._v("复制到指定位置: "),t("code",[a._v("sudo cp apache-tomcat-8.5.57.tar.gz /usr/local/lib/")])])]),a._v(" "),t("li",[t("p",[a._v("进入目录/usr/local/lib/ "),t("code",[a._v("sudo tar -zxvf apache-tomcat-8.5.57.tar.gz")])])]),a._v(" "),t("li",[t("p",[a._v("赋予权限 "),t("code",[a._v("sudo chmod 755 -R apache-tomcat-8.5.57")])])]),a._v(" "),t("li",[t("p",[a._v("配置环境变量")]),a._v(" "),t("blockquote",[t("p",[a._v("sudo vi startup.sh")])])])]),a._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#set java environment")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("JAVA_HOME")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("/usr/local/lib/jdk1.8.0_261\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("JRE_HOME")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${JAVA_HOME}")]),a._v("/jre\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("CLASSPATH")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(".:"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${JAVA_HOME}")]),a._v("/lib:"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${JRE_HOME}")]),a._v("/lib\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("PATH")])]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(".:"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${JAVA_HOME}")]),a._v("/bin:"),t("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("$PATH")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#tomcat")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("TOMCAT_HOME")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("/usr/local/lib/apache-tomcat-8.5.57\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br")])]),t("blockquote",[t("p",[a._v("sudo vi setclasspath.sh\n"),t("strong",[a._v("环境变量配置到上面")])])]),a._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("JAVA_HOME")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("/usr/local/lib/jdk1.8.0_261\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("JRE_HOME")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("/usr/local/lib/jdk1.8.0_261/jre\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br")])]),t("ul",[t("li",[a._v("启动服务")])]),a._v(" "),t("blockquote",[t("p",[t("code",[a._v("sudo ./startup.sh")])])]),a._v(" "),t("h3",{attrs:{id:"问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#问题"}},[a._v("#")]),a._v(" 问题")]),a._v(" "),t("ul",[t("li",[a._v("1.Neither the JAVA_HOME nor the JRE_HOME environment variable is defined")])]),a._v(" "),t("blockquote",[t("p",[a._v("环境变量需要配置到上面/java环境变量不对")])])])}),[],!1,null,null,null);s.default=r.exports}}]);