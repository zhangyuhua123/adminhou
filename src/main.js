import Vue from 'vue'
import App from './App.vue'
import './assets/css/base.css'
import './assets/js/font.js'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import Validator from 'vue-validator'
import $ from 'jquery'
Vue.config.debug = true
Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(ElementUI)
Vue.use(VueAwesomeSwiper)
Vue.use(Validator)
import routes from './router.config';
const router=new VueRouter({
    mode: 'history',
  routes
});

new Vue({
  el: '#app',
  render: h => h(App),
  router

})
