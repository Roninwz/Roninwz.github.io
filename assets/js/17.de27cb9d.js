(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{470:function(v,_,t){v.exports=t.p+"assets/img/handshake3.06fa13a3.png"},471:function(v,_,t){v.exports=t.p+"assets/img/wave4.403bfa8f.png"},931:function(v,_,t){"use strict";t.r(_);var a=t(24),s=Object(a.a)({},(function(){var v=this,_=v.$createElement,a=v._self._c||_;return a("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[a("h2",{attrs:{id:"tcp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tcp"}},[v._v("#")]),v._v(" TCP")]),v._v(" "),a("p",[v._v("TCP（Transmission Control Protocol：传输控制协议）")]),v._v(" "),a("p",[v._v("TCP 特点：")]),v._v(" "),a("ol",[a("li",[a("p",[v._v("TCP 是面向连接的协议，也就是在通信之前会先建立连接")])]),v._v(" "),a("li",[a("p",[v._v("TCP 的一个连接有两端（点对点通信）")])]),v._v(" "),a("li",[a("p",[v._v("TCP 提供可靠的传输服务")])]),v._v(" "),a("li",[a("p",[v._v("TCP 协议提供全双工的通信")])]),v._v(" "),a("li",[a("p",[v._v("TCP 是面向字节流的协议")])])]),v._v(" "),a("h3",{attrs:{id:"tcp-三次握手四次挥手总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tcp-三次握手四次挥手总结"}},[v._v("#")]),v._v(" TCP 三次握手四次挥手总结")]),v._v(" "),a("p",[v._v("序列号 seq：占 4 个字节，用来标记数据段的顺序，TCP 把连接中发送的所有数据字节都编上一个序号，第一个字节的编号由本地随机产生；给字节编上序号后，就给每一个报文段指派一个序号；序列号 seq 就是这个报文段中的第一个字节的数据编号。")]),v._v(" "),a("p",[v._v("确认号 ack：占 4 个字节，期待收到对方下一个报文段的第一个数据字节的序号；序列号表示报文段携带数据的第一个字节的编号；而确认号指的是期望接收到下一个字节的编号；因此当前报文段最后一个字节的编号+1 即为确认号。")]),v._v(" "),a("p",[v._v("标志位：每个标志位占用 1Bit，共有 6 个，分别为 URG、ACK、PSH、RST、SYN、FIN")]),v._v(" "),a("ol",[a("li",[v._v("URG：紧急指针（urgent pointer）有效。")]),v._v(" "),a("li",[v._v("确认 ACK：确认号是否有效，占 1 位，仅当 ACK=1 时，确认号字段才有效。ACK=0 时，确认号无效")]),v._v(" "),a("li",[v._v("PSH：接收方应该尽快将这个报文交给应用层。")]),v._v(" "),a("li",[v._v("RST：重置连接。")]),v._v(" "),a("li",[v._v("同步 SYN：连接建立时用于同步序号。当 SYN=1，ACK=0 时表示：这是一个连接请求报文段。若同意连接，则在响应报文段中使得 SYN=1，ACK=1。因此，SYN=1 表示这是一个连接请求，或连接接受报文。SYN 这个标志位只有在 TCP 建产连接时才会被置 1，握手完成后 SYN 标志位被置 0。")]),v._v(" "),a("li",[v._v("终止 FIN：用来释放一个连接。FIN=1 表示：此报文段的发送方的数据已经发送完毕，并要求释放运输连接")])]),v._v(" "),a("p",[v._v("PS：ACK、SYN 和 FIN 这些大写的单词表示标志位，其值要么是 1，要么是 0；ack、seq 小写的单词表示序号。")]),v._v(" "),a("h3",{attrs:{id:"三次握手"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三次握手"}},[v._v("#")]),v._v(" 三次握手")]),v._v(" "),a("p",[v._v("建立 TCP 连接时，需要客户端和服务器共发送 3 个包。")]),v._v(" "),a("ol",[a("li",[a("p",[v._v("第一次：客户端发送初始序号 seq=x 和 SYN=1 请求标志")])]),v._v(" "),a("li",[a("p",[v._v("第二次：服务器发送请求标志 SYN，发送确认标志 ACK，发送自己的序号 seq=y，发送客户端的确认序号 ack=x+1")])]),v._v(" "),a("li",[a("p",[v._v("第三次：客户端发送 ACK 确认号，发送自己的序号 seq=x+1，发送对方的确认号 ack=y+1")])])]),v._v(" "),a("p",[a("img",{attrs:{src:t(470),alt:"image"}})]),v._v(" "),a("p",[v._v("三次握手过程分析：")]),v._v(" "),a("ol",[a("li",[a("p",[v._v("第一次：客户端发送请求到服务器，建立连接时，客户端发送 syn 包（syn=j）到服务器，并进入 SYN_SENT 状态，等待服务器确认；服务器知道客户端发送，自己接收正常。SYN=1,seq=x")])]),v._v(" "),a("li",[a("p",[v._v("第二次：服务器发给客户端，服务器收到 syn 包，必须确认客户的 SYN（ack=j+1），同时自己也发送一个 SYN 包（syn=k），即 SYN+ACK 包，此时服务器进入 SYN_RECV 状态；客户端知道自己发送、接收正常，服务器接收、发送正常。ACK=1,ack=x+1,SYN=1,seq=y")])]),v._v(" "),a("li",[a("p",[v._v("第三次：客户端发给服务器：客户端收到服务器的 SYN+ACK 包，向服务器发送确认包 ACK(ack=k+1），此包发送完毕，客户端和服务器进入 ESTABLISHED（TCP 连接成功）状态，服务器知道客户端发送，接收正常，自己接收，发送也正常.seq=x+1,ACK=1,ack=y+1")])])]),v._v(" "),a("h4",{attrs:{id:"问题-1-为什么不是两次握手"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#问题-1-为什么不是两次握手"}},[v._v("#")]),v._v(" 问题 1：为什么不是两次握手：")]),v._v(" "),a("p",[a("strong",[v._v("两次握手没有办法保证交互双方同时具备发送与接收能力")])]),v._v(" "),a("h4",{attrs:{id:"问题-2-tcp-的三次握手一定能保证传输可靠吗"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#问题-2-tcp-的三次握手一定能保证传输可靠吗"}},[v._v("#")]),v._v(" 问题 2：TCP 的三次握手一定能保证传输可靠吗？")]),v._v(" "),a("p",[v._v("不能")]),v._v(" "),a("p",[v._v("三次握手比两次更可靠，但也不是完全可靠，而追加更多次握手也不能使连接更可靠了。因此选择了三次握手。")]),v._v(" "),a("p",[v._v("世界上不存在完全可靠的通信协议。从通信时间成本空间成本以及可靠度来讲，选择了“三次握手”作为点对点通信的一般规则。")]),v._v(" "),a("h3",{attrs:{id:"四次挥手"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四次挥手"}},[v._v("#")]),v._v(" 四次挥手")]),v._v(" "),a("ol",[a("li",[a("p",[v._v("第一次挥手：客户端发出释放 FIN=1，自己序列号 seq=u，进入 FIN-WAIT-1 状态")])]),v._v(" "),a("li",[a("p",[v._v("第二次挥手：服务器收到客户端的后，发出 ACK=1 确认标志和客户端的确认号 ack=u+1，自己的序列号 seq=v，进入 CLOSE-WAIT 状态")])]),v._v(" "),a("li",[a("p",[v._v("第三次挥手：客户端收到服务器确认结果后，进入 FIN-WAIT-2 状态。此时服务器发送释放 FIN=1 信号，确认标志 ACK=1，确认序号 ack=u+1，自己序号 seq=w，服务器进入 LAST-ACK（最后确认态）")])]),v._v(" "),a("li",[a("p",[v._v("第四次挥手：客户端收到回复后，发送确认 ACK=1，ack=w+1，自己的 seq=u+1，客户端进入 TIME-WAIT（时间等待）。客户端经过 2 个最长报文段寿命后，客户端 CLOSE；服务器收到确认后，立刻进入 CLOSE 状态。")])])]),v._v(" "),a("p",[a("img",{attrs:{src:t(471),alt:"image"}})]),v._v(" "),a("p",[v._v("四次挥手过程分析：")]),v._v(" "),a("ol",[a("li",[a("p",[v._v("第一次：客户端请求断开 FIN,seq=u")])]),v._v(" "),a("li",[a("p",[v._v("第二次：服务器确认客户端的断开请求 ACK,ack=u+1,seq=v")])]),v._v(" "),a("li",[a("p",[v._v("第三次：服务器请求断开 FIN,seq=w,ACK,ack=u+1")])]),v._v(" "),a("li",[a("p",[v._v("第四次：客户端确认服务器的断开 ACK,ack=w+1,seq=u+1")])])]),v._v(" "),a("h4",{attrs:{id:"问题-1-为什么连接的时候是三次握手-关闭的时候却是四次握手"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#问题-1-为什么连接的时候是三次握手-关闭的时候却是四次握手"}},[v._v("#")]),v._v(" 问题 1. 为什么连接的时候是三次握手，关闭的时候却是四次握手？")]),v._v(" "),a("p",[v._v('因为当 Server 端收到 Client 端的 SYN 连接请求报文后，可以直接发送 SYN+ACK 报文。其中 ACK 报文是用来应答的，SYN 报文是用来同步的。但是关闭连接时，当 Server 端收到 FIN 报文时，很可能并不会立即关闭 SOCKET，所以只能先回复一个 ACK 报文，告诉 Client 端，"你发的 FIN 报文我收到了"。只有等到我 Server 端所有的报文都发送完了，我才能发送 FIN 报文，因此不能一起发送。故需要四步握手。')]),v._v(" "),a("h4",{attrs:{id:"问题-2-如果已经建立了连接-但是客户端突然出现故障了怎么办"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#问题-2-如果已经建立了连接-但是客户端突然出现故障了怎么办"}},[v._v("#")]),v._v(" 问题 2：如果已经建立了连接，但是客户端突然出现故障了怎么办？")]),v._v(" "),a("p",[v._v("TCP 还设有一个保活计时器，显然，客户端如果出现故障，服务器不能一直等下去，白白浪费资源。服务器每收到一次客户端的请求后都会重新复位这个计时器，时间通常是设置为 2 小时，若两小时还没有收到客户端的任何数据，服务器就会发送一个探测报文段，以后每隔 75 秒钟发送一次。若一连发送 10 个探测报文仍然没反应，服务器就认为客户端出了故障，接着就关闭连接。")]),v._v(" "),a("h4",{attrs:{id:"问题-3-为什么-time-wait-状态需要经过-2msl-最大报文段生存时间-才能返回到-close-状态"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#问题-3-为什么-time-wait-状态需要经过-2msl-最大报文段生存时间-才能返回到-close-状态"}},[v._v("#")]),v._v(" 问题 3：为什么 TIME_WAIT 状态需要经过 2MSL(最大报文段生存时间)才能返回到 CLOSE 状态？")]),v._v(" "),a("p",[v._v("客户端需要保证最后一次发送的 ACK 报文到服务器，如果服务器未收到，可以请求客户端重发，这样客户端还有时间再发，重启 2MSL 计时。")]),v._v(" "),a("p",[v._v("虽然按道理，四个报文都发送完毕，我们可以直接进入 CLOSE 状态了，但是我们必须假象网络是不可靠的，有可以最后一个 ACK 丢失。所以 TIME_WAIT 状态就是用来重发可能丢失的 ACK 报文。在 Client 发送出最后的 ACK 回复，但该 ACK 可能丢失。Server 如果没有收到 ACK，将不断重复发送 FIN 片段。所以 Client 不能立即关闭，它必须确认 Server 接收到了该 ACK。Client 会在发送出 ACK 之后进入到 TIME_WAIT 状态。Client 会设置一个计时器，等待 2MSL 的时间。如果在该时间内再次收到 FIN，那么 Client 会重发 ACK 并再次等待 2MSL。所谓的 2MSL 是两倍的 MSL(Maximum Segment Lifetime)。MSL 指一个片段在网络中最大的存活时间，2MSL 就是一个发送和一个回复所需的最大时间。如果直到 2MSL，Client 都没有再次收到 FIN，那么 Client 推断 ACK 已经被成功接收，则结束 TCP 连接。")]),v._v(" "),a("h3",{attrs:{id:"流量控制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#流量控制"}},[v._v("#")]),v._v(" 流量控制")]),v._v(" "),a("p",[v._v("流量控制(flow control)：让发送方的发送速率不要太快，要让接收方来得及接收")]),v._v(" "),a("p",[v._v("利用"),a("strong",[v._v("滑动窗口")]),v._v("实现流量控制")]),v._v(" "),a("p",[v._v("TCP 滑动窗口分为接受窗口，发送窗口\n滑动窗口协议是传输层进行流控的一种措施，接收方通过通告发送方自己的窗口大小，从而控制发送方的发送速度，从而达到防止发送方发送速度过快而导致自己被淹没的目的。")]),v._v(" "),a("h3",{attrs:{id:"拥塞控制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#拥塞控制"}},[v._v("#")]),v._v(" 拥塞控制")]),v._v(" "),a("p",[v._v("拥塞控制：防止过多的数据注入到网络中，这样可以使网络中的路由器或链路不致过载。")]),v._v(" "),a("p",[v._v("拥塞控制所要做的都有一个前提：网络能够承受现有的网络负荷。")]),v._v(" "),a("p",[v._v("拥塞控制是一个全局性的过程，涉及到所有的主机、路由器，以及与降低网络传输性能有关的所有因素。")]),v._v(" "),a("p",[v._v("拥塞控制主要有四个算法：")]),v._v(" "),a("ol",[a("li",[a("p",[v._v("慢启动")])]),v._v(" "),a("li",[a("p",[v._v("拥塞避免")])])]),v._v(" "),a("p",[v._v("让拥塞窗口缓慢增长，即每经过一个往返时间 RTT 就把发送方的拥塞窗口 cwnd 加 1，而不是加倍。这样拥塞窗口按线性规律缓慢增长。")]),v._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[v._v("快重传")]),v._v(" "),a("li",[v._v("快恢复")])]),v._v(" "),a("h3",{attrs:{id:"重传机制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#重传机制"}},[v._v("#")]),v._v(" 重传机制")]),v._v(" "),a("ol",[a("li",[v._v("超时重传：发送数据时设定一个定时器，若在指定时间内没有收到应答报文，就会重发数据")])]),v._v(" "),a("p",[v._v("发生超时重传的时机")]),v._v(" "),a("p",[v._v("(1) 数据包丢失")]),v._v(" "),a("p",[v._v("(2) 确认应答丢失")]),v._v(" "),a("p",[v._v("超时时间 RTO 选择")]),v._v(" "),a("p",[v._v("(1) 略大于 RTT")]),v._v(" "),a("p",[v._v("(2) 重传超时策略：超时时间间隔加倍")]),v._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[v._v("快速重传")])]),v._v(" "),a("p",[v._v("发送方可以一次发送多个数据包，若中间的某个数据包丢失了，接收方会一直回复这个丢失的数据包应答报文，接收方若收到三次这个数据包的应答报文，就知道该报文还没有被接收方收到，可以重传这个数据包")]),v._v(" "),a("p",[v._v("存在问题：")]),v._v(" "),a("p",[v._v("因为接收方对后续的数据包也返回了丢失的那个应答报文，所以发送方不知道后续的数据包是否丢失，也就不知道应该重传丢失的数据包还是把后续的数据包都重传")]),v._v(" "),a("h3",{attrs:{id:"可靠传输"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#可靠传输"}},[v._v("#")]),v._v(" 可靠传输")]),v._v(" "),a("h3",{attrs:{id:"tcp-和-udp-的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tcp-和-udp-的区别"}},[v._v("#")]),v._v(" TCP 和 UDP 的区别")]),v._v(" "),a("p",[v._v("相同点：")]),v._v(" "),a("ol",[a("li",[v._v("都是传输层协议")])]),v._v(" "),a("p",[v._v("区别：")]),v._v(" "),a("ol",[a("li",[a("p",[v._v("TCP 协议可靠；UDP 协议不可靠")])]),v._v(" "),a("li",[a("p",[v._v("TCP 协议是面向连接；UDP 协议采用无连接")])]),v._v(" "),a("li",[a("p",[v._v("TCP：用于传输大量数据(流模式)、速度慢，建立连接需要开销较多(时间，系统资源)、UDP 用于传输少量数据(数据包模式)、速度快")])]),v._v(" "),a("li",[a("p",[v._v("TCP 协议负载较高，采用虚电路；UDP 采用无连接")])])])])}),[],!1,null,null,null);_.default=s.exports}}]);