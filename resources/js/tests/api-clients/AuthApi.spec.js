import axios from 'axios';
import AuthApi from '@/api-clients/AuthApi';

jest.mock('axios');

describe('AuthApi', () => {
    test('sanctumCookie', async () => {
        await AuthApi.sanctumCookie();

        expect(axios.get).toBeCalledWith('/sanctum/csrf-cookie');
    });


    test('login', async () => {
        const payload = { page: 2 };

        await AuthApi.login(payload);

        expect(axios.post).toBeCalledWith('/api/login', payload);
    });

    test('user', async () => {
        await AuthApi.user();

        expect(axios.get).toBeCalledWith('/api/user');
    });

    test('logout', async () => {
        await AuthApi.logout();

        expect(axios.post).toBeCalledWith('/api/logout');
    });
});
