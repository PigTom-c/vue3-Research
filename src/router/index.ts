import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes:Array<RouteRecordRaw> = [
    {
        path: '/',
        name: '/index',
        component: () => import('../views/test/Demo.vue')
    },
    {
        path: '/check',
        name: '/check',
        component: () => import('../views/checkbox/index.vue')
    },
    {
        path: '/table',
        name: 'table',
        component: () => import('../components/tableDataEngine.vue')
    },
    {
        path: '/test',
        name: 'test',
        component: () => import('../views/te/Father.vue')
    }
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router
