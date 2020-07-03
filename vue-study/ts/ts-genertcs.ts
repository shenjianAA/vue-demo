/**
 * 泛型
 */

/**
 * 需要实现返回值类型和传入参数类型一致，且类型不确定的方法
 */
function identity<T>(arg: T): T {
  return arg;
}
//明确的指定了T是string类型，并做为一个参数传给函数，使用了<>括起来而不是()
let output = identity<string>("myString"); // type of output will be 'string'
//利用了类型推论 -- 即编译器会根据传入的参数自动地帮助我们确定T的类型
let output1 = identity("myString"); // type of output will be 'string'

/**
 * 泛型类型
 */
function identity2<T>(arg: T): T {
  return arg;
}

let myIdentity: <T>(arg: T) => T = identity;


/**
 * 泛型类
 */
class GenericNumber<T> {
  zeroValue: T;
  add: (x: T, y: T) => T;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function(x, y) { return x + y; };