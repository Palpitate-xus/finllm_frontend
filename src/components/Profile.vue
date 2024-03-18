<template>
  <div class="personal-center">
    <el-card>
      <div slot="header" class="clearfix">
        <span>基本信息</span>
      </div>
      <div class="info">
        <p><strong>用户名：</strong> {{ userInfo.username }}</p>
        <p><strong>Email：</strong> {{ userInfo.email }}</p>
        <!-- <p><strong>手机号：</strong> {{ userInfo.phone }}</p> -->
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
        <el-form :model="settingsForm" label-width="100px">
          <el-form-item label="用户名">
            <el-input v-model="settingsForm.username"></el-input>
          </el-form-item>
          <el-form-item label="Email">
            <el-input v-model="settingsForm.email"></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input v-model="settingsForm.phone" type="password"></el-input>
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
      }
    };
  },
  mounted() {
    this.get_user_info()
  },
  methods: {
    saveSettings() {
      this.userInfo.name = this.settingsForm.name;
      this.userInfo.email = this.settingsForm.email;
    
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
}
</style>
