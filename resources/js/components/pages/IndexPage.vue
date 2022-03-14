<template>
    <h2>Index Page</h2>

    <p>Here is a page that does not need any authentication to access.</p>

    <form @submit.prevent="login">
        <div class="input-div">
            <label for="email">Email</label>
            <input id="email" type="email" name="email" v-model="form.email">
        </div>

        <div class="input-div">
            <label for="password">Password</label>
            <input id="password" type="password" name="password" v-model="form.password">
        </div>

        <div class="input-div">
            <button type="submit">Login</button>
        </div>
    </form>
</template>

<script>
    export default {
        data() {
            return {
                form: {
                    email: '',
                    password: '',
                }
            };
        },

        methods: {
            login() {
                alert('login');
            }
        }
    };
</script>

<style lang="scss" scoped>
    .input-div {
        margin-bottom: 2rem;

        label {
            display: block;
        }
    }
</style>
