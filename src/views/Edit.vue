<template>
  <div>
    <nav-bar></nav-bar>
    <edit-banner left="头像" class="edit-avater">
      <van-uploader :after-read="afterRead" class="upload-box" />
      <img v-if="model.user_img" :src="model.user_img" class="avater-box" />
      <img v-else src="@/assets/head_img.jpg" class="avater-box" />
    </edit-banner>
    <edit-banner left="昵称" @show="showName = true">{{ model.name }}</edit-banner>
    <edit-banner left="账号">{{ model.username }}</edit-banner>
    <edit-banner left="性别" @show="showGender = true">{{ model.gender ? '男' : '女' }}</edit-banner>
    <edit-banner left="个性签名" @show="showSignature = true">{{ model.user_desc || '这个用户很神秘，什么都没有留下' }}</edit-banner>
    <div class="op-card">
      <div>退出登录</div>
      <div @click="$router.go(-1)">返回空间</div>
    </div>

    <!-- 修改昵称 -->
    <van-dialog v-model="showName" title="昵称" show-cancel-button @confirm="confirmName">
      <van-field v-model="name" placeholder="请输入昵称" />
    </van-dialog>
    <!-- 修改个性签名 -->
    <van-dialog v-model="showSignature" title="个性签名" show-cancel-button @confirm="confirmSignature">
      <van-field v-model="user_desc" type="textarea" autofocus placeholder="请输入个性签名" />
    </van-dialog>

    <van-action-sheet v-model="showGender" :actions="actions" @select="onSelect" />
  </div>
</template>

<script>
import NavBar from '@/components/common/NavBar.vue'
import EditBanner from '@/components/userComponent/EditBanner.vue'

export default {
  components: {
    NavBar,
    EditBanner
  },
  data () {
    return {
      model: {
        user_img: '',
        name: '',
        username: '',
        gender: '',
        user_desc: ''
      },
      showName: false,
      name: '',
      showSignature: false,
      user_desc: '',
      showGender: false,
      actions: [
        { name: '男', val: 1 },
        { name: '女', val: 0 }
      ]
    }
  },
  created () {
    this.getUserInfo()
  },
  methods: {
    async getUserInfo () {
      const res = await this.$http.get(`/user/${localStorage.getItem('id')}`)
      this.model = res[0]
    },
    async afterRead (file) {
      const formDate = new FormData()
      formDate.append('file', file.file)
      const res = await this.$http.post('/upload', formDate)
      this.model.user_img = res.url
      this.updateUser()
    },
    async updateUser () {
      const res = await this.$http.post(`/update/${localStorage.getItem('id')}`, this.model)
      if (res.code === 200) {
        this.$msg.success('修改成功')
      }
    },
    confirmName () {
      this.model.name = this.name
      this.updateUser()
    },
    confirmSignature () {
      this.model.user_desc = this.user_desc
      this.updateUser()
      this.user_desc = ''
    },
    onSelect (item) {
      this.showGender = false
      this.model.gender = item.val
      this.updateUser()
    }
  }

}
</script>

<style lang="less" scoped>
.edit-avater {
  position: relative;
  margin-top: 3.2vw;
  .upload-box {
    position: absolute;
    width:12.26667vw;
    height:12.26667vw;
    border-radius:6.13333vw;
    overflow: hidden;
    opacity: 0;
  }
  img {
    width: 12.26667vw;
    height: 12.26667vw;
    border-radius: 6.13333vw;
  }
}
.op-card {
  margin-top: 5.33333vw;
  background-color: #fff;
  div {
    padding: 2.66667vw 0;
    text-align: center;
    color: #505050;
    font-size: 3.73333vw;
  }
  div:first-child {
    border-bottom: 1px solid #eee;
  }
}
</style>
