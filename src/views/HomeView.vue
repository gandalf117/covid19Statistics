<template>
  <v-container fluid fill-height class="text-center">
	<v-row >
		<v-col>
			<h2 class="ma-3"><i>Welcome to the COVID19 APP by Kiril Stoev</i></h2>
			<h3 class="my-12 mx-3">Click on "Start" below to fetch covid19 data</h3>
			<v-btn
				large color="primary"
				@click="redirectTo('countryList')">
				Start
			</v-btn>
		</v-col>
	</v-row>
  </v-container>
</template>

<script>
	export default {
		name: 'home-view'
	}
</script>

<style lang="sass" scoped>
</style>
