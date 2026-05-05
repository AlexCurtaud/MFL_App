import {defineStore} from "pinia";
import {ref} from 'vue';
import {getGenre, getMovies, getMoviesByGenre} from "@/apiCall/movieApi.js";

export const useMovieStore = defineStore('movie', () => {
    const movieData = ref([]);
    const genreData = ref([]);

    async function allMovies() {movieData.value = await getMovies()}
    async function allGenre() {genreData.value = await getGenre()}
    async function moviesByGenre(id) {movieData.value = await getMoviesByGenre(id)}


    return {
        movieData,
        genreData,
        allMovies,
        allGenre,
        moviesByGenre
    }
})