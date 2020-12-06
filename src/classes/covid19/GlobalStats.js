import { BaseStats } from '@/classes/covid19/BaseStats'

class GlobalStats {
    constructor (json) {
        this.newStats = new BaseStats({
            confirmed: json.NewConfirmed,
            recovered: json.NewRecovered,
            deaths: json.NewDeaths
        })
        this.totalStats = new BaseStats({
            confirmed: json.TotalConfirmed,
            recovered: json.TotalRecovered,
            deaths: json.TotalDeaths
        })
    }
}

export {
    GlobalStats
}
