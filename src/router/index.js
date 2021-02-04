import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Pc_index from '../views/pc_index.vue'

const routes = [
  {
    path: '/pc_index',
    name: 'Pc_index',
    component: Pc_index,
    children: [
      {
        path: "home",
        linkActiveClass: 'router-link-active',
        components: {
          default: Pc_index,
          helper: Home
        }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router