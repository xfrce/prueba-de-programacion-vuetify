<template>
  <v-container>
      <div id="cnt">
      <h2>{{this.$spn.contact}}</h2>
<v-form v-on:submit.prevent id="nativeForm" v-model="valid">

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
      <v-btn type="submit" @click="getFormValues" :disabled="!valid">{{this.$spn.enviar}}</v-btn>
 </v-form>
 <template>
   <Output :idx="output" />
 </template>

      <v-dialog v-model="dialog" width="500">

        <v-card>
          <v-card-title class="text-h5 grey lighten-2">
            Recibido &nbsp;
          </v-card-title>
          <v-card-text>
            {{this.$spn.usuario}}: {{output.name}} {{output.lastname}} &lt;{{output.email}}&gt; <br/><hr/>
            {{this.$spn.zip}}: {{output.zip}} <br/><hr/>
            {{this.$spn.opinion}}: {{output.obs}} <br/>
          </v-card-text>
        </v-card>

      </v-dialog>


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
        dialog: false,
        output: {  name: "this.name",
              lastname: "this.lastname",
              email: "this.email",
              zip: "this.zip",
              obs: "this.obs"},
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
          (v) => /.+@.+\..+/.test(v) || this.$spn.email_r2
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
          getFormValues(){
            this.output = {
              name: this.name,
              lastname: this.lastname,
              email: this.email,
              zip: this.zip,
              obs: this.obs
            }
            console.log(JSON.stringify(this.output));
            this.dialog = true;
          },
          forceRerender(){
            this.output;
          }
    }
  }

  </script>
