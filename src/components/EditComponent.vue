<template>
  <div>
    <h1>Editar serie</h1>
    <form class="container px-0 mx-0 w-50" @submit.prevent="edit()">
      <div class="row row-cols-1">
        <div class="col mt-3">
          <label>Seleccione una serie:</label>
          <select class="form-select" v-model="idSerie" @change="loadSerie()">
            <option value="" disabled>--- Seleccionar ---</option>
            <option v-for="serie in series" :key="serie" :value="serie.idSerie">{{ serie.nombre }}</option>
          </select>
        </div>
        <div class="col mt-3">
          <label>Seleccione un personaje:</label>
          <select class="form-select" v-model="idPersonaje" @change="loadPersonaje()">
            <option value="" disabled>--- Selecciona un personaje ---</option>
            <option v-for="personaje in personajes" :key="personaje" :value="personaje.idPersonaje">{{ personaje.nombre }}</option>
          </select>
        </div>
        <div class="col mt-3">
          <button class="btn btn-primary">Guardar cambios</button>
        </div>
      </div>
    </form>

    <div>
      <h3>{{serie.nombre}}</h3>
      <img :src="serie.imagen" width="200px" :alt="serie.nombre" >

      <h3>{{personaje.nombre}}</h3>
      <img :src="personaje.imagen" width="200px" :alt="personaje.nombre" >
    </div>
  </div>
</template>

<script>
import ServicioSeries from '@/services/ServicioSeries';

const service = new ServicioSeries();

export default {
  data(){
    return {
      series: [],
      idSerie: "",
      serie: [],
      personajes: [],
      idPersonaje: "",
      personaje: []
    }
  }, 
  mounted(){
    service.getSeries()
    .then(response => {
      this.series = response;
    })   

    service.getPersonajes()
    .then(response => {
      this.personajes = response;
    })
  },

  methods: {
    edit(){
      service.updatePersonajeSerie(this.idSerie, this.idPersonaje)
      .then(response => {
        if(response){
          this.$router.push('/personajes/'+this.idSerie)
        }
      })
    },

    loadSerie(){
      service.getSerieId(this.idSerie)
      .then(response => {
        this.serie = response;
      })
    },

    loadPersonaje(){
      service.getPersonajeId(this.idPersonaje)
      .then(response => {
        this.personaje = response;
      })
    },

  }
}
</script>

<style>

</style>