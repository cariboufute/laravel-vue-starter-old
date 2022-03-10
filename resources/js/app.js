require('./bootstrap');

import { createApp } from 'vue';
import VueApp from '@/components/VueApp';
import router from './router';


createApp(VueApp)
    .use(router)
    .mount('#vue-app');
