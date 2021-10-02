<template dark>
	<v-card dark
		class="pt-5 mt-10"
	>
		<v-container>
			<div class="text-center">
				<p>
					{{this.$spn.webautor}}, Octubre - <span id="agno"></span>.
				</p>
			</div>
		</v-container>
	</v-card> 
</template>

<script>
	export default {
		name: 'Footer',
		methods: {
			obtenerAgno() {
				var agno = new Date().getFullYear();
				document.getElementById('agno').innerHTML = agno;
			}
		},
		mounted () {
			this.obtenerAgno()
		},
	}
</script>