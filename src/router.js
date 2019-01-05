import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home/Home.vue'
import NewDoctor from './components/Home/NewDoctor.vue'
import NewPatient from './components/Home/NewPatient.vue'
import HomePatient from './components/Patient/HomePatient/HomePatient.vue'
import QRPatient from './components/Patient/QRPatient/QRPatient.vue'
import HistoryPatient from './components/Patient/HistoryPatient/HistoryPatient.vue'
import AccountPatient from './components/Patient/AccountPatient/AccountPatient.vue'

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
    },
    {
      path: '/patient/',
      name: 'home-patient',
      component: HomePatient
    },
    {
      path: '/patient/qr',
      name: 'qr-patient',
      component: QRPatient
    },
    {
      path: '/patient/history',
      name: 'history-patient',
      component: HistoryPatient
    },
    {
      path: '/patient/account',
      name: 'account-patient',
      component: AccountPatient
    },
  ]
})
