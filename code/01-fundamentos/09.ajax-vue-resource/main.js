const v = new Vue({
	el: 'main',
	mounted() {
		this.cargarPersonas();
	},
	data: {
		personas: []
	},
	methods: {
		cargarPersonas: function () {
			this.$http.get('https://randomuser.me/api/?results=100')
				.then( (respuesta) => {
					this.personas = respuesta.body.results;
				} );
		}
	}
});