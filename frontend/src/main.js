import { createApp } from 'vue'
import App from './App.vue'
import { router } from './routes/routes.js'
import {createPinia} from 'pinia'
// main.js o app.js


const app =createApp(App)
const pinia =createPinia()

app.use(router)
app.use(pinia)

app.mount('#app')