<template>
    <v-row justify="center">
        <v-dialog
            v-model="dialog"
            persistent
            :max-width="modalWidth">
            <v-card>
                <v-card-title class="headline">
                    <slot name="title"></slot>
                </v-card-title>
                <v-card-text>
                    <slot name="content"></slot>
                </v-card-text>
                <v-card-actions>
                    <slot name="actions"></slot>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-row>
</template>

<script>
    import { EventBus } from '@/utils'

    export default {
        name: 'modal-component',
        props: {
            id: { // used in case of multiple popups
                type: String,
                required: true
            }
        },
        data () {
            return {
                dialog: false
            }
        },
        computed: {
            modalWidth () {
                let breakpoint = this.$vuetify.breakpoint.name
                return breakpoint === 'xs' || breakpoint === 'sm' ? '100%' : '50%'
            }
        },
        methods: {
            openModal () {
                this.dialog = true
            },            
            closeModal () {
                this.dialog = false
            }
        },
        created () {
            EventBus.$on(`modal-open-${this.id}`, this.openModal)
            EventBus.$on(`modal-close-${this.id}`, this.closeModal)
        }
    }
</script>

<style lang="scss" scoped>
</style>
