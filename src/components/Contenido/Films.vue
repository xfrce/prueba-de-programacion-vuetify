<template>
  <v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
          <v-container fill-height fluid>
            <v-layout fill-height>
              <v-flex xs12 align-end flexbox>
                <span class="headline">{{peli.title}}</span>
              </v-flex>
            </v-layout>
          </v-container>
        <v-card-title>
          <div>
            <span class="grey--text">{{this.$spn.peoples}}</span><br>
          </div>
        </v-card-title>
        <v-card-text>

        <div v-for="(car,index) in peli.characters" :key="index">
          <div v-if="typeof personaje[car] !== 'undefined'"  @click="dialog = true;crt=car;" >
              {{personaje[car].name}}
          </div>
   
        </div>

      <v-dialog v-model="dialog" width="500" >
        <v-card>
          <v-card-title class="text-h5 grey lighten-2"> {{this.$spn.people}} </v-card-title>
          <v-card-text> {{ctr}}</v-card-text>
        </v-card>
      </v-dialog>

        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>


 

<script>
  import axios from 'axios' 

  export default {
    name: 'Films',
    props: {
       peli: Object
    },
    mounted(){
        this.peli.characters.forEach((value) => {
          console.log(value)
          axios
            .get(value +'/?format=json')
            .then(response => {
              this.personaje[value] = response.data
            })
            .catch(error => {console.log(error)})	  
          });
     
    },
   
    data () {
      return {
        dialog: true,
        personaje: []
      }
    }
  }


</script>