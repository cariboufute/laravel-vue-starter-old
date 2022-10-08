import IndexPage from '@/components/pages/IndexPage.vue';
import HomePage from '@/components/pages/HomePage.vue';
import { createRouter, createWebHistory } from 'vue-router';
import store from '@/store';

const fetchUserIfNotAuth = async () => {
    if (!store.getters["Auth/isAuth"]) {
        try {
            await store.dispatch("Auth/fetchUser");
        } catch (e) {}
    }
};

const routes = [
    {
        path: '/',
        component: IndexPage,
        beforeEnter: async (to, from, next) => {
            await fetchUserIfNotAuth();
            store.getters["Auth/isAuth"] ? next('/home') : next();
        }
    },

    {
        path: '/home',
        component: HomePage,
        beforeEnter: async (to, from, next) => {
            await fetchUserIfNotAuth();
            store.getters["Auth/isAuth"] ? next() : next('/');
        }
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
