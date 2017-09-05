import step1 from './components/step1.vue';
import login from './components/login.vue'
import home from './components/home.vue';



const routes = [
    { name:'step1', path: '/step1', component: step1},
    { name:'login',path: '/login', component:login}, 
    {name:'home', path: '/home',component:home},
  
     { path: '*', redirect: '/login' }
   
  
];

export default routes
