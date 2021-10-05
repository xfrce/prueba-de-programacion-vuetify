<template>
  <v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
          <v-container fill-height fluid class="text-h5 grey lighten-2">
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
<template v-for="(car, index) in peli.characters" >
<Peoples :idx="car" :key="index"/>
</template>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
//  import axios from 'axios' 
import Peoples from '@/components/Contenido/Peoples'

  export default {
    name: 'Films',
    props: {
       peli: Object
    },
    components:{
        Peoples
    }
  }
/*

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
   

key="index"
*/

</script>