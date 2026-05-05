import apiCall from "@/services/axios.js";


export const getMovies = async () => {
    try {
        const response = await apiCall.get("/movies")
        return response.data.member;
    } catch (err) {
        console.error(err.message)
    }
}