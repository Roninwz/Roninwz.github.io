(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{1060:function(t,e,r){"use strict";r.r(e);var a=r(14),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"扫码登录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#扫码登录"}},[t._v("#")]),t._v(" 扫码登录")]),t._v(" "),a("p",[t._v("扫码登录本质是解决将 APP 端的用户登录信息（通常是 Token）通过扫码的形式安全稳定地同步给 Web 端。")]),t._v(" "),a("p",[t._v("技术点处理：二维码的生成/获取、过期失效的处理、登录状态的监听。")]),t._v(" "),a("h2",{attrs:{id:"扫码登录原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#扫码登录原理"}},[t._v("#")]),t._v(" 扫码登录原理")]),t._v(" "),a("p",[a("img",{attrs:{src:r(546),alt:"image"}})]),t._v(" "),a("p",[t._v("扫码登录可以分为三个阶段：待扫描、已扫描待确认、已确认")]),t._v(" "),a("h3",{attrs:{id:"待扫描阶段"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#待扫描阶段"}},[t._v("#")]),t._v(" 待扫描阶段")]),t._v(" "),a("p",[t._v("待扫描阶段也就是流程图中 1~5 阶段，即生成二维码阶段，这个阶段跟移动端没有关系，是 PC 端跟服务端的交互过程。")]),t._v(" "),a("p",[t._v("首先 PC 端携带设备信息想服务端发起生成二维码请求，服务端会生成唯一的二维码 ID，你可以理解为 UUID，并且将 二维码 ID 跟 PC 设备信息关联起来，这跟移动端登录有点相似。")]),t._v(" "),a("p",[t._v("PC 端接受到二维码 ID 之后，将二维码 ID 以二维码的形式展示，等待移动端扫码。此时在 PC 端会启动一个定时器，轮询查询二维码的状态。")]),t._v(" "),a("p",[t._v("如果移动端未扫描的话，那么一段时间后二维码将会失效。")]),t._v(" "),a("h3",{attrs:{id:"已扫描待确认阶段"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#已扫描待确认阶段"}},[t._v("#")]),t._v(" 已扫描待确认阶段")]),t._v(" "),a("p",[t._v("流程图中第 6 ~ 10 阶段，我们在 PC 端登录微信时，手机扫码后，PC 端的二维码会变成已扫码，请在手机端确认。这个阶段是移动端跟服务端交互的过程。")]),t._v(" "),a("p",[t._v("首先移动端扫描二维码，获取二维码 ID，然后将手机端登录的信息凭证（token）和 二维码 ID 作为参数发送给服务端，此时的手机一定是登录的，不存在没登录的情况。")]),t._v(" "),a("p",[t._v("服务端接受请求后，会将 token 与二维码 ID 关联，为什么需要关联呢？你想想，我们使用微信时，移动端退出， PC 端是不是也需要退出，这个关联就有点把子作用了。然后会生成一个一次性 token，这个 token 会返回给移动端，一次性 token 用作确认时候的凭证。")]),t._v(" "),a("p",[t._v("PC 端的定时器，会轮询到二维码的状态已经发生变化，会将 PC 端的二维码更新为已扫描，请确认。")]),t._v(" "),a("h3",{attrs:{id:"已确认阶段"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#已确认阶段"}},[t._v("#")]),t._v(" 已确认阶段")]),t._v(" "),a("p",[t._v("流程图中的 第 11 ~ 15 步骤，这是扫码登录的最后阶段，移动端携带上一步骤中获取的临时 token ，确认登录，服务端校对完成后，会更新二维码状态，并且给 PC 端生成一个正式的 token ，后续 PC 端就是持有这个 token 访问服务端。")]),t._v(" "),a("p",[t._v("PC 端的定时器，轮询到了二维码状态为登录状态，并且会获取到了生成的 token ，完成登录，后续访问都基于 token 完成。")]),t._v(" "),a("p",[t._v("在服务器端会跟手机端一样，维护着 token 跟二维码、PC 设备信息、账号等信息。")]),t._v(" "),a("p",[t._v("到此，二维码扫描登录原理就差不多了，二维码扫描登录在原理上不难理解，跟 OAuth2.0 有一丝的相似之处，但是实现起来可能就比较复杂。")]),t._v(" "),a("hr"),t._v(" "),a("p",[t._v("参考："),a("a",{attrs:{href:"https://jishuin.proginn.com/p/763bfbd6feff",target:"_blank",rel:"noopener noreferrer"}},[t._v("聊聊二维码扫码登录的原理"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"http://www.voycn.com/article/saomadengludeyuanliheshixian",target:"_blank",rel:"noopener noreferrer"}},[t._v("扫码登录的原理和实现"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://juejin.cn/post/6844904111398191117",target:"_blank",rel:"noopener noreferrer"}},[t._v("聊一聊二维码扫描登录原理"),a("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=n.exports},546:function(t,e,r){t.exports=r.p+"assets/img/login_qr.2fcaf56a.png"}}]);