import {defineStore} from "pinia";
import {ref} from 'vue';
import {getMovies} from "@/apiCall/movieApi.js";

export const useMovieStore = defineStore('movie', () => {
    const movieData = ref([]);

    async function allMovies() {movieData.value = await getMovies()}

    return {
        movieData,
        allMovies
    }
})