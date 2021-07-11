import Vue from 'vue';
import VueRouter from 'vue-router';
import todo from '../views/todo.vue';
import about from '../views/about.vue';
import calendar from '../views/calendar.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/',name :'todo', component: todo },
  { path: '/calendar', name:'calendar',component:calendar },
  { path: '/about', name:'about',component:about },
  
];

const router = new VueRouter({ routes });

export default router;
