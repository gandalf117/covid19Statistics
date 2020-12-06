import { Country } from '@/classes/covid19/Country'
import { GlobalStats } from '@/classes/covid19/GlobalStats'
import covid19Api from '@/api/covid19Api'
import { EventBus } from '@/utils'

const state = {
    countries: [],
    globalStats: {}
}

const getters = {
    getCountryForId: state => (id) => {
        return state.countries.find(country => country.id === id)
    }
}

const mutations = {
    setStateGlobalStats: (state, data) => {
        state.globalStats = data
    },    
    setStateCountries: (state, data) => {
        state.countries = data
    }
}

const actions = {
  getCovid19Summary ({ commit }) {
    EventBus.$emit('setCoreLoader', { show: true, useCounter: false })
    return covid19Api.getSummary().then(response => {
        let countries = Country.asItems(response.data.Countries, Country)
        let globalStats = new GlobalStats(response.data.Global)
        commit('setStateCountries', countries)
        commit('setStateGlobalStats', globalStats)
        return true
    }).catch((err) => {
        throw err
    }).finally(() => {
        EventBus.$emit('setCoreLoader', { show: false })
    })
  },
  getHistoryData ({ commit, getters }, countryId) {
      EventBus.$emit('setCoreLoader', { show: true, useCounter: false })
      return covid19Api.getHistoryData(countryId).then(response => {
            let country = getters.getCountryForId(countryId)
            country.setHistoryData(response.data)
            return true
      }).catch((err) => {
          throw err
      }).finally(() => {
          EventBus.$emit('setCoreLoader', { show: false })
      })      
  }
}

export default {
    state,
    getters,
    mutations,
    actions
}
