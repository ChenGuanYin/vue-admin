// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import ElementUI from "element-ui";
import 'element-ui/lib/theme-default/index.css';
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import VueParticles from "vue-particles";
import * as filters from "./filter";
import store from "./store";
Vue.use(ElementUI)
Vue.use(VueParticles);
Vue.config.productionTip = false

Object.keys(filters).forEach(key => {
  Vue.filter(key,filters[key])
})
router.beforeEach((to, from, next) => {
  NProgress.start();
  next();
})
router.afterEach((to,from,next) => {
  NProgress.done();
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
