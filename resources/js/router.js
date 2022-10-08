import IndexPage from '@/components/pages/IndexPage.vue';
import HomePage from '@/components/pages/HomePage.vue';
import { createRouter, createWebHistory } from 'vue-router';
import { useAuth } from '@/stores/Auth';

const fetchUserIfNotAuth = async () => useAuth().isAuth ? true : fetchUserAndReturnIsAuth();

const fetchUserAndReturnIsAuth = async () => {
    try {
        await useAuth().fetchUser();
    } catch (e) {
        return false;
    }

    return true;
};


const routes = [
    {
        path: '/',
        component: IndexPage,
        beforeEnter: async (to, from, next) => {
            const isAuth = await fetchUserIfNotAuth();
            isAuth ? next('/home') : next();
        }
    },

    {
        path: '/home',
        component: HomePage,
        beforeEnter: async (to, from, next) => {
            const isAuth = await fetchUserIfNotAuth();
            isAuth ? next() : next('/');
        }
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
