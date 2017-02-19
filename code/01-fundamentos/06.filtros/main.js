const _vue = new Vue({
	el: 'main',
	data: {
		nombre: '',
		puntaje: 0,
		idioma: '',
		estado: '',
		peliculas: [
			{ nombre: "Avengers", puntuacion: 7, enCartelera: "si", idioma: "Ingles" },
			{ nombre: "Avengers: La era de ultron", puntuacion: 8, enCartelera: "no", idioma: "Ingles" },
			{ nombre: "Capitan América", puntuacion: 9, enCartelera: "no", idioma: "Ingles" },
			{ nombre: "Capitan América: Guerra civil", puntuacion: 10, enCartelera: "si", idioma: "Ingles" },
			{ nombre: "Asu mare", puntuacion: 4, enCartelera: "si", idioma: "Español" },
			{ nombre: "Ceviche de tiburón", puntuacion: 5, enCartelera: "no", idioma: "Español" },
			{ nombre: "Kunfu panda", puntuacion: 7, enCartelera: "si", idioma: "Ingles" },
			{ nombre: "La era de hielo: choque de mundos", puntuacion: 8, enCartelera: "no", idioma: "Ingles" }
		]
	},
	computed: {
		filtrarPorPuntuacion: function () {
			return this.peliculas.filter( (peli) => peli.puntuacion>=this.puntaje );
		},
		filtrarPorBusqueda: function () {
			return this.peliculas.filter( (peli) => peli.nombre.includes(this.nombre) );
		},
		filtrarPorEstado: function () {
			return this.peliculas.filter( (peli) => peli.enCartelera===this.estado );
		},
		filtrarPorIdioma: function () {
			return this.peliculas.filter( (peli) => peli.idioma.includes(this.idioma) );
		},
		filtroCompleto: function () {
			return this.peliculas.filter( (peli) => 
				peli.puntuacion>=this.puntaje && peli.enCartelera.includes(this.estado)
					&& peli.idioma.includes(this.idioma) && peli.nombre.includes(this.nombre)
			);
		}
	}
});

// Tener en cuenta que hay ciertas diferencias entre vue 1 y vue 2, en vue 2 hay metodos nátivos
// que ya no están incorporados en el framework, pero se pueden agregar librerias sin problemas
// para tener metodos nativos a disposicion.