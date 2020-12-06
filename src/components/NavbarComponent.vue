<template>
	<v-app-bar app flat class="px-5" color="whitesmoke">
		<v-tabs
			left
			v-model="active_tab"
			color="primaryLink">
			<v-tab
				v-for="link in links"
				:key="link.path"
				@click="redirectTo(link.name)">
				{{ link.text }}
			</v-tab>
		</v-tabs>
	</v-app-bar>
</template>

<script>
    export default {
		name: 'navbar-component',
        data () {
            return {
				active_tab: 0,
				links: [
					{
						text: 'Home',
						name: 'home',
						active: ['home']
					},
					{
						text: 'Countries',
						name: 'countryList',
						active: ['countryList', 'countryDetails']
					}
				]
			}
		},
		methods: {
			setActiveTab () {
				for (const [index, link] of this.links.entries()) {
					if (link.active.includes(this.$route.name)) {
						this.active_tab = index
						return
					}
				}
			}
		},
		created () {
			this.setActiveTab()
		},
		watch: {
			'$route.name' () {
				this.setActiveTab()
			}
		}
    }
</script>

<style lang="sass" scoped>
</style>
