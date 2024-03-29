import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import { getCookie } from '@/HelperFunctions/isAuthenticated'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('@/views/ProfilePage.vue'),
    children:[
      {
        path:'/profile/profile-favorites',
        name:'profile-favorites',
        component: () => import('@/views/viewsProfile/ProfileFavoritesPage.vue')
      },
      {
        path:'/profile/profile-reviews',
        name: 'profile-reviews',
        component: () => import('@/views/viewsProfile/ProfileReviewsPage.vue')
      },
      {
        path:'/profile/profile-beweries',
        name:'profile-beweries',
        component:() => import('@/views/viewsProfile/ProfileBeweriesPage.vue')
      },
      {
        path:'/profile/profile-shops',
        name:'profile-shops',
        component:() => import('@/views/viewsProfile/ProfileShopsPage.vue')
      },
    ],
  },
  {
    path: '/profile/profile-shops/:placeId',
    name: 'one-sile-page',
    component: () => import('@/views/viewsProfile/OneSilePage.vue')
  },
  
  {
    path: '/places',
    name: 'places',
    component: () => import('@/views/PlacesPage.vue')
  },
  {
    path: '/news',
    name: 'news',
    component: () => import('@/views/NewsPage.vue')
  },
  {
    path: '/reviews',
    name: 'reviews',
    component: () => import('@/views/ReviewsPage.vue')
  },
  {
    path: '/beer',
    name: 'beer',
    component: () => import('@/views/BeerPage.vue')
  },
  {
    path: '/breweries',
    name: 'breweries',
    component: () => import('@/views/BreweriesPage.vue')
  },
  {
    path: '/feedback',
    name: 'feedback',
    component: () => import('@/views/FeedbackPage.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.path.startsWith('/profile')) {
    if (getCookie('token=')) {
      next();
    } else {
      next('/');
    }
  } else {
    next();
  }
})
export default router
