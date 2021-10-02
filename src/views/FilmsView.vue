<template>
  <v-container>
    <div id="cnt">
      <h2>{{this.$spn.peliculas}}</h2>
       <div v-for="(pelicula,index) in bag.results"  :key="index" >
        <Films :peli=pelicula />
      </div>
    </div>
  </v-container>
</template>

<script>
  import Films from '@/components/Contenido/Films.vue'
  import axios from 'axios'
  
	export default {
		name: 'FilmsView',
		watch: {
			$route: {
				immediate: true,
				handler(to) {
					document.title = to.meta.title || this.$spn.peliculas;
				}
			},
		},
		components: {
		Films,
		},
 data () {
    return {
      bag: []
    }
  },
  mounted () {
    axios
      .get('https://swapi.dev/api/films/?format=json')
      .then(response => {
          this.bag = response.data
      })
      .catch(error => {
        console.log(error)
      })
  }
	}

</script>