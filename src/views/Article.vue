<template>
  <div>
    <nav-bar></nav-bar>
    <div class="video-detail">
      <div class="video">
        <video :src="model.content" controls style="width: 100%;"></video>
        <div class="desc">
          <div class="title">
            <p class="tag">{{ model.category && model.category.title }}</p>
            <p class="video-title">{{ model.name }}</p>
          </div>
          <div class="record">
            <span>up主 {{ model.userinfo && model.userinfo.name }}</span>
            <span>93.3观看</span>
            <span>20弹幕</span>
            <span>{{ model.date }}</span>
          </div>
          <div class="operation">
            <span>
              <i class="icon-star-full"></i>
              收藏
            </span>
            <span>
              <i class="icon-bubble"></i>
              关注
            </span>
            <span>
              <i class="icon-redo2"></i>
              转发
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="card-group">
      <cover v-for="item of commendList" :key="item.id" :detailItem="item"></cover>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/common/NavBar.vue'
import Cover from '@/views/Cover.vue'

export default {
  name: 'Article',
  props: ['id'],
  components: {
    NavBar,
    Cover
  },
  data () {
    return {
      model: {},
      commendList: []
    }
  },
  created () {
    this.getArticleData()
    this.getCommendData()
  },
  methods: {
    async getArticleData () {
      const res = await this.$http.get(`/article/${this.id}`)
      this.model = res[0]
    },
    async getCommendData () {
      const res = await this.$http.get('/commend')
      this.commendList = res
    }
  }
}
</script>

<style lang="less" scoped>
p {
  margin: 0;
  padding: 0;
}
.video-detail {
  .video {
    width: 100%;
    background-color: #fff;
    border-bottom: 0.267vw solid #eee;
    padding-bottom: 2.667vw;
    > div {
      padding: 0 3.2vw;
      color: #999;
    }
  }
  .title {
    height: 5.33333vw;
    line-height: 5.33333vw;
    display: flex;
    .tag {
      display: inline-block;
      padding: 0 1.6vw;
      height: 5.33333vw;
      line-height: 5.33333vw;
      color: #fb7299;
      background: #f4f4f4;
      border-radius: 3.2vw;
      vertical-align: middle;
      margin-top: 0.53333vw;
      margin-right: 2.667vw;
    }
    .video-title {
      flex: 1;
      font-size: 4.26667vw;
      font-weight: 400;
      display: inline-block;
      box-sizing: border-box;
      color: #212121;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      height: 6.4vw;
      line-height: 6.4vw;
    }
  }
  .record {
    font-size: 3.2vw;
    margin-top: 2.13333vw;
    color: #999;
    span {
      margin-right: 3.13333vw;
    }
  }
  .operation {
    font-size: 2.66667vw;
    margin-top: 2.13333vw;
    span {
      margin-right: 3.13333vw;
    }
  }
}
.card-group {
  width: 100vw;
  display: flex;
  flex-wrap: wrap;
  background-color: #fff;
  .card-box {
    width: 50%;
    padding: 2.13333vw 1.33333vw;
    box-sizing: border-box;
  }
}
</style>
