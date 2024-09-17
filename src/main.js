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
        path: '/test_task_alef',
        component: HomeView,
        name: 'home'
    },
    {
        path: '/test_task_alef/form',
        component: FormView,
        name: 'form'
    }
]

createApp(App)
    .use(createRouter({
        history: createWebHistory(),
        routes
    }))
    .use(createPinia())
    .mount('#app')
