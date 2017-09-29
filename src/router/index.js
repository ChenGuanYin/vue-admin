import Vue from 'vue'
import Router from 'vue-router'
import layout from '@/view/layout/layout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/", name: "首页",redirect:"/index", component: layout, noDropdown: true,
      children: [{ path: "index", component: resolve => require(["@/view/index.vue"], resolve) }]
    },
    {
      path: "/table", name: "表格", component: layout,
      children: [{
        path: "index", name: "基础表格", component: resolve => require(["@/view/table/index.vue"], resolve),
        children: [{ path: 'base',indexpath: "/table/", name: "基础", component: resolve => require(["@/view/table/base.vue"], resolve) }]
      }]
    },
    {
      path: "/form", name: "表单", component: layout,
      children: [{ path: "index", name: "基础表单", component: resolve => require(["@/view/form/index.vue"], resolve) }]
    },
    { path: "/login", name: "登录", hidden: true, component: resolve => require(["@/view/login/login.vue"], resolve) },
  ]
})
