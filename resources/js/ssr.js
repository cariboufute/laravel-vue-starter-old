import { createApp } from '@/app';
import router from './router';
import { renderToString } from 'vue/server-renderer';

const app = createApp();

const renderApp = async () => {
    await router.push('/');
    await router.isReady();
    const html = await renderToString(app);
    console.log(html);
};

renderApp();

