import Vue from "vue";
import Router from "vue-router";

import Communicate from "@/pages/communicate";
import Slots from "@/pages/slots";

Vue.use(Router);

let routes = new Router({
  routes: [
    { path: "/", component: Communicate },
    { path: "/slot", component: Slots },
  ],
});

export default routes;
