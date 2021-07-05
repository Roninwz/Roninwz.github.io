(window.webpackJsonp=window.webpackJsonp||[]).push([[158],{586:function(e,v,t){"use strict";t.r(v);var a=t(19),i=Object(a.a)({},(function(){var e=this,v=e.$createElement,t=e._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"前端视频"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#前端视频"}},[e._v("#")]),e._v(" 前端视频")]),e._v(" "),t("h3",{attrs:{id:"video-标签属性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#video-标签属性"}},[e._v("#")]),e._v(" video 标签属性")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("src 视频的 URL")])]),e._v(" "),t("li",[t("p",[e._v("autoplay 是否自动播放")])]),e._v(" "),t("li",[t("p",[e._v("controls 是否显示控件")])]),e._v(" "),t("li",[t("p",[e._v("width 视频播放器的宽度（只支持像素，不支持百分比，如"),t("code",[e._v("width:100px")]),e._v("或者"),t("code",[e._v("width:100")]),e._v("）")])]),e._v(" "),t("li",[t("p",[e._v("height 视频播放器的高度（只支持像素，不支持百分比，如"),t("code",[e._v("height:100px")]),e._v("或者"),t("code",[e._v("height:100")]),e._v("）")])]),e._v(" "),t("li",[t("p",[e._v("poster 视频封面 (规定视频正在下载时显示的图像)")])]),e._v(" "),t("li",[t("p",[e._v("loop 是否循环播放")])]),e._v(" "),t("li",[t("p",[e._v("muted 视频的音频输出为静音。")])]),e._v(" "),t("li",[t("p",[e._v("preload 预加载 (视频在页面加载时进行加载，并预备播放)，值：auto、metadata、none")])]),e._v(" "),t("li",[t("p",[e._v("disablePictureInPicture  禁用 video 元素的画中画特性")])])]),e._v(" "),t("blockquote",[t("p",[e._v("video 标签支持 HTML 的全局属性。如：id、style、hidden"),t("br"),e._v("\nvideo 标签支持 HTML 的事件属性。如：onload")])]),e._v(" "),t("h3",{attrs:{id:"兼容性属性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#兼容性属性"}},[e._v("#")]),e._v(" 兼容性属性")]),e._v(" "),t("h4",{attrs:{id:"x5属性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#x5属性"}},[e._v("#")]),e._v(" X5属性")]),e._v(" "),t("blockquote",[t("p",[e._v("X5是腾讯基于Webkit开发的浏览器内核，应用于Android端的微信、QQ、QQ浏览器等应用。\n它提供了一种名叫「同层播放器」的特殊video元素以解决遮挡问题。")])]),e._v(" "),t("ul",[t("li",[e._v("启用同层 H5 播放器 "),t("code",[e._v('x5-video-player-type="h5"')])])]),e._v(" "),t("blockquote",[t("p",[t("code",[e._v('x5-video-player-type="h5"')]),e._v("  解决了视频层级过高的问题，但出现了点击播放自动进入全屏的问题，因此还需要监听x5的全屏事件进行适配"),t("br"),e._v(" "),t("code",[e._v('x5-video-player-type="h5-page"')]),e._v("  解决了视频层级过高的问题，视频播放不会立即进入全屏状态")])]),e._v(" "),t("ul",[t("li",[t("p",[e._v("视频播放时将会进入到全屏模式 "),t("code",[e._v('x5-video-player-fullscreen="true"')])])]),e._v(" "),t("li",[t("p",[e._v("横竖屏 "),t("code",[e._v('x5-video-orientation="landscape|portrait"')])])])]),e._v(" "),t("blockquote",[t("p",[e._v("landscape 横屏，portrain 竖屏； 默认竖屏 "),t("strong",[e._v('此属性只在声明了x5-video-player-type="h5"情况下生效')])])]),e._v(" "),t("blockquote",[t("p",[e._v("跟随手机自动旋转 "),t("code",[e._v('<video x5-video-player-type="h5" x5-video-orientation="landscape|portrait"/>')])])]),e._v(" "),t("h4",{attrs:{id:"其它兼容性属性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#其它兼容性属性"}},[e._v("#")]),e._v(" 其它兼容性属性")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("允许 airplay（通过 AirPlay 可以把当前的视频投放到支持此技术的其他设备上。） "),t("code",[e._v('x-webkit-airplay="allow"')])])]),e._v(" "),t("li",[t("p",[e._v("小窗播放(同层播放)")])])]),e._v(" "),t("blockquote",[t("p",[t("code",[e._v('webkit-playsinline="true"')]),e._v("  这个属性是 ios 10 中设置可以让视频在小窗内播放，也就是不是全屏播放"),t("br"),e._v(" "),t("code",[e._v('playsinline="true"')]),e._v("  IOS微信浏览器支持小窗内播放"),t("br"),e._v("\n使视频不脱离文本流，但是需要 webview（allowsInlineMediaPlayback = YES webview.allowsInlineMediaPlayback = YES），"),t("br"),e._v("\n现在结果是苹果支持，安卓不支持。安卓播放会全屏。")])]),e._v(" "),t("h4",{attrs:{id:"兼容性问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#兼容性问题"}},[e._v("#")]),e._v(" 兼容性问题")]),e._v(" "),t("ul",[t("li",[e._v("在Android的微信里面，就算加上了上面的属性，还会出现上下有黑边，不能全屏的问题。")])]),e._v(" "),t("blockquote",[t("p",[e._v("解决办法：给video加上object-fit: fill;的style属性。如果还是有黑边有可能是视频尺寸不合适。")])])])}),[],!1,null,null,null);v.default=i.exports}}]);