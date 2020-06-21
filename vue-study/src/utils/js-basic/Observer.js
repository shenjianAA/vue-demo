/**
 * 观察者模式（发布/订阅模式）
 * 观察者模式定义了对象之间一对对多的依赖关系，当一个对象改变了状态，它的所有依赖会被通知，然后自动更新。
 */
class Subscribe {
  constructor() {
    this.handlers = [];
  }
}
