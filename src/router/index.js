import { createRouter, createWebHistory } from 'vue-router'
// VIEWS
import Home from '../views/Home.vue'
import About from '../views/About.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Home, class: '' },
        { path: '/about', component: About, class: '' }
    ]
})

export default router