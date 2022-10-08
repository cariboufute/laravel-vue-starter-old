import './bootstrap.js';
import '../css/app.css';

import { createApp } from 'vue';
import VueApp from '@/components/VueApp.vue';
import router from './router';
import store from './store';

createApp(VueApp)
    .use(store)
    .use(router)
    .mount('#app');
