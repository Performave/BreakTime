import { createStore } from 'vuex'

interface DefaultStore {
    count: number;
}

const store = createStore({
    state () {
      return {
        count: 0
      }
    },
    mutations: {
      increment (state: DefaultStore) {
        state.count++
      }
    }
})

export default store;