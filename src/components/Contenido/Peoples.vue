<template>   
  <v-container>  

    {{this.nombre}}
  </v-container>
</template>

<script>
/*

    <router-link to={{/people/ +this.idx.toString()}} class="flm">{{personaje.name}}</router-link>  



*/


  import axios from 'axios'
  
    export default {
      name: 'Peoples',
      props: {
        idx: Number,
	nombre: String,
      },	
      components: {
      },
      data () {
        return {
          personaje: []
        }
      },
      async mounted () {
        const axiosInstance = axios.create({
          headers: {
            "Access-Control-Allow-Origin": "*"
          }
        });

        await axiosInstance
        .get('https://swapi.dev/api/people/'+ this.idx +'/?format=json')
        .then(response => {
          this.personaje = response.data
        })
        .catch(error => {
          console.log(error)
        })
      }
    }  

</script>