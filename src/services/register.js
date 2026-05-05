import apiCall from "@/services/axios.js";


export async function register(email, username, plainPassword) {
    try {
        await apiCall.post("/users", {
            email,
            username,
            plainPassword
        })
        console.log('boost')
    } catch (e) {
        console.error(e.message)
    }
}