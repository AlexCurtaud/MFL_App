import router from "@/router/index.js";
import {useAuthStore} from "@/stores/authStore.js";


export const logout = () => {
    const auth = useAuthStore()
    auth.logout()
    localStorage.clear()
    router.push("/")
}