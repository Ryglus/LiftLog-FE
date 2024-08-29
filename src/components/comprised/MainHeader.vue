<template>
  <header>
      <router-link to="/"><h1>LiftLog</h1></router-link>
    <nav>

      <router-link to="/workouts">Workout Log</router-link>
      <router-link to="/progress">Progress</router-link>
      <router-link to="/exercises">Exercises</router-link>
      <CIcon icon="cilArrowBottom" />
      <BaseButton type="primary" @click="handleClick" v-if="isSmall">
        <CIcon icon="cilArrowBottom" />
      </BaseButton>
      <BaseButton type="primary" @click="handleClick" v-else>
        Account
      </BaseButton>
      <IconButton>
        <CIcon icon="cilArrowBottom" />
      </IconButton>

    </nav>
  </header>
</template>

<script setup>
import BaseButton from "../shared/BaseButton.vue"; // Adjust the path if necessary
import { useResponsive } from '@/composables/useResponsive';
import IconButton from "@/components/shared/IconButton.vue";

const { isSmall } = useResponsive();

const handleClick = () => {
  console.log('Primary button clicked');
};

</script>

<style>
header {
  display: flex;
  justify-content: space-between;
  margin: 0 5% 0 5%;
  padding: 1rem;
  color: var(--text-200) !important;
  background-color: var(--background-800) !important;
}

h1 {
  margin: 0;
  font-size: 2rem;
}

nav {
  display: flex;
  gap: 1rem;
  align-items: center;
}

nav a {
  text-decoration: none;

}

nav a.router-link-active {
  font-weight: bold;
}

nav a:hover {
  text-decoration: underline;
}
</style>
