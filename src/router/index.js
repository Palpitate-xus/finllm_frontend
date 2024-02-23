import Router from 'vue-router'
import Vue from 'vue'
Vue.use(Router)

import HelloWorld from '../components/HelloWorld.vue'
import LoginComponent from '../components/Login.vue'
import RegisterComponent from '../components/Register.vue'
import MainWindow from '../components/MainWindow.vue'
import AboutComponent from '../components/About.vue'

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: HelloWorld
    },
    {
      path: '/about',
      name: 'about',
      component: AboutComponent
    },
    {
      path: '/login',
      name: 'login',
      component: LoginComponent
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterComponent
    },
    {
      path: '/qa',
      name: 'qa',
      component: MainWindow
    }
  ]
})