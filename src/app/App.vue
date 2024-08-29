<template>

  <MainHeader />

  <router-view></router-view> <!-- This is where the view components will be rendered -->

  <BaseButton @click="toggleTheme">{{ isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode' }}</BaseButton>

  <footer>
      <p>&copy; 2024 LiftLog. All rights reserved.</p>
      <nav>
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Service</a>
        <a href="#">Contact Us</a>
      </nav>
    </footer>
</template>

<script setup>
import BaseButton from '../components/shared/BaseButton.vue'
import MainHeader from '../components/comprised/MainHeader.vue';
import {computed, watch} from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const isDark = computed(() => store.getters.isDark);



const toggleTheme = () => {
  store.dispatch('toggleDark');
  console.log('toggleDark button clicked');

};
// Watch for changes and update the document theme
watch(isDark, (newValue) => {
  document.documentElement.setAttribute('data-theme', newValue ? 'dark' : 'light');
});
</script>

<script>
export default {
  name: 'App',
  methods: {
    navigateToSignup() {
      this.$router.push('/signup');  // Navigate to signup page
    }
  }
}
</script>

<style scoped>
/* Add basic styling here */
header {
  background-color: #333;
  color: #fff;
  padding: 1rem;
}

header h1 {
  margin: 0;
}

nav a {
  color: #fff;
  margin-right: 1rem;
  text-decoration: none;
}

main {
  padding: 2rem;
}



footer {
  background-color: #333;
  color: #fff;
  text-align: center;
  padding: 1rem;
  position: fixed;
  width: 100%;
  bottom: 0;
}

footer nav a {
  color: #fff;
  margin: 0 0.5rem;
}
</style>
