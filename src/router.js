import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

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
      path: '/home',
      redirect: { name: 'home' },
    },
    {
      path: '/news',
      name: 'news',
      component: () => import(/* webpackChunkName: "News" */ './views/News.vue')
    },
    {
      path: '/news-list',
      name: 'news-list',
      component: () => import(/* webpackChunkName: "NewsList" */ './views/NewsList.vue')
    },
    {
      path: '/article',
      name: 'article',
      component: () => import(/* webpackChunkName: "Article" */ './views/Article.vue')
    },
    {
      path: '/book',
      name: 'book',
      component: () => import(/* webpackChunkName: "bookChinese" */ './views/Book.vue')
    },
    {
      path: '/wallet',
      name: 'wallet',
      component: () => import(/* webpackChunkName: "wallet" */ './views/Wallet.vue')
    },
    {
      path: '/about',
      name: 'about',
      redirect: { name: 'why' },
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
      children: [
        {
          path: 'why',
          name: 'why',
          component: () => import(/* webpackChunkName: "Why" */ './views/Why.vue'),
        }
      ]
    },

  ]
})
