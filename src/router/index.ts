import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BibleTextsView from '../views/BibleTextsView.vue'
import ActivityTrackerView from '../views/ActivityTrackerView.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/texts',
      name: 'texts',
      component: BibleTextsView,
    },
    {
      path: '/tracker',
      name: 'tracker',
      component: ActivityTrackerView,
    },
  ],
})

export default router
