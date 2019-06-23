"use strict";
//泛型的定义 用于函数的
//当我们需要写一个传入什么类型就得到什么类型的函数 而且编辑器有提醒 
// function one<T>(a:T):T{
//     return a
// }
//不过因为我们这个方法是运行的时候才指定类型，而且<T>是可以多种类型
//let a = one<number>(1)
//let b =one(520) //520的类型
// console.log(a)
// console.log(b)
// function one(a) {
//     return a;
// }
// var a = one(1);
// var b = one(520);
// console.log(a);
// console.log(b);
//<T>定义任意数据的类型   （a:T）:T 意思是定义T那种类型就给我返回那种类型
//定义返回数组泛型
// function loggingIdentity<T>(arg:T[]):T[]{
//        return arg
// }
// let a = loggingIdentity<string>(['1','f','fdf'])
// console.log(loggingIdentity)
// console.log(a)
// export{}
