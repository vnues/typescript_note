// enum Response {
//      one = 1,
//      two,
//      three,
//      four,
//      five
// }
//for...in语句以任意顺序遍历一个对象的可枚举属性。对于每个不同的属性，语句都会被执行。
// for(let key in Response){
//      console.log(Response[key])
// }
//编译结果
// "use strict";
// exports.__esModule = true;
// var Response;
// (function (Response) {
//     Response[Response["one"] = 1] = "one";
//     Response[Response["two"] = 2] = "two";
//     Response[Response["three"] = 3] = "three";
//     Response[Response["four"] = 4] = "four";
//     Response[Response["five"] = 5] = "five";
// })(Response || (Response = {}));
// for (var key in Response) {
//     console.log(Response[key]);
// }


//export {} 