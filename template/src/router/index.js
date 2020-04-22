import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

import Home from '../views/Home.vue';
import Packages from '../views/Packages.vue'
import About from '../views/About.vue'

export default new Router({
      routes: [{
        path: '/',
        name: 'Home',
        component: Home
      },{
        path: '/packages',
        name: 'Packages',
        component: Packages
      },{
        path: '/about',
        name: 'About',
        component: About
      }]
})