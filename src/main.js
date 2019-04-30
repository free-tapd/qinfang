// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import FastClick from 'fastclick';
import App from './App';
import router from './router';
import './styles/base.less'
import { Flexbox, FlexboxItem } from 'vux';
import store from "./store"
import VConsole from 'vconsole'
const vconsole=new VConsole();
FastClick.attach(document.body);

Vue.config.productionTip = false;

Vue.component('flexbox', Flexbox);
Vue.component('flexbox-item', FlexboxItem);
import {post } from "./utils/http";
Vue.prototype.$post=post;
Vue.prototype.changeJump=function(path,query){
  this.$router.push({
    path,
    query,
  })
}
/* eslint-disable no-new */
new Vue({
  el: '#app-box',
  store,
  router,
  components: { App },
  template: '<App/>'
});
