<template>
  <div id="app">
    <!-- 给首页做缓存 -->
    <keep-alive v-if="$route.meta.keepAlive">
      <router-view />
    </keep-alive>
    <!-- 加上唯一的key，来保证路由切换时都会重新渲染触发钩子 -->
    <!-- 这样比使用watch来监听路由要简单多了 -->
    <router-view v-if="!$route.meta.keepAlive" :key="key"></router-view>
  </div>
</template>

<script>
export default {
  computed: {
    key () {
      return this.$route.name !== undefined ? this.$route.name + new Date() : this.$route + new Date()
    }
  }
}

</script>

<style lang="less">
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: #f4f4f4;
}
</style>
