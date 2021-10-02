<template>
  <v-container>
      <div id="cnt">
      <h2>{{this.$spn.contact}}</h2>
<v-form method="post" action="" id="nativeForm" v-model="valid">

      <v-text-field
        :label="this.$spn.nombres"
        v-model="name"
        :rules="nameRules"
        :counter="10"
        required
        name="message"
      ></v-text-field>
      <v-text-field
        :label="this.$spn.apellidos"
        v-model="lastname"
        :rules="lastnameRules"
        :counter="10"
        required
        name="message"
      ></v-text-field>      
      <v-text-field
        :label="this.$spn.email"
        v-model="email"
        :rules="emailRules"
        required
        name="mail"
      ></v-text-field>
      <v-text-field
        :label="this.$spn.zip"
        v-model="zip"
        :rules="zipRules"
        :counter="6"
        required
        name="message"
      ></v-text-field>
      <v-text-field
        :label="this.$spn.opinion"
        v-model="obs"
        name="message"
      ></v-text-field>
      <v-btn @click="submit" :disabled="!valid">{{this.$spn.enviar}}</v-btn>
 </v-form>
 </div>
   </v-container>
</template>

<script>
  export default {
    name: 'ContactView',
    watch: {
			$route: {
				immediate: true,
				handler(to) {
					document.title = to.meta.title || this.$spn.contact;
				}
			},
    },
    data () {
      return {
        valid: false,
        name: '',
	nameRules: [
          (v) => !!v || this.$spn.name_r1,
          (v) => v.length >= 3 || this.$spn.name_r2
	],
	lastname: '',
	lastnameRules: [
          (v) => !!v || this.$spn.lastname_r1,
          (v) => v.length >= 3 || this.$spn.lastname_r2
        ],


        email: '',
        emailRules: [
          (v) => !!v || this.$spn.email_r1,

        ],

	zip: '',
	zipRules: [
          (v) => !!v || this.$spn.zip_r1,
          (v) => v.length >= 3 || this.$spn.zip_r2
        ],

	obs: '',

          }
        },
        methods: {
          submit() {
            // nativeForm.submit()
          }
        }
      }

/*
              (v) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) || this.$spn.email_r2

*/

  </script>
