<template>
  <div class="m-comment-title">
    <div class="title">
      <span>评论</span>
      <span>({{ commentLen }})</span>
    </div>
    <div class="user-publish">
      <div class="img-box">
        <img v-if="user_img" :src="user_img" alt="">
        <img v-else src="@/assets/default_img.jpg" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommentTitle',
  props: {
    commentLen: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      user_img: ''
    }
  },
  created () {
    if (localStorage.getItem('id')) {
      this.getUserInfo()
    }
  },
  methods: {
    async getUserInfo () {
      const res = await this.$http.get(`/user/${localStorage.getItem('id')}`)
      this.user_img = res[0].user_img
    }
  }
}
</script>

<style lang="less" scoped>
.m-comment-title {
  padding: 2vw 1.6vw;
  background-color: #fff;
  .title {
    span:first-child {
      font-size: 4.26667vw;
      font-weight: 400;
      margin-right: 2vw;
    }
    span:last-child {
      color: #999;
      font-size: 3.66667vw;
    }
  }
  .user-publish {
    margin-top: 2.667vw;
    .img-box {
      width: 6.4vw;
      height: 6.4vw;
      margin-right: 6vw;
      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }
  }
}
</style>
