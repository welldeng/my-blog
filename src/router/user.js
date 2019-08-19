// 用户路由
const user = () => import(/* webpackChunkName: "user" */ '../views/User.vue')
const userDetail = () => import(/* webpackChunkName: "user" */ '../views/User-Detail.vue')

export default [
    {
        path: '/user',
        name: 'user',
        component: user,
    },
    {
        path: '/user/detail',
        name: 'user-detail',
        component: userDetail,
    }
]
