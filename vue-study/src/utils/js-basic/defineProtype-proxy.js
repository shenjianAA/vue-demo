let myObj = {};
let arr = [1, 2, 3, 4];

const aryMethods = [
  "push",
  "pop",
  "shift",
  "unshift",
  "splice",
  "sort",
  "reverse",
];
const arrayAugmentations = [];
aryMethods.forEach((method) => {
  // 这里是原生 Array 的原型方法
  let original = Array.prototype[method];

  // 将 push, pop 等封装好的方法定义在对象 arrayAugmentations 的属性上
  // 注意：是实例属性而非原型属性
  arrayAugmentations[method] = function () {
    console.log("我被改变啦!");

    // 调用对应的原生方法并返回结果
    return original.apply(this, arguments);
  };
});

arr.__proto__ = arrayAugmentations;

Object.defineProperty(myObj, "name", {
  get() {
    return name;
  },
  set(newValue) {
    console.log("someone want to set name attr to ~~" + newValue);
  },
});

Object.defineProperty(myObj, "arr", {
  get() {
    return arr;
  },
  set(newVal) {
    console.log("someone want to set list attr to ~~" + newVal);
    console.log(arguments);
    arr = newVal;
  },
});
