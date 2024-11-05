import Global from "@/Global";

export default class ServicioSeries {
    getSeries(){
        return new Promise(function(resolve){
            let endpoint = 'api/series';

            fetch(Global.urlSeries + endpoint)
            .then(response => response.json())
            .then(data => {
                resolve(data);
            })
            .catch(error => {
                console.error('Error en getSeries() ' +  error)
            })
        })
    }

    getSerieId(id){
        return new Promise(function(resolve){
            let endpoint = 'api/series/'+id;

            fetch(Global.urlSeries + endpoint)
            .then(response => response.json())
            .then(data => {
                resolve(data);
            })
            .catch(error => {
                console.error('Error en getSerieId() ' +  error)
            })
        })
    }

    getPersonajesSerieId(id){
        return new Promise(function(resolve){
            let endpoint = 'api/series/personajesserie/'+id;

            fetch(Global.urlSeries + endpoint)
            .then(response => response.json())
            .then(data => {
                resolve(data);
            })
            .catch(error => {
                console.error('Error en getPersonajesSerieId() ' +  error)
            })
        })
    }

    getPersonajeId(id){
        return new Promise(function(resolve){
            let endpoint = 'api/personajes/'+id;

            fetch(Global.urlSeries + endpoint)
            .then(response => response.json())
            .then(data => {
                resolve(data);
            })
            .catch(error => {
                console.error('Error en getPersonajeId() ' +  error)
            })
        })
    }
    
    getPersonajes(){
        return new Promise(function(resolve){
            let endpoint = 'api/personajes/';

            fetch(Global.urlSeries + endpoint)
            .then(response => response.json())
            .then(data => {
                resolve(data);
            })
            .catch(error => {
                console.error('Error en getPersonajes() ' +  error)
            })
        })
    }

    setPersonajeSerie(personaje){
        return new Promise(function(resolve){
            let endpoint = 'api/personajes';

            fetch(Global.urlSeries + endpoint,{
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify({
                    "idPersonaje": personaje.idPersonaje,
                    "nombre": personaje.nombre,
                    "imagen": personaje.imagen,
                    "idSerie": personaje.idSerie
                })
            })
            .then(response => {
                if(response.status == 200){
                    resolve(true);
                }
            })
            .catch(error => {
                console.error('Error en setPersonajeSerie() ' +  error)
            })
        })
    }

    updatePersonajeSerie(idSerie, idPersonaje){
        return new Promise(function(resolve){
            let endpoint = 'api/personajes/'+idPersonaje+'/'+idSerie;

            fetch(Global.urlSeries + endpoint,{
                method: 'PUT',
            })
            .then(response => {
                if(response.status == 200){
                    resolve(true);
                }
            })
            .catch(error => {
                console.error('Error en updatePersonajeSerie() ' +  error)
            })
        })
    }
}