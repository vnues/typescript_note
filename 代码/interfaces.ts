
//接口类型使用
// interface Iperson {
//       name:string
// }

// function getName(info:Iperson){
//        console.log(info)
// }

// getName({name:'vnues'})

//函数返回的值在ts的写法  为函数定义类型

// interface Iperson {
//       name:string
// }

// function getName(info:Iperson) :{age:number,color:string} {
//        console.log(info)
//        return {age:18,color:'blue'}
// }

// let zhansan = getName({name:'vnues'})

// console.log(zhansan)


//简化书写函数类型
// interface Iperson {
//       name:string
// }


// let zhansan = (info:Iperson) : ({age:number,color:string}) =>{
//       return {age:18,color:'blue'}
// }

//console.log(zhansan)

//报错打印

// var zhansan = function (info) {
//       return ;
//   };
//   return { age: 18, color: 'blue' };
//   console.log(zhansan);
  

// interface Iperson {
//       name:string
// }

//箭头函数声明函数的形式
// let zhansan = (info:Iperson) : {age:number,color:string} =>{
//       return {age:18,color:'blue'}
// }

// console.log(zhansan)

//完整函数类型

// let myAdd: (x: number, y: number) => number =
//     function(x: number, y: number): number { return x + y; };

// var myAdd = function (x, y) { return x + y; };
// console.log(myAdd)
// let myAdd: (baseValue: number, increment: number) => number =
//     function(x: number, y: number): number { return x + y; };
// console.log(myAdd)

// var myAdd = function (x, y) { return x + y; };
// console.log(myAdd);

//书写函数类型 -- 我的理解就是我们要更加明白参数类型的含义（比如是表达名字或者年龄）

//上面的 x 和 y 并不能明确其代表的意义   下面书写完整函数类型  可以提高代码的可读性
//(name:string,age:number)  前面的这个是指定参数的具体意义  与后面的  (n:string,a:number) 相呼应  这样就能明确两个参数所代表的意义了
//  => 后面的 number 是定义的返回值得类型
var myAddts:(name:string,age:number) => number = function(n:string,a:number):number{
      return a;
  };

export {} //阻止非正常报错