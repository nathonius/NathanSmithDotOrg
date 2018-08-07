import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import App from './views/App.vue';
import MonsterOfTheWeek from './views/MonsterOfTheWeek.vue';
import FourOFour from './views/FourOFour.vue';

Vue.config.productionTip = false;
Vue.use(VueRouter);

const routes: RouteConfig[] = [
    { path: '/', component: App },
    { path: '/motw', component: MonsterOfTheWeek },
    { path: '*', component: FourOFour }
];

const router = new VueRouter({
    routes,
    mode: 'history'
});

const vm = new Vue({
    router
}).$mount('#app');