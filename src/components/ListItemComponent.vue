<template>
    <v-list-item>
        <v-list-item-content>
            <v-list-item-subtitle>{{ title }}</v-list-item-subtitle>
            <v-list-item-title class="mt-3">
                <v-chip
                    :color="color || grayColor"
                    class="chip-component"
                    dark>
                    {{ content }}
                </v-chip>
            </v-list-item-title>
        </v-list-item-content>
    </v-list-item>
</template>

<script>
    import { mapActions, mapState } from 'vuex'

    export default {
        name: 'list-item-component',
		props: {
			title: {
				type: String,
				required: true
            },
			content: {
				default: 0
            },
			color: {
				default: null
			}
		}
    }
</script>

<style lang="sass" scoped>
	.chip-component
		min-width: 80px
</style>
