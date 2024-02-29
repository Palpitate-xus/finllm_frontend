<template>
    <div class="login-container">
      <el-card class="login-card">
        <h3>{{ title }}</h3>
        <el-form ref="loginForm" :model="loginForm" :rules="loginRules" label-width="80px">
          <el-form-item label="用户名" prop="username">
            <el-input v-model="loginForm.username" placeholder="请输入用户名"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input type="password" v-model="loginForm.password" placeholder="请输入密码"></el-input>
          </el-form-item>
          <el-form-item class="button-container">
            <el-button @click="goToRegister" class="register-button">注册</el-button>
            <el-button type="primary" @click="login">登录</el-button>
            <el-button type="text" @click="goToForgotPassword" >忘记密码</el-button>
          </el-form-item>
        </el-form>
      </el-card>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'LoginComponent',
  data() {
      return {
        title: '登录',
        loginForm: {
          username: '',
          password: '',
        },
        loginRules: {
          username: [{ required: true, message: '用户名为空', trigger: 'blur' }],
          password: [{ required: true, message: '密码为空', trigger: 'blur' }],
        },
      };
  },
  mounted(){
    // 判断是否已经登陆
    if (localStorage.getItem('token')) {
      // 提示已经登陆
      this.$notify({
        title: '提示',
        message: '您已经登录',
        type: 'success',
      });
      this.$router.push('/');
    }
  },
  methods: {
    goToRegister() {
      this.$router.push('/register');
    },
    goToForgotPassword() {
      this.$router.push('/forgot-password');
    },
    async login() {
      await this.$refs.loginForm.validate(valid => {
        if (valid) {
          axios.post('http://localhost:8001/users/login', this.loginForm)
          .then((response) => {
                console.log(response.data);
                localStorage.setItem('token', response.data.access_token);
                this.$notify({
                  title: '提示',
                  message: '登陆成功',
                  type: 'success',
                });
                this.$router.push('/');
              })
              .catch((error) => {
                console.log(error);
              });
        }
      });
    }
  }
}
</script>

<style scoped>
  .login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 75vh;
  }
  
  .login-card {
    width: 400px;
    padding: 20px;
  }
  
  .button-container {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
  }
  
  .forgot-password-button {
    color: #909399;
  }
  </style>