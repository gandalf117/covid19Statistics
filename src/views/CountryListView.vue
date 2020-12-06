<template>
  <v-container fluid fill-height class="text-center">
	<v-row>
		<v-col md="6" offset-md="3">
			<v-card elevation="5" class="pa-5">
				<h2 v-if="globalStats.totalStats">
					<global-stat-component
						:title="'Total world cases'"
						:totalStat="globalStats.totalStats.confirmed"
						:newStat="globalStats.newStats.confirmed">
					</global-stat-component>
					<global-stat-component
						:title="'Total world recoveries'"
						:totalStat="globalStats.totalStats.recovered"
						:newStat="globalStats.newStats.recovered">
					</global-stat-component>
					<global-stat-component
						:title="'Total world deaths'"
						:totalStat="globalStats.totalStats.deaths"
						:newStat="globalStats.newStats.deaths">
					</global-stat-component>
				</h2>
			</v-card>
			<h3 class="my-7">Select a country to see detailed information</h3>
			<v-card elevation="5" class="pa-5">
				<table-component
					v-if="countries.length"
					:headers="headers"
					:items="countries"
					@rowClickEvent="handleRowClick">
				</table-component>
			</v-card>		
		</v-col>
	</v-row>
  </v-container>
</template>

<script>
	import { mapActions, mapState } from 'vuex'
	import { errorHandler } from '@/mixins/ErrorHandler'
	import TableComponent from '@/components/TableComponent'
	import GlobalStatComponent from '@/components/GlobalStatComponent'

	export default {
		name: 'country-list-view',
		mixins: [errorHandler],
		components: {
			TableComponent,
			GlobalStatComponent
		},
		data () {
			return {
				headers: [
					{ text: 'Name', value: 'name', sortable: false },
					{ text: 'Code', value: 'code', sortable: false },
					{ text: 'Active cases', value: 'active'},
					{ text: 'All deaths', value: 'deaths'},
					{ text: 'All cases', value: 'confirmed'}
				]
			}
		},
		computed: {
			...mapState({
				countries: state => state.covid19Module.countries,
				globalStats: state => state.covid19Module.globalStats
			}),

		},
		methods: {
			...mapActions([
				'getCovid19Summary'
			]),
			handleRowClick (item) {
				this.redirectTo('countryDetails', { id: item.id })
			},
			getInitialData () {
				this.getCovid19Summary().catch((err) => {
					this.handleError(err)
				})
			}
		},
		created () {
			// get the countries only if not retrieved already
			if (!this.countries.length) {
				this.getInitialData()
			}
		}
	}
</script>

<style lang="sass" scoped>
</style>
