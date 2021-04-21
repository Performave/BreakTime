export interface State {
  hours: number
  minutes: number
  seconds: number
}

const timer = {
  namespaced: true,

  state: (): State => ({
    hours: 0,
    minutes: 0,
    seconds: 0,
  }),

  mutations: {
    updateHours (state: State, payload: number) {
      state.hours = payload
    },
    updateMinutes (state: State, payload: number) {
      state.minutes = payload
    },
    updateSeconds (state: State, payload: number) {
      state.seconds = payload
    }
  }
}

export default timer
