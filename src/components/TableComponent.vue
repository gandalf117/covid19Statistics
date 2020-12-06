<template>
    <div>
        <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Search"
            class="my-5"
            single-line
            hide-details>
        </v-text-field>
        <v-data-table
            :headers="headers"
            :items="items"
            :search="search"
            @click:row="handleRowClick">
            <template v-slot:item.name="{ item }">
                {{ item.name }}
            </template>
            <template v-slot:item.active="{ item }">
                <v-chip
                    :color="blueColor"
                    class="chip-component"
                    dark>
                    {{ item.active }}
                </v-chip>
            </template>
            <template v-slot:item.deaths="{ item }">
                <v-chip
                    :color="redColor"
                    class="chip-component"
                    dark>
                    {{ item.deaths }}
                </v-chip>
            </template>
            <template v-slot:item.confirmed="{ item }">
                <v-chip
                    :color="grayColor"
                    class="chip-component"
                    dark>
                    {{ item.confirmed }}
                </v-chip>
            </template>
            <template v-slot:item.recovered="{ item }">
                <v-chip
                    :color="greenColor"
                    class="chip-component"
                    dark>
                    {{ item.confirmed }}
                </v-chip>
            </template>
        </v-data-table>        
    </div>
</template>

<script>
    import { mapActions, mapState } from 'vuex'

    export default {
        name: 'table-component',
        props: {
            headers: {
                type: Array,
                required: true
            },
            items: {
                type: Array,
                required: true
            }
        },
        data () {
            return {
                search: ''
            }
        },
        methods: {
			handleRowClick (item) {
				this.$emit('rowClickEvent', item)
			}
        }
    }
</script>

<style lang="sass" scoped>
	.chip-component
		min-width: 80px
</style>
