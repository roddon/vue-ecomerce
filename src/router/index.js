import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../contains/home.vue';
import Profile from '../contains/profile.vue';
import Category from '../contains/category.vue';
import Shopping from '../contains/shopping.vue';
import Search from '../contains/search.vue';

Vue.use(VueRouter)

// const requireAuth = (to, from, next) => {
//   if (Auth.loggedIn()) return next()
//   next({
//     path: '/login',
//     query: { redirect: to.fullPath }
//   })
// }

export default new VueRouter({
    mode: 'history',
    routes: [
      { path: '/', component: Home},
      {path: '/profile', component: Profile},
      {path: '/category', component: Category},
      {path: '/shopping', component: Shopping},
      {path: '/search', component: Search},
    ]
  })