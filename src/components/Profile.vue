<template>
  <div class="personal-center">
    <el-card class="mt-20">
      <div slot="header" class="clearfix">
        <span>基本信息</span>
      </div>
      <div class="info">
        <p><strong>用户名：</strong> {{ userInfo.username }}</p>
        <p><strong>Email：</strong> {{ userInfo.email }}</p>
      </div>
    </el-card>
    <el-card class="mt-20">
      <div slot="header" class="clearfix">
        <span>账户信息</span>
      </div>
      <div class="info">
        <p><strong>账户类别：</strong> {{ userInfo.role === 'user' ? '普通用户' : '管理员' }} </p>
      </div>
    </el-card>
    <el-card class="mt-20">
      <div slot="header" class="clearfix">
        <span>个人设置修改</span>
      </div>
      <div class="settings">
        <el-form :model="settingsForm" :rules="settingsRules" label-width="100px">
          <el-form-item prop="username" label="用户名">
            <el-input v-model="settingsForm.username"></el-input>
          </el-form-item>
          <el-form-item prop="email" label="Email">
            <el-input v-model="settingsForm.email"></el-input>
          </el-form-item>
          <el-form-item prop="password" label="密码">
            <el-input v-model="settingsForm.password" type="password" show-password></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="saveSettings">保存</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-card>
  </div>
</template>

<script>
import axiosInstance from '@/api';
export default {
  name: 'ProfileComponent',
  data() {
    return {
      userInfo: {
        username: '',
        email: '',
        // phone: '',
        role: ''
      },
      settingsForm: {
        username: '',
        email: '',
        password: ''
      },
      settingsRules: {
        // username: [{ required: true, message: '用户名为空', trigger: 'blur' }],
        // email: [{ required: true, message: '邮箱为空', trigger: 'blur' }],
        password: [{ required: true, message: '密码为空', trigger: 'blur' }],
      },
    };
  },
  mounted() {
    this.get_user_info()
  },
  methods: {
    async saveSettings() {
      if(this.settingsForm.password === '') {
        this.$notify({
          title: '提示',
          message: '密码为空',
          type: 'warning'
        })
        return 0;
      }
      // 修改用户信息
      await axiosInstance.post('/users/update_profile', this.settingsForm)
        .then((response) => {
          console.log(response);
          this.$route.push('/login')
          localStorage.removeItem('token');
          localStorage.removeItem('role');
          this.$notify({
            title: '提示',
            message: '修改成功，请重新登录',
            type: 'success'
          });
        })
        .catch((error) => {
          console.log(error);
          this.$notify({
            title: '错误',
            message: '修改失败，请检查用户名或邮箱',
        })
      })
      // 清空表单数据
      this.settingsForm.name = '';
      this.settingsForm.email = '';
      this.settingsForm.password = '';
    },
    async get_user_info() {
      await axiosInstance.get('/users/get_profile')
        .then((response) => {
          console.log(response);
          this.userInfo.username = response.username;
          this.userInfo.email = response.email;
          // this.userInfo.phone = response.phone;
          this.userInfo.role = response.role;
        })
        .catch((error) => {
          console.log(error);
          this.$notify({
            title: '错误',
            message: '获取用户信息失败，请重新登录',
            type: 'error'
          })
          this.$router.push('/login');
        });
    }
  }
};
</script>

<style scoped>
.personal-center {
  padding: 20px;
  margin: auto;
  min-width: 500px;
  /* width: 50%; */
  /* background-image: url("../../static/background.jpg"); */
  /* background-size: cover; */
}

.title {
  font-size: 24px;
  margin-bottom: 20px;
}

.info {
  margin-top: 20px;
}

.settings {
  margin-top: 20px;
}

.mt-20 {
  margin-top: 20px;
  width: 50%;
  margin: auto;
  margin-top: 10px;
  background-color: rgba(255, 255, 255, 0.8);
}
</style>
