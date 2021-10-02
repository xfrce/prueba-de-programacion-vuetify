<template>
  <v-container>
    <div id="cnt">
      <h2>{{this.$spn.vehicles}}</h2>
      <v-dialog v-model="dialog" width="500">
        <div v-for="(vehi, index) in bag.results"  :key="index" class="vehi">
          <li @click="dialog = true">{{vehi.name}}</li>
        </div>

        <v-card>
          <v-card-title class="text-h5 grey lighten-2">
            vehiculo
          </v-card-title>
          <v-card-text>
            name
          </v-card-text>
        </v-card>

      </v-dialog>
    </div>
  </v-container>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'VehicleView',
    props: {
      idx: Number
    },
    watch: {
      $route: {
        immediate: true,
	handler(to){
		document.title = to.meta.title || this.$spn.vehicles;
	}
      },
    },
    components: {
    },
    methods:{
         mostrar(cad){
              this.dialog = true;
              this.cad2 = cad;
           }
    },
    data () {
      return {
        dialog: false,
        bag: []
      }
    },
    async mounted () {
      await axios
        .get('https://swapi.dev/api/vehicles/?page='+ ((this.idx)?this.idx:1) +'&format=json')
        .then(response => {
	this.bag = response.data
        })
        .catch(error => {
          console.log(error)
        })
      }
    }
</script>