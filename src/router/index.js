import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Workouts from '../views/Workouts.vue';
import Progress from '../views/Progress.vue';
import Exercises from '../views/Exercises.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/workouts', component: Workouts },
    { path: '/progress', component: Progress },
    { path: '/exercises', component: Exercises }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
