<template>
  <v-container>
    <div class="text-center">
      <p>
        Contacto
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
		name: 'Contact',
		watch: {
			$route: {
				immediate: true,
				handler(to) {
					document.title = to.meta.title || 'Test - Contacto';
				}
			},
		},
		components: {
			
		},
	} 
</script>