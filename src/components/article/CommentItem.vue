<template>
  <div class="m-comment-list">
    <div v-for="(itemLevel, index) of commentChild" :key="index">
      <div class="level-1">
        <div class="left-avater">
          <img v-if="itemLevel.userinfo && itemLevel.userinfo.user_img" :src="itemLevel.userinfo.user_img" alt="">
          <img v-else src="@/assets/head_img.jpg" alt="">
        </div>
        <div class="right-comment">
          <p class="comment-title">
            <span>{{ itemLevel.userinfo && itemLevel.userinfo.name }}</span>
            <span>{{ itemLevel.comment_date }}</span>
          </p>
          <div class="comment-content">
            <p v-if="!temp">{{ itemLevel.comment_content }} <span style="color: red;">回复</span> </p>
            <p v-else>
              回复
              <span style="color:#478ef0;">{{ itemLevel.parent_user_info.name }}</span>
               : {{ itemLevel.comment_content }}
            </p>
          </div>
        </div>
      </div>
      <comment-item :commentChild="itemLevel.child" :temp="true"></comment-item>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommentItem',
  props: ['commentChild', 'temp']
}
</script>

<style lang="less" scoped>
p {
  padding: 0;
  margin: 0;
}
.m-comment-list {
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
}
</style>
