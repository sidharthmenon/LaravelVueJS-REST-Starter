import './bootstrap'
import router from './routes'


const app = new Vue({
    el: '#app',
    router,
    data: {
    	user: [],
    },
    methods: {
        setUser: function(data){
            this.user = data;
            config.user = data;
        },
    	loggedIn: function(data){
            this.setUser(data);
            this.$router.push('home');
        },
        loggedOut: function(){
            config.user = {};
            this.user = {};
            localStorage.removeItem('token');
            this.$router.push('/');
        },        
    },
    mounted(){
    	this.$bus.$on('loggedin',(data)=> this.loggedIn(data));
        this.$bus.$on('loggedout', ()=>this.loggedOut());
        
        console.log("mounted");
        console.log(config.url);
    }
});
