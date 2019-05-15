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
            name: 'add',
            path: '/tech/git/add',
            meta: { title: '新增' },
            redirect: '',
            component: () => import('@/views/tech/git/src/add'),
            chunkName: 'views/tech/git/src/add',
            hidden: true
          },
          {
            name: 'update',
            path: '/tech/git/update',
            meta: { title: '编辑' },
            redirect: '',
            component: () => import('@/views/tech/git/src/update'),
            chunkName: 'views/tech/git/src/update',
            hidden: true
          },
          {
            name: 'check',
            path: 'check',
            meta: { title: '查看' },
            redirect: '',
            component: () => import('@/views/tech/git/src/check'),
            chunkName: 'views/tech/git/src/check',
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

