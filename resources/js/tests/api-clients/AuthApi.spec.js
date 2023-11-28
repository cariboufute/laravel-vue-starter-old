import axios from 'axios';
import AuthApi from '@/api-clients/AuthApi';
import { vi, describe, beforeEach, test, expect } from 'vitest';

vi.mock('axios', () => {
    return {
        default: {
            get: vi.fn(),
            post: vi.fn()
        }
    };
});

describe('AuthApi', () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

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

        expect(axios.get).toBeCalledWith('/api/user/auth');
    });

    test('logout', async () => {
        await AuthApi.logout();

        expect(axios.post).toBeCalledWith('/api/logout');
    });
});
