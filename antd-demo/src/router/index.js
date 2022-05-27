import Vue from 'vue';
import VueRouter from 'vue-router';
import Info from '../views/Info.vue';

Vue.use(VueRouter);

export default new VueRouter({
	mode:'history', //해쉬값 제거 방식
    routes: [{
        path: '/', 
        redirect: '/home' 
    }, {
        path: '/home',
        component: () => import('../views/Main.vue'),
    }, {
        path: '/info',
        component: Info
    }]
});