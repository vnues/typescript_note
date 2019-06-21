"use strict";
// (function(something) {
//     something.foo = 123;
//   })(something || (something = {}));
//   console.log(something);
//   // { foo: 123 }
//   (function(something) {
//     something.bar = 456;
//   })(something || (something = {}));
//   console.log(something); // { foo: 123, bar: 456 }
//避免污染全局 写法方便 不用每次创建对象
var Utility;
(function (Utility) {
    function log(msg) {
        console.log(msg);
    }
    Utility.log = log;
    function error(msg) {
        console.log(msg);
    }
    Utility.error = error;
})(Utility || (Utility = {}));
Utility.log(22);
Utility.error(11);

