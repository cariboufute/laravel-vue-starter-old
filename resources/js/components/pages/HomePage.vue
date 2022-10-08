<template>
    <h2>Home Page</h2>

    <p>You need authentication to access this page.</p>

    <button @click="logoutAndRedirect">Logout</button>
</template>

<script setup>
    import { useAuth } from '@/stores/Auth';
    import { useRouter } from 'vue-router';

    const { logout } = useAuth();
    const router = useRouter();

    const logoutAndRedirect = async () => {
        await logout();
        await router.push('/');
    }
</script>
