/*
    Adds common functionality to all components
 */
export let globalMixin = {
    data () {
        return {
            redColor: '#CD2B2D',
            orangeColor: '#FF825B',
            greenColor: '#63A073',
            blueColor: '#00ADF2',
            grayColor: 'lightgray'
        }
    },
    methods: {
        redirectTo (name, params={}) {
            if (this.$route.name !== name) {
                this.$router.push({ 'name': name, 'params': params })
            }
        }
    }
}
