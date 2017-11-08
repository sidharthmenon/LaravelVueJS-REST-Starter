import VueRouter from 'vue-router';

let routes = [
	{
		path: "/",
		component: require('./components/loginComponent')
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