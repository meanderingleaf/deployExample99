import { createApp } from 'vue'
import './style.css'
import App from './App.vue'


import { createMemoryHistory, createRouter } from 'vue-router'

import HomeView from './components/HelloWorld.vue'
import AboutView from './components/About.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/about', component: AboutView },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

var app = createApp(App)
app.use(router)
app.mount('#app')
