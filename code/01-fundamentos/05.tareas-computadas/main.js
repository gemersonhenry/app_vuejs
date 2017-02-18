const vm = new Vue({
	el: 'main',
	data: {
		mensajeInicial: 'Hola a todos!',
		nuevoCurso: {},
		cursos: [
			{ nombreDelCurso: "Matemática", numeroDeHoras: 12},
			{ nombreDelCurso: "Física", numeroDeHoras: 4},
			{ nombreDelCurso: "Literatura", numeroDeHoras: 2},
			{ nombreDelCurso: "Comunicación", numeroDeHoras: 6},
			{ nombreDelCurso: "Arte", numeroDeHoras: 2},
			{ nombreDelCurso: "Historia", numeroDeHoras: 2}
		]
	},
	methods: {
		agregarCurso: function () {
			this.cursos.push(this.nuevoCurso);
			this.nuevoCurso = {};
		},
		eliminarCurso: function (index) {
			this.cursos.splice(index, 1);
		}
	},
	computed: {
		mensajeAlReves: function () {
			return this.mensajeInicial.split('').reverse().join('');
		},
		filtrandoPorHoras: function () {
			return this.cursos.filter( (curso) => curso.numeroDeHoras>=4 )
		},
		ordenandoPorHoras: function () {
			return this.cursos.sort( (a,b) => b.numeroDeHoras - a.numeroDeHoras );
		}
	}
});