import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import SeaSlug from '@/components/SeaSlug'
import Contact from '@/components/Contact'
import SeaSlugInfo from '@/components/SeaSlugInfo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/sea-slug-info',
      name: 'SeaSlugInfo',
      component: SeaSlugInfo
    },
    {
      path: '/sea-slug',
      name: 'SeaSlug',
      component: SeaSlug
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    }
  ]
})
