//类型注解
let foo = "xxx"; //类型推论
let bar: string; //类型注解
//bar = 1   wrong
bar = "xxx";

let user: string | number;
user = "sj";
user = 1;

//数组类型约束
let names: string[];
//names =[1,2,3] wrong
names = ["1", "aaa"];

//任意类型
let temp: any;
temp = 1;
temp = "111";

let list: any[];
list = [1, 2, 3];
list = [1, "wwww", 2334];

//函数中使用类型
function greet(person: string): string {
  return "hello" + person;
}

function warn(err: string): void {
  alert(err);
}

//内置常用类型
// string, number , boolean, void, any

/**
 * 函数
 * 只要形参声明，就是必传的
 * 可选参数 id?: string  可选参数必须在必选参数后面
 */

function sayHello(name: string, age?: number): string {
  console.log(name, age);
  return "hello " + name;
}

sayHello("sj", 18);
sayHello("sjj");

//class
class MyComp {
  private foo1: string; //私有属性，不可以在类的外部使用
  protected bar: string; //保护属性，可以再派生的类中使用
  readonly mua = "mua"; //只读属性
  static dong = "dong"; //静态属性，直接通过类访问的

  //构造函数: 初始化成员变量
  //参数上添加修饰符，能够定义并初始化一个成员变量
  constructor(private tua = "tua") {
    this.foo1 = "foo";
    this.bar = "bar";
  }

  //方法也有修饰符
  private someMethod() {}

  //存取器  存取数据时，可以添加额外的逻辑，
  get foo() {
    return this.foo1;
  }

  set foo(newVal) {
    this.foo1 = newVal;
  }
}

//接口  用来类型的约束
interface Person {
  name: string;
  id: string;
}

class Human implements Person {
  name = "";
  id = "";
}

//未使用接口定义
function printLabel(labelObj: { label: string }): void {
  console.log(labelObj.label);
}
let myObj = { label: "xxxx", size: 10 };
/**
 * 当调用printLabel方法时，类型检测会检测是否传入一个参数，并且是否有一个名为
 * label的string类型的属性
 */
printLabel(myObj);

//1.1使用接口定义来描述对象对应的规则
interface LableValue {
  label: string;
}
function printLabel1(labelObj: LableValue): void {
  console.log(labelObj.label);
}
let myObj1 = { label: "xxxx", size: 10 };
printLabel1(myObj1);

//可选属性
interface SquareConfig {
  color?: string;
  width?: number;
  [propName: string]: any;
}
interface Square1 {
  color: string;
  area: number;
}
function createSquare(config: SquareConfig): Square1 {
  let newSquare = { color: "white", area: 100 };
  if (config.color) {
    newSquare.color = config.color;
  }

  if (config.width) {
    newSquare.area = config.width * config.width;
  }
  return newSquare;
}
//1.2使用接口定义来描述函数类对应的规则
/**
 * 为了使用接口表示函数类型，我们需要给接口定义一个调用签名。
 * 它就像是一个只有参数列表和返回值类型的函数定义。
 * 参数列表里的每个参数都需要名字和类型。
 *
 */
interface SearchFunc {
  (source: string, substring: string): boolean;
}
let mySearch: SearchFunc;
mySearch = function (source: string, subString: string) {
  let result = source.search(subString);
  return result > -1;
};
/**
 * 对于函数类型的类型检查来说，函数的参数名不需要与接口里定义的名字相匹配
 */
let mySearch1: SearchFunc;
mySearch1 = function (ss: string, subStr: string) {
  let result = ss.search(subStr);
  return result > -1;
};

/**
 * 类类型实现接口
 */
interface ClockInterface {
  currentTime: Date;
  setTime(d: Date): void;
}
class Clock implements ClockInterface {
  currentTime: Date;
  setTime(d: Date): void {
    this.currentTime = d;
  }
  constructor(h: number, m: number) {}
}

/**
 *一个接口可以继承多个接口，创建出多个接口的合成接口。
 */
interface Shape {
  color: string;
}

interface PenStroke {
  penWidth: number;
}

interface Square extends Shape, PenStroke {
  sideLength: number;
}

let square = <Square>{};
square.color = "blue";
square.sideLength = 10;
square.penWidth = 5.0;

/**
 * 一个对象可以同时做为函数和对象使用，并带有额外的属性。
 */
interface Counter {
  (start: number): string;
  interval: number;
  reset(): void;
}

function getCounter(): Counter {
  let counter = <Counter>function (start: number) {};
  counter.interval = 123;
  counter.reset = function () {};
  return counter;
}

let c = getCounter();
c(10);
c.reset();
c.interval = 5.0;
