// 类型注解 --- 这个概念很重要！！！

function greeter(person:string):string{
     return 'Hello' + person
}

interface Person{
     userName:string
     age:number
}
let person:Person={
     userName:"vnues",
     age:22
}

// let p={
//      userName:"sf",
//      age:12
// }

let user :string="Yee"

console.log(greeter(user))


// es5通过函数实现类

// ts中接口和类的区别
