import { createApp } from 'vue'
import App from './App.vue'
import { registerPlugins } from './plugins'
import vuetify from './plugins/vuetify'
import AOS from 'aos'
import 'aos/dist/aos.css'
// import jsonApi from './plugins/jsonapi'
import { createPinia } from 'pinia'
import router from './router/index'
import './index.css'

const app = createApp(App).use(router)
registerPlugins(app)

app.use(vuetify).use(AOS.init()).use(createPinia())

// app.provide('jsonApi', jsonApi)
app.mount('#app')
