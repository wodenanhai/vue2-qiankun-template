import "./public-path"
import Vue from 'vue'
import App from './App.vue'
import routes from "./router/router";
import VueRouter from 'vue-router';

Vue.config.productionTip = false
let router = null;
let instance = null;

function render(props = {}) {
    const {container} = props;
    router = new VueRouter({
        base: window.__POWERED_BY_QIANKUN__ ? '/qiankun-micro-package2/' : '/',
        mode: 'history',
        routes,
    });
    instance = new Vue({
        router,
        render: h => h(App),
    }).$mount(container ? container.querySelector('#app') : '#app');
}

// webpack打包公共文件路径
if (!window.__POWERED_BY_QIANKUN__) {
    render();
}

// 生命周期
export async function bootstrap(props) {
    console.log('[vue] vue app bootstraped');
}

export async function mount(props) {
    console.log('[vue] props from main framework', props);
    render(props);
}

export async function unmount() {
    instance.$destroy();
    instance.$el.innerHTML = '';
    instance = null;
    router = null;
}