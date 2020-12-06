import { MultipleItems } from '@/classes/MultipleItems'
import { BaseStats } from '@/classes/covid19/BaseStats'

class Country extends MultipleItems {
    constructor (json) {
        super()
        this.id = json.Slug
        this.name = json.Country
        this.code = json.CountryCode
        this.newStats = new BaseStats({
            confirmed: json.NewConfirmed,
            recovered: json.NewRecovered,
            deaths: json.NewDeaths,
            date: json.Date
        })
        this.totalStats = new BaseStats({
            confirmed: json.TotalConfirmed,
            recovered: json.TotalRecovered,
            deaths: json.TotalDeaths,
            date: json.Date
        })
        this.historyData = []
    }

    get active () {
        return this.totalStats.active
    }

    get confirmed () {
        return this.totalStats.confirmed
    }

    get deaths () {
        return this.totalStats.deaths
    }

    get recovered () {
        return this.totalStats.recovered
    }

    setHistoryData (json) {
        this.historyData = BaseStats.asItems(json.map(item => {
            return {
                confirmed: item.Confirmed,
                recovered: item.Recovered,
                deaths: item.Deaths,
                date: item.Date
            }
        }), BaseStats)
    }
}

export {
    Country
}
