import Vue from "vue";
import Router from "vue-router";
import { getBasename } from "@ice/stark-app";
import { constantRoutes } from "@/config/routes";

Vue.use(Router);

const createRouter = () =>
  new Router({
    scrollBehavior: () => ({ y: 0 }), // 路由
    routes: constantRoutes,
    mode: "history",
    base: getBasename(),
  });

const router = createRouter();

export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher;
}

export default router;

// export default new Router({
//   routes,
//   mode: 'history',
//   base: getBasename(),
// });
             