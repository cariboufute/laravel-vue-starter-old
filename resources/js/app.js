import './bootstrap.js';
import '../scss/app.scss';

import { createSSRApp } from 'vue';
import { createPinia } from 'pinia';
import VueApp from '@/components/VueApp.vue';
import router from './router';

const pinia = createPinia();

export const createApp = () => createSSRApp(VueApp)
    .use(pinia)
    .use(router)

