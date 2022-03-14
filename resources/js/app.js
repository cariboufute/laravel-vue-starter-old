require('./bootstrap');

import { createApp } from 'vue';
import VueApp from '@/components/VueApp';
import router from './router';
import store from './store';

createApp(VueApp)
    .use(store)
    .use(router)
    .mount('#vue-app');
