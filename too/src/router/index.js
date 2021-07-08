import Vue from 'vue';
import VueRouter from  'vue-router';
import todo from '..views/todo.vue';
import about from '..views/about.vue';

Vue.use(VueRouter);



const routes = [
  { path: '/',name :'todo', component: todo },
  { path: '/about', name:'about',component:about }
];


const router = new VueRouter({
  routes 
});
new Vue({
el:'#app',
router,
render:h => h(App)

});
