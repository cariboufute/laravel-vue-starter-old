<template>
    <h2>Home Page</h2>

    <p>You need authentication to access this page.</p>

    <button @click="logout">Logout</button>
</template>

<script>
    export default {
        methods: {
            logout() {
                alert('logout');
            }
        }
    };
</script>

<style lang="scss" scoped>

</style>
