import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/signIn',
            component: () => import('../views/signIn/signIn.vue')
        }, {
            path: '/',
            component: () => import('../Tem/B.vue'),
            children: [{
                path: '/',
                component: () => import('../views/Home/Home.vue')
            }, {
                path: '/room',
                component: () => import('../views/Room/Room.vue')
            }]
        }
    ]
});
