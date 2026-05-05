const apiUrl = import.meta.env.VITE_API_URL

import axios from "axios";

const apiCall = axios.create({
    baseURL: apiUrl,
    headers: {
        "Content-Type": "application/json"
    },
});

axios.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    console.log(token)
    const skipAuth = false;
    if(skipAuth) {
        return config;
    } else if(token) {
        return config.headers.Authorization = `Bearer ${token}`;
    }
})

export default apiCall
