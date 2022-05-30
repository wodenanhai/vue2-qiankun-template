import VueRouter from 'vue-router';
import Vue from 'vue'

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        component: () => import('../views/index'),
    },
    {
        path: '/qiankun-micro-package2',
        name: 'qiankun-micro-package2',
        component: () => import('../views/index'),
    }
];

export default routes;
