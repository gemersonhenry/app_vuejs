Vue.component('mis-tareas', {
	template: `
		<ul>
			<li v-for="tarea in tareas">
				{{ tarea.title }}
			</li>
		</ul>
	`,
	data() {
		return {
			tareas: []
		}
	},
	mounted() {
		axios.get('https://jsonplaceholder.typicode.com/todos')
			.then((respuesta)=>{
				this.tareas = respuesta.data;
			});
	}
});

new Vue({
	el: 'main'	
});