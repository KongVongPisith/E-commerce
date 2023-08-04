import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './stores'
import 'bootstrap/dist/css/bootstrap.css'

// const app = createApp(App)

// router.beforeEach((to, from, next) => {
//   if (to.meta.requiresAuth) {
//     const isAuthenticated = store.state.isLoggedIn;
//     if (isAuthenticated) {
//       next();
//     } else {
//       next('/login');
//     }
//   } else {
//     next();
//   }
// });

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

router.beforeEach((to, from, next) => {
  const isAuthenticated = store.state.isLoggedIn;
  if (isAuthenticated && to.path === '/login') {
    next('/home');
  } else {
    next();
  }
});

createApp(App).use(router).use(store).mount('#app');

// const app = createApp(App)
// app.use(router)
// app.use(store)
// app.mount('#app')
