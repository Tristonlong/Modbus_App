import { createRouter, createWebHashHistory } from 'vue-router'

import HomeView from '../pages/HomeView/index.vue'
import Reference from '../pages/Reference/index.vue'
import Connecting from '../pages/Connecting/index.vue'
import Setting from '../pages/Setting/index.vue'
import Monitor from '../pages/Monitor/index.vue'
import Help from '../pages/Help/index.vue'
import Locking from '../pages/Locking/index.vue'
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/pages/HomeView',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/pages/Reference',
      name: 'reference',
      component: Reference,
    },
    {
      path: '/pages/Setting',
      name: 'setting',
      component: Setting,
    },
    {
      path: '/pages/Connecting',
      name: 'Connecting',
      component: Connecting,
    },
    {
      path: '/pages/Monitor',
      name: 'Monitor',
      component: Monitor,
    },
    {
      path: '/pages/Help',
      name: 'Help',
      component: Help,
    },
    {
      path: '/pages/Locking',
      name: 'Locking',
      component: Locking,
    },
    {
      path: '/',
      redirect: '/pages/HomeView',
    },
  ],
})

export default router
