import Http from '@/classes/http/Http'

export default {
    getSummary () {
        return Http.get({
            url: 'summary'
        })
    },
    getHistoryData (countryId) {
        return Http.get({
            url: `dayone/country/${countryId}`
        })
    }
}
