<template>
  <v-container fluid fill-height class="text-center">
	<v-row >
		<v-col md="6" offset-md="3" v-if="country">
			<h3 class="mb-5">Detailed information for {{ country.name.toUpperCase() }}</h3>
			<v-card elevation="5">
				<!-- New cases -->
				<v-row>
					<v-col cols="12" class="text-left ml-6"><b>New cases</b></v-col>
					<v-col cols="12" md="3">
						<list-item-component :title="'All new cases'" :content="country.newStats.confirmed" />
					</v-col>
					<v-col cols="12" md="3">
						<list-item-component :title="'Change in active cases'" :color="blueColor" :content="country.newStats.active" />
					</v-col>
					<v-col cols="12" md="3">
						<list-item-component :title="'New deaths'" :color="redColor" :content="country.newStats.deaths" />
					</v-col>
					<v-col cols="12" md="3">
						<list-item-component :title="'Newly recovered'" :color="greenColor" :content="country.newStats.recovered" />
					</v-col>
				</v-row>
				<!-- Total cases -->
				<v-row>
					<v-col cols="12" class="text-left ml-6"><b>Total cases</b></v-col>
					<v-col cols="12" md="3">
						<list-item-component :title="'All cases'" :content="country.totalStats.confirmed" />
					</v-col>
					<v-col cols="12" md="3">
						<list-item-component :title="'All active cases'" :color="blueColor" :content="country.totalStats.active" />
					</v-col>
					<v-col cols="12" md="3">
						<list-item-component :title="'Deaths'" :color="redColor" :content="country.totalStats.deaths" />
					</v-col>
					<v-col cols="12" md="3">
						<list-item-component :title="'Recovered'" :color="greenColor" :content="country.totalStats.recovered" />
					</v-col>
				</v-row>
				<!-- Actions -->
				<v-card-actions class="pa-3">
					<v-btn text large
						color="primary"
						@click="openHistoryDataPopup()">
						Load history data
					</v-btn>
					<v-spacer></v-spacer>
					<v-btn text large
						color="primary"
						@click="redirectTo('countryList')">
						Go back
					</v-btn>
				</v-card-actions>
				<!-- Modal that shows on top of it -->
				<modal-component :id="modalId">
					<template v-slot:title>
						History data for {{ country.name.toUpperCase() }}
					</template>
					<template v-slot:content>
						<table-component
							:headers="headers"
							:items="country.historyData">
						</table-component>
					</template>
					<template v-slot:actions>
						<v-spacer></v-spacer>
						<v-btn text color="primary darken-1"
							@click="closeModal(modalId)">
							Close
						</v-btn>
					</template>
				</modal-component>
			</v-card>
		</v-col>
	</v-row>
  </v-container>
</template>

<script>
	import { mapState, mapActions, mapGetters } from 'vuex'
	import { errorHandler } from '@/mixins/ErrorHandler'
	import { EventBus } from '@/utils'
	import ListItemComponent from '@/components/ListItemComponent'
	import ModalComponent from '@/components/ModalComponent'
	import TableComponent from '@/components/TableComponent'

	export default {
		name: 'country-details-view',
		mixins: [errorHandler],
		components: {
			ListItemComponent,
			ModalComponent,
			TableComponent
		},
		data () {
			return {
				modalId: 'country-history-data',
				headers: [
					{ text: 'Date', value: 'date', sortable: false },
					{ text: 'Confrimed cases', value: 'confirmed'},
					{ text: 'Deaths', value: 'deaths'},
					{ text: 'Recovered', value: 'recovered'}
				]
			}
		},
		props: {
			id: {
				type: String,
				required: true
			}
		},
		computed: {
			...mapState({
				countries: state => state.covid19Module.countries
			}),
			...mapGetters([
				'getCountryForId'
			]),
			country () {
				return this.getCountryForId(this.id) || null
			}
		},
		methods: {
			...mapActions([
				'getCovid19Summary',
				'getHistoryData'
			]),
			getInitialData () {
				this.getCovid19Summary().catch((err) => {
					this.handleError(err)
				})
			},
			openHistoryDataPopup () {
				this.$router.push({ name: 'countryDetails', query: { history: true }})
			},
			loadModal () {
				// enabled restful links - unique urls if the modal is opened
				if (this.$route.query.history) {
					this.loadHistoryDataModal()
				}
			},
			loadHistoryDataModal () {				
				this.getHistoryData(this.id).then(() => {
					this.openModal(this.modalId)
				}).catch((err) => {
					this.handleError(err)
				})
			},
            openModal (id) {
                EventBus.$emit(`modal-open-${id}`)
            },
			closeModal (id) {
				EventBus.$emit(`modal-close-${id}`)
				this.$router.push({ name: 'countryDetails'})
            }
		},
		watch: {
			$route (to, from) {
				this.loadModal()
			}
		},		
		created () {
			// get the countries only if not retrieved already
			if (!this.countries.length) {
				this.getInitialData()
			}
		},
		mounted () {
			this.loadModal()
		}
	}
</script>

<style lang="sass" scoped>
</style>
