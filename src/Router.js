import { createRouter, createWebHistory } from "vue-router"
import HomeComponent from "./components/HomeComponent.vue";
import EditComponent from "./components/EditComponent.vue";
import SerieComponent from "./components/SerieComponent.vue";
import CreatePersonaje from "./components/CreatePersonaje.vue";

const routes = [
    {
        path: '/',
        component: HomeComponent
    },
    {
        path: '/new',
        component: CreatePersonaje
    },
    {
        path: '/edit',
        component: EditComponent
    },
    {
        path: '/serie/:id',
        component: SerieComponent
    },
    {
        path: '/personajes/:idserie',
        component: SerieComponent
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router;