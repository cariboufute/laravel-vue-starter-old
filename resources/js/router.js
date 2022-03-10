import IndexPage from '@/components/pages/IndexPage';
import HomePage from '@/components/pages/HomePage';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        component: IndexPage
    },

    {
        path: '/home',
        component: HomePage
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
