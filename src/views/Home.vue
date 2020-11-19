<template>
  <div>
    <nav-bar></nav-bar>
    <van-tabs v-model="active" swipeable sticky animated>
      <van-tab v-for="item of category" :title="item.title" :key="item._id">
        <van-list
          v-model="item.loading"
          :finished="item.finished"
          :immediate-check="false"
          finished-text="没有更多了"
          @load="onLoad"
        >
          <div class="card-group">
            <cover v-for="categoryItem of item.list" :key="categoryItem.id" :detailItem="categoryItem"></cover>
          </div>
        </van-list>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import NavBar from '@/components/common/NavBar.vue'
import Cover from './Cover.vue'

export default {
  name: 'Home',
  components: {
    NavBar,
    Cover
  },
  data () {
    return {
      active: 0,
      category: []
    }
  },
  watch: {
    active () {
      this.selectDetail()
    }
  },
  created () {
    this.selectCategory()
  },
  methods: {
    async selectCategory () {
      const res = await this.$http.get('/category')
      this.category = res.map(item => {
        item.list = []
        item.page = 0
        item.pagesize = 8
        item.loading = false
        item.finished = false
        return item
      })
      this.selectDetail()
    },
    async selectDetail () {
      const item = this.category[this.active]
      const res = await this.$http.get(`/detail/${item._id}`, {
        params: {
          page: item.page,
          pagesize: item.pagesize
        }
      })
      item.loading = false
      this.category[this.active].list.push(...res)
      if (res.length < item.pagesize) item.finished = true
    },
    onLoad () {
      const category = this.category[this.active]
      category.page += 1
      this.selectDetail()
    }
  }

}
</script>

<style lang="less" scoped>
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
