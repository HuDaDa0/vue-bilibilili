<template>
  <div>
    <login-top title="注册bilibilili">
      <template v-slot:right>
        <span @click="$router.push('/login')">切换到登录</span>
      </template>
    </login-top>
    <van-form @submit="onSubmit">
      <van-field
        v-model="form.username"
        name="姓名"
        label="姓名"
        placeholder="请输入姓名"
        :rules="[{ required: true, message: '请填写用户名' }]"
        style="margin: 4.167vw 0"
      ></van-field>
      <van-field
        v-model="form.account"
        name="账号"
        label="账号"
        placeholder="账号"
        :rules="[{ required: true, message: '请输入账号' }]"
      ></van-field>
      <van-field
        v-model="form.password"
        type="password"
        name="密码"
        label="密码"
        placeholder="请输入密码"
        :rules="[{ required: true, message: '请输入密码' }]"
      ></van-field>
      <div style="padding: 4.167vw 2.778vw;">
        <van-button
          round
          block
          type="info"
          native-type="submit"
          style="background-color: #ff9db5; border-color: #ff9db5;"
        >
          注册
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import LoginTop from '@/components/common/LoginTop.vue'

export default {
  name: 'Register',
  components: {
    LoginTop
  },
  data () {
    return {
      form: {
        username: '',
        account: '',
        password: ''
      }
    }
  },
  methods: {
    async onSubmit () {
      const res = await this.$http.post('/register', {
        name: this.form.username,
        username: this.form.account,
        password: this.form.password
      })
      if (res.code === 301 || res.code === 302) {
        this.$msg.fail(res.msg)
        return false
      }
      setTimeout(_ => {
        this.$router.push('/login')
      }, 1000)
    }
  }
}
</script>

<style lang="less" scoped>

</style>
