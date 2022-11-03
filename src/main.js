import { createApp } from 'vue'
import App from './App.vue'
import { registerPlugins } from './plugins'
import vuetify from './plugins/vuetify'
import './index.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import router from './router/index'

// createApp(App).use(AOS.init()).use(router).mount('#app')

// Plugins

const app = createApp(App)

registerPlugins(app)

app.use(vuetify).use(AOS.init()).use(router).mount('#app')
