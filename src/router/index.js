import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const constantRouterMap = [
  {
    path: '/',
    redirect: '',
    component: () => import('@/layout'),
    chunkName: 'views/layout',
    hidden: true,
    children: [
      {
        path: '/tech',
        redirect: '',
        component: () => import('@/views/tech'),
        chunkName: 'views/tech',
        hidden: true
      },
      {
        name: 'music',
        path: '/music',
        redirect: '',
        component: () => import('@/views/music'),
        chunkName: 'views/music',
        hidden: true
      }
    ]
  }
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({
    y: 0
  }),
  routes: constantRouterMap
})

