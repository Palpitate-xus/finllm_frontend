<template>
  <div class="login-container">
    <el-card class="login-card">
      <h3>{{ title }}</h3>
      <el-form ref="forgetPasswordForm" :model="forgetPasswordForm" :rules="loginRules" label-width="80px">
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="forgetPasswordForm.email" placeholder="请输入邮箱"></el-input>
        </el-form-item>
        <el-form-item label="验证码" prop="validateCode">
          <el-input v-model="forgetPasswordForm.validateCode" placeholder="请输入验证码"></el-input>
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
name: 'ForgetPassword',
data() {
    return {
      title: '忘记密码',
      forgetPasswordForm: {
        username: '',
        validateCode: '',
      },
      loginRules: {
        email: [{ required: true, message: '邮箱为空', trigger: 'blur' }],
        password: [{ required: true, message: '验证码为空', trigger: 'blur' }],
      },
    };
},
methods: {
  goToForgotPassword() {
    this.$router.push('/forgot-password');
  },
  async login() {
    await this.$refs.forgetPasswordForm.validate(valid => {
      if (valid) {
        axios.post('http://localhost:8001/users/login', this.forgetPasswordForm)
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