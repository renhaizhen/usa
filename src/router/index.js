import Vue from 'vue'
import Router from 'vue-router'
import { resolve } from 'url';
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
    },{
      path:'/index',
      component:resolve => require(['../components/page/index.vue'],resolve)
    },{
      path:'/delegate',
      component:resolve => require(['../components/page/delegate.vue'],resolve)
    },{
      path:'/rewards',
      component:resolve => require(['../components/page/rewards.vue'],resolve)
    },{
      path:'/contact',
      component:resolve => require(['../components/page/contact.vue'],resolve)
    },{
      path:'/dashboard',
      component:resolve => require(['../components/page/dashboard.vue'],resolve)
    }
  ]
})
