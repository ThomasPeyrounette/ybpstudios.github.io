import { createRouter, createWebHashHistory } from 'vue-router'
import CustomMusic from '@/views/CustomMusic.vue'
import Contact from '@/views/Contact.vue'
import About from '@/views/About.vue'
import Home from '@/views/Home.vue'
import CGU from '@/views/CGU.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/custom_music',
      name: 'custom_music',
      component: CustomMusic,
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact,
    }, 
    {
      path: '/about',
      name: 'about',
      component: About,
    }, 
    {
      path: '/CGU',
      name: 'CGU',
      component: CGU,
    }
  ],
  scrollBehavior() { document.getElementById('header').scrollIntoView(); },
})


export default router
