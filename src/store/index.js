import Vue from 'vue';
import Vuex from 'vuex';
import * as actions from './actions';
import * as mutations from './mutations';
import * as getters from './getters';
Vue.use(Vuex);
function storeLocalStore (state) {
  window.localStorage.setItem("userMsg",JSON.stringify(state));
}
export default new Vuex.Store({
  state: {
    info: {},
    hospitalCode: "",
    hospitalMessage:{},
    hospitalLimitList:{}
  },
  getters,
  actions,
  mutations
});
