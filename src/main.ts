import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import App from './components/App/App.vue';
import FourOFour from './components/Common/FourOFour.vue';
import Blog from './components/Blog/Blog.vue';
import BlogPost from './components/Blog/BlogPost.vue';

Vue.config.productionTip = false;
Vue.use(VueRouter);

const routes: RouteConfig[] = [
    {
        name: 'home',
        path: '/',
        component: App
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

function scrollBehavior(to, from, savedPosition) {
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
    router
}).$mount('#app');