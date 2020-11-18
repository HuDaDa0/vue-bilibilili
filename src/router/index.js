import Vue from 'vue'
import VueRouter from 'vue-router'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'
import UserInfo from '../views/UserInfo.vue'
import Edit from '../views/Edit.vue'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/userinfo',
    name: 'userinfo',
    component: UserInfo,
    meta: {
      isToken: true
    }
  },
  {
    path: '/edit',
    name: 'edit',
    component: Edit
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.isToken && (!localStorage.getItem('id') || !localStorage.getItem('token'))) {
    router.push('/login')
    Vue.prototype.$msg.fail('请先登录')
    return
  }
  next()
})

export default router
