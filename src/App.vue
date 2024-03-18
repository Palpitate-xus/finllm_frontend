<template>
  <div id="app">
    <el-menu
      :default-active="activeIndex"
      router
      class="el-menu-demo"
      mode="horizontal"
    >
      <el-menu-item index="/">
        <i class="el-icon-menu"></i>
        <span slot="title">基于大模型的金融数据分析系统</span>
      </el-menu-item>
      <el-menu-item index="/">首页</el-menu-item>
      <el-menu-item index="/qa">问答</el-menu-item>
      <el-menu-item index="/history">历史记录</el-menu-item>
      <el-menu-item index="/about">关于</el-menu-item>
      <el-submenu index="5" v-if="authorization">
        <template slot="title">管理员菜单</template>
        <el-menu-item index="/user-management">用户管理</el-menu-item>
        <el-menu-item index="/website-config">网站管理</el-menu-item>
      </el-submenu>
      <el-submenu index="4" class="user-menu">
        <template slot="title">个人中心</template>
        <el-menu-item index="profile">个人信息管理</el-menu-item>
        <el-menu-item index="/login">登录</el-menu-item>
        <el-menu-item @click="logout">注销</el-menu-item>
      </el-submenu>
    </el-menu>
    <router-view/>
    <div class="copyright">
      <p>&copy; 2024. All rights reserved. palpitate.xus@mail.ecust.edu.cn</p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      activeIndex: '/',
    }
  },
  mounted() {
    this.activeIndex = this.$route.path
  },
  computed:{
    authorization() {
      return localStorage.getItem('role')=="admin"
    }
  },
  watch: {
    $route(to,from){
      console.log(from.path);  // 从哪来
      console.log(to.path);  // 到哪去
      this.activeIndex = this.$route.path
    },
  },
  methods: {
    logout() {
      let token = localStorage.getItem('token')
      if (token) {
        localStorage.removeItem('token')
        localStorage.removeItem('role')
        this.$notify({
          title: '提示',
          message: '您已成功注销登录',
          type: 'success'
        })
        this.$router.push('/login')
        .catch(() => {})
      } else {
        this.$notify({
          title: '提示',
          message: '您还未登录, 无需注销',
          type: 'warning'
        })
      }
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0 auto;
  /* width: 80%; */
}

.copyright {
  margin-top: 40px;
  text-align: center;
  color: #999;
}

.nav-menu {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.user-menu {
  float: right !important;
}

.user-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 8px;
}
</style>
