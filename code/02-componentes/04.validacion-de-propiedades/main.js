Vue.component('user-card', {
	props: {
		user: {
			type: [String, Array, Object],
			required: true
		}
	},
	template: `
		<transition name="usercard" mode="out-in">
			<div class="col-xs-12 col-sm-6 col-md-4" v-show="userState">
				<div class="thumbnail">
					<img :src="userLocal.picture.large" :alt="userLocal.email">
					<div class="caption">
						<h4 class="text-center"> 
							{{ userLocal.name.first }} {{ userLocal.name.last }} 
						</h4>
						<p>
							<ul>
								<li> Location: {{ userLocal.location.street }} </li>
								<li> City: {{ userLocal.location.city }} </li>
								<li> State: {{ userLocal.location.state }} </li>
								<li> Postcode: {{ userLocal.location.postcode }} </li>
							</ul>
						</p>
						<p class="text-center">
							<button class="btn btn-primary btn-sm" @click=" userState = !userState ">
								Ocultar Persona
							</button>
						</p>				
					</div>
				</div>
			</div>
		</transition>			
	`,
	data() {
		return {
			userLocal: this.user,
			userState: true,
		};
	}
});

new Vue({
	el: '#contenido',
	data: {
		users: []
	},
	mounted() {
		this.obtenerUsers();
	},
	methods: {
		obtenerUsers() {
			axios.get('https://randomuser.me/api/?results=100')
				.then((response) => {
					this.users = response.data.results;
				});
		}
	}
});