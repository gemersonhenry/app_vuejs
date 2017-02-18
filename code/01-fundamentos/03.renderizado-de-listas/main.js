const vm = new Vue({
	el: "main",
	data: {
		diasDeSemana: ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"],
		diasLaborables: ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"],
		tareas : [
			{nombre:"Corregir examenes", prioridad:"Alta"},
			{nombre:"Revisar cuadernos", prioridad:"Media"},
			{nombre:"Capacitarme en pedagogía", prioridad:"Baja"}
		]
	}
});