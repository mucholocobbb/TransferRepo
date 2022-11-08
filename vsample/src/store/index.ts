import Vue from "vue";
import Vuex from "vuex";

import priziv from "./priziv";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    priziv,
  },
});
