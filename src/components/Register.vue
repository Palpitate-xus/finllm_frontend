<template>
    <div class="register-container">
      <el-card class="register-card">
        <h3>注册</h3>
        <el-form ref="registerForm" :model="registerForm" :rules="registerRules" label-width="80px">
          <el-form-item label="用户名" prop="username">
            <el-input v-model="registerForm.username" placeholder="请输入用户名"></el-input>
          </el-form-item>
          <el-form-item label="邮箱" prop="email">
            <el-input v-model="registerForm.email" placeholder="请输入邮箱"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input type="password" v-model="registerForm.password" placeholder="请输入密码"></el-input>
          </el-form-item>
          <el-form-item label="确认密码" prop="confirmPassword">
            <el-input type="password" v-model="registerForm.confirmPassword" placeholder="请再次输入密码"></el-input>
          </el-form-item>
          <el-form-item class="button-container">
            <el-button type="primary" @click="register">注册</el-button>
            <el-button @click="goToLogin">登录</el-button>
          </el-form-item>
        </el-form>
      </el-card>
 </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'RegisterComponent',
    data() {
      return {
        registerForm: {
          username: '',
          email: '',
          password: '',
          confirmPassword: '',
        },
        registerRules: {
          username: [{ required: true, message: '用户名不能为空', trigger: 'blur' }],
          email: [
            { required: true, message: '邮箱不能为空', trigger: 'blur' },
            { type: 'email', message: '邮箱格式错误', trigger: 'blur' },
          ],
          password: [
            { required: true, message: '密码不能为空', trigger: 'blur' },
            { min: 6, message: '密码至少6位', trigger: 'blur' },
          ],
          confirmPassword: [
            { required: true, message: '请再次输入密码', trigger: 'blur' },
            { validator: this.validatePasswordConfirmation, trigger: 'blur' },
          ],
        },
      };
    },
    methods: {
      goToLogin() {
        this.$router.push('/login');
      },
      async register() {
        await this.$refs.registerForm.validate(valid => {
          if (valid) {
             axios.post('http://localhost:8001/users/register', this.registerForm)
              .then((response) => {
                console.log(response.data);
                this.$notify({
                  title: '提示',
                  message: '注册成功',
                  type: 'success',
                });
                this.$router.push('/login');
              })
              .catch((error) => {
                console.log(error);
                this.$notify({
                  title: '错误',
                  message: '注册失败，请检查用户名或邮箱',
                  type: 'error',
                });
              });
          }
        });
      },
    //   validatePasswordConfirmation(rule, value, callback) {
    //     if (value !== this.registerForm.password) {
    //     }
    // }
  }
}
</script>

<style scoped>
  .register-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  
  .register-card {
    width: 400px;
    padding: 20px;
  }
  
  .button-container {
    display: flex;
    justify-content: flex-end;
    margin-top: 20px;
  }
  </style>
  