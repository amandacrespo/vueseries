import { createRouter, createWebHistory } from "vue-router"
import HomeComponent from "./components/HomeComponent.vue";
import CreateSerie from "./components/CreateSerie.vue";

const routes = [
    {
        path: '/',
        component: HomeComponent
    },
    {
        path: '/new',
        component: CreateSerie
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router;