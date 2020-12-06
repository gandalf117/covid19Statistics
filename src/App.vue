<template>
    <v-app class="main-continer">
        <!-- Loader -->
        <loader-component />

        <!-- Navigation -->
        <navbar-component />

        <!-- Main content -->
        <v-main>
            <v-fade-transition mode="out-in">
                <router-view />
            </v-fade-transition>
        </v-main>

        <!-- Footer -->
        <v-footer app color="whitesmoke" class="footer pa-5">
            <v-spacer></v-spacer>
            Covid19, author: Kiril Stoev
        </v-footer>
    </v-app>
</template>

<script>
    import LoaderComponent from '@/components/LoaderComponent'
    import NavbarComponent from '@/components/NavbarComponent'

    export default {
        name: 'app',
        components: {
            LoaderComponent,
            NavbarComponent
        }
    }
</script>

<style lang="sass" scoped>
    .main-continer
        background: #E0E0E0 !important
    .footer
        font-style: italic
</style>
