import VueRouter from 'vue-router';
import login from './components/loginComponent';

let routes = [
	{
		path: "/",
		component: login
	},
	{
		path: "/home",
		component: require('./components/ExampleComponent')
	}
]

export default new VueRouter({
	routes,
	linkActiveClass: 'is-active'
})