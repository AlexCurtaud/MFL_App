import apiCall from "@/services/axios.js";


export const getMovies = async() => {
    try {
        const response = await apiCall.get("/movies")
        return response.data.member;
    } catch (err) {
        console.error(err.message)
    }
}

export const getGenre = async() => {
    try {
        const response = await apiCall.get("/genres")
        return response.data.member
    } catch (e) {
        console.error(e.message)
    }
}

export async function getMoviesByGenre(id) {
    try {
        const response = await apiCall.get(`/genres/${id}/movies?page=1&itemsPerPage=30`)
        return response.data.member
    } catch (e) {
        console.error(e.message)
    }
}