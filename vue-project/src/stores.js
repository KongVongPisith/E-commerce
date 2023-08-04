import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      isLoggedIn: localStorage.getItem('isLoggedIn') === 'true', // Load from local storage
      userRole: localStorage.getItem('userRole') || '', // Load from local storage
    };
  },
  mutations: {
    setLoggedIn(state, isLoggedIn) {
      state.isLoggedIn = isLoggedIn;
      localStorage.setItem('isLoggedIn', isLoggedIn); // Save to local storage
    },
    setUserRole(state, role) {
      console.log('UserRole Mutation:', role);
      state.userRole = role;
      localStorage.setItem('userRole', role); // Save to local storage
    },
  },
});

export default store;
