<template>
  <div id="app">
    <Header :opacity="opacity"></Header>
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<style lang="less">
#app {
  font-family: "Microsoft YaHei";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333333;
}
</style>
<script>
export default {
  data() {
    return {
      opacity: 0,
      currentRouter: ""
    };
  },

  mounted() {
    window.addEventListener("scroll", this.scrollHeightFn);
  },
  methods: {
    // 动态导航透明度
    scrollHeightFn() {
      if (
        this.currentRouter == "/article" ||
        this.currentRouter == "/news-list"
      ) {
        // 新闻列表和详情设置为不透明
        this.opacity = 1;
      } else {
        this.opacity = (document.documentElement.scrollTop / 100) * 0.2;
      }
    }
  },
  watch: {
    $route(to, from) {
      this.currentRouter = this.$route.path;
      this.scrollHeightFn();
    }
  }
};
</script>

