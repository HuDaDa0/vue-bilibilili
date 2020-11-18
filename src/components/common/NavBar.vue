<template>
  <div class="nav-bar-box">
    <div @click="$router.push('/')" class="logo">
      <img src="@/assets/logo.png" style="height: 100%;">
    </div>
    <div class="right">
      <div class="search">
        <van-icon v-if="user_img" name="search" color="#999" style="font-size: 6.667vw;" />
      </div>
      <div @click="$router.push('/userinfo')" class="user-logo">
        <img v-if="user_img" :src="user_img" class="bfs-img">
        <img src="@/assets/default_img.jpg" class="bfs-img">
      </div>
      <div class="open-app-btn">下载 App</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  data () {
    return {
      user_img: ''
    }
  },
  async created () {
    const res = await this.$http.get(`/user/${localStorage.getItem('id')}`)
    this.user_img = res[0].user_img
  }
}
</script>

<style lang="less" scoped>
.nav-bar-box {
  height: 11.73333vw;
  padding: 0 3.2vw 0 4.8vw;
  font-size: 0;
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .logo {
    display: block;
    height: 100%;
  }
  .right {
    display: flex;
    .search {
      display: block;
      width: 6.4vw;
      height: 6.4vw;
      margin-right: 6vw;
    }
    .user-logo {
      width: 6.4vw;
      height: 6.4vw;
      display: block;
      margin-right: 6vw;
      border-radius: 50%;
      overflow: hidden;
      .bfs-img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }
    .open-app-btn {
      width: 21.86667vw;
      height: 6.4vw;
      background: #fb7299;
      border-radius: 1.06667vw;
      font-size: 3.46667vw;
      color: #fff;
      text-align: center;
      line-height: 6.4vw;
    }
  }

}
</style>
