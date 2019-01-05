import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home/Home.vue'
import NewDoctor from './components/Home/NewDoctor.vue'
import NewPatient from './components/Home/NewPatient.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/new-patient',
      name: 'new-patient',
      component: NewPatient
    },
    {
      path: '/new-doctor',
      name: 'new-doctor',
      component: NewDoctor
    }
  ]
})
