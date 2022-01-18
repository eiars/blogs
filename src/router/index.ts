import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/signIn',
    name: 'LoginRegister',
    component: () => import(/* webpackChunkName: "about" */'../views/LoginRegister.vue')
  },
  {
    path: '/about/',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/test',
    name: 'Test',
    component: () => import(/* webpackChunkName: "about" */'../views/Test.vue')
  },
  {
    path: '/:catchAll(.*)',
    name: '404',
    component: () => import(/* webpackChunkName: "about" */'../views/404.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior (to, from, savedPosition) {
    return {
      el: '#app',
      top: 0,
      left: 0,
      behavior: 'smooth'
    }
  }
})

console.log(router.currentRoute.value.matched, 'router.currentRoute.value.matched当前路由')
export default router
