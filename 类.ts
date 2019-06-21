 //public 修饰符 通常省略不写

//  class Person{
//       public name:string
//       public constructor(userInfo:any){
//            this.name = userInfo.name
//       }
//       public getName(){
//            console.log(this.name)
//       }
//  }


//  let person = new Person({name:'zs'})

//  person.getName()

//private修饰符

// class Person{
//     public name:string
//     private age :number
//     public constructor(userInfo:any){
//          this.name = userInfo.name
//          this.age = userInfo.age
//     }
//     public getName(){
//          console.log(this.name)
//          console.log(this.age)
//     }
// }


// let person = new Person({name:'zs',age:18})

// person.getName()

//console.log(person.age) //js还是可以正常执行 ts就会报错



//### getter/setter  标题用###形式表达
//这两个方法 外部访问时实际时属性来操作读写
// let password ="secret passcode"

// class Employee{
//      private _fullname :string
      
//       get fullname():string{
//            return this._fullname 
//       }
//       //实例成员 设置实际就是给fullname赋值 newName就是赋值的值
//       set fullname(newName:string){
//            if(password&&password === 'secret passcode'){
//             this._fullname = newName
//            }else{
//                 console.log("您没有权限操作")
//            }
//       }
     
// }

// let employee =new Employee()

//设置fullname 实际在设置get fullname方法
//employee.fullname = 'boss'
//读取fullname 实际就是get fullname
//console.log(employee.fullname)

// ### static静态属性 类本身自带的成员属性 不用实例成员赋值的属性
//但是实例成员不能访问
class Grid {
    static origin = {x: 0, y: 0};
    calculateDistanceFromOrigin(point: {x: number; y: number;}) {
        let xDist = (point.x - Grid.origin.x);
        let yDist = (point.y - Grid.origin.y);
        return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
    }
    constructor (public scale: number) { }
}
// 传参错误写法
// let grid = new Grid(scale:12)
let grid = new Grid(12)
//实例成员不能访问static
//console.log(grid.origin)






