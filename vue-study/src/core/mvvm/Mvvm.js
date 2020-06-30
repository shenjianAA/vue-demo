class MVVM {
  constructor(options) {
    this.$options = options;
    this.$datas = options.data;

    //数据劫持
    this.observe(this.$datas);
    if (this.$datas && typeof this.$datas === "object") {
      //对数据进行代理， 可以直接通过vm访问data数据
      Object.keys(this.$datas).forEach((key) => {
        this.proxyData(key);
      });
    }
    //测试watcher
    // new Watcher(this, "num");
    // this.num;
    // new Watcher(this, "user.age");
    // this.user.age;
  }
  observe(value) {
    //data必须是一个Object
    if (!value || typeof value !== "object") {
      console.warn("data的值必须是一个Object对象！");
      return;
    }
    Object.keys(value).forEach((key) => {
      //数据响应式处理
      this.defineReactive(value, key, value[key]);
    });
  }
  defineReactive(obj, key, val) {
    //递归处理
    this.observe(val);
    const dep = new Dep(); // dep 和data中的key是一对一关系，一个key对应一个dep

    Object.defineProperty(obj, key, {
      get() {
        Dep.target && dep.addDep(Dep.target);
        return val;
      },
      set(newVal) {
        if (newVal !== val) {
          val = newVal;
        }
        //通知
        dep.notify();
      },
    });
  }
  proxyData(key) {
    Object.defineProperty(this, key, {
      get() {
        return this.$datas[key];
      },
      set(newVal) {
        this.$datas[key] = newVal;
      },
    });
  }
}

//Dep  收集并管理watcher
class Dep {
  constructor() {
    this.deps = [];
  }
  addDep(dep) {
    //依赖收集
    this.deps.push(dep);
  }
  notify() {
    //下发通知， 通知关联watcher更新
    this.deps.forEach((dep) => {
      dep.update();
    });
  }
}

//创建watcher 保存data中数值和页面上的挂钩关系
class Watcher {
  constructor(vm, key) {
    //创建该实例时，立即将实例指向Dep.target便于依赖收集
    Dep.target = this;
    this.vm = vm;
    this.key = key;
  }
  update() {
    console.log(this.key + "属性更新了！");
  }
}
