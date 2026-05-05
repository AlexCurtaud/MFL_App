<template>
  <div>
    <div v-if="loading">
      <p>Loading...</p>
    </div>
    <div v-else>
      <h2>{{movieData.title}}</h2>

    </div>
  </div>
</template>

<script setup>
import api from '../services/axios.js'
import {onMounted, ref} from "vue";
import {useRoute} from "vue-router";

const route = useRoute()
const movieData = ref()
const id = route.params.id
const loading = ref(true)

console.log(id)

onMounted(async () => {
  try {
    console.log('boost')
    const response = await api.get(`/movies/${route.params.id}`)
    movieData.value = response.data
    console.log(movieData.value)
  } catch (e) {
    console.error(e.message)
  } finally {
    loading.value = false
  }
})

</script>




<style scoped>

</style>