// (function(something) {
//     something.foo = 123;
//   })(something || (something = {}));
  
//   console.log(something);
//   // { foo: 123 }
  
//   (function(something) {
//     something.bar = 456;
//   })(something || (something = {}));
  
//   console.log(something); // { foo: 123, bar: 456 }
namespace Utility {
    export function log(msg:any) {
      console.log(msg);
    }
    export function error(msg:any) {
      console.log(msg);
    }
  }


  Utility.log(22);
  Utility.error(11);