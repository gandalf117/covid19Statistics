import Vue from 'vue'
import VueRouter from 'vue-router'
import { ROUTER_MODE } from '@/api/config'
import HomeView from '@/views/HomeView'
import CountryListView from '@/views/CountryListView'
import CountryDetailsView from '@/views/CountryDetailsView'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/country-list',
        name: 'countryList',
        component: CountryListView
    },
    {
        path: '/country-details/:id',
        name: 'countryDetails',
        props: true,
        component: CountryDetailsView
    },
    {
        path: '*',
        redirect: '/'
    }
]

const router = new VueRouter({
    mode: ROUTER_MODE,
    routes
})

export default router
