class Bus {
  constructor() {}
  emit() {}
  on() {}
}

Bus.install = function (Vue, options) {
  Vue.prototype.$bus = new Bus();
};

export default Bus;
