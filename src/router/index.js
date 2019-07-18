import Vue from 'vue'
import Router from 'vue-router'
import AppLayout from '../components/admin/AppLayout'
import AuthLayout from '../components/auth/AuthLayout'
import IndexLayout from '../components/landingpage/index'
import lazyLoading from './lazyLoading'

Vue.use(Router)

const demoRoutes = []

if (process.env.NODE_ENV === 'development') {
  const VueBook = require('vue-book')

  demoRoutes.push(
    VueBook.createRoute({
      requireContext: require.context('./..', true, /.demo.vue$/),
      path: '/demo',
    }),
    VueBook.createRoute({
      requireContext: require.context('./../components', true, /.vue$/),
      path: '/presentation',
    }),
  )

  Vue.use(VueBook.VueBookComponents)
}

export default new Router({
  routes: [
    ...demoRoutes,
    {
      path: '*',
      redirect: {
        name: 'landingpage'
      },
    },
    {
      name: 'tiket',
      path: '/tiket',
      component: AppLayout,
      children: [{
        name: 'tiket',
        path: 'dashboard',
        component: lazyLoading('tiket/Dashboard'),
        default: true,
      }]
    }, {
      name: 'landingpage',
      path: '/landingpage',
      component: IndexLayout,
      children: [{
        name: 'index',
        path: 'index',
        component: lazyLoading('landingpage/index'),
        default: true,
      }]
    }
  ],
})
