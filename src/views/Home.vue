<template>
  <div>
    <nav-bar></nav-bar>
    <van-tabs v-model="active">
      <van-tab v-for="item of category" :title="item.title" :key="item._id" swipeable>
        <div class="card-group">
          <cover v-for="categoryItem of item.list" :key="categoryItem.id" :detailItem="categoryItem"></cover>
        </div>
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
      this.category[this.active].list = res
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
