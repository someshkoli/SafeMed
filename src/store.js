import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    bottomNavState: "home",
    contractAddressState: ""
  },
  mutations: {
    changeBottomNavState(state, bottomNavState){
      state.bottomNavState = bottomNavState;
    },
    changeContractAddressState(state, contractAddressState){
      state.contractAddressState = contractAddressState;
    }
  },
  getters: {
    bottomNavState: state => state.bottomNavState,
    contractAddressState: state => state.contractAddressState
  },
  actions: {

  }
})
