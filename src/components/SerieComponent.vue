<template>
  <div>
    <div class="card" style="width: 18rem;" v-if="$route.params.id">
        <img :src="serie.imagen" class="card-img-top" :alt="serie.nombre" >
        <div class="card-body">
            <h5 class="card-title">{{ serie.nombre }}</h5>
            <p class="card-text">IMDB: {{ serie.puntuacion }}</p>
            <router-link :to="/personajes/+serie.idSerie" class="btn btn-success">Personajes</router-link>
        </div>
    </div>
    <div v-else>
        <router-link :to="/serie/+$route.params.idserie" class="btn btn-danger">Volver</router-link>
        <table class="table table-striped w-50">
            <thead>
                <tr>
                    <th>Personaje</th>
                    <th>Imagen</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="personaje in personajes" :key="personaje">
                    <td>{{ personaje.nombre }}</td>
                    <td>
                        <img :src="personaje.imagen" width="200px">
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
  </div>
</template>

<script>
import ServicioSeries from '@/services/ServicioSeries';

const service = new ServicioSeries();
export default {
    data(){
        return {
            serie: {
                "idSerie": '',
                "nombre": '',
                "imagen": '',
                "puntuacion": '',
                "anyo": ''
            },
            personajes: []
        }
    }, 
    mounted(){
        if(this.$route.params.id){
            service.getSerieId(this.$route.params.id)
            .then(response => {
                this.serie = response
            })
        } else {
            service.getPersonajesSerieId(this.$route.params.idserie)
            .then(response => {
                this.personajes = response
            })
        }
    },
    watch: {
        '$route.params.id'(nextVal, prevVal){
            if(nextVal !== prevVal){
                service.getSerieId(this.$route.params.id)
                .then(response => {
                    this.serie = response
                })
            }
        },
        '$route.params.idserie'(nextVal, prevVal){
            if(nextVal !== prevVal){
                service.getPersonajesSerieId(this.$route.params.idserie)
                .then(response => {
                    this.personajes = response
                })
            }
        }
    }
}
</script>

<style>

</style>