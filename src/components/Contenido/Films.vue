<template>
  <v-container>
    <div id="cnt">
      <h3>{{peli.episode_id}} - {{peli.title}}</h3>
      <div v-for="(actor,index) in peli.characters" :key="index">
        <Peoples :nombre="actor.name" :idx="index" />
      </div>
    </div>
  </v-container>
</template>


<script>
  import Peoples from '@/components/Contenido/Peoples.vue'

  export default {
    name: 'Films',
    props: {
      peli: Object
    },
    components: {
      Peoples,
    },
  }





/* ****************************************
  qwert {{index}} {{actor.name}}

 :key="index"

     <Peoples :idx=index.toString() />	

      <v-divider
                  v-if="!actor"
                  :key="`divider-${i}`"
                ></v-divider>

function key2(idx){
return Math.floor(Math.random() * 9999999 +idx);
}


data () {
    return {
      actor: [    {name:'sryjsr'},    {name:'srykry'},    {name:'styjs'}]
    }
  },
  mounted () {
    axios
      .get('https://swapi.dev/api/people/:index/?format=json')
      .then(response => {
          this.actor = response.data.name
      })
      .catch(error => {
        console.log(error)
      })
  }

*/



</script>