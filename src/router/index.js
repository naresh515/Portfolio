// router/index.js

import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import Resume from '../components/Resume.vue';
import Works from '../components/Works.vue';
import Contact from '../components/Contact.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/resume',
      name: 'resume',
      component: Resume,
    },
    {
      path: '/project',
      name: 'works',
      component: Works,
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact,
    },
  ],
});

export default router;
