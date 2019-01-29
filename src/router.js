import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Start from './views/Start.vue'
import AddItem from './components/AddItem.vue'
import SignUp from './views/SignUp.vue'
import FlowerPage from './views/FlowerPage.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
 // base:"/myStuff"
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/SignUp',
      name: 'SignUp',
      component:SignUp
    },
    {
      path: '/FlowerPage',
      name: 'FlowerPage',
      component:FlowerPage
    },
    {
      path: '/components/AddItem',
      name: 'AddItem',
      component:AddItem
    },
    {
      path: '/Start',
      name: 'start',
      component: Start
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
