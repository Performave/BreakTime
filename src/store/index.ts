import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import timer from '@/store/modules/timer'

export default createStore({
  modules: {
    timer
  },
  plugins: [createPersistedState()],
})
