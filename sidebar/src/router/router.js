import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    { path: '/'},
    { path: '/add'},
]

const router = createRouter({
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
  })

export default router;