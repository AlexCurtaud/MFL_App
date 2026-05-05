import apiCall from "@/services/axios.js";
import {useAuthStore} from "@/stores/authStore.js";


export async function login(email, password) {
    try {
        const auth = useAuthStore()
        const login = await apiCall.post('/auth', {
            email,
            password
        });
        const { token, user } = login.data
        localStorage.setItem("token", token)
        localStorage.setItem("id", user.id)
        auth.login()
    } catch (e) {
        console.error(e.message)
    }
}