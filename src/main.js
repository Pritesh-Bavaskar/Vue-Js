import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import VueRouter from "vue-router";
import Contacts from './components/Contacts.vue'
import Todo from './components/TodoApp.vue'

Vue.use(VueRouter);
const routes = [
  { path: '/', component: Todo },
  { path: '/contacts', component: Contacts },

]


const router = new VueRouter({
  routes
})

Vue.config.productionTip = false

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
