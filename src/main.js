import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import router from './router/index'

createApp(App).use(AOS.init()).use(router).mount('#app')
