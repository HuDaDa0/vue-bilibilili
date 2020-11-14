<template>
  <div class="login-top">
    {{ title }}
  </div>
</template>

<script>
export default {
  name: 'LoginTop',
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="less" scoped>
.login-top {
  height: 12.5vw;
  font-size: 4.444vw;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
