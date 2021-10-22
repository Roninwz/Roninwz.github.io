(window.webpackJsonp=window.webpackJsonp||[]).push([[457],{937:function(t,r,_){"use strict";_.r(r);var e=_(24),v=Object(e.a)({},(function(){var t=this,r=t.$createElement,_=t._self._c||r;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h2",{attrs:{id:"https"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#https"}},[t._v("#")]),t._v(" https")]),t._v(" "),_("p",[t._v("HTTPS （英文：HyperText Transfer Protocol Secure）超文本传输安全协议")]),t._v(" "),_("p",[t._v("HTTPS = HTTP + SSL/TLS")]),t._v(" "),_("blockquote",[_("p",[t._v("详解："),_("a",{attrs:{href:"https://segmentfault.com/a/1190000011675421",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://segmentfault.com/a/1190000011675421"),_("OutboundLink")],1)])]),t._v(" "),_("p",[t._v("明文、密文、密码、密钥、对称加密、非对称加密、摘要、数字签名、数字证书")]),t._v(" "),_("blockquote",[_("p",[_("a",{attrs:{href:"https://www.zhihu.com/question/52493697",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.zhihu.com/question/52493697"),_("OutboundLink")],1)])]),t._v(" "),_("h3",{attrs:{id:"https-建立连接过程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#https-建立连接过程"}},[t._v("#")]),t._v(" HTTPS 建立连接过程")]),t._v(" "),_("ol",[_("li",[t._v("客户端发起 https 连接到服务器端")])]),t._v(" "),_("p",[t._v("浏览器去到 DNS 服务器获取此 url 对应的 ip，然后客户端连接上服务端的 443 端口，将此请求发送给到服务端，此时客户端同时将自己支持的加密算法带给服务端；")]),t._v(" "),_("ol",{attrs:{start:"2"}},[_("li",[t._v("服务器端发送证书给客户端")])]),t._v(" "),_("p",[t._v("服务器发送一个 SSL 证书给客户端")]),t._v(" "),_("p",[t._v("证书中包括了数字证书包含的内容：1、证书颁发机构；2、使用机构；3、公钥；4、有效期；5、签名算法；6、指纹算法；7、指纹。")]),t._v(" "),_("ol",{attrs:{start:"3"}},[_("li",[t._v("客户端验证服务端发来的证书")])]),t._v(" "),_("p",[t._v("（1）验证证书：客户端验证收到的证书，包括发布机构是否合法、过期，证书中包含的网址是否与当前访问网址一致等等。")]),t._v(" "),_("p",[t._v("（2）生成随机数：（此随机数就是后面用的对称加密的密钥）")]),t._v(" "),_("p",[t._v("（3）生成握手信息：用证书中的签名 hash 算法取握手信息的 hash 值，然后用生成的随机数将握手信息和握手信息的 hash 值进行加密，然后用公钥将随机数进行加密后，一起发送给服务端。其中计算握手信息的 hash 值，目的是为了保证传回到服务端的握手信息没有被篡改。")]),t._v(" "),_("ol",{attrs:{start:"4"}},[_("li",[t._v("服务端接收随机数加密的信息，并解密得到随机数，验证握手信息是否被篡改。")])]),t._v(" "),_("p",[t._v("服务端收到客户端传回来的用随机数加密的信息后，先用私钥解密随机数，然后用解密得到的随机数解密握手信息，获取握手信息和握手信息的 hash 值，计算自己发送的握手信息的 hash 值，与客户端传回来的进行对比验证。")]),t._v(" "),_("p",[t._v("如果验证无误，同样使用随机字符串加密握手信息和握手信息 hash 值发回给到客户端")]),t._v(" "),_("ol",{attrs:{start:"5"}},[_("li",[t._v("客户端验证服务端发送回来的握手信息，完成握手")])]),t._v(" "),_("p",[t._v("客户端收到服务端发送过来的握手信息后，用开始自己生成的随机数进行解密，验证被随机数加密的握手信息和握手信息 hash 值。验证无误后，握手过程就完成了")]),t._v(" "),_("ol",{attrs:{start:"6"}},[_("li",[t._v("随后客户端和服务端就使用对称密钥进行信息传输")])]),t._v(" "),_("blockquote",[_("p",[t._v("参考："),_("a",{attrs:{href:"https://blog.csdn.net/qq_24601199/article/details/104362401",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://blog.csdn.net/qq_24601199/article/details/104362401"),_("OutboundLink")],1)])]),t._v(" "),_("h3",{attrs:{id:"数字证书"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#数字证书"}},[t._v("#")]),t._v(" 数字证书")]),t._v(" "),_("p",[t._v("CA 是 Certificate Authority 的缩写，也叫“证书授权中心”")]),t._v(" "),_("p",[t._v("CA 证书，顾名思义，就是 CA 颁发的证书。")]),t._v(" "),_("p",[t._v("因特网上的“ID 卡”——数字证书。包含了由某个受信任组织担保的用户或公司的相关信息。")]),t._v(" "),_("p",[t._v("数字证书中还包含一组信息，所有这些信息都是由一个官方的 "),_("strong",[t._v("证书颁发机构(CA)")]),t._v(" 以数字方式签发的。")]),t._v(" "),_("p",[t._v("数字证书包含信息：")]),t._v(" "),_("ol",[_("li",[_("p",[t._v("证书信息：过期时间和序列号")])]),t._v(" "),_("li",[_("p",[t._v("所有者信息：姓名等")])]),t._v(" "),_("li",[_("p",[t._v("所有者公钥")])])]),t._v(" "),_("blockquote",[_("p",[t._v("参考：HTTPS 中 CA 证书的签发及使用过程 "),_("a",{attrs:{href:"https://www.cnblogs.com/xdyixia/p/11610102.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.cnblogs.com/xdyixia/p/11610102.html"),_("OutboundLink")],1)])]),t._v(" "),_("blockquote",[_("p",[t._v("参考：HTTPS 加密传输与 CA 证书 "),_("a",{attrs:{href:"https://www.cnblogs.com/k5210202/p/13342208.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.cnblogs.com/k5210202/p/13342208.html"),_("OutboundLink")],1)])]),t._v(" "),_("h3",{attrs:{id:"ssl-tls"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#ssl-tls"}},[t._v("#")]),t._v(" SSL/TLS")]),t._v(" "),_("p",[t._v("SSL（Secure Socket Layer）是安全套接层")]),t._v(" "),_("p",[t._v("TLS（Transport Layer Security）是传输层安全协议")]),t._v(" "),_("p",[t._v("最新版本的 TLS（Transport Layer Security，传输层安全协议）是 IETF（Internet Engineering Task Force，Internet 工程任务组）制定的一种新的协议，它建立在 SSL 3.0 协议规范之上，是 SSL 3.0 的后续版本")]),t._v(" "),_("p",[t._v("TLS 与 SSL3.0 在加密算法上不同，但是在我们理解 HTTPS 的过程中，我们可以把 SSL 和 TLS 看做是同一个协议。")]),t._v(" "),_("p",[t._v("不使用 SSL/TLS 的 HTTP 通信，就是不加密的通信。所有信息明文传播的三大风险：")]),t._v(" "),_("ol",[_("li",[_("p",[t._v("窃听风险（eavesdropping）：第三方可以获知通信内容。")])]),t._v(" "),_("li",[_("p",[t._v("篡改风险（tampering）：第三方可以修改通信内容。")])]),t._v(" "),_("li",[_("p",[t._v("冒充风险（pretending）：第三方可以冒充他人身份参与通信")])])]),t._v(" "),_("p",[t._v("SSL/TLS 协议：")]),t._v(" "),_("ol",[_("li",[_("p",[t._v("数据完整性：所有信息都是加密传播，第三方无法窃听。(对称加密+非对称加密)")])]),t._v(" "),_("li",[_("p",[t._v("数据隐私性：具有校验机制，一旦被篡改，通信双方会立刻发现。(数字签名)")])]),t._v(" "),_("li",[_("p",[t._v("身份校验：配备身份证书，防止身份被冒充。(数字签名)")])])]),t._v(" "),_("p",[t._v("SSL/TLS 的功能实现主要依赖于三类基本算法：散列函数 、对称加密和非对称加密，")]),t._v(" "),_("ol",[_("li",[_("p",[t._v("其利用非对称加密实现身份认证和密钥协商，")])]),t._v(" "),_("li",[_("p",[t._v("对称加密算法采用协商的密钥对数据加密，")])]),t._v(" "),_("li",[_("p",[t._v("基于散列函数验证信息的完整性。")])])]),t._v(" "),_("blockquote",[_("p",[t._v("参考："),_("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2014/09/illustration-ssl.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://www.ruanyifeng.com/blog/2014/09/illustration-ssl.html"),_("OutboundLink")],1)])]),t._v(" "),_("h2",{attrs:{id:"https-问题汇总"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#https-问题汇总"}},[t._v("#")]),t._v(" https 问题汇总")]),t._v(" "),_("h3",{attrs:{id:"https-非对称加密过程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#https-非对称加密过程"}},[t._v("#")]),t._v(" https 非对称加密过程")])])}),[],!1,null,null,null);r.default=v.exports}}]);