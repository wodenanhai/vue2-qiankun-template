import VueRouter from 'vue-router';
import Vue from 'vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        component: () => import('../views/index'),
    },
    {
        path: '/qiankun-micro-package1',
        name: 'qiankun-micro-package1',
        component: () => import('../views/index'),
    }
];

export default routes;
