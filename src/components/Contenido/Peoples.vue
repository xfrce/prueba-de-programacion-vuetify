<template>
  <v-container v-if="personaje.name">
  <li class="li1" @click="dialog = true">
    {{personaje.name}}
  </li>


  <v-dialog v-model="dialog" width="500" >
    <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          <span class="grey--text">
              {{this.$spn.people}} &nbsp; 
          </span>
          <span class="headline">
              {{personaje.name}}
          </span>
          <br>
        </v-card-title>
        <v-card-text>
          <span class="grey--text">
              {{this.$spn.birth}} &nbsp; 
          </span> 
          <span class="headline">
            {{personaje.birth_year}}
          </span>
        </v-card-text>
        <v-card-text>
          <span class="grey--text">
              {{this.$spn.genero}} &nbsp; 
          </span> 
          <span class="headline">
            {{personaje.gender}}
          </span>
        </v-card-text>
          
    </v-card>
  </v-dialog>
  </v-container>
</template>
     
<script>
  import axios from 'axios'

  export default {
    name: 'Peoples',
    props: {
      idx: String
    },
    methods:{
    
    },
    data () {
      return {
        dialog: false,
        personaje: {}
      }
    },
    async mounted(){
        await axios
            .get(this.idx +'/?format=json')
            .then(response => {
              this.personaje = response.data
            })
            .catch(error => {console.log(error)})
    }
  }
</script>
<style scope>

  .li1 {
    list-style:none;
    color: #0000ff!important;
    text-align: left;
  }
 
  .li1:hover {
    background: #efefae;
  }
 
</style>
