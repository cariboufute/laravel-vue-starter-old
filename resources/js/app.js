import './bootstrap.js';
import '../scss/app.scss';

import { createSSRApp } from 'vue';
import { createPinia } from 'pinia';
import VueApp from '@/components/VueApp.vue';
import router from './router';

export const createApp = () => {
    const pinia = createPinia();

    const app = createSSRApp(VueApp)
        .use(pinia)
        .use(router);

    return { app, router };
};

