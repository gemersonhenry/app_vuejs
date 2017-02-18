const vm = new Vue({
	el: 'main',
	data: {
		nuevaTarea: null,
		tareas: [
			'Aprender Vue.js',
			'Aprender ES6',
			'Publicar algo todos los días'
		]
	},
	methods: {
		agregarTarea() {
			this.tareas.unshift(this.nuevaTarea);
			this.nuevaTarea = '';
		}
	}
});

// Aplicando conceptos de javascript puros

// function agregarTarea() {
// 	const input = document.querySelector('input[type=text]');
// 	vm.tareas.unshift(input.value);
// 	// explicando el método "unshift": este método inserta un valor al inicio de un array
// 	input.value = '';
// }