import Vue from 'vue';
import Axios from 'axios';
import VueRouter from 'vue-router';
import Toaster from 'vue-simple-toaster';
import 'vue-simple-toaster/vue-simple-toaster.css'

const EventBus = new Vue()

Object.defineProperties(Vue.prototype, {
  $bus: {
    get: function () {
      return EventBus
    }
  }
})

window.axios = Axios;
window.Vue = Vue;
Vue.use(VueRouter);
Vue.use(Toaster, {
    position: 'top-right',
    duration: 3000,
    animation:'slideDown'})
