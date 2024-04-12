<template>
  <div class="about">
    <el-card class="el-card">
      <div slot="header" class="clearfix">
        <span class="title">关于我们</span>
      </div>
      <div>
        <div class="author-info">
          <!-- <img src="author-avatar.jpg" alt="Author Avatar" class="avatar"> -->
          <div class="info">
            <h2>作者：徐盛</h2>
            <p>Email：palpitate.xus@mail.ecust.edu.cn</p>
            <p>个人网站：<a href="https://github.com/Palpitate-xus">https://github.com/Palpitate-xus</a></p>
          </div>
        </div>
        <div class="description">
          <p>ECUST</p>
          <p>计金（双）200</p>
        </div>
      </div>
    </el-card>
    
  </div>
</template>

<script>
export default {
    name: 'AboutComponent',
    data() {
        return {
        }
    },
    methods: {
    }
}
</script>

<style scoped>
.about {
  padding: 20px;
  height: 75vh;
  /* background-image: url("../../static/background.jpg"); */
  /* background-size: cover; */
}

.title {
  font-size: 24px;
  margin-bottom: 20px;
}

.author-info {
  display: flex;
  align-items: center;
}

.info {
  flex: 1;
}

.description {
  margin-top: 20px;
}

.el-card {
  width: 50%;
  margin: auto;
  background-color: rgba(255, 255, 255, 0.8);
}

</style>