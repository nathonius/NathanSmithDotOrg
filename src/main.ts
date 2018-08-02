import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './views/App.vue';
import Test from './views/Test.vue';

Vue.config.productionTip = false;
Vue.use(VueRouter);

const routes = [
    { path: '/', component: App }
];

const router = new VueRouter({
    routes
});

const vm = new Vue({
    router
}).$mount('#app');