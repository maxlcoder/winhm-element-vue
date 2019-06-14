import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/views/Index';
import Home from '@/views/Home';
import Login from '@/views/auth/Login';
import UserCenter from '@/views/user/Center';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/usercenter',
      name: 'UserCenter',
      component: UserCenter,
    },
  ],
});
