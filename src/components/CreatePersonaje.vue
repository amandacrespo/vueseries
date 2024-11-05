<template>
  <div>
    <h1>Crear personaje</h1>
    <form class="container px-0 mx-0 w-50" @submit.prevent="create()">
      <div class="row row-cols-1">
        <div class="col mt-3">
          <label>Nombre:</label>
          <input type="text" class="form-control" v-model="personaje.nombre">
        </div>
        <div class="col mt-3">
          <label>Imagen:</label>
          <input type="text" class="form-control" v-model="personaje.imagen">
        </div>
        <div class="col mt-3">
          <label>Serie</label>
          <select class="form-select" v-model="personaje.idSerie">
            <option value="" disabled>--- Seleccionar ---</option>
            <option v-for="serie in series" :key="serie" :value="serie.idSerie">{{ serie.nombre }}</option>
          </select>
        </div>
        <div class="col mt-3">
          <button class="btn btn-success">Insertar personaje</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import ServicioSeries from '@/services/ServicioSeries';

const service = new ServicioSeries();

export default {
  data(){
    return {
      series: [],
      personaje: {
        "idPersonaje": 1358,
        "nombre": "",
        "imagen": "",
        "idSerie": ""
      }
    }
  }, 
  mounted(){
    service.getSeries()
    .then(response => {
        this.series = response;
    })
  },
  methods: {
    create(){
      service.setPersonajeSerie(this.personaje)
      .then(response => {
        if(response){
          this.$router.push('/personajes/'+this.personaje.idSerie)
        }
      })
    }
  }
}
</script>

<style>

</style>