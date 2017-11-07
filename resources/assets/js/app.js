import './bootstrap'
import router from './routes'

const app = new Vue({
    el: '#app',
    router,
    data: {
    	user: [],
    },
    methods: {
    	loggedIn: function(data){
    		//this.user = data;
    	}
    },
    mounted(){
    	this.$bus.$on('loggedin',(data)=> {
    		alert("Logged In");
    		this.user = data
    	});
    }
});
