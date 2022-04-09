import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Dashboard',
        component: () => import('@/views/Dashboard.vue')
    },
    {
        path: '/config',
        name: 'Config',
        component: () => import('@/views/Config.vue')
    },
    {
        path: '/accounts',
        name: 'Accounts',
        component: () => import('@/views/Accounts.vue')
    },
    {
        path: '/categories',
        name: 'Categories',
        component: () => import('@/views/Categories.vue')
    }
];

const router = new VueRouter({
    routes
});

export default router;
