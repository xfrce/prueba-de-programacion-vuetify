import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/films',
    name: 'Films',
    component: () => import('@/views/FilmsView'),
      pathToRegexOptions: { strict: true },
      linkExactActiveClass: 'exact-active-link',
  },
  {
    path: "/",
    redirect: "/films"
  },
  {
    path: '/starships',
    name: 'Starships',
    component: () => import('@/views/StarshipsView.vue')
  },
  {
    path: '/vehicles',
    name: 'Vehicles',
    component: () => import('@/views/VehiclesView.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('@/views/ContactView.vue')
  },
  {
    path: '/people',
    name: 'People',
    component: () => import('@/views/PeopleView.vue')
  },    
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
