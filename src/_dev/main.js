import Vue from 'vue';
import router from './router';
import App from './App.vue';

import TransitionView from '../';
Vue.use(TransitionView);

new Vue({
	el: '#app',
	router,
	render: h => h(App),
});
