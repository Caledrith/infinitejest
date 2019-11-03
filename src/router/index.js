import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import SingleJoke from '../views/SingleJoke.vue'
import SubmitJoke from '../views/SubmitJoke.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/joke/:id',
    name: 'joke',
    component: SingleJoke
  },
  {
    path: '/submitJoke',
    name: 'Submit',
    component: SubmitJoke
  }
]

const router = new VueRouter({
  routes
})

export default router
