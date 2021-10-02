<template>
  <v-container>
    <div class="text-center">
      <p>
         Naves Estelares
      </p>  
    </div>
  </v-container>
</template>

<script>
	/*
	import Menu from './Menu';
	import Footer from './Footer';
*/ 
	export default {
		name: 'Starships',
		watch: {
			$route: {
				immediate: true,
				handler(to) {
					document.title = to.meta.title || 'Test - Naves Estelares';
				}
			},
		},
		components: {
			
		},
	} 
</script>