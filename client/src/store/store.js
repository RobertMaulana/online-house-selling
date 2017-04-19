import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    house: []
  },
  getters: {
    dataHouse: (state) => {
    }
  },
  mutations: {
    dataHouse: (state, payload) => {
      state.house = payload
    },
    newHouse: (state, payload) => {
      state.house = payload
    },
    removeHouse: (state, payload) => {
      state.house = payload
    },
    updateHouse: (state, payload) => {
      state.house = payload
    }
  },
  actions: {
    dataHouse: ({commit}) => {
      axios.get('http://localhost:3000/house')
      .then((response) => {
        commit("dataHouse", response.data)
      })
      .catch((error) => {
        console.log(error)
      });
    },
    newHouseAction: ({commit}, payload) => {
      axios.post('http://localhost:3000/house',payload)
      .then((response) => {
        commit("newHouse", response.data)
      })
      .catch((error) => {
        console.log(error)
      });
    },
    updateHouseAction: ({commit}, payload) => {
      axios.put('http://localhost:3000/house/'+payload.id, payload)
      .then((response) => {
        commit("updateHouse", response.data)
      })
      .catch((error) => {
        console.log(error)
      });
    },
    removeHouse: ({commit}, payload) => {
      let conf = confirm("Are you sure?")
      if (conf) {
        axios.delete('http://localhost:3000/house/' + payload)
        .then((response) => {
          commit("removeHouse", response.data)
        })
        .catch((error) => {
          console.log(error)
        });
      }
    }
  }
})
