<template>
  <div id="app">
    <el-menu :default-active="activeIndex" router="True" class="el-menu-demo" mode="horizontal">
      <el-menu-item index="/">首页</el-menu-item>
      <el-menu-item index="/qa">问答</el-menu-item>
      <el-menu-item index="/about">关于</el-menu-item>
      <el-submenu index="4">
        <template slot="title">个人中心</template>
        <el-menu-item index="4-1">个人信息管理</el-menu-item>
        <el-menu-item index="4-2">订单管理</el-menu-item>
        <el-menu-item index="4-3">地址管理</el-menu-item>
        <el-menu-item index="4-4">愿望单</el-menu-item>
        <el-menu-item index="4-5">登录</el-menu-item>
        <el-menu-item index="4-6">注销</el-menu-item>
      </el-submenu>
    </el-menu>
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      activeIndex: '/'
    }
  },
  methods: {

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
  width: 80%;
}
</style>
