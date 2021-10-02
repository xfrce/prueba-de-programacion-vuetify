
  
     <div @click="dialog = true">{{personaje.name}}</div>
   

<script>
  import axios from 'axios'

  export default {
    name: 'Peoples',
    props: {
      idx: String
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
        personaje: {}
      }
    },
    async mounted () {
        const axiosInstance = axios.create({     
    });

    await axiosInstance
        .get(this.idx +'/?format=json')
        .then(response => {
          this.personaje = response.data
        })
        .catch(error => {
          console.log(error)
        })
      }
    }

</script>