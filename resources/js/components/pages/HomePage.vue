<template>
    <h2>Home Page</h2>

    <p>You need authentication to access this page.</p>

    <button @click="logoutAndRedirect">Logout</button>
</template>

<script>
    import { mapActions } from 'vuex';

    export default {
        methods: {
            ...mapActions('Auth', ['logout']),

            async logoutAndRedirect() {
                await this.logout();
                await this.$router.push('/');
            }
        }
    };
</script>
