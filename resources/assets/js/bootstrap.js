import Vue from 'vue';
import Axios from 'axios';
import VueRouter from 'vue-router';

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
