<template>
  <v-card dark >
    <v-toolbar>
    
      <v-app-bar-nav-icon @click="drawer = true" v-if="$vuetify.breakpoint.xsOnly" >
      </v-app-bar-nav-icon>
 
      <v-toolbar-title :class="{'': $vuetify.breakpoint.smAndDown, 'ml-6': $vuetify.breakpoint.mdAndUp}">
        {{$spn.webname}}
      </v-toolbar-title>
 
      <v-spacer></v-spacer>
 
      <v-btn dark class="text-capitalize mr-2 v-btn--active" v-show="$vuetify.breakpoint.lgOnly" >
        <router-link to="/films" class="flm">{{this.$spn.peliculas}}</router-link> 
      </v-btn>
 
      <v-btn dark class="text-capitalize mr-2" v-show="$vuetify.breakpoint.lgOnly" >
        <router-link to="/starships" class="flm">{{this.$spn.starships}}</router-link> 
      </v-btn>

      <v-btn dark class="text-capitalize mr-2" v-show="$vuetify.breakpoint.lgOnly" >
        <router-link to="/vehicles" class="flm">{{this.$spn.vehicles}}</router-link> 
      </v-btn>
 
      <v-btn dark class="text-capitalize mr-14" v-show="$vuetify.breakpoint.lgOnly" >
        <router-link to="/contact" class="flm">{{this.$spn.contact}}</router-link> 
      </v-btn>
 
    </v-toolbar>
 
    <v-navigation-drawer
      v-model="drawer"
      absolute
      width="100%"
      height="auto"
      temporary
    >
      <v-list nav dense >
        <v-list-item-group v-model="group" >
          <v-list-item>
            <v-list-item-icon> <v-icon>mdi-video-vintage</v-icon> </v-list-item-icon>
            <v-list-item-title>
              <router-link to="/films" class="flm">{{this.$spn.peliculas}}</router-link>
            </v-list-item-title>
          </v-list-item>
  
          <v-list-item>
            <v-list-item-icon> <v-icon>mdi-language-swift</v-icon> </v-list-item-icon>
            <v-list-item-title>
              <router-link to="/starships" class="flm">{{this.$spn.starships}}</router-link>
            </v-list-item-title>
          </v-list-item>
 
          <v-list-item>
            <v-list-item-icon> <v-icon>mdi-car-hatchback</v-icon> </v-list-item-icon>
            <v-list-item-title>
              <router-link to="/vehicles" class="flm">{{this.$spn.vehicles}}</router-link>
            </v-list-item-title>
          </v-list-item>
 
          <v-list-item>
            <v-list-item-icon> <v-icon>mdi-mail</v-icon> </v-list-item-icon>
            <v-list-item-title>
              <router-link to="/contact" class="flm">{{this.$spn.contact}}</router-link>
            </v-list-item-title>
          </v-list-item>
  
        </v-list-item-group>
      </v-list>        
    </v-navigation-drawer>
 
  </v-card>
</template>


<script>
  export default {
    name: 'Menu',

    data: () => ({
      drawer: false,
      group: null,
    }),

    methods: {
      menuItems() {
        return this.menu;
      }
    }
 
  }
</script>

<style scope>
 
  .bgsel:hover {
    background: #afaeae;
  }
 
  .flm:link {
    text-decoration: none;
  }
 
  .v-application a {
    color: #ffffff!important;
  } 
  
</style>
