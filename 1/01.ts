let a: number = 10

let b: string;
b = '123'

let c = true // 此时c的type设置为了boolean  let c: boolean = true

// 形参 返回值类型 设置
function sum(a: number, b: number): number {
  return a + b
}

let result = sum(1,2)

// 未知类型
let d: unknown
d = 1
d = '1'
d = true

// 类型断言，告诉编译器 类型
d = b as string
d = <string>b

// 函数无返回值
function fn(): void{
  return
}

// ?对象属性可选
let e: object;
let f: {name: string, age?: number};
f = {name: '1', age: 111}
//[props: string]: any 表示对象可以添加任何类型的属性
let g: {name: string, [props: string]: any}
g = {name: '1', xxx: 12312321}
// 设置函数结构的类型声明
let h: (a: number, b: number) => number;
h = function(n1: number,n2: number): number {
  return n1 + n2
}
h(1,2)


// 数组
let i: string[] // number[] 
let i_1: Array<string>
i_1 = ['1','2']

// 元组， 固定长度的数组
let j: [string, number]
j = ['123', 112312]


// 枚举
enum Gender {
  Male,
  Female
}

let k: {name: string, gender: Gender}
k = {
  name: '1',
  gender: Gender.Male
}


// 类型别名
type myType = 1 | 2| 3
let  l: myType
l = 3