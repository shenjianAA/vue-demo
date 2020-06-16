Class Bus {
  constructor(){
    this.callbacks = {}
  }
  $on(name, fn) {
    this.callbacks[name] = this.callbacks[name] || [];
    this.callbacks[name].push(fn);
  }
  $emit(name, args) {
    if(this.callbacks[name]){
      this.callbacks[name].forEach(cb => {
        cb(args)
      });
    }
  }
}

Bus.install = function(_Vue, options){
  Vue.prototype.$bus = new Bus();
}
export default Bus;