<template>
  <div class="login-container">
    <el-card class="login-card">
      <h3>{{ title }}</h3>
      <el-form ref="forgetPasswordForm" :model="forgetPasswordForm" :rules="loginRules" label-width="80px">
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="forgetPasswordForm.email" placeholder="请输入邮箱"></el-input>
        </el-form-item>
        <el-form-item class="button-container">
          <el-button type="primary" @click="submit" class="submit-button">重置密码</el-button>
          <el-button type="text" @click="goToLogin">返回</el-button>
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
      },
    };
},
methods: {
  goToLogin() {
    this.$router.back();
  },
  async submit() {
    await this.$refs.forgetPasswordForm.validate(valid => {
      if (valid) {
        axios.post('http://localhost:8001/users/reset_password', this.forgetPasswordForm)
        .then((response) => {
              console.log(response.data);
              this.$notify({
                title: '提示',
                message: '重置密码成功，新密码已发送至邮箱，请注意查收',
                type: 'success',
              });
              this.$router.push('/login');
            })
            .catch((error) => {
              console.log(error);
              this.$notify({
                title: '错误',
                message: '重置密码失败，请检查邮箱是否正确',
                type: 'error',
              });
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
  margin-right: 10px;
}

.forgot-password-button {
  color: #909399;
}

.submit-button {
  margin-right: 10px;
}

</style>