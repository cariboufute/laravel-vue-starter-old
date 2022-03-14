<template>
    <h2>Index Page</h2>

    <p>Here is a page that does not need any authentication to access.</p>

    <p>Once you migrated and seeded your database, try to login with these credentials.</p>

    <ul>
        <li>Email: <strong>user@email.com</strong></li>
        <li>Password: <strong>qwerty</strong></li>
    </ul>

    <form @submit.prevent="submitLogin">
        <p v-if="error" class="error-message">{{ error.message }}</p>

        <div class="input-div">
            <label for="email">Email</label>
            <input id="email" type="email" name="email" v-model="form.email">
            <div v-for="fieldError in fieldErrors('email')" class="error-message">{{ fieldError }}</div>
        </div>

        <div class="input-div">
            <label for="password">Password</label>
            <input id="password" type="password" name="password" v-model="form.password">
            <div v-for="fieldError in fieldErrors('password')" class="error-message">{{ fieldError }}</div>
        </div>

        <div class="input-div">
            <button type="submit">Login</button>
        </div>
    </form>
</template>

<script>
    import _ from 'lodash';
    import { mapActions } from 'vuex';

    export default {
        data() {
            return {
                form: {
                    email: '',
                    password: '',
                },

                error: null,
            };
        },

        methods: {
            ...mapActions('Auth', ['login']),

            fieldErrors(field) {
                return _.get(this.error, 'errors.' + field, []);
            },

            async submitLogin() {
                try {
                    await this.login(this.form);
                    await this.$router.push('/home');
                } catch (error) {
                    this.error = error.response ? error.response.data : error;
                }
            }
        }
    };
</script>

<style lang="scss" scoped>
    ul {
        list-style: none;
        padding-left: 0;
    }

    .input-div {
        margin-bottom: 2rem;

        label {
            display: block;
        }
    }

    .error-message {
        color: red;
    }
</style>
