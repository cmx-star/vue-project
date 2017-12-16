import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/index/index'

Vue.use(Router)
// 插件单页路由：根据不同请求返回不同内容
export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    }
  ]
})
