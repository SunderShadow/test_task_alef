import { createApp } from 'vue'
import { createRouter, createWebHistory} from "vue-router"

import { createPinia } from "pinia"

import App from './App.vue'

import HomeView from "@/views/HomeView.vue"
import FormView from "@/views/FormView.vue"

import 'bootstrap/dist/js/bootstrap.js'

import "@/assets/styles.scss"

const routes = [
    {
        path: '/',
        component: HomeView
    },
    {
        path: '/form',
        component: FormView
    }
]

createApp(App)
    .use(createRouter({
        history: createWebHistory(),
        routes
    }))
    .use(createPinia())
    .mount('#app')
