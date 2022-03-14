import AuthApi from '@/api-clients/AuthApi';
import User from '@/models/User';

export const defaultApiErrorMessage = 'Sorry! Problem accessing system right now. Please retry.';

export default {
    namespaced: true,

    state: {
        user: null,
    },

    getters: {
        user: state => state.user,
        isAuth: state => Boolean(state.user),
    },

    mutations: {
        setUser(state, user) {
            state.user = new User(user);
        },

        clearUser(state) {
            state.user = null;
        }
    },

    actions: {
        async login({ commit }, form) {
            try {
                await AuthApi.sanctumCookie();
                const response = await AuthApi.login(form);
                commit('setUser', response.data.user);
            } catch (error) {
                commit('clearUser');
                throw error;
            }
        },

        async fetchUser({ commit }) {
            try {
                const response = await AuthApi.user();
                commit('setUser', response.data);
            } catch (error) {
                commit('clearUser');
                throw error;
            }
        },

        async logout({ commit, dispatch }) {
            try {
                await AuthApi.logout();
            } catch (error) {
            } finally {
                commit('clearUser');
            }
        }
    }
};
