(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{514:function(t,s,a){t.exports=a.p+"assets/img/modular.79770b7b.png"},751:function(t,s,a){"use strict";a.r(s);var e=a(14),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"前端模块化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前端模块化"}},[t._v("#")]),t._v(" 前端模块化")]),t._v(" "),e("p",[e("img",{attrs:{src:a(514),alt:"image"}})]),t._v(" "),e("p",[t._v("JavaScript 在早期的设计中就没有模块、包、类的概念，开发者需要模拟出类似的功能，来隔离、组织复杂的 JavaScript 代码，我们称为模块化。")]),t._v(" "),e("p",[t._v("模块就是一个实现特定功能的文件，有了模块我们就可以更方便的使用别人的代码，要用什么功能就加载什么模块。")]),t._v(" "),e("h3",{attrs:{id:"模块化优点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#模块化优点"}},[t._v("#")]),t._v(" 模块化优点")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("避免命名冲突(减少命名空间污染)")])]),t._v(" "),e("li",[e("p",[t._v("更好的分离, 按需加载")])]),t._v(" "),e("li",[e("p",[t._v("提高代码复用率")])]),t._v(" "),e("li",[e("p",[t._v("提高了可维护性")])])]),t._v(" "),e("h2",{attrs:{id:"模块化规范"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#模块化规范"}},[t._v("#")]),t._v(" 模块化规范")]),t._v(" "),e("p",[t._v("常见的的 JavaScript 模块规范有：CommonJS、AMD、CMD、UMD、原生模块化，ES6 模块化")]),t._v(" "),e("h3",{attrs:{id:"commonjs"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#commonjs"}},[t._v("#")]),t._v(" CommonJS")]),t._v(" "),e("p",[t._v("CommonJs 是服务器端模块的规范，Node.js 采用了这个规范。")]),t._v(" "),e("p",[t._v("根据 CommonJS 规范，一个单独的文件就是一个模块。加载模块使用 require 方法，该方法读取一个文件并执行，最后返回文件内部的 exports 对象。")]),t._v(" "),e("p",[t._v("CommonJS 加载模块是同步的，所以只有加载完成才能执行后面的操作。像 Node.js 主要用于服务器的编程，加载的模块文件一般都已经存在本地硬盘，所以加载起来比较快，不用考虑异步加载的方式，所以 CommonJS 规范比较适用。但如果是浏览器环境，要从服务器加载模块，这是就必须采用异步模式。所以就有了 AMD CMD 解决方案。")]),t._v(" "),e("h3",{attrs:{id:"amd"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#amd"}},[t._v("#")]),t._v(" AMD")]),t._v(" "),e("p",[t._v("AMD：(Asynchromous Module Definition) 异步模块定义")]),t._v(" "),e("p",[t._v("AMD 是 RequireJS 在推广过程中对模块定义的规范化产出")]),t._v(" "),e("p",[t._v("AMD 异步加载模块。它的模块支持对象 函数 构造器 字符串 JSON 等各种类型的模块。")]),t._v(" "),e("p",[t._v("AMD 推崇依赖前置")]),t._v(" "),e("p",[t._v("对于依赖的模块，AMD 是提前执行")]),t._v(" "),e("h3",{attrs:{id:"cmd"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cmd"}},[t._v("#")]),t._v(" CMD")]),t._v(" "),e("p",[t._v("CMD（Common Module Definition）公共模块定义")]),t._v(" "),e("p",[t._v("CMD 是 SeaJS 在推广过程中对模块定义的规范化产出")]),t._v(" "),e("p",[t._v("CMD 推崇依赖就近")]),t._v(" "),e("p",[t._v("对于依赖的模块，CMD 是延迟执行。不过 RequireJS 从 2.0 开始，也改成可以延迟执行（根据写法不同，处理方式不同）")]),t._v(" "),e("h3",{attrs:{id:"umd"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#umd"}},[t._v("#")]),t._v(" UMD")]),t._v(" "),e("p",[t._v("UMD （Universal Module Definition） 通用模块定义")]),t._v(" "),e("p",[t._v("UMD 是 AMD 和 CommonJS 的综合产物。")]),t._v(" "),e("p",[t._v("AMD 浏览器第一的原则发展 异步加载模块。")]),t._v(" "),e("p",[t._v("CommonJS 模块以服务器第一原则发展，选择同步加载，它的模块无需包装(unwrapped modules)。")]),t._v(" "),e("p",[t._v("这迫使人们又想出另一个更通用的模式 UMD （Universal Module Definition）。希望解决跨平台的解决方案。")]),t._v(" "),e("p",[t._v("UMD 先判断是否支持 Node.js 的模块（exports）是否存在，存在则使用 Node.js 模块模式。")]),t._v(" "),e("p",[t._v("在判断是否支持 AMD（define 是否存在），存在则使用 AMD 方式加载模块。")]),t._v(" "),e("h3",{attrs:{id:"es6-模块化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#es6-模块化"}},[t._v("#")]),t._v(" ES6 模块化")]),t._v(" "),e("p",[t._v("ES6 模块的设计思想是尽量的静态化，使得编译时就能确定模块的依赖关系，以及输入和输出的变量。CommonJS 和 AMD 模块，都只能在运行时确定这些东西。而 CommonJS 和 CMD，都只能在运行时确定依赖。")]),t._v(" "),e("p",[t._v("可以进行可靠的静态分析，进而进行 tree-shaking")]),t._v(" "),e("p",[t._v("ES6 模块化特点：")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("只能作为模块顶层的语句出现")])]),t._v(" "),e("li",[e("p",[t._v("import 的模块名只能是字符串常量")])]),t._v(" "),e("li",[e("p",[t._v("import binding 是 immutable 的")])])]),t._v(" "),e("h3",{attrs:{id:"原生-js-模块化-native-js"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#原生-js-模块化-native-js"}},[t._v("#")]),t._v(" 原生 JS 模块化（Native JS）")]),t._v(" "),e("p",[t._v("上述的模块都不是原生 JavaScript 模块。它们只不过是我们用模块模式（module pattern）、CommonJS 或 AMD 模仿的模块系统。")]),t._v(" "),e("p",[t._v("JavaScript 标准制定者在 TC39（该标准定义了 ECMAScript 的语法与语义）已经为 ECMAScript 6（ES6）引入内置的模块系统了。")]),t._v(" "),e("p",[t._v("相对于 CommonJS 或 AMD，ES6 模块如何设法提供两全其美的实现方案：简洁紧凑的声明式语法和异步加载，另外能更好地支持循环依赖。")]),t._v(" "),e("h2",{attrs:{id:"模块化对比"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#模块化对比"}},[t._v("#")]),t._v(" 模块化对比")]),t._v(" "),e("h3",{attrs:{id:"amd-和-cmd-的区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#amd-和-cmd-的区别"}},[t._v("#")]),t._v(" AMD 和 CMD 的区别")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("AMD 是 RequireJS 在推广过程中对模块定义的规范化产出。CMD 是 SeaJS 在推广过程中对模块定义的规范化产出。")])]),t._v(" "),e("li",[e("p",[t._v("AMD 推崇依赖前置。 CMD 推崇依赖就近，")])]),t._v(" "),e("li",[e("p",[t._v("对于依赖的模块，AMD 是提前执行，CMD 是延迟执行。不过 RequireJS 从 2.0 开始，也改成可以延迟执行（根据写法不同，处理方式不同）")])]),t._v(" "),e("li",[e("p",[t._v("AMD 的 API 默认是一个当多个用，CMD 的 API 严格区分，推崇职责单一。比如 AMD 里，require 分全局 require 和局部 require，都叫 require。CMD 里，没有全局 require，而是根据模块系统的完备性，提供 seajs.use 来实现模块系统的加载启动。CMD 里，每个 API 都简单纯粹")])])]),t._v(" "),e("h3",{attrs:{id:"es6-模块与-commonjs-模块的差异"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#es6-模块与-commonjs-模块的差异"}},[t._v("#")]),t._v(" ES6 模块与 CommonJS 模块的差异")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("① CommonJS 模块输出的是一个值的拷贝，ES6 模块输出的是值的引用。")])]),t._v(" "),e("li",[e("p",[t._v("② CommonJS 模块是运行时加载，ES6 模块是编译时加载（静态加载）。")])])]),t._v(" "),e("p",[t._v("CommonJS 加载的是一个对象（即 module.exports 属性），该对象只有在脚本运行完才会生成。而 ES6 模块不是对象，它的对外接口只是一种静态定义，在代码静态解析阶段就会生成。")]),t._v(" "),e("h3",{attrs:{id:"requirejs-和-seajs-区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#requirejs-和-seajs-区别"}},[t._v("#")]),t._v(" RequireJS 和 SeaJS 区别")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("两者定位有差异。RequireJS 想成为浏览器端的模块加载器，同时也想成为 Rhino / Node 等环境的模块加载器。SeaJS 则专注于 Web 浏览器端，同时通过 Node 扩展的方式可以很方便跑在 Node 服务器端")])]),t._v(" "),e("li",[e("p",[t._v("两者遵循的标准有差异。RequireJS 遵循的是 AMD（异步模块定义）规范，SeaJS 遵循的是 CMD （通用模块定义）规范。规范的不同，导致了两者 API 的不同。SeaJS 更简洁优雅，更贴近 CommonJS Modules/1.1 和 Node Modules 规范。")])]),t._v(" "),e("li",[e("p",[t._v("两者社区理念有差异。RequireJS 在尝试让第三方类库修改自身来支持 RequireJS，目前只有少数社区采纳。SeaJS 不强推，而采用自主封装的方式来“海纳百川”，目前已有较成熟的封装策略。")])]),t._v(" "),e("li",[e("p",[t._v("两者代码质量有差异。RequireJS 是没有明显的 bug，SeaJS 是明显没有 bug。")])]),t._v(" "),e("li",[e("p",[t._v("两者对调试等的支持有差异。SeaJS 通过插件，可以实现 Fiddler 中自动映射的功能，还可以实现自动 combo 等功能，非常方便便捷。RequireJS 无这方面的支持。")])]),t._v(" "),e("li",[e("p",[t._v("两者的插件机制有差异。RequireJS 采取的是在源码中预留接口的形式，源码中留有为插件而写的代码。SeaJS 采取的插件机制则与 Node 的方式一致：开放自身，让插件开发者可直接访问或修改，从而非常灵活，可以实现各种类型的插件。")])])]),t._v(" "),e("h2",{attrs:{id:"模块化导入"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#模块化导入"}},[t._v("#")]),t._v(" 模块化导入")]),t._v(" "),e("h3",{attrs:{id:"require"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#require"}},[t._v("#")]),t._v(" require")]),t._v(" "),e("p",[t._v("require 前端和后端 node 都可使用，用于引入模块、 JSON、或本地文件。")]),t._v(" "),e("p",[t._v("require 是 CommonJs,AMD,CMD 规范中定义的模块请求方式")]),t._v(" "),e("p",[t._v("require 是同步请求，require 支持条件导入、动态导入等")]),t._v(" "),e("h3",{attrs:{id:"import"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#import"}},[t._v("#")]),t._v(" import")]),t._v(" "),e("p",[t._v("import 是 es6 的一个语法标准，如果要兼容浏览器的话必须转化成 es5 的语法")]),t._v(" "),e("p",[t._v("注意，import 命令具有提升效果，会提升到整个模块的头部，首先执行。")]),t._v(" "),e("p",[t._v("由于 import 是静态执行，所以不能使用表达式和变量，这些只有在运行时才能得到结果的语法结构。")]),t._v(" "),e("h3",{attrs:{id:"import-和-require-的区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#import-和-require-的区别"}},[t._v("#")]),t._v(" import 和 require 的区别")]),t._v(" "),e("ol",[e("li",[t._v("遵循规范")])]),t._v(" "),e("p",[t._v("require 是 AMD 规范引入方式")]),t._v(" "),e("p",[t._v("import 是 es6 的一个语法标准，如果要兼容浏览器的话必须转化成 es5 的语法")]),t._v(" "),e("ol",{attrs:{start:"2"}},[e("li",[t._v("调用时间")])]),t._v(" "),e("p",[t._v("require 是运行时调用，所以 require 理论上可以运用在代码的任何地方")]),t._v(" "),e("p",[t._v("import 是编译时调用，所以必须放在文件开头")]),t._v(" "),e("ol",{attrs:{start:"3"}},[e("li",[t._v("本质")])]),t._v(" "),e("p",[t._v("require 是赋值过程，其实 require 的结果就是对象、数字、字符串、函数等，再把 require 的结果赋值给某个变量")]),t._v(" "),e("p",[t._v("import 是解构过程，但是目前所有的引擎都还没有实现 import，我们在 node 中使用 babel 支持 ES6，也仅仅是将 ES6 转码为 ES5 再执行，import 语法会被转码为 require")]),t._v(" "),e("h3",{attrs:{id:"import-和-import"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#import-和-import"}},[t._v("#")]),t._v(" import()和 import")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("import()是动态加载。")])]),t._v(" "),e("li",[e("p",[t._v("import()返回一个 Promise 对象，import()加载模块成功以后，这个模块会作为一个对象，当作 then 方法的参数。")])]),t._v(" "),e("li",[e("p",[t._v("import()类似于 Node 的 require 方法，区别主要是前者是异步加载，后者是同步加载")])]),t._v(" "),e("li",[e("p",[t._v("import()通常用于按需加载、条件加载、动态的模块路径")])])]),t._v(" "),e("h2",{attrs:{id:"模块化导出"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#模块化导出"}},[t._v("#")]),t._v(" 模块化导出")]),t._v(" "),e("h3",{attrs:{id:"modules-export"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#modules-export"}},[t._v("#")]),t._v(" modules.export")]),t._v(" "),e("p",[t._v("nodeJS 采用 commonJs 规范，当前文件是一个模块(module)私有域，通过 exports 属性导出，通过 require()引入模块，通过.xx 去获取值，从而了解到加载某个模块，其实是加载该模块的 exports 属性")]),t._v(" "),e("p",[t._v("Node 内部提供一个 Module 构建函数。所有模块都是 Module 的实例")]),t._v(" "),e("p",[t._v("modules.export 给 module 实例中的 exports 对象添加的属性或者方法；")]),t._v(" "),e("p",[t._v("module.exports 属性表示当前模块对外输出的接口，其他文件加载该模块，实际上就是读取 module.exports 变量。")]),t._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 导出：example.js")]),t._v("\nmodule"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("a "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"111"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nmodule"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("fun")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 导出：或者写成对象形式")]),t._v("\nmodule"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  a"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"111"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("fun")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 导入")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" test "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./example.js"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nconsole"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("test"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("a"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("test"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fun"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br"),e("span",{staticClass:"line-number"},[t._v("11")]),e("br"),e("span",{staticClass:"line-number"},[t._v("12")]),e("br"),e("span",{staticClass:"line-number"},[t._v("13")]),e("br"),e("span",{staticClass:"line-number"},[t._v("14")]),e("br"),e("span",{staticClass:"line-number"},[t._v("15")]),e("br")])]),e("h3",{attrs:{id:"export"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#export"}},[t._v("#")]),t._v(" export")]),t._v(" "),e("p",[t._v("export 命令用于规定模块的对外接口，import 命令用于输入其他模块提供的功能。")]),t._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 引入模块的某些变量（方法、类），配合4、5使用")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" xxx"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" xxxx "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"xxx"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 输出模块的变量（方法、类），对应引入方法为1")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" xxx "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"x"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" xxx "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br")])]),e("h3",{attrs:{id:"export-default"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#export-default"}},[t._v("#")]),t._v(" export default")]),t._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 默认输出一个函数")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"foo"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 引用并指定名字")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" customName "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./export-default"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br")])]),e("h3",{attrs:{id:"export-和-module-export-的区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#export-和-module-export-的区别"}},[t._v("#")]),t._v(" export 和 module.export 的区别")]),t._v(" "),e("p",[t._v("exports 是 module.exports 的引用")]),t._v(" "),e("p",[t._v("exports：")]),t._v(" "),e("p",[t._v("直接打印 exports 是个空对象，且不会报错")]),t._v(" "),e("p",[t._v("因为内部执行了 "),e("code",[t._v("var module = new Module(); var exports = module.exports")])]),t._v(" "),e("h3",{attrs:{id:"export-default-和-export-的区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#export-default-和-export-的区别"}},[t._v("#")]),t._v(" export default 和 export 的区别")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("在一个文件或模块中，export、import 可以有多个，export default 仅有一个")])]),t._v(" "),e("li",[e("p",[t._v("通过 export 方式导出，在导入时要加{ }，export default 则不需要")])])]),t._v(" "),e("p",[t._v("共同点：export 与 export default 均可用于导出常量、函数、文件、模块")])])}),[],!1,null,null,null);s.default=r.exports}}]);