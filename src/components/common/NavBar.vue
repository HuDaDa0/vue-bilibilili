<template>
  <div class="nav-bar-box">
    <a href="/" class="logo">
      <img src="@/assets/logo.png" style="height: 100%;">
    </a>
    <div class="right">
      <a href="#" class="search">
        <van-icon name="search" color="#999" style="font-size: 6.667vw;" />
      </a>
      <a href="" class="user-logo">
        <img src="@/assets/default_img.jpg" class="bfs-img">
      </a>
      <div class="open-app-btn">下载 App</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBar'
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
    display: inline-block;
    height: 100%;
  }
  .right {
    display: flex;
    .search {
      display: inline-block;
      width: 6.4vw;
      height: 6.4vw;
      margin-right: 6vw;
    }
    .user-logo {
      width: 6.4vw;
      height: 6.4vw;
      display: inline-block;
      margin-right: 6vw;
      .bfs-img {
        width: 100%;
        height: 100%;
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
