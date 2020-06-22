/**
 * 观察者模式（发布/订阅模式）
 * 观察者模式定义了对象之间一对对多的依赖关系，当一个对象改变了状态，它的所有依赖会被通知，然后自动更新。
 */
class PubSub {
  constructor() {
    this.handlers = {}; //保存订阅的回调函数
  }
  //订阅
  subscribe(eventName, cb) {
    if (typeof cb !== "function") {
      console.log("订阅主题需要一个处理函数");
    }
    if (!this.handlers.hasOwnProperty(eventName)) {
      this.handlers[eventName] = [];
    }
    this.handlers[eventName].push(cb);
  }
  //发布
  publish(eventName, ...args) {
    if (this.handlers.hasOwnProperty(eventName)) {
      let cbs = this.handlers[eventName];
      cbs.map((cb) => {
        cb.apply(null, args);
      });
    }
  }
  // 移除订阅
  unSubscribe(eventName, handle) {
    try {
      if (this.handlers.hasOwnProperty(eventName)) {
        this.handlers[eventName].map((item, index) => {
          if (item === handle) {
            this.handlers[eventName].splice(index, 1);
          }
        });
      }
    } catch (error) {
      console.warn(error);
    }
  }
}
