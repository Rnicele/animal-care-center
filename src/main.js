import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
// CSS
import './style'

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
// Bootstrap icons
import "bootstrap-icons/font/bootstrap-icons.css"


createApp(App).use(router).mount('#app')
