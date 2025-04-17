import { createApp } from 'vue'
import './style.css'
import App from './App.vue'


import { createMemoryHistory, createRouter, createWebHistory } from 'vue-router'

import HomeView from './components/HelloWorld.vue'
import AboutView from './components/About.vue'

const routes = [
  { path: '/', name: 'home',  component: HomeView },
  { path: '/about',  name: 'about',  component: AboutView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

var app = createApp(App)
app.use(router)
app.mount('#app')
