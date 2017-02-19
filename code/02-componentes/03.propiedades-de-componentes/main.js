Vue.component('autor', {
	props: ['nombre', 'edad'],
		// los props son accesibles desde el 'this'
		// también se establece un 2 way binding
	template: `
		<div>
			<h1> {{ nombreInitial }} - Edad: {{ edadInitial }} </h1>
			<button @click="cambiarProp">Cambiar Nombre</button>
		</div>
		
	`,
	mounted() {
	},
	methods: {
		cambiarProp() {
			this.nombreInitial = this.nombreInitial.toUpperCase();
		}
	},
	data() {
		return {
			nombreInitial: this.nombre,
			edadInitial: this.edad
		}
		// creamos e iniciamos propiedades en el componente y les asignamos los valores
		// de las propiedades que se instancian en el objeto inicial, de esta manera ya
		// se puede manipular cualquier dato dentro del componente. Esto se realiza por
		// que las propiedades se actualizan de padre a hijo mas no de hijo a padre.
	}
});

new Vue({
	el: 'main',
	data: {
		autor: 'Gemerson Henry',
		edad: 30
	}
})