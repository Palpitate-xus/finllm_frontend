import Router from 'vue-router'
import Vue from 'vue'
Vue.use(Router)

import HelloWorld from '../components/HelloWorld.vue'
import LoginComponent from '../components/Login.vue'
import RegisterComponent from '../components/Register.vue'
import MainWindow from '../components/MainWindow.vue'
import AboutComponent from '../components/About.vue'
import ProfileComponent from '../components/Profile.vue'
import HistoryComponent from '../components/History.vue'
import ForgetPassword from '../components/ForgetPassword.vue'
import UserManagement from '../components/UserManagement.vue'
import WebsiteConfig from '../components/WebsiteConfig.vue'
import HelpDocs from '../components/HelpDocs.vue'
import LogComponent from '../components/Log.vue'

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
      path: '/forgot-password',
      name: 'forgot-password',
      component: ForgetPassword
    },
    {
      path: '/help-docs',
      name: 'help-docs',
      component: HelpDocs
    },
    {
      path: '/qa',
      name: 'qa',
      component: MainWindow,
      meta: { requiresAuth: true }
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfileComponent
    },
    {
      path: '/history',
      name: 'history',
      component: HistoryComponent,
      meta: { requiresAuth: true }
    },
    {
      path: '/user-management',
      name: 'user-management',
      component: UserManagement,
      meta: { requiresAuth: true }
    },
    {
      path: '/website-config',
      name: 'website-config',
      component: WebsiteConfig,
      meta: { requiresAuth: true }
    },
    {
      path: '/log',
      name: 'log',
      component: LogComponent,
      meta: { requiresAuth: true }
    }
  ]
})