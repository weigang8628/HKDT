<template>
  <div id="app">
    <Header :opacity="opacity"></Header>
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<style lang="less">
#app {
  font-family: "Microsoft YaHei", "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333333;
}
</style>
<script>
export default {
  data() {
    return {
      opacity: 0
    };
  },
  mounted() {
    window.addEventListener("scroll", this.scrollHeightFn);
  },
  methods: {
    // 动态导航透明度
    scrollHeightFn() {
      this.opacity = (document.documentElement.scrollTop / 100) * 0.2;
    }
  }
};
</script>

