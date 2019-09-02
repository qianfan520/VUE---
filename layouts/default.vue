<template>
  <div>
    <!-- header头部固定区域 -->
    <Header />
    <!-- 页面内容占位组件区域 -->
    <nuxt />
    <!-- footer底部固定区域 -->
  <footer />
  </div>
</template>
<script>
// 引入header头部组件
import Header from "@/components/header.vue";
// 引入footer底部组件
import Footer from "@/components/footer.vue";
export default {
  //既然导入了组件,那么就要一定要注册这个导入的组件
  components: {
    Header,
    Footer
  }
};
</script>
<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
* {
  margin: 0;
  padding: 0;
}
ul,
li,
ol {
  list-style: none;
}
i,
em {
  font-style: normal;
}
a {
  color: inherit;
  text-decoration: none;
}
a:hover {
  color: inherit;
}
</style>
