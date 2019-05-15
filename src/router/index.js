import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const constantRoutes = [
  {
    path: '/redirect',
    hidden: true,
    children: [
      {
        path: '/redirect/:path*',
        component: () => import('@/views/redirect')
      }
    ]
  },
  {
    path: '',
    component: () => import('@/views/login'),
    hidden: true
  },
  {
    path: '/layout',
    redirect: '',
    component: () => import('@/layout'),
    chunkName: 'views/layout',
    hidden: true,
    children: [
      {
        name: 'tech',
        path: '/tech',
        meta: { title: '技术' },
        redirect: '',
        component: () => import('@/views/tech'),
        chunkName: 'views/tech',
        hidden: true
      },
      {
        name: 'music',
        path: '/music',
        meta: { title: '音乐' },
        redirect: '',
        component: () => import('@/views/music'),
        chunkName: 'views/music',
        hidden: true
      },
      {
        name: 'git',
        path: '/tech/git',
        meta: { title: 'GIT' },
        redirect: '',
        component: () => import('@/views/tech/git'),
        chunkName: 'views/tech/git',
        hidden: true,
        children: [
          {
            name: 'git-check',
            path: '/tech/git/check',
            meta: { title: '查看详情' },
            redirect: '',
            component: () => import('@/views/tech/git/check.vue'),
            chunkName: 'views/tech/git/check',
            hidden: true
          }
        ]
      }
    ]
  }, {
    path: '*',
    component: () => import('@/views/404.vue'),
    hidden: true
  }
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({
    y: 0
  }),
  routes: constantRoutes
})

export const asyncRoutes = [
  { path: '*', redirect: '/404', hidden: true }
]

