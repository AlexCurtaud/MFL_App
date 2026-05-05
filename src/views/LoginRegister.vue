<template>
  <div class="container">
    <div class="form">
      <form @submit.prevent="handleRegister" class="register-form">
        <h2>Registration</h2>
        <div class="labelInput">
          <label for="username">Username</label>
          <br>
          <input v-model="username" type="text" id="username" required>
        </div>
        <div class="labelInput">
          <label for="email">Email</label>
          <input v-model="email" type="text" id="email" required>
        </div>
        <div class="labelInput">
          <label for="password">Password</label>
          <br>
          <input v-model="plainPassword" type="password" id="password" required>
        </div>
        <div class="labelInput">
          <button type="submit">Create Account</button>
        </div>
      </form>
      <form @submit.prevent="handleLogin" class="login-form">
        <h2>Login</h2>
        <div class="labelInput">
          <label for="emailLogin">Email</label>
          <input v-model="emailLogin" type="text" id="emailLogin" required>
        </div>
        <div class="labelInput">
          <label for="passwordLogin">Password</label>
          <br>
          <input v-model="passwordLogin" type="password" id="passwordLogin" required>
        </div>
        <div class="labelInput">
          <button type="submit">Connection</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import {ref} from "vue";
import router from "@/router/index.js";
import {register} from "@/services/register.js";
import {login} from "@/services/login.js"

const email = ref("");
const username = ref("");
const plainPassword = ref("");

const emailLogin = ref("");
const passwordLogin = ref("");

async function handleRegister() {
  try {
    await register(email.value, username.value, plainPassword.value);
    await router.push("/login");
    console.log('created')
  } catch (e) {
    console.error(e.message)
  }
}

async function handleLogin() {
  try {
    await login(emailLogin.value, passwordLogin.value)
    router.push("/")
  } catch (e) {
    console.error(e.message)
  }
}

</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  height: 700px;
}

.register-form {
  width: 500px;
}

h2 {
  text-align: center;
  margin-top: 50px;
}

.labelInput {
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 30px;
}

</style>