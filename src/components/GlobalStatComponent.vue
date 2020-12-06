<template>
    <v-sheet>
        {{ title }}: {{ totalStat.toLocaleString() }}
        (latest data: {{ newStat.toLocaleString() }})
    </v-sheet>
</template>

<script>
    export default {
        name: 'global-stat-component',
        props: {
            title: {
                type: String,
                required: true
            },
            totalStat : {
                type: Number,
                defalt: 0
            },
            newStat : {
                type: Number,
                defalt: 0
            }
        }
    }
</script>

<style lang="scss" scoped>
</style>
