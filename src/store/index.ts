import { createStore } from 'vuex'

import createPersistedState from "vuex-persistedstate"

interface DefaultStore {
  count: number
}

export default createStore({
  state(): DefaultStore {
    return {
      count: 0,
    }
  },
  mutations: {
    increment(state: DefaultStore) {
      state.count++
    },
  },
  actions: {},
  modules: {},
  plugins: [createPersistedState()],
})
