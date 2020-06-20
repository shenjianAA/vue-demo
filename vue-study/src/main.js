import Vue from "vue";
import App from "./App.vue";
import router from "@/router";

import echarts from "echarts";
Vue.prototype.$echarts = echarts;

import "echarts-gl";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
