import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            // router level code-splitting
            // this generates a separate chunk (about.[hash].js) for this router
            // which is lazy-loaded when the router is visited.
            component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
        }
    ],
    store
})
