import VueRouter from 'vue-router';
import menu from './components/menuComponent';
import layout from './components/layoutComponent';
import example from './components/exampleComponent';
import config from './store';

const router = new VueRouter({

	linkActiveClass: 'is-active',
	routes: [
	{
		path: "/",
		component: require('./components/loginComponent'),
		meta: {
			access: false,
		},
	},
	{
		path: "/home",
		components: {
			default: layout
		},
		meta: {
			access: "admin",
		},
		children: [
			{
				path: "",
				components: {
					menu:menu,
					default: example
				},
				meta: {
					access: "admin",
				},

			},
			{
				path: "login",
				components: {
					menu: menu,
					default:require('./components/loginComponent')
				},
				meta: {
					access: "admin",
				},
			}
		],
	}
]
});

router.beforeEach((to, from, next) => {
	console.log("route")
	config.routeAccess(to, next);
});


export default router;