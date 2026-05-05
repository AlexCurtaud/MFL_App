<template>
  <div class="header">
    <nav class="navbar">
      <RouterLink to="/" class="navbar-brand">MFL</RouterLink>
      <RouterLink v-if="!auth.isLoggedIn" to="/login" class="navbar-menu login">Connexion</RouterLink>
      <RouterLink v-else-if="auth.isLoggedIn" to="/users" class="navbar-menu account">Account</RouterLink>
    </nav>
  </div>
</template>

<script setup>
import {useAuthStore} from "@/stores/authStore.js";

const auth = useAuthStore()

</script>

<style scoped>
.header {
  display: flex;
  justify-content: center;
  position: sticky;
  margin-top: 10px;
  top: 0;
}

.navbar {
  position: relative;
  width: 80%;
  height: 75px;
  background-color: #ECF2EF;
}

.navbar-brand {
  position: absolute;
  top: 50%;
  translate: 0 -50%;
  font-size: 40px;
  font-weight: 700;
  text-decoration: none;
  color: black;
}

.navbar-menu {
  position: absolute;
  top: 50%;
  translate: 0 -50%;
  font-size: 25px;
  font-weight: 700;
  text-decoration: none;
  color: black;
}

.login {
  right: 0;
  white-space: nowrap;
}

.account {
  right: 0;
}


</style>