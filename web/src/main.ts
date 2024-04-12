import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

const app = createApp(App)

//引入router
import { router } from './routes'
app.use(router)

//引入pinia
import { createPinia } from 'pinia'
const pinia = createPinia()
app.use(pinia)

//挂载app实例
app.mount('#app')
