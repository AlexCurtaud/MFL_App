<template>
  <div class="title"><h2>Movies</h2></div>
  <div v-if="loading" class="loading">
    <p>Loading...</p>
  </div>
  <div v-else class="container">
    <FilterBar class="filterBar"/>
    <div class="movies">
      <div v-for="each in movie.movieData" class="movie-card">
        <router-link :to="`/movies/${each.id}`">
          <img :src="each.poster" :alt="each.title">
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import {onMounted, ref} from "vue";
import FilterBar from "@/components/FilterBar.vue";
import {useMovieStore} from "@/stores/movieStore.js";

const loading = ref(false);
const movie = useMovieStore()

onMounted(async() => {
  await movie.allMovies()
})

function handleGenre() {

}

</script>

<style scoped>
h2 {
  width: 80%;
  padding-top: 5px;
  padding-bottom: 5px;
  font-size: 30px;
  border-bottom: black solid 1px;
  border-top: black solid 1px;
}

.loading {
  position: absolute;
  top: 50%;
  left: 50%;
  translate: -50% -50%;
}

.title {
  text-align: center;
  display: flex;
  justify-content: center;
  margin-top: 10px;
}

.container {
  display: flex;
  justify-content: center;
  align-items: flex-start;
}

.movies {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  width: 65%;
  height: fit-content;
  gap: 16px;
}

.movie-card {
  width: 230px;
  height: 300px;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}

img {
  width: 230px;
  height: 300px;
  border-radius: 10px;
}

img:hover {
  scale: 105%
}
</style>