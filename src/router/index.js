import Vue from 'vue'
import Router from 'vue-router'
import layout from '@/view/layout/layout'

Vue.use(Router)

export default new Router({
  routes: [
    { path: "/", redirect: "/app/index" ,hidden: true},
    { path: "/login", name: "登录", hidden: true, component: resolve => require(["@/view/login/login.vue"], resolve) },
    {
      path: "/app", name: "首页", component: layout, noDropdown: true,
      children: [{ path: "index", component: resolve => require(["@/view/index.vue"], resolve) }]
    },
    {
      path: "/table", name: "表格", component: layout,
      children: [{path: "index",name: "基础表格",component: resolve => require(["@/view/table/index.vue"],resolve)}]
    },
    {
      path: "/form", name: "表单", component: layout,
      children: [{path: "index",name: "基础表单",component: resolve => require(["@/view/form/index.vue"],resolve)}]
    }
  ]
})
