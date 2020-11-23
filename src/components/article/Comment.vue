<template>
  <div class="m-comment-list">
    <div class="level-1">
      <div class="left-avater">
        <img src="@/assets/head_img.jpg" alt="">
      </div>
      <div class="right-comment">
        <p class="comment-title">
          <span>hahah</span>
          <span>4-12</span>
        </p>
        <p class="comment-content">正式内容正式内容正式内容正内容正式内容正式内容正内容正式内容正式内容正内容正式内容正式内容正式内容正式内容</p>
      </div>
    </div>
    <div class="level-2">
      <div class="left-avater">
        <img src="@/assets/head_img.jpg" alt="">
      </div>
      <div class="right-comment">
        <p class="comment-title">
          <span>hahah</span>
          <span>4-12</span>
        </p>
        <p class="comment-content">正式内容正式内容正式内容正内容正式内容正式内容正内容正式内容正式内容正内容正式内容正式内容正式内容正式内容</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Comment',
  props: ['id'],
  data () {
    return {
      commentList: []
    }
  },
  created () {
    this.getCommentData()
  },
  methods: {
    async getCommentData () {
      const res = await this.$http.get(`/comment/${this.id}`)
      this.$emit('commentLength', res.length)
      this.commentList = this.changeCommentData(res)
    },
    changeCommentData (data) {
      function fn (temp) {
        const arr1 = []
        for (var i = 0; i < data.length; i++) {
          if (data[i].parent_id === temp) {
            arr1.push(data[i])
            data[i].child = fn(data[i].comment_id)
          }
        }
        return arr1
      }
      return fn(null)
    }
  }
}
</script>

<style lang="less" scoped>
p {
  padding: 0;
  margin: 0;
}
.m-comment-list {
  padding: 3vw 3.2vw;
  background-color: #fff;
  .level-1, .level-2 {
    display: flex;
    border-bottom: 1px solid #eee;
    padding: 2.667vw 0;
    .left-avater {
      width: 10vw;
      height: 10vw;
      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }
    .right-comment {
      flex: 1;
      margin-left: 2.667vw;
      font-size: 3.467vw;
      .comment-title {
        display: flex;
        justify-content: space-between;
        color: #999;
      }
    }
  }
  .level-2 {
    margin-left: 10.667vw;
  }
}
</style>
