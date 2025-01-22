import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { VueFire, VueFireAuth } from 'vuefire'
import { firebaseApp } from './firebase.js'


import { createMemoryHistory, createRouter } from 'vue-router'

import Landing from './MyComponents/landing.vue'
import Recordatorios from './MyComponents/Recordatorios.vue'
import login from './MyComponents/login.vue'

const routes = [
  { path: '/', component: Landing, meta:{ requireAuth: false} },
  { path: '/Recordatorios', component: Recordatorios, meta:{ requireAuth: true} },
  { path: '/login', component: login, meta: {requireAuth: false}}
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})




const app = createApp(App)
app.use(VueFire, {
    // imported above but could also just be created here
    firebaseApp,
    modules: [
      // we will see other modules later on
      VueFireAuth(),
    ],
  })
  
  app.use(router)
  app.mount('#app')