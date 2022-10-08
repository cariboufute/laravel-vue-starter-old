import axios from 'axios';

import User from '@/models/User';
import { useAuth } from '@/stores/Auth';
import { createPinia, setActivePinia } from 'pinia';

jest.mock('axios');

describe('Auth module', () => {
    const user = new User({
        email: 'email@email.com'
    });

    let store;

    beforeEach(() => {
        jest.clearAllMocks();
        setActivePinia(createPinia());

        store = useAuth();
    });

    it('has default state', () => {
        expect(store.user).toBeNull();
    });
/*
    it('user returns user state', () => {
        expect(store.getters['Auth/user']).toBeNull();

        store.state.Auth.user = user;
        expect(store.getters['Auth/user']).toStrictEqual(user);
    });

    it('isAuth returns true only when user is set', () => {
        store.state.Auth.user = user;
        expect(store.getters['Auth/isAuth']).toBe(true);

        store.state.Auth.user = null;
        expect(store.getters['Auth/isAuth']).toBe(false);
    });

    it('setUser sets user', () => {
        store.commit('Auth/setUser', user);

        expect(store.state.Auth.user).toEqual(user);
    });

    it('clearUser clears user, photos and videos', () => {
        store.state.Auth.user = user;

        store.commit('Auth/clearUser');

        expect(store.state.Auth.user).toBeNull();
    });

    it('login sets user', async () => {
        const form = { email: 'email', password: 'password' };
        axios.post.mockResolvedValueOnce({ data: { user } });

        await store.dispatch('Auth/login', form);

        expect(axios.get).toBeCalledWith('/sanctum/csrf-cookie');
        expect(axios.post).toBeCalledWith('/api/login', form);
        expect(store.state.Auth.user).toEqual(user);
    });

    it('fetchUser clears user when not authenticated without error message', async () => {
        store.state.Auth.user = user;
        axios.get.mockRejectedValue(new Error('Forbidden'));

        try {
            await store.dispatch('Auth/fetchUser');
        } catch (error) {}

        expect(axios.get).toBeCalledWith('/api/user');
        expect(store.state.Auth.user).toBeNull();
    });

    it('fetchUser sets user when authenticated', async () => {
        axios.get.mockResolvedValueOnce({ data: user });

        await store.dispatch('Auth/fetchUser');

        expect(axios.get).toBeCalledWith('/api/user');
        expect(store.state.Auth.user).toBeInstanceOf(User);
        expect(store.state.Auth.user.email).toStrictEqual(user.email);
    });

    it('logout clears user after logout and redirects to index', async () => {
        store.state.Auth.user = user;
        axios.post.mockResolvedValue({});

        await store.dispatch('Auth/logout');

        expect(axios.post).toBeCalledWith('/api/logout');
        expect(store.state.Auth.user).toBeNull();
    });

    it('logout still clears user after logout and redirects to index when returning error', async () => {
        store.state.Auth.user = user;
        axios.post.mockRejectedValue(new Error({
            response: { status: 419, message: "CSRF token mismatch" }
        }));

        await store.dispatch('Auth/logout');

        expect(axios.post).toBeCalledWith('/api/logout');
        expect(store.state.Auth.user).toBeNull();
    });*/
});

