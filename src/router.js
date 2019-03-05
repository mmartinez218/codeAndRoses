import Vue from 'vue'
import Router from 'vue-router'

//Navigation
import Home from './views/Home.vue'
import Contact from './components/Contact.vue'
import Start from './views/Start.vue'
import SignUp from './views/SignUp.vue'
import Login from './views/Login.vue'
import adminLogin from './views/adminLogin.vue'
import IndProduct from './views/IndProduct.vue'
import FlowerPage from './views/FlowerPage.vue'
//Sub Nav
import Bouquets from './views/Bouquets.vue'
import VaseArrangements from './views/VaseArrangements.vue'
import Planters from './views/Planters.vue'
import AddItem from './components/AddItem.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
 // base:"/myStuff"
  base: process.env.BASE_URL,
  routes: [
      {    
      path: '/adminLogin',
      name: 'adminLogin',
      component:adminLogin
    },
      {    
      path: '/components/AddItem',
      name: 'AddItem',
      component:AddItem
    },
    {
      path: '/Bouquets',
      name: 'Bouquets',
      component:Bouquets
    },
    {
      path: '/Contact',
      name: 'Contact',
      component:Contact
    },
    {
      path: '/FlowerPage',
      name: 'FlowerPage',
      component:FlowerPage
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/IndProduct',
      name: 'IndProduct',
      component: IndProduct
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/SignUp',
      name: 'SignUp',
      component:SignUp
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
