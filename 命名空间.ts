//命名空间是位于全局命名空间下的一个普通的带有名字的JavaScript对象
//有一个疑惑
//export module   export namespace   module以前是ts版本的关键字只是后面替换成namespace  不是理解成 
//es6 export  虽然有联系

// 如果要用一句话解释TS里的namespace与JS里module的区别，那主要在于文件上：TS里的namespace是跨文件的，JS里的module是以文件为单位的，一个文件一个module。

// TS里的namespace主要是解决命名冲突的问题，会在全局生成一个对象，定义在namespace内部的类都要通过这个对象的属性访问，例如 egret.DisplayObject, egret就是namespace的对象，DisplayObject则是那个类名。因为是注册到全局的，所以跨文件也能正常使用，不同的文件能够读取其他文件注册在全局的命名空间内的信息，也可以注册自己的。namespace其实比较像其他面向对象编程语言里包名的概念。

// 而JS里的module，主要是解决加载依赖关系的。跟文件绑定在一起，一个文件就是一个module。在一个文件中访问另一个文件必须要加载另一个文件。在NodeJS里是用CommonJS处理模块加载，因为是运行在本地，所以可以同步加载，写起来也比较方便。用到一个文件就require它一下，作为一个变量。而在Web端的RequireJS使用的是AMD处理模块加载，是异步的。其实就是把所有代码写在回调里，先去异步加载依赖的所有文件。

//大体意思就是 TS1.5 以后，推荐全面使用namespace关键字代替module。因为JS里本身就有module的概念，而且已经是ES6标准里的关键字，各种加载框架比如CommonJS，AMD等也都有module的概念，但是TS里之前的module关键字与他们都不太相同。所以换了一个关键字加以区分，避免造成概念上的混淆。实际语法上，使用namespace等价于TS以前使用的module，然后推荐代码中不要再出现module关键字，这个关键字基本上变成了一个编译后和运行时里的概念，留给纯JS中使用。

//Promise<any>