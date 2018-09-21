import Vue from 'vue';
import VueRouter, { RouteConfig, Route } from 'vue-router';
import App from './components/App/App.vue';
import FourOFour from './components/Common/FourOFour.vue';
import Blog from './components/Blog/Blog.vue';
import BlogPost from './components/Blog/BlogPost.vue';
import ButterService from './services/butter.service';
import RPGTools from './components/RPGs/RPGTools.vue';

Vue.config.productionTip = false;
Vue.use(VueRouter);

const butterService = new ButterService();

const routes: RouteConfig[] = [
    {
        name: 'home',
        path: '/',
        component: App
    },
    {
        name: 'rpgtools',
        path: '/rpgtools',
        component: RPGTools
    },
    {
        name: 'blog',
        path: '/blog',
        component: Blog
    },
    {
        name: 'blogPost',
        path: '/blog/:slug',
        component: BlogPost
    },
    {
        name: '404',
        path: '*',
        component: FourOFour
    }
];

function scrollBehavior(to: Route, from: Route, savedPosition: any) {
    if (to.name === 'blog' && from.name === 'blogPost') {
        return savedPosition;
    } else if (to.name === 'home' && to.hash) {
        return {
            selector: to.hash,
            offset: { x: 0, y: 50 }
        };
    }
}

const router = new VueRouter({
    routes,
    mode: 'history',
    scrollBehavior
});

const vm = new Vue({
    router,
    provide() {
        return {
            butter: butterService
        };
    }
}).$mount('#app');