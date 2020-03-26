import Vue from 'vue';
import VueRouter from 'vue-router';
import Views from '../views';

Vue.use(VueRouter);

const routes = [
	...Views.map(component => ({
		path: component.path,
		name: component.name,
		meta: component.meta,
		component,
	})),
];

export default new VueRouter({
	routes,
});
