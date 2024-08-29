import { createApp } from 'vue';
import App from './App.vue';
import store from '../store/index'; // Make sure this path is correct
import router from '../router/index';
const app = createApp(App);
import { CIcon } from '@coreui/icons-vue';
import {
    cilArrowBottom,
    cilArrowRight,
    cilArrowTop,
    cilBan,
    cilBasket,
    cilBell,
    cilCalculator,
    cilCalendar
} from '@coreui/icons'

const icons = {
    cilArrowBottom,
    cilArrowRight,
    cilArrowTop,
    cilBan,
    cilBasket,
    cilBell,
    cilCalculator,
    cilCalendar
}

app.use(store);  // Ensure store is used here
app.use(router);
app.provide('icons', icons)
app.component('CIcon', CIcon)
app.mount('#app');

// Set theme based on stored preference
const isDark = store.getters.isDark;
document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
