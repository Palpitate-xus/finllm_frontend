import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import { Notification } from 'element-ui'

// 创建一个 axios 实例
const axiosInstance = axios.create({
  baseURL: 'http://localhost:8001/',
  timeout: 1000000 // 请求超时时间
});

// 添加请求拦截器
axiosInstance.interceptors.request.use(
  (config) => {
    // 从本地存储中获取 token
    const token = localStorage.getItem('token');

    // 如果 token 存在，则在请求头中添加 Authorization 字段
    if (token) {
      config.headers.Authorization = `${token}`;

      // 解码 token 获取过期时间
      const decodedToken = jwtDecode(token);
      const expirationTime = decodedToken.exp;

      // 获取当前时间戳
      const currentTime = Math.floor(Date.now() / 1000);
      console.log(currentTime, expirationTime);
      // 如果 token 已过期，则跳转到登录页
      if (expirationTime < currentTime) {
        // 处理过期情况，例如跳转到登录页面
        window.location.href = '/#/login';
        Notification.error({
          title: '错误',
          message: '您的登陆状态已过期，请重新登录'
        });
        return Promise.reject('Token expired');
      }
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 添加响应拦截器
axiosInstance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 导出封装好的 API 对象
export default axiosInstance;
