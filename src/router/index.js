import { createRouter, createWebHistory } from 'vue-router'
import Home from '/src/components/Home.vue'
import Login from '/src/pages/Login.vue'
import Register from '/src/pages/Register.vue'
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
    },
    {
        path: '/register',
        name: 'Register',
        component: Register,
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router
