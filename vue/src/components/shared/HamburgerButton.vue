<template>
  <button class="hamburger-button" @click="toggleMenu" aria-label="Toggle menu">
    <span :class="['line', { 'line-active': isActive }]"></span>
    <span :class="['line', { 'line-active': isActive }]"></span>
    <span :class="['line', { 'line-active': isActive }]"></span>
  </button>
</template>

<script setup>
import { ref } from 'vue';

const isActive = ref(false);

const toggleMenu = () => {
  isActive.value = !isActive.value;
  // Emit event to parent component if needed
  // emit('toggle');
};
</script>

<style scoped>
.hamburger-button {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 30px;
  background: transparent;
  border: none;
  cursor: pointer;
  position: relative;
  z-index: 1000; /* Ensure it is above other content */
}

.hamburger-button .line {
  width: 30px;
  height: 3px;
  background-color: var(--text-500);
  margin: 4px 0;
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.hamburger-button .line-active:nth-child(1) {
  transform: rotate(45deg) translate(5px, 6px);
}

.hamburger-button .line-active:nth-child(2) {
  opacity: 0;
}

.hamburger-button .line-active:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -6px);
}

@media (prefers-color-scheme: dark) {
  .hamburger-button .line {
    background-color: var(--text-500);
  }
}
</style>
