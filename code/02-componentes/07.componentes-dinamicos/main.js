Vue.component('lista-usuarios-male', {
    data() {
        return {
            usersMale: [],
        }
    },
    template: `
        <transition name="usercard">
            <lista-usuarios v-bind:usuarios="usersMale">
            </lista-usuarios>
        </transition>
    `,
    mounted() {
        this.getUserMale();
    },
    methods: {
        getUserMale() {
            axios.get('https://randomuser.me/api/?gender=male&results=50')
                .then((response) => {
                    this.usersMale = response.data.results;
                });
        }
    }
});

Vue.component('lista-usuarios-female', {
    data() {
        return {
            usersFemale: [],
        }
    },
    template: `
        <transition name="usercard">
            <lista-usuarios v-bind:usuarios="usersFemale">
            </lista-usuarios>
        </transition>
    `,
    mounted() {
        this.getUserFemale();
    },
    methods: {
        getUserFemale() {
            axios.get('https://randomuser.me/api/?gender=female&results=50')
                .then((response) => {
                    this.usersFemale = response.data.results;
                });
        }
    }
});

Vue.component('lista-usuarios', {
    props: ['usuarios'],
    template: `
        
            <div class="row">
                <div class="col-xs-12 col-sm-6 col-md-4" 
                        v-for="usuario in usuarios">
                    <card-usuario v-bind:usuario="usuario">
                    </card-usuario>
                </div>
            </div>  
    `
});

Vue.component('card-usuario', {
    props: {
        usuario: {
            type: [Object],
            required: true
        }
    },
    data() {
        return {
            usuarioLocal: this.usuario,
            usuarioState: true,
        }        
    },
    template: `
        <div class="thumbnail">
            <img v-bind:src="imagenUser"> 
            <div class="caption">
                <h2 class="text-center"> 
                    {{ fullName }}
                </h2>
                <p class="text-justify">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Temporibus quis, quidem corrupti ipsam quas maxime? 
                    Totam nostrum ab voluptatem minima, temporibus, quaerat 
                    tempora ad fuga, alias non, eum ipsam nemo.
                </p>              
            </div>
        </div>   
    `,
    computed: {
        fullName() {
            return this.usuarioLocal.name.first + this.usuarioLocal.name.last;
        },
        imagenUser() {
            return this.usuarioLocal.picture.large;
        }
    }
});

new Vue({
    el: 'main',
    data: {
        templateActual: 'lista-usuarios-male'
    }
});