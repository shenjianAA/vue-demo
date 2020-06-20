import Vue from "vue";
import Router from "vue-router";

import Communicate from "@/pages/communicate";
import Slots from "@/pages/slots";
import Bar from "@/pages/echarts";

Vue.use(Router);

let routes = new Router({
  routes: [
    { path: "/", component: Communicate },
    { path: "/slot", component: Slots },
    { path: "/bar", component: Bar },
  ],
});

export default routes;
