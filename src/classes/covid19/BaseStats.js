import { MultipleItems } from '@/classes/MultipleItems'
import { dateTimeFormat } from '@/utils'

class BaseStats extends MultipleItems {
    constructor (json) {
        super()
        this.confirmed = parseInt(json.confirmed) || 0
        this.recovered = parseInt(json.recovered) || 0
        this.deaths = parseInt(json.deaths) || 0
        this.date = json.date ? dateTimeFormat(json.date) : null
    }

    get active () {
        return this.confirmed - this.recovered - this.deaths
    }
}

export {
    BaseStats
}
