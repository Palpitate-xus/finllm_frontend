<template>
  <div class="doc-container">
  </div>
</template>

<script>
export default {
  name: 'HelpDocs',
  data () {
    return {
      activeIndex: '/',
      authorization: localStorage.getItem('role')=="admin"
    }
  },
  watch: {
    $route(to,from){
      console.log(from.path);  // 从哪来
      console.log(to.path);  // 到哪去
      this.activeIndex = this.$route.path
  }
}
}
</script>

<style>
.doc-container {
  padding: 20px;
}
</style>

