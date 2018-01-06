import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

const state = {
  collapse: false
};
const mutations = {
  SET_COLLAPSE(state) {
    state.collapse = !state.collapse;
  }
};
const getters = {
  collapse: state => state.collapse
};

const actions = {
  SIBER_TOGGIE({ commit }) {
    commit("SET_COLLAPSE");
  }
};

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions
});
