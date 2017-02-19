Vue.component('mis-tareas', {
	props: ['tareas'],
	template: `
		<ul>
			<li v-for="tarea in tareas">
				{{ tarea.title }}
			</li>
		</ul>
	`
});

new Vue({
	el: 'main',
	data: {
		tareasAjax: [],
		tareasLocales: [
			{ title: 'Hacer las compras' },
			{ title: 'Aprender vuejs' },
			{ title: 'Aprender javascript ES6' },
		]
	},
	mounted() {
		axios.get('https://jsonplaceholder.typicode.com/todos')
			.then((respuesta)=>{
				this.tareasAjax = respuesta.data;
			});
	}
});