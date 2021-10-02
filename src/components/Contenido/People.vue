<template>
  <v-container>
      
        {{personaje.name}}
      ,
  </v-container>
</template>

<script>
import axios from 'axios'
	export default {
		name: 'People',
		props: {
    idx: Object
  },
	
		components: {
		},
 data () {
    return {
      personaje: []
    }
  },
  mounted () {
  
    axios
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