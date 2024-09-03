<template>
  <header v-if="isSmall">
    <!-- Use router-link to home page -->
    <router-link to="/">
      <!-- Replace the h1 with an image logo -->
      <img src="@/assets/logo.png" alt="LiftLog Logo" class="logo" />
    </router-link>
    <nav>

      <BaseButton type="primary" @click="handleClick">
        <v-icon icon="mdi-account" />
      </BaseButton>
      <HamburgerButton @toggle="handleMenuToggle" />
    </nav>
  </header>
  <header v-else>
    <!-- Use router-link to home page -->
    <router-link to="/">
      <!-- Replace the h1 with an image logo -->
      <img src="@/assets/logo.png" alt="LiftLog Logo" class="logo" />
    </router-link>
    <nav>
      <router-link to="/workouts">Workout Log</router-link>
      <router-link to="/progress">Progress</router-link>
      <router-link to="/exercises">Exercises</router-link>
      <DarkModeButton />


      <BaseButton type="primary" @click="handleClick">
        Account
      </BaseButton>
    </nav>
  </header>
</template>

<script setup>
import BaseButton from "../shared/BaseButton.vue"; // Adjust the path if necessary
import {useResponsive} from "@/composables/useResponsive";
import DarkModeButton from "@/components/comprised/DarkModeButton.vue";
import HamburgerButton from "@/components/shared/HamburgerButton.vue";
const { isSmall } = useResponsive();
const handleMenuToggle = () => {
  // Logic to handle menu toggle, e.g., open/close sidebar
};
// Placeholder handleClick function
function handleClick() {
  console.log('Button clicked!');
}

</script>

<style scoped>
/* Add styles for the logo */
.logo {
  max-height: 60px; /* Adjust size as needed */
  margin-right: 20px; /* Optional spacing */
}

/* Additional styles for nav and header */
nav {
  display: flex;
  align-items: center;
  gap: 20px; /* Space between navigation items */
}

header {
  display: flex;
  align-items: center;
  justify-content: space-between; /* Space between logo and nav */
  padding: 5px 20px 5px 5px;

  border-radius: 0 0 10px 10px;
  color: var(--text-200) !important;
  background-color: var(--background-800) !important;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Optional shadow */
}
</style>
