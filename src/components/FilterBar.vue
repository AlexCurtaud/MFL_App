<template>
  <div class="side-container">
    <h3>Filters</h3>
    <div class="filter-container">
      <div v-for="genre in genreData" :key="genre.id" class="genres">
        <p class="genre">{{genre.label}}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import apiCall from "@/services/axios.js";
import {onMounted, ref} from "vue";

const genreData = ref([])
const loading = ref(true)

const genreId = ref()

onMounted(async () => {
  try {
    const response = await apiCall.get("/genres")
    genreData.value = response.data.member
  } catch (e) {
    console.error(e.message)
  }
  loading.value = false
})

</script>

<style scoped>
  .side-container {
    position: sticky;
    top: 85px;
    width: 15%;
    border-left: black solid 1px;
  }

  .filter-container {
    max-height: 75vh;
    overflow-y: auto;
    scrollbar-width: thin;
  }

  h3 {
    margin-left: 10px;
    margin-top: 0;
  }

  .genres {
    display: flex;
    justify-content: center;
    border-radius: 30px;
    width: fit-content;
    margin: 10px 0 0 20px;
    padding: 8px;
    background-color: darkgoldenrod;
  }

  .genre {
    margin: 0;
  }
</style>