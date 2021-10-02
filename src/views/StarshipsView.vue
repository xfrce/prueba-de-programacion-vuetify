<template>
  <v-container>
    <div id="cnt">
      <h2>{{this.$spn.starships}}</h2>
       <div v-for="(nave, index) in bag.results"  :key="index" >
        <div>{{nave.name}}</div>
      </div>
    </div>
  </v-container>
</template>

<script>
  import axios from 'axios'

	export default {
		name: 'StarshipsView',
		watch: {
			$route: {
				immediate: true,
				handler(to) {
					document.title = to.meta.title || this.$spn.starships;
				}
			},
		},
		components: {
		},
 data () {
    return {
      bag: []
    }
  },
   mounted () {
     axios
      .get('https://swapi.dev/api/starships/?format=json')
      .then(response => {
        this.bag = response.data
      })
      .catch(error => {
        console.log(error)
      })
  }
	}

</script>