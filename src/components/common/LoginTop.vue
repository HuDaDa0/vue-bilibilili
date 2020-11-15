<template>
  <div class="login-top">
    <div></div>
    <div>{{ title }}</div>
    <div>
      <slot name="right"></slot>
    </div>
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
  align-items: center;
  div {
    width: 33.333%;
  }
  div:nth-child(2) {
    text-align: center;
  }
  div:last-child {
    padding-right: 2.778vw;
    font-size: 3.611vw;
    text-align: right;
    box-sizing: border-box;
  }
}
</style>
