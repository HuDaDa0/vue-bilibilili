<template>
  <div>
    <login-top title="登录bilibilili">
      <template v-slot:right>
        <span @click="$router.push('/register')">切换到注册</span>
      </template>
    </login-top>
    <van-form @submit="onSubmit" style="margin: 4.167vw 0;">
      <van-field
        v-model="form.username"
        name="账号"
        label="账号"
        placeholder="请输入账号"
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
        <van-button round block type="info" native-type="submit">登录</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import LoginTop from '@/components/common/LoginTop.vue'

export default {
  name: 'Login',
  components: {
    LoginTop
  },
  data () {
    return {
      form: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    async onSubmit () {
      const res = await this.$http.post('/login', this.form)
      if (res.code === 301 || res.code === 302) {
        this.$msg.fail(res.msg)
        return false
      }
      this.$msg.success(res.msg)
      localStorage.setItem('token', res.token)
      localStorage.setItem('id', res.id)
      setTimeout(_ => {
        this.$router.push('/userinfo')
      })
    }
  }
}
</script>
