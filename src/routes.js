import {createRouter, createWebHistory} from "vue-router";
import test from "@/pages/test.vue";
import about from "@/pages/about.vue";
import notf from '@/pages/404.vue'

const routes = createRouter({
    history:createWebHistory(),
    routes: [
        {
            path: '/',
            component:test,
        },
        {
            path: '/about',
            component:about
        },
        {
            path: '/:CatchAll(.*)',
            component:notf
        }
    ]
})

export default routes;
