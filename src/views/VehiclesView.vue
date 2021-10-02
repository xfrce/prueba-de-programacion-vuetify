<template>
  <v-container>
    <div id="cnt">
      <h2>{{this.$spn.vehicles}}</h2>

      <div v-for="(vehi, index) in bag.results"  :key="index">

        <v-dialog v-model="dialog" width="500" >
          <template v-slot:activator="{}">
            <div @click="dialog=true; mostrar($spn.vehicle, vehi.name)"   > {{vehi.name}} </div>
          </template>
          <v-card>
            <v-card-title class="text-h5 grey lighten-2">{{cad1}}</v-card-title>
            <v-card-text>{{cad2}}</v-card-text>
          </v-card>
        </v-dialog>
      </div>

    </div>
  </v-container>
</template>

<script>
  import axios from 'axios'
  
  export default {
    name: 'VehiclesView',
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
    mostrar(cad1, cad2){
    this.cad1 = cad1;
    this.cad2 = cad2;
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