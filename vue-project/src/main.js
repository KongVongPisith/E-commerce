import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import store from './stores'

import 'bootstrap/dist/css/bootstrap.css'


router.beforeEach((to, from, next) => {
  const isAuthenticated = store.state.isLoggedIn;
  if (to.meta.requiresAuth) {
    if (isAuthenticated) {
      next();
    } else {
      next('/login');
    }
  } else {
    if (isAuthenticated && to.path === '/login') {
      next('/home');
    } else {
      next();
    }
  }
})

//createApp(App).use(router).use(store).mount('#app');

const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')
