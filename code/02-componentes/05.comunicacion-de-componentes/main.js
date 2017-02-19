const eventBus = new Vue();

Vue.component('listado-productos', {
	props: ['productos'],
	template: `
		<section>
			<ul>
				<li v-for="producto in productos">
					{{ producto.nombre }} - 
					<small> {{ producto.precio.toFixed(2) }} </small>
					<button @click="eliminarProducto(producto.precio)" > <b> - </b> </button>
					<button @click="agregarProducto(producto.precio)" > <b> + </b> </button>
				</li>
			</ul>
		</section>
	`,
	methods: {
		agregarProducto(precio) {
			eventBus.$emit('agregar', precio);
		},
		eliminarProducto(precio) {
			eventBus.$emit('eliminar', precio);
		}
	}
});

Vue.component('carrito-compras', {
	template: `
		<section>
			<h1> {{ total.toFixed(2) }} Euros </h1>
			<h3> {{ cantidadProductos }} productos </h3>
		</section>
	`,
	data() {
		return {
			cantidadProductos: 0,
			total: 0
		}
	},
	created() {
		eventBus.$on('agregar', (precio) => {			
			this.total += precio;
			this.cantidadProductos++;				
		});
		eventBus.$on('eliminar', (precio) => {
			if( this.total>0 ){				
				this.total -= precio;
				this.cantidadProductos--;
			}
		})
	}
});

new Vue({
	el: 'main',
	data: {
		productos: [
			{ nombre: "Curso completo de Vue JS 2.0", precio: 360.0 },
			{ nombre: "Curso completo de Angular 2.0", precio: 480.0 },
			{ nombre: "Curso de API con Symfony", precio: 300.0 },
			{ nombre: "Desarrollo full stack con MEAN", precio: 500.0 },
			{ nombre: "Integración de aplicaciones con AWS", precio: 450.0 },
		]
	}
});