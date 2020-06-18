let Vue;
class  VueRouter {
  constructor(options) {
	 this.options = options;
    //创建路由配置映射Map
	 this.routeMap = {}
	 
	 //创建current 记录当前路径，并且要是响应式（此处通过Vue实现双向绑定）
	 this.vm = new Vue({
		 data: {
			 current: "/"
		 }
	 })
	 
	 }
	 init() {//初始化VueRouter
		console.log(this);
		 //注册事件
		 this.bindEvents();
		 //解析路由映射
		 this.createRouteMap(this.options.routes);
		 //注册全局组件 router-view、router-link
		 this.createComponent();
	 }
	 bindEvents(){
		 window.addEventListener("hashchange",this.onHashChange.bind(this));
		 window.addEventListener("load", this.onHashChange.bind(this));
	 }
	 createRouteMap(options){//解析路由配置
		 options.forEach(item =>{
			 this.routeMap[item.path] =item;
		 })
	 }
	 createComponent(){
		 Vue.component('router-link', {
			 props: {
				 to: {
					 type: String,
					 default: ""
				 }
			 },
			 render(h) {
				 return h('a',{attrs: {href: "#" + this.to}}, this.$slots.default)
			 }
		 })
		 Vue.component('router-view', {
			 render:(h) =>{
				 let comp = this.routeMap[this.vm.current].component;
				 return h(comp);
			 }
		 })
	 }
	 onHashChange() {//当hash值变换时
		 this.vm.current = window.location.hash.slice(1) || "/";
	 }
  
}

//将VueRouter转换为插件
VueRouter.install = function(_Vue){
	Vue = _Vue;
	//混入任务
	Vue.mixin({
		beforeCreate(){
			//在外面初始化的时候被调用
			//此处是所有的Vue组件实例都会执行，
			//但只有根Vue初始化的时候才执行
			if(this.$options.router){//挂在全局$router
				Vue.prototype.$routers = this.$options.router;
				this.$options.router.init();
			}
			
		}
	})
}

export default VueRouter;