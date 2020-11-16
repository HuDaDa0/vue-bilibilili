<template>
  <div>
    <nav-bar></nav-bar>
    <div class="img-banner"></div>
    <user-detail></user-detail>
  </div>
</template>

<script>
import NavBar from '@/components/common/NavBar.vue'
import UserDetail from '@/components/userComponent/UserDetail.vue'

export default {
  name: 'UserInfo',
  components: {
    NavBar,
    UserDetail
  }
}
</script>

<style lang="less" scoped>
.img-banner {
  width: 100vw;
  height: 24vw;
  background-image: url('../assets/bannerTop_new.png');
  background-size: cover;
  background-position: 50%;
}
</style>
