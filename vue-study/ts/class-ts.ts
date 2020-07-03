/**
 * 基本使用
 */
class Greeter {
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }
  greet(): string {
    return "hello " + this.greeting;
  }
}
let greeter1 = new Greeter("world");

/**
 * 类继承
 */
class Animal {
  name: string;
  constructor(theName: string) {
    this.name = theName;
  }
  move(distance: number = 0) {
    console.log(`animal move ${distance} m`);
  }
}

class Dog extends Animal {
  constructor(name: string) {
    super(name);
  }
  bark() {
    console.log("Woof! Woof!");
  }
}

const dog = new Dog("xxx");
dog.bark();
dog.move(10);
dog.bark();

class Snake extends Animal {
  constructor(name: string) {
    super(name);
  }
  move(distance = 5) {
    console.log("sligtering.........");
    super.move(distance);
  }
}

let sam = new Snake("Sammy the Python");
sam.move();

/**
 * 公共，私有与受保护的修饰符
 * 成员都默认为 public。
 */
class Animal1 {
  public name: string;
  public constructor(theName: string) {
    this.name = theName;
  }
  public move(distanceInMeters: number) {
    console.log(`${this.name} moved ${distanceInMeters}m.`);
  }
}
/**
 * private
 */
class Animal2 {
  private name: string;
  constructor(theName: string) {
    this.name = theName;
  }
}

//new Animal2("Cat").name; // 错误: 'name' 是私有的.

/**
 * protected
 * protected成员在派生类中仍然可以访问
 */
class Person2 {
  protected name: string;
  constructor(name: string) {
    this.name = name;
  }
}

class Employee extends Person2 {
  private department: string;

  constructor(name: string, department: string) {
    super(name);
    this.department = department;
  }

  public getElevatorPitch() {
    return `Hello, my name is ${this.name} and I work in ${this.department}.`;
  }
}

let howard = new Employee("Howard", "Sales");
console.log(howard.getElevatorPitch());
//console.log(howard.name); // 错误

/**
 * readonly修饰符
 * 只读属性必须在声明时或构造函数里被初始化。
 */

class Octopus {
  readonly name: string;
  readonly numberOfLegs: number = 8;
  constructor(theName: string) {
    this.name = theName;
  }
}
let dad = new Octopus("Man with the 8 strong legs");
//dad.name = "Man with the 3-piece suit"; // 错误! name 是只读的.

/**
 * 存取器
 * TypeScript支持通过getters/setters来截取对对象成员的访问
 */
let passcode = "secret passcode";

class Employee1 {
  private _fullName: string;

  get fullName(): string {
    return this._fullName;
  }

  set fullName(newName: string) {
    if (passcode && passcode == "secret passcode") {
      this._fullName = newName;
    } else {
      console.log("Error: Unauthorized update of employee!");
    }
  }
}

let employee = new Employee1();
employee.fullName = "Bob Smith";
if (employee.fullName) {
  alert(employee.fullName);
}

/**
 * 静态属性
 * static
 */
class Grid {
  static origin = { x: 0, y: 0 };
  calculateDistanceFromOrigin(point: { x: number; y: number }) {
    let xDist = point.x - Grid.origin.x;
    let yDist = point.y - Grid.origin.y;
    return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
  }
  constructor(public scale: number) {}
}

let grid1 = new Grid(1.0); // 1x scale
let grid2 = new Grid(5.0); // 5x scale

console.log(grid1.calculateDistanceFromOrigin({ x: 10, y: 10 }));
console.log(grid2.calculateDistanceFromOrigin({ x: 10, y: 10 }));

/**
 * 抽象类
 * abstract
 * 抽象类中的抽象方法不包含具体实现并且必须在派生类中实现。 抽象方法的语法与接口方法相似。
 * 两者都是定义方法签名但不包含方法体。
 * 抽象方法必须包含 abstract关键字并且可以包含访问修饰符。
 */
abstract class Department {
  constructor(public name: string) {}

  printName(): void {
    console.log("Department name: " + this.name);
  }

  abstract printMeeting(): void; // 必须在派生类中实现
}

class AccountingDepartment extends Department {
  constructor() {
    super("Accounting and Auditing"); // 在派生类的构造函数中必须调用 super()
  }

  printMeeting(): void {
    console.log("The Accounting Department meets each Monday at 10am.");
  }

  generateReports(): void {
    console.log("Generating accounting reports...");
  }
}

let department: Department; // 允许创建一个对抽象类型的引用
//department = new Department(); // 错误: 不能创建一个抽象类的实例
department = new AccountingDepartment(); // 允许对一个抽象子类进行实例化和赋值
department.printName();
department.printMeeting();
//department.generateReports(); // 错误: 方法在声明的抽象类中不存在
