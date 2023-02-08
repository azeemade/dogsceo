import { createApp } from 'vue'
// import { createPinia } from 'pinia'
import { createStore } from 'vuex'

import App from './App.vue'
import router from './router'
import store from './store'

import './assets/main.css'

const app = createApp(App)

// app.use(createPinia())
app.use(router)
app.use(createStore(store))

app.mount('#app')