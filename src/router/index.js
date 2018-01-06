import Vue from "vue";
import Router from "vue-router";
import layout from "@/view/layout/layout";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "运营后台",
      redirect: "/index",
      component: layout,
      noDropdown: true,
      children: [
        {
          path: "index",
          component: resolve => require(["@/view/index.vue"], resolve)
        }
      ]
    },
    {
      path: "/table",
      name: "开发者列表",
      component: layout,
      children: [
        {
          path: "index",
          name: "开发者列表",
          component: resolve => require(["@/view/index.vue"], resolve)
        }
      ]
    },
    {
      path: "/form",
      name: "导入数据",
      component: layout,
      children: [
        {
          path: "index",
          name: "导入数据",
          component: resolve => require(["@/view/form/index.vue"], resolve)
        }
      ]
    },
    {
      path: "/audit",
      name: "提现审核",
      component: layout,
      children: [
        {
          path: "index",
          name: "提现审核",
          component: resolve => require(["@/view/audit/index.vue"], resolve)
        }
      ]
    },
    {
      path: "/login",
      name: "登录",
      hidden: true,
      component: resolve => require(["@/view/login/login.vue"], resolve)
    }
  ]
});
