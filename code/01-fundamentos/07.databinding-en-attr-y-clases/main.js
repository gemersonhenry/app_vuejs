const v = new Vue({
	el: 'main',
	data: {
		peliculas: [
			{ nombre: "Avengers", completado: false, enCartelera: "si", idioma: "Ingles" },
			{ nombre: "Avengers: La era de ultron", completado: false, enCartelera: "no", idioma: "Ingles" },
			{ nombre: "Capitan América", completado: false, enCartelera: "no", idioma: "Ingles" },
			{ nombre: "Capitan América: Guerra civil", completado: false, enCartelera: "si", idioma: "Ingles" },
			{ nombre: "Asu mare", completado: false, enCartelera: "si", idioma: "Español" },
			{ nombre: "Ceviche de tiburón", completado: false, enCartelera: "no", idioma: "Español" },
			{ nombre: "Kunfu panda", completado: false, enCartelera: "si", idioma: "Ingles" },
			{ nombre: "La era de hielo: choque de mundos", completado: false, enCartelera: "no", idioma: "Ingles" }
		]
	},
	methods: {
		mirarPelicula: function (peli) {
			peli.completado = !peli.completado;
		}
	},
	computed: {
		peliculasCompletadas: function () {
			var completadas = this.peliculas.filter( (peli) => peli.completado );
			return completadas.length;
		}
	}
});