<template>
  <div class="container">
    <div v-if="loading" class="loading">
      <p>Loading...</p>
    </div>
    <div v-else>
      <div class="user">
      <h2>My Account</h2>
      <p>Username: {{userData.username}}</p>
      </div>
      <button @click="logout()">Log Out</button>
    </div>
  </div>
</template>

<script setup>
import {onMounted, ref} from "vue";
import apiCall from "@/services/axios.js";
import {logout} from "@/services/logout.js";



const userData = ref()
const loading = ref(true);

onMounted(async () => {
  try {
    const response = await apiCall.get(`/users/${localStorage.getItem("id")}`)
    userData.value = response.data
  } catch (e) {
    console.error(e.message)
  }
  loading.value = false
})



</script>

<style scoped>
.loading {
  text-align: center;
}

.container {
  display: flex;
  justify-content: center;
  width: 80%
}


</style>