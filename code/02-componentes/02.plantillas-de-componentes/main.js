Vue.component('elegir-ganador', {
	props: ['listado'],
	//template: '#elegir-ganador-template',
	// template: `
	// 	<div>			
	// 		<h2 v-if="ganador" >Ganador: {{ ganador }} </h2>
	// 		<template v-else>
	// 			<h2>Participantes</h2>
	// 			<ul>
	// 				<li v-for="persona in listado">
	// 					{{ persona }}
	// 				</li>
	// 			</ul>
	// 		</template>
	// 		<button @click="elegirGanador()">Elegir ganador</button>
	// 	</div>
	// `,
	methods: {
		elegirGanador() {
			let cantidad = this.participantes.length;
			let indice = Math.round( Math.random()*(cantidad-1) );
			this.ganador = this.participantes[indice];
			console.log(this.ganador);
		}
	},
	data() {
		return {
			ganador: false,
			participantes: this.listado
		}
	}
});

new Vue({
	el: 'main',
	data: {
		personas: [
			'Henry', 'Gemerson', 'Mabel', 'Ruth', 'Joseph', 'Williams', 'Mariana', 'Angela'
		]
	}
});