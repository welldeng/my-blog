import Vue from 'vue'
import Router from 'vue-router'
import {getRoutes} from '../utlis'

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
})
