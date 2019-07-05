import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
  firstName: "John",
  lastName: "Doe"
};

const mutations = {
  setFirstName(state, name) {
    state.firstName = name.target.value;
  },
  setLastName(state, name) {
    state.lastName = name.target.value;
  }
};

const actions = {};
const getters = {
  fullName(state) {
    return `${state.firstName} ${state.lastName}`;
  }
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
});
