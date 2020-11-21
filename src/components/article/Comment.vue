<template>
  <div>
    评论列表
  </div>
</template>

<script>
export default {
  name: 'Comment',
  data () {
    return {}
  },
  methods: {
    async getCommentData () {
      await this.$http.get(`/comment/${this.$route.params.id}`)
    }
  }
}
</script>

<style lang="less" scoped>

</style>
