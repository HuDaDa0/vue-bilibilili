<template>
  <div>
    <div class="part1">
      <div class="face">
        <img v-if="userInfo.user_img" :src="userInfo.user_img" alt="">
        <img v-else src="@/assets/head_img.jpg" alt="">
      </div>
      <div class="relation">
        <div class="count">
          <span class="fans">
            <span class="num">233</span>
            <br>
            <span class="type">粉丝</span>
          </span>
          <span class="split"></span>
          <span class="follow">
            <span class="num">100</span>
            <br>
            <span class="type">关注</span>
          </span>
          <span class="split"></span>
          <span class="likes">
            <span class="num">130</span>
            <br>
            <span class="type">获赞</span>
          </span>
        </div>
        <div class="follow-btn">编辑资料</div>
      </div>
    </div>
    <div class="part2">
      <div class="base">
        <span class="name">{{ userInfo.username }}</span>
        <span class="gender"></span>
        <span class="level"></span>
      </div>
      <div class="desc">
        <span v-if="userInfo.user_desc" class="content">{{ userInfo.user_desc }}</span>
        <span v-else>这个人很神秘，什么都没有留下</span>
        <span class="spread-btn">展开</span>
      </div>
    </div>
    <div class="tabs">
      <span class="on">动态</span>
      <span>视频</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserDetail',
  props: {
    userInfo: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style lang="less" scoped>
.part1 {
  display: flex;
  justify-content: space-between;
  padding: 0 3.2vw;
  box-sizing: border-box;
  background-color: #fff;
  .face {
    width: 22.4vw;
    height: 22.4vw;
    border-radius: 50%;
    position: relative;
    img {
      position: absolute;
      top: -1.6vw;
      width: 22.4vw;
      height: 22.4vw;
      border-radius: 50%;
    }
  }
  .relation {
    padding-top: 2.13333vw;
    .count {
      line-height: 4.26667vw;
      > span {
        display: inline-block;
        width: 19.2vw;
        text-align: center;
        vertical-align: middle;
      }
      .num {
        font-size: 3.73333vw;
        color: #212121;
      }
      .type {
        font-size: 2.93333vw;
        color: #999;
      }
      .split {
        width: 1px;
        height: 4.26667vw;
        background: #e7e7e7;
      }
    }
    .follow-btn {
      height: 8vw;
      line-height: 8vw;
      background: #fff;
      border: 1px solid #fb7299;
      color: #fb7299;
      text-align: center;
      border-radius: 1.06667vw;
      font-size: 3.73333vw;
      margin-top: 3.2vw;
      box-sizing: border-box;
    }
  }
}
.part2 {
  background-color: #fff;
  padding: 3.2vw;
  .base {
    .name {
      font-size: 4.8vw;
      color: #212121;
      max-width: 62.66667vw;
      vertical-align: middle;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      display: inline-block;
    }
  }
  .desc {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 2.13333vw;
    font-size: 3.46667vw;
    .content {
      color: #999;
      line-height: 4.53333vw;
      width: 83.46667vw;
      height: 4.53333vw;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .spread-btn {
      color: #1389bf;
    }
  }
}
.tabs {
  height: 10.66667vw;
  line-height: 10.66667vw;
  padding-left: 3.2vw;
  background: #fff;
  border-top: 1px solid #e7e7e7;
  border-bottom: 1px solid #e7e7e7;
  span {
    display: inline-block;
    margin-right: 8.53333vw;
    color: #757575;
    font-size: 3.46667vw;
  }
  .on {
    color: #fb7299;
  }
}
</style>
