import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../components/TheWelcome.vue';
import Login from '../components/Login.vue';
import Admin from '../components/Admin.vue';
import Profile from '../components/Profile.vue';
import ProductDetail from '../components/Product.vue';
import store from '../stores'
import EditProfile from '../components/EditProfile.vue';
import PostAd from '../components/PostAd.vue';

function isAdmin() {
  const token = localStorage.getItem('token');
  const userRole = token ? JSON.parse(atob(token.split('.')[1])).role : null;
  return userRole === 'admin';
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login,
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin,
      meta: { requiresAuth: true, role: 'admin' }, 
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView,
      meta: { requiresAuth: true ,role:'user'}, 
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile,
      meta: { requiresAuth: true ,role:'user'},
    },
    {
      path: '/home/product/:id',
      name: 'product-detail',
      component: ProductDetail,
      props: true ,
    },
    {
      path: '/editProfile',
      name: 'editProfile',
      component: EditProfile,
      meta: { requiresAuth: true ,role:'user'},
    },
    {
      path: '/postAd',
      name: 'PostAd',
      component: PostAd,
      meta: { requiresAuth: true ,role:'user'},
    },
  ],
});


function isAuthenticated(to) {
  const token = localStorage.getItem('token');
  if (!token) return false;

  const userRole = store.state.userRole;
  if (!userRole) return false;
  return to.meta.role === userRole;
}

function checkAuthentication() {
  const token = localStorage.getItem('token');
  return !!token; 
}

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    const isAuthenticated = store.state.isLoggedIn;
    if (isAuthenticated) {
      const userRole = store.state.userRole;
      if (to.meta.role === 'admin' && userRole === 'admin') {
        next();
      } else if (to.meta.role === 'user' && userRole === 'user') {
        next();
      } else {
        next(userRole === 'admin' ? { name: 'admin' } : { name: 'home' });
      }
    } else {
      next('/login');
    }
  } else {
    next();
  }
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    const isAuthenticated = store.state.isLoggedIn;
    if (isAuthenticated) {
      next();
    } else {
      next('/login');
    }
  } else {
    next();
  }
});

export default router;