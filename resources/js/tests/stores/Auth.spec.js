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

    it('isAuth returns true only when user is set', () => {
        store.user = user;
        expect(store.isAuth).toBe(true);

        store.user = null;
        expect(store.isAuth).toBe(false);
    });

    it('setUser sets user', () => {
        store.setUser(user);

        expect(store.user).toEqual(user);
    });

    it('clearUser clears user, photos and videos', () => {
        store.user = user;

        store.clearUser();

        expect(store.user).toBeNull();
    });


    it('login sets user', async () => {
        const form = { email: 'email', password: 'password' };
        axios.post.mockResolvedValueOnce({ data: { user } });

        await store.login(form);

        expect(axios.get).toBeCalledWith('/sanctum/csrf-cookie');
        expect(axios.post).toBeCalledWith('/api/login', form);
        expect(store.user).toEqual(user);
    });


    it('fetchUser clears user when not authenticated without error message', async () => {
        store.user = user;
        axios.get.mockRejectedValue(new Error('Forbidden'));

        try {
            await store.fetchUser();
        } catch (error) {}

        expect(axios.get).toBeCalledWith('/api/user/auth');
        expect(store.user).toBeNull();
    });

    it('fetchUser sets user when authenticated', async () => {
        axios.get.mockResolvedValueOnce({ data: user });

        await store.fetchUser();

        expect(axios.get).toBeCalledWith('/api/user/auth');
        expect(store.user).toBeInstanceOf(User);
        expect(store.user.email).toStrictEqual(user.email);
    });

    it('logout clears user after logout and redirects to index', async () => {
        store.user = user;
        axios.post.mockResolvedValue({});

        await store.logout();

        expect(axios.post).toBeCalledWith('/api/logout');
        expect(store.user).toBeNull();
    });

    it('logout still clears user after logout and redirects to index when returning error', async () => {
        store.user = user;
        axios.post.mockRejectedValue(new Error({
            response: { status: 419, message: "CSRF token mismatch" }
        }));

        await store.logout();

        expect(axios.post).toBeCalledWith('/api/logout');
        expect(store.user).toBeNull();
    });
});

