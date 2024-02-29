import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false

Vue.use(ElementUI);

router.beforeEach((to, from, next) => {
  const isLoggedIn = localStorage.getItem('token'); // 假设 token 存在本地存储中
  if (to.meta.requiresAuth && !isLoggedIn) {
    // 如果访问的页面需要登录权限且用户未登录，则跳转到登录页
    next('/login');
  } else {
    next();
  }
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
