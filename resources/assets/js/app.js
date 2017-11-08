import './bootstrap'
import router from './routes'

const app = new Vue({
    el: '#app',
    router,
    data: {
    	user: [],
    },
    methods: {
    	
    },
    mounted(){
    	this.$bus.$on('loggedin',(data)=> {
    		this.user = data;
            this.$router.push('home');
    	});
    }
});
