
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TodosView from '../views/TodosView.vue'


const routes = [
  {
    path: '/', 
    component: HomeView,
  },
  {
    path:'/todos',
    component: TodosView,
  }

];


const router = createRouter({ 
  history: createWebHistory(process.env.BASE_URL),
  routes, 
});

export default router;
