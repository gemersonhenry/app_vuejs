Vue.component('lista-tareas', {
	props: ['tareas'],
	template: `
		<div>
			<h1> <slot></slot> </h1>
			<ul>
				<tarea v-for="tarea in tareas" v-bind:tarea="tarea">
				</tarea>
			</ul>
		</div>
	`,
});

Vue.component('tarea', {
	props: ['tarea'],
	template: `
		<li>
			{{ tarea }}
		</li>
	`,
});

new Vue({
	el: 'main',
	data: {
		tareas: [
			"Curso completo de Vue JS 2.0",
			"Curso completo de Angular 2.0",
			"Curso de API con Symfony",
			"Desarrollo full stack con MEAN",
			"Integración de aplicaciones con AWS",
		]
	}
});

