<template>
  <div class="m-comment-list">
    <div v-for="(itemLevel1, index) of commentList" :key="index">
      <div class="level-1">
        <div class="left-avater">
          <img v-if="itemLevel1.userinfo && itemLevel1.userinfo.user_img" :src="itemLevel1.userinfo.user_img" alt="">
          <img v-else src="@/assets/head_img.jpg" alt="">
        </div>
        <div class="right-comment">
          <p class="comment-title">
            <span>{{ itemLevel1.userinfo && itemLevel1.userinfo.name }}</span>
            <span>{{ itemLevel1.comment_date }}</span>
          </p>
          <p class="comment-content">{{ itemLevel1.comment_content }}</p>
        </div>
      </div>
      <div style="padding-left: 10vw;">
        <comment-item :commentChild="itemLevel1.child"></comment-item>
      </div>
    </div>
  </div>
</template>

<script>
import CommentItem from './CommentItem.vue'

export default {
  name: 'Comment',
  props: ['id'],
  components: {
    CommentItem
  },
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
      console.log(res)
      this.$emit('commentLength', res.length)
      this.commentList = this.changeCommentData(res)
    },
    changeCommentData (data) {
      function fn (temp) {
        const arr1 = []
        for (var i = 0; i < data.length; i++) {
          if (data[i].parent_id === temp) {
            arr1.push(data[i])
            data[i].child = fn(data[i].comment_id.toString())
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
  .level-1 {
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
