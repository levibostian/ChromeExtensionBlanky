import Vue from 'vue'
import Vuex from 'vuex'

import ChromePromise from 'chrome-promise'
import packageJson from '../../package.json'

Vue.use(Vuex)
const chromep = new ChromePromise()

const store = new Vuex.Store({
  state: {
  },
  actions: {
  },
  mutations: {
  },
  getters: {
  }
})

export default store
