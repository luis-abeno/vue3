import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const routes = [
  {
    path: '/',
    component: HomeView
  },
  {
    path: '/products',
    component: () => import('@/views/ProductsView.vue')
  },
  {
    path: '/products/:id',
    component: () => import('@/views/ProductDetailView.vue')
  },
  {
    path: '/admin',
    component: () => import('@/views/AdminView.vue'),
    children: [
      {
        path: 'manage-products',
        component: () => import('@/views/ManageProductsView.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
