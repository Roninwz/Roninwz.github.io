(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{560:function(n,_,v){"use strict";v.r(_);var p=v(24),t=Object(p.a)({},(function(){var n=this,_=n.$createElement,v=n._self._c||_;return v("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[v("p",[n._v("前言\n作为一个业务前端，完成业务需求的同时，还要处理各种线上问题，加班辛苦忙碌了一年，还要被老板说“思考是不够的”、“没有业务 sence”，出去面试，被问项目，也说不出什么有亮点或者有挑战的东西，想做点牛逼的东西，也没有发现什么有价值的方向，好不容易找到一些方向，还要被老板一顿质问，业务价值是什么？ROI 怎样？最终可能就只是做了一点性能优化工作，抽离了一些可复用的组件……不禁让人感叹，业务难、前端难、做业务的前端更难！")]),n._v(" "),v("p",[n._v("如果你也有这样的感受和困境，我想告诉你，这真的是太正常了，在阿里内部的技术论坛就有多篇关于这个问题的思考，我根据根据自己理解和调研，同时参考了多位不同前端领域专家的总结，整理成这篇文章，希望能对大家有所帮助。")]),n._v(" "),v("ol",[v("li",[n._v("业务前端的困境\n1.1 业务前端“好忙”\n业务前端，顾名思义，做业务的前端，直接与业务的 PD、运营接触，对产品的用户直接负责。在实际的工作中，业务前端经常忙于业务的各种会议、项目和答疑，即便一条业务线上有多个前端同学支持，面对成山的需求，可能依然感到吃力，这其中的原因可能有：")])]),n._v(" "),v("p",[n._v("用户侧产品往往需要快速上线，大部分需求都需要倒排工期，开发时间尤其紧张\n对业务不熟悉，在项目需求已确定的时候才去参加视觉评审，没有办法判断需求背后的业务逻辑跟业务大节奏是否匹配、需求本身是否能够达成业务目标、有没有更好的实现方式，只能接下需求，然后排期\n维护成本高，每天还要忙于解决各种线上问题，比如这里样式有点问题，那里怎么没有显示……各种琐碎问题让你过的非常“充实”\n需求响应速度较慢，比如业务的技术栈较老，或者定制逻辑过多，边写代码还要边查文档，查不到可能还要查源码，效率大幅降低。又或者跟别的业务技术体系不同，难以复用和沉淀，如果要用，可能还要重写一遍……\n1.2 业务前端是“资源”?\n前端岗位的特点就是有视觉稿就可以完成工作，不需要理解业务全貌，所以在繁忙期很容易让前端忽视了业务思考，加上之前描述的各种原因，业务前端经常沦落为“资源”，当你沦落为“资源”的时候，其实就已经失去了和业务平等对话的资格，他们只会把你当成莫得感情的开发机器，跟你输入需求，让你吐出页面，而你在这样的关系中，本来写着还算工整的代码，为了快速实现业务需求，也开始写起乱糟糟的代码，对于你所创造的产品也没有话语权，久而久之也失去了激情和耐心。")]),n._v(" "),v("p",[n._v("失去激情，写的不开心也就算了，因为你没有做出什么特别的东西，老板也不会特别认可你的辛苦，还会觉得你思考不够、没有业务 sence，对业务没有助力，没有让业务因为你的存在而有所不同……")]),n._v(" "),v("p",[n._v("1.3 业务前端想突破\n好吧，那我决定做点什么改变一下，于是跟老板提出了一系列想法：")]),n._v(" "),v("p",[n._v("这里技术体系太老了，为了进一步提升开发效率，我们想要搞技术重构\n前后端联调有点费劲，我们想搞个联调数据中台，提升联调效率\n那里展现速度太慢了，我们要搞性能优化\n……\n老板往往会来一系列灵魂提问：")]),n._v(" "),v("p",[n._v("为什么要做？（有什么业务价值？有什么技术价值？）\n为什么是现在做？\n为什么是你做？\nROI（投入产出比）怎么样？\n还没有开始，躁动的心就被老板的一系列“质疑”浇了一盆冷水。")]),n._v(" "),v("p",[n._v("如果没有回答好这些问题、说服老板，自然也争取不到什么资源，只能一个人搞搞，一个人搞的往往质量不行、也没有人用，久而久之自己也不维护了，只能又开始埋头在需求中。")]),n._v(" "),v("p",[n._v("干的不开心，也没有成长，最后只能暗淡离职，但换了一个公司就会好吗，很可能又是类似的过程……")]),n._v(" "),v("p",[n._v("这真的堪称是业务前端的“困境”，那么如何突破这种困境呢？首先我们就要摆正心态，从了解业务开始。")]),n._v(" "),v("ol",{attrs:{start:"2"}},[v("li",[n._v("了解业务\n2.1 业务和需求\n在了解业务之前，首先我们要知道，业务跟需求是不一样的。理解需求并不等于理解业务，需求是业务经过产品消化后的产物，可能已经经过演绎或者拆解，因此需求并不是业务本身，当然了解的需求越多，对业务的全貌也会更加了解。")])]),n._v(" "),v("p",[n._v('那么什么是业务呢？业界对"业务"有多种定义，但是其主要思想基本不变，业务就是一系列人通过一系列活动完成某一任务的过程，因此，业务可大可小，可以无限拆分。')]),n._v(" "),v("p",[n._v("我们本文涉及的业务泛指商业业务，就是与该 BU 或者公司商业模式直接关联的业务或其组成部分。")]),n._v(" "),v("p",[n._v("2.2 前端为什么要学习业务\n前端即使不学习业务，其实也不影响做需求，毕竟你只要告诉我交互是什么样的，前端就可以帮你实现，而且已经有产品经理的角色了，大家各司其职不就好了，为什么一个做技术的，要狗拿耗子、或者是越俎代庖呢？这就要说到：")]),n._v(" "),v("p",[n._v("只有了解业务，才能从技术的角度想到业务方不曾想到的地方；不了解业务，你可能听不懂业务方要什么，甚至连需求的业务逻辑都搞不清，这种情况的合作模式只有一种，需求下来了，你接住，然后给排期。也许，这个需求的设计不合理，你不知道；这个需求有更好的实现方案，你不知道；这个需求可以通过现成的关联产品方案解决，省时省人力，你也不知道。")]),n._v(" "),v("p",[n._v("只有了解到业务背后的原因，才能从全局的视角去规划技术的未来。不了解业务，会让你离用户的真实需求很远，你越难发现其中的一些痛点和挑战，没法真正提出你的思考和解决方案，去解决用户的难题。")]),n._v(" "),v("p",[n._v("作为一名产品研发工程师，自然是希望亲手打磨一款解决用户问题、体验友好的产品，如果产品能得到用户认可，产生影响力、自然会特别有成就感。")]),n._v(" "),v("p",[n._v("阿里作为一家商业科技公司，对技术人的要求就是技术与业务相结合，在满足业务需求的基础上，成为技术与业务的桥梁，主动走进业务，思考如何通过技术手段帮助业务做赢、满足市场和用户需求，先一步技术规划、人才储备、技术架构和技术预研。")]),n._v(" "),v("p",[n._v("2.3 你了解业务吗？\n那么目前你了解你对接的业务吗？不妨尝试回答下以下问题：")]),n._v(" "),v("p",[n._v("业务做的是什么？产品大图有吗？\n业务的核心指标是什么？KPI 目标是什么，这些数字背后的含义是什么？要达成这些目标，业务策略是什么？\n业务的用户是谁？流量怎么分层？占比多少？分别在业务中是怎样的定位？\n业务的商业模式？靠什么吸引流量，盈利模式是怎样的？\n我们做的页面是什么东西？为业务带来什么价值？要创造更多的价值，我们可以做什么？\n2.4 如何学习业务?\n2.4.1 业务领域知识的阅读\n找到该领域相关的评分较好的书籍集中阅读，快速形成知识框架。")]),n._v(" "),v("p",[n._v("2.4.2 了解业务背景和规划\n刚刚接手新的业务，可以邀请业务方老板或者资深的运营/产品同学，给你讲讲这块业务的过去、现在、未来、愿景、财年规划，以及对技术同学的期望；\n花时间读合作方（运营、产品、研发）的周报，了解现在在发生什么，是不是离目标越来越近了；\n了解业务目标、落地策略、衡量目标的数据口径，关注数据，关注目前做的项目是否为了达成目标而战，如果不是，提出你的想法和建议；\n多参会，建立产品 sense。收集信息最好的方式就是参加所处业务老大的 KO 会，各种 KO 会会把战略上的拆解和背后的思考整体梳理之后宣讲传达给 BU 或部门的同学，\n2.4.3 多交流\n与服务端同学聊天，与 PM 聊天，与用户聊天，多角度看业务，但要注意的是，针对专业型比较强的业务，需要先做功课，至少一些英文的缩写要清楚的明白意思。")]),n._v(" "),v("p",[n._v("2.4.4 谨记数字\n如果前面还需要花比较长的时间，那这一个可以现在就做起来，那就是把业务相关的数字记得越精细约好，越具体越好，越全面越多越好。这样做有两个好处：")]),n._v(" "),v("p",[n._v("所记的数字指标本身，很大程度已经涵盖了这个业务价值方向，你便知道了这个业务重点关注的是哪个维度的东西\n这些数字可以作为和业务方以及产品“平等对话”的源头，否则连最基本的对话基础都没有\n2.4.5 从日常需求入手\n对于项目中的需求，我们要尝试分析背后的目的和价值，做了之后有什么预期的收益，为什么这么做就可以达到这个收益，跟总体目标是否契合，还要判断业务方提到的点是不是有效的方案或者说成本太大的方案，看能不能给出替代方案，用现有的方案或者小成本的方式来满足业务方。")]),n._v(" "),v("p",[n._v("而在项目提测上线后，还要仔细分析以及多关注上线之后的业务数据和效果，会有如下好处：")]),n._v(" "),v("p",[n._v("提高自己对业务的理解能力，你在关注业务数据的同时，也就会更多的从业务的角度来看到这个功能所带来的价值是否符合预期，当出现不符合预期的时候，可以和业务方一起进行数据漏斗的分析从而找到问题所在，避免我们的劳动成果成为一次性的工作。")]),n._v(" "),v("p",[n._v("总结的同时可以帮助自己梳理这个项目中自己哪些地方做的不足，或者相关推进中存在什么问题，以及后面怎么改进，提高了下次项目中的迭代效率和质量。比如这个项目是否存在需求理解不到位存在返工，或者沟通 & 联调低效，环境不稳定，自己设计的方案是否合理等问题，后续要怎么解决。")]),n._v(" "),v("p",[n._v("也可以从数据和总结中判断出什么样的需求是靠谱的 & 什么的样业务方是靠谱的，频繁争取资源上线效果又不好的业务方，下次再有需求过来则需要多增加一个心眼和思考的过程。")]),n._v(" "),v("p",[n._v("2.4.6 坚持\n业务思考力，没有个至少半年是不会见效的")]),n._v(" "),v("ol",{attrs:{start:"3"}},[v("li",[n._v("助力业务\n3.1 思考\n尽管平时的业务很忙，但再忙，也要抽时间思考，那么思考哪些内容呢？以下举一些例子：")])]),n._v(" "),v("p",[n._v("养成每天记工作内容的习惯，分析一下自己的时间到底耗在哪了\n在业务开发中，有遇到让你特别想吐槽的点吗？想下问题背后的原因，有什么方法可以避免下次不犯，能不能提炼为更加通用的解决方案，其他同学怎么解决的，我可以怎么解决？\n不断地输入、观察，业务的真实需求是什么？站在业务方的角度思考，业务遇到的痛点、挑战在哪里？\n3.2 沟通\n和老板、团队同学、业务方对焦，确认“我想做的”是不是“大家想要的”？")]),n._v(" "),v("p",[n._v("你可能会提出很多意见，但一般会遭到老板或者业务方无情的拒绝，而且问得你一脸懵逼，就比如：")]),n._v(" "),v("p",[n._v("当前业务背景下，为什么要做？（有什么业务价值？有什么技术价值？）\n现在必须做么？\n为什么是你做？\n怎么做？（体系化、全链路、单点技术挑战）\n有什么业务和技术结果？能否被复用？\n未来规划（能否跟 BU 或集团的方案联动、共建）\n而这往往是因为你提出要做的事情，有价值但不是必须做的，没有结合目前业务需要什么。也就是说，你想做的技术是个人和纯技术角度思考的，没有基于业务的现状和痛点去考虑技术方案，不接地气，投入产出比不高。")]),n._v(" "),v("p",[n._v("所以给技术产出先找好业务的阵地，看看有没有可以借力的地方，不要重复造轮子。快速验证这个方向的正确性后，再逐渐多加投入、丰满技术设计。不要自己 YY、默默地做完，这样做出来的东西没有业务场景埋单。")]),n._v(" "),v("p",[n._v("3.3 技术规划\n业务赋能其实是需要我们紧贴业务规划，制定技术规划和方案。在了解业务方今年的 KPI 重点是什么，预计的拆解和实现路径是什么后，再结合自己的和团队情况，想想自己能做哪些事情来帮助业务实现其 KPI，这里有两点需要注意下：")]),n._v(" "),v("p",[n._v("抓住本质从点及面，通盘考虑: 很多时候，我们收到的痛点和业务需求都是单点的，这时我们不能着眼于眼前的单点问题，而需要通盘来考虑，比如 SEO 的页面对性能非常敏感，经常可能会收到一些业务方来反馈，说目前我们的 SEO 有这个地方，那个地方需要优化下，而单点解决这些问题可能对业务带来的收益并不大，对自己的技能也没有什么成长。这时候如果通盘考虑这个命题，其实会发现做 SEO 页面的优化，其实目的是为了提升 SEO 页面的收录和排名。而提升 SEO 页面的收录和排名其实不仅有前端性能优化这一个路径，而是还有一些其他的路径：比如优化关键词&长尾词，采用 Google 的 AMP 技术改造 SEO 页面，优化爬虫爬取页面的耗时提升爬取率等等。这样就能吧点的问题转化为面的问题，才能制定更有效和全面的抓手来赋能业务。")]),n._v(" "),v("p",[n._v("既要解决眼前痛点，也要长远谋划: 很多时候我们不能仅满足于眼前的 KPI，还需要了解业务方长远的想法和可以预见的规划。就比如试点的新业务，一层规划是保证业务项目的按时上线，考虑到未来，另一层规划可能就是如何做到技术方案的可以复制性。")]),n._v(" "),v("p",[n._v("3.4 站在巨人的肩膀上\n当你需要制定一个产品化的方案或者工具和框架的时候，最好先放眼集团内部和行业进行一番调研，看看业界和其他同事是怎么解决这个问题的。尽量站在别人的肩膀上做出创新或者参与共建，避免小团队内造出重复和质量低的轮子")]),n._v(" "),v("ol",{attrs:{start:"4"}},[v("li",[n._v("技术深度\n4.1 技术知识与技术能力\n“技术”不能是一个笼统的词汇，我想它至少可以分为“技术知识”和“技术能力”两大部分。")])]),n._v(" "),v("p",[n._v("什么是“技术知识”？知识就是 I KNOW")]),n._v(" "),v("p",[n._v("《TypeScript 从入门到放弃》\n《React 从入门到放弃》\n《Webpack 从入门到放弃》\n......\n什么是“技术能力”？能力就是 I CAN")]),n._v(" "),v("p",[n._v("我用 TypeScript 重构了一个大型系统，代码健壮性及研发效率大幅提升。\n我用 React Hooks 给全栈同学进行前端培训，培训效果大幅提升。\n我深入研究了 Webpack，优化配置，使得系统构建速度大幅提升。\n.....\n4.2 培养技术视野\n关注日常业界新技术。不一定要深入了解，但对新技术保持好奇心，大概了解它是做什么的，如果在工作中遇到匹配的落地环境，可以考虑写个 demo 看看是不是有价值\n关注集团和业界的解决方案。在业务中发现问题，做解决方案的时候，我们很容易陷入自己的设计中，一脑子地想把所有东西都自己做出来，但投入会非常大，产出的价值是否一样大呢？不知道。大部分情况下，你想做的，在 ATA 能搜到，前人踩的坑，或者已有的成熟的解决方案，只要你去沟通去接触，就可以轻松地接进来，为什么要花大量的时间去造轮子呢？可以借力的地方，就去借力吧，把时间剩下来，做你的解决方案中更核心更有价值的事情。\n4.3 技术深度\n一聊到“技术深度”，可能很自然地会认为是在某项技术上挖得很深，或者解决了一个业界公认难度很高的技术难题，但这只是“技术深度”的其中一部分：")]),n._v(" "),v("p",[n._v("体系化 / 系统化\n体系化思维是认识事物的一种方式，在面对问题的时候，能够针对复杂的问题，列出关键的要素和解决方法，将散乱无序的问题，变得逻辑清晰，有章可循。\n在问题的定位和解决的体现，从表象到本质，拆解出造成问题背后的原因，针对性地去解决本质的原因，而非治标不治本，有解决方案有节奏地解决。\n全链路\n除了前端的部分，向前向后的技术栈，还能挖多深。\n单点技术挑战\n在某个技术挑战上，你的思考和解决方案是怎样的。\n4.4 技术与业务共赢\n真正有突破性的、带来重大价值的业务成果必然伴随着技术上的深入乃至创新，所以在做业务成果的时候，一定会有让我们增加技术深度的场景。")]),n._v(" "),v("ol",{attrs:{start:"5"}},[v("li",[n._v("给你更多体感\n培养业务感确实是一件非常有难度的事情，他要求你以业务而非技术为第一视角，这可能违背了很多人内心的“技术坚持”，但如果一直做技术，其实是很难有非常大的突破的，在工作中，如果能实现技术与业务共赢，将会助力你到达更高的高度。")])]),n._v(" "),v("p",[n._v("改变的确很难，但结果值得冒险。")]),n._v(" "),v("hr"),n._v(" "),v("p",[n._v("参考链接："),v("a",{attrs:{href:"https://github.com/mqyqingfeng/Blog/issues/172",target:"_blank",rel:"noopener noreferrer"}},[n._v("https://github.com/mqyqingfeng/Blog/issues/172"),v("OutboundLink")],1)])])}),[],!1,null,null,null);_.default=t.exports}}]);