/**
 * 创建一个组件实例，并挂载到body上
 * 返回组件实例
 */
import Vue from "vue";
export default function (Componet, props) {
  //通过vue实例来创建
  let vm = new Vue({
    render(h) {
      return h(Componet, { props }); //render 函数来渲染虚拟节点
    },
  }).$mount();

  //创建组件实例
  let comp = vm.$children[0];

  //挂载到body上
  document.body.appendChild(vm.$el);

  //添加清除函数
  comp.remove = function () {
    document.body.removeChild(vm.$el);
    vm.$destroy();
  };

  return comp;
}
