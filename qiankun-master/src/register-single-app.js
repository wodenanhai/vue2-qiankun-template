import {registerMicroApps, start} from 'qiankun';

const getActiveRule = hash => location => location.hash.startsWith(hash);
registerMicroApps([
    {
        name: 'qiankun micro package1', // app name registered
        entry: '//localhost:8081',
        container: '#container',
        // activeRule: '/qiankun-micro-package1',
        activeRule: getActiveRule('#/spa/qiankun-micro-package1'),
    },
    {
        name: 'qiankun micro package2',
        entry: '//localhost:8082',
        container: '#container',
        // activeRule: '/qiankun-micro-package2',
        activeRule: getActiveRule('#/spa/qiankun-micro-package2'),
    },

]);
start();