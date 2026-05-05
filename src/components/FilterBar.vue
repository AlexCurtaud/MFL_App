<template>
  <div class="side-container">
    <h3>Filters</h3>
    <div class="filter-container">
      <div @click="handleGenre(genre.id)" v-for="genre in movie.genreData" :key="genre.id" class="genres">
        <p class="genre">{{genre.label}}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import {onMounted} from "vue";
import {useMovieStore} from "@/stores/movieStore.js";
import {getMoviesByGenre} from "@/apiCall/movieApi.js";

const movie = useMovieStore()

onMounted(async () => {
  await movie.allGenre()
})

async function handleGenre(id) {
  await movie.moviesByGenre(id)
}

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