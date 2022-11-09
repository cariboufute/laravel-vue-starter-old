import axios from 'axios';

export default {
    async sanctumCookie() {
        return await axios.get('/sanctum/csrf-cookie');
    },

    async login(payload) {
        return await axios.post('/api/login', payload);
    },

    async user() {
        return await axios.get('/api/user/auth');
    },

    async logout() {
        return await axios.post('/api/logout');
    }
};
