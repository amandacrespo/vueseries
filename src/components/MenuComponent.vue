<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
        <div class="container-fluid">
            <router-link to="/" class="navbar-brand">Home</router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link to="/new" class="nav-link">Nuevo personaje</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/edit" class="nav-link">Modificar personaje</router-link>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Series
                        </a>
                        <ul class="dropdown-menu">
                            <li v-for="serie in series" :key="serie">
                                <router-link :to="/serie/+serie.idSerie" class="dropdown-item">{{ serie.nombre }}</router-link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
import ServicioSeries from '@/services/ServicioSeries';

const service = new ServicioSeries();
export default {
    data(){
        return {
            series: []
        }
    },
    mounted(){
        service.getSeries()
        .then(response => {
            this.series = response;
        })
    }

}
</script>

<style>

</style>