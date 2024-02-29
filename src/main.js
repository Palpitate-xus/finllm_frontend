import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI, { Notification } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import { jwtDecode } from 'jwt-decode';

Vue.config.productionTip = false

Vue.use(ElementUI);

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token'); // token 存在本地存储中
  let isLoggedIn = false;
  if (token) {
    // 解码 token 获取过期时间
    const decodedToken = jwtDecode(token);
    const expirationTime = decodedToken.exp;

    // 获取当前时间戳
    const currentTime = Math.floor(Date.now() / 1000);
    console.log(currentTime, expirationTime);
    // 如果 token 已过期，则跳转到登录页
    if (expirationTime > currentTime) {
      isLoggedIn = true;
    }
  }
  console.log(isLoggedIn);
  if (to.meta.requiresAuth && !isLoggedIn) {
    // 如果访问的页面需要登录权限且用户未登录，则提示并跳转到登录页
    localStorage.removeItem('token');
    Notification({
      title: '提示',
      message: '您未登录或登陆状态已过期，请先登录',
      type: 'warning'
    })
    next('/login');
  } else {
    next();
  }
  
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
