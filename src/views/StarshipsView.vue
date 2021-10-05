<template>
  <v-container>
    <div id="cnt">
      <h2>{{this.$spn.starships}}</h2>
       <div v-for="(nave, index) in bag.results"  :key="index" >
        <li class="li1">{{nave.name}}</li>
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

<style scope>

  .li1 {
    list-style:none;
    text-align: left;
  }
 
  .li1:hover {
    background: #efefae;
  }
 
</style>