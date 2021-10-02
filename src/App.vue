<template> 
  <v-app>
    <v-main>  
      <!-- Componente 'Menu' -->
      <Menu/>    
 
        <router-view> 
          <v-main>
      
          </v-main>      
        </router-view>     
 
      <!-- Componente 'Footer' -->
      <Footer/>        
    </v-main>
  </v-app>
</template>


<script>
	import Menu from './components/Menu';
	import Footer from './components/Footer';
//	import FilmsView from './views/FilmsView';
	
	export default {
		name: 'Aplication',
		watch: {
			$route: {
				immediate: true,
				handler(to) {
					document.title = to.meta.title || 'Test';
				}
			},
		},
		components: {
			Menu,
			Footer,
		},
	} 
</script>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
 
#nav {
  padding: 30px;
 
  a {
    font-weight: bold;
    color: #2c3e50;
 
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>