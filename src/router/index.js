import Vue from 'vue'
import Router from 'vue-router'
import layout from '@/view/layout/layout'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',redirect: "/index"},
    {path: "/index",name: "layout",component: layout},
    {path: "/login",name: "login",component: resolve => require(["@/view/login/login.vue"],resolve)}
  ]
})
