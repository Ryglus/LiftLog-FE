<template>
  <header>
    <h1>LiftLog</h1>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/workouts">Workout Log</router-link>
      <router-link to="/progress">Progress</router-link>
      <router-link to="/exercises">Exercises</router-link>
      <BaseButton type="primary" @click="handleClick">Primary Button</BaseButton>
      <BaseButton type="secondary" size="small">Secondary Button</BaseButton>
      <BaseButton type="danger" size="large" :disabled="true">Danger Button</BaseButton>
    </nav>
  </header>
</template>

<script setup>
import BaseButton from "../shared/BaseButton.vue"; // Adjust the path if necessary

const handleClick = () => {
  console.log('Primary button clicked');
};
</script>

<style scoped>
header {
  padding: 1rem;
  background-color: var(--background-700);
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
  color: #007bff;
}

nav a.router-link-active {
  font-weight: bold;
}

nav a:hover {
  text-decoration: underline;
}
</style>
