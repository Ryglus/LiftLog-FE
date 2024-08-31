import { createApp } from 'vue';
import App from './App.vue';
import store from '../store/index'; // Make sure this path is correct
import router from '../router/index';


// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'


const app = createApp(App);
const vuetify = createVuetify({
    components,
    directives,
})

app.use(store);  // Ensure store is used here
app.use(router);
app.use(vuetify).mount('#app');

// Set theme based on stored preference
const isDark = store.getters.isDark;
document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
