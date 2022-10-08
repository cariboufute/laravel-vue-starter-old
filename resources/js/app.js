import './bootstrap.js';
import '../css/app.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import VueApp from '@/components/VueApp.vue';
import router from './router';

const pinia = createPinia();

createApp(VueApp)
    .use(pinia)
    .use(router)
    .mount('#app');
