import { createRouter, createWebHistory } from 'vue-router'
import Home from "@/views/Home.vue";
import Movie from "@/views/Movie.vue";
import LoginRegister from "@/views/LoginRegister.vue";
import Users from "@/views/Users.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: '/', component: Home},
    {path: '/movies/:id', component: Movie},
    {path: '/login', component: LoginRegister},
    {path: '/users', component: Users}
  ],
})

export default router
