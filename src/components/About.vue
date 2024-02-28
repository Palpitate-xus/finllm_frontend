<template>
  <div class="about">
    <h1 class="title">关于我们</h1>
    <div class="author-info">
      <!-- <img src="author-avatar.jpg" alt="Author Avatar" class="avatar"> -->
      <div class="info">
        <h2>作者：xus</h2>
        <p>Email：palpitate.xus@mail.ecust.edu.cn</p>
        <p>个人网站：<a href="https://www.example.com">https://www.example.com</a></p>
      </div>
    </div>
    <!-- <div class="description">
      <p>这是一个关于我们页面的示例，用于展示作者的信息。</p>
      <p>您可以在此处添加更多关于作者的描述。</p>
    </div> -->
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
}

.title {
  font-size: 24px;
  margin-bottom: 20px;
}

.author-info {
  display: flex;
  align-items: center;
}

.avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-right: 20px;
}

.info {
  flex: 1;
}

.description {
  margin-top: 20px;
}
</style>