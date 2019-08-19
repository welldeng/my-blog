// blog路由
const blogList = () => import(/* webpackChunkName: "blog" */ '../views/Blog-List.vue')
const blogContent = () => import(/* webpackChunkName: "blog" */ '../views/Blog-Content.vue')

export default [
    {
        path: '/blog/list',
        name: 'blog-list',
        component: blogList,
    },
    {
        path: '/blog/content/:id',
        name: 'blog-content',
        component: blogContent,
    }
]
