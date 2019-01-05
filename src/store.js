import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    bottomNavState: "home",

  },
  mutations: {
    changeBottomNavState(state, bottomNavState){
      state.bottomNavState = bottomNavState;
    }
  },
  getters: {
    bottomNavState: state => state.bottomNavState
  },
  actions: {

  }
})
