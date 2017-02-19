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
			axios.get('https://randomuser.me/api/?results=100')
				.then( (respuesta) => {
					this.personas = respuesta.data.results;
				} );
		}
	}
});