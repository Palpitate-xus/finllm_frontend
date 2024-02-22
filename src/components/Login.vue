<template>
    <div class="login-container">
      <el-card class="login-card">
        <h3>{{ title }}</h3>
        <el-form ref="loginForm" :model="loginForm" :rules="loginRules" label-width="80px">
          <el-form-item label="邮箱" prop="email">
            <el-input v-model="loginForm.email" placeholder="请输入邮箱"></el-input>
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
export default {
  name: 'LoginComponent',
  data() {
      return {
        title: '登录',
        loginForm: {
          email: '',
          password: '',
        },
        loginRules: {
          email: [
            { required: true, message: '邮箱为空', trigger: 'blur' },
            { type: 'email', message: '邮箱格式错误', trigger: 'blur' },
          ],
          password: [{ required: true, message: '密码为空', trigger: 'blur' }],
        },
      };
  },

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