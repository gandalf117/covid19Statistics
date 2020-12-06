import Vue from 'vue'
import Vuex from 'vuex'
import covid19Module from './modules/covid19Module'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    covid19Module
  }
})
