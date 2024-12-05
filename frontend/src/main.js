import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
import BootstrapVue from "bootstrap-vue-3";
import store from './store/index'

createApp(App).use(BootstrapVue).use(store).mount('#app')