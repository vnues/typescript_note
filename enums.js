"use strict";
// enum Role {Employee = 3, Manager, Admin}
// let role: Role = Role.Employee
// console.log(role) // 3
Object.defineProperty(exports, "__esModule", { value: true });
// 自定义数据类型
// function Person(){
//      var name 
// // }
//自定义数据类型 --类不是自定义类型 是接口哦 声明类的属性得在construcotr使用
//parameter
class Person {
    constructor(info) {
        this.name = info.name;
        this.age = info.age;
    }
}
var person = new Person({ name: 'zs', age: 18 });
person.age = 234;
person.name = "lxs";
console.log(person);
