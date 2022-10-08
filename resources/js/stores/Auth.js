import AuthApi from '@/api-clients/AuthApi';
import User from '@/models/User';
import { computed, ref } from 'vue';
import { defineStore } from 'pinia';

export const defaultApiErrorMessage = 'Sorry! Problem accessing system right now. Please retry.';

export const useAuth = defineStore('Auth', () => {
    const user = ref(null);

    const isAuth = computed(() => !!user.value);

    const setUser = newUser => user.value = new User(newUser);
    const clearUser = () => user.value = null;

    const login = async form => {
        try {
            await AuthApi.sanctumCookie();
            const response = await AuthApi.login(form);
            setUser(response.data.user);
        } catch (error) {
            clearUser();
            throw error;
        }
    };

    const fetchUser = async () => {
        try {
            const response = await AuthApi.user();
            setUser(response.data);
        } catch (error) {
            clearUser();
            throw error;
        }
    };

    const logout = async () => {
        try {
            await AuthApi.logout();
        } catch (error) {
        } finally {
            clearUser();
        }
    };

    return {
        user,
        isAuth,

        setUser,
        clearUser,
        login,
        fetchUser,
        logout,
    };
});
