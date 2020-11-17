<template>
  <div class="edit-banner">
    <span style="color: #505050;">{{ left }}</span>
    <span style="color: #999;" @click="$emit('show')">
      <slot></slot>
    </span>
  </div>
</template>

<script>
export default {
  name: 'EditBanner',
  props: {
    left: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="less" scoped>
.edit-banner {
  background-color: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2.66667vw 3.2vw;
  border-bottom: 1px solid #eee;
  font-size: 4vw;
}
</style>
