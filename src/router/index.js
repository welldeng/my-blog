import Vue from 'vue'
import Router from 'vue-router'
import {getRoutes} from '../utils'

Vue.use(Router)

let routes = getRoutes(require.context('./', false, /\.js$/), './index.js')

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        // 匹配到不存在的路由重定向的用户首页
        {
            path: '*',
            redirect: '/user',
            meta: {}
        },
        ...routes
    ],
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return {x: 0, y: 0}
        }
    }
})
