import { createApp } from 'vue';
import App from './App.vue';
import store from '../store/index'; // Make sure this path is correct
import router from '../router/index';
import "../assets/style.css"
const app = createApp(App);

app.use(store);  // Ensure store is used here
app.use(router);
app.mount('#app');

// Set theme based on stored preference
const isDark = store.getters.isDark;
document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
