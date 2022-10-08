import IndexPage from '@/components/pages/IndexPage.vue';
import HomePage from '@/components/pages/HomePage.vue';
import { createRouter, createWebHistory } from 'vue-router';
import { useAuth } from '@/stores/Auth';
import { storeToRefs } from 'pinia';

const fetchUserIfNotAuth = async () => {
    const { isAuth } = storeToRefs(useAuth());
    const { fetchUser } = useAuth();

    if (isAuth.value) {
        return true;
    }

    try {
        await fetchUser();
        return true;
    } catch (e) {
        return false;
    }
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
