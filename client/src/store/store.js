import Vue from 'vue'
import Vuex from 'vuex'
import * as Mutations from './modules/mutations'
import * as Actions from './modules/actions'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    house: []
  },
  getters: {
    dataHouse: (state) => {
    }
  },
  mutations: Mutations.Mutations,
  actions: Actions.Actions
})
