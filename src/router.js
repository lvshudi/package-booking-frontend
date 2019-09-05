import Vue from 'vue'
import Router from 'vue-router'
import packageInput from './views/PackageInput.vue'
import OrderPackage from './views/OrderPackage.vue'
import PackageList from './views/PackageList.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'packageInput',
      component: packageInput
    },
    {
      path: '/about',
      name: 'OrderPackage',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/OrderPackage.vue')
    }, {
      path: '/list',
      name: 'PackageList',
      component: PackageList
    }
  ]
})
