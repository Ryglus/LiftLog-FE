<template>
  <BaseButton @click="toggleTheme">
    <!-- Conditionally render the icon based on the theme -->
    <v-icon :icon="isDark ?  'mdi-moon-waning-crescent': 'mdi-white-balance-sunny'" />
  </BaseButton>
</template>

<script setup>
import BaseButton from '@/components/shared/BaseButton.vue';
import { computed, watch } from 'vue';
import { useStore } from 'vuex';

// Get the Vuex store instance
const store = useStore();

// Computed property to get the current theme state from the Vuex store
const isDark = computed(() => store.getters.isDark);

// Method to toggle the theme
const toggleTheme = () => {
  store.dispatch('toggleDark'); // Dispatch the Vuex action to toggle the theme
  console.log('toggleDark button clicked'); // Debugging log
};

// Watch for changes to the theme and update the `data-theme` attribute on the <html> element
watch(isDark, (newValue) => {
  document.documentElement.setAttribute('data-theme', newValue ? 'dark' : 'light');
});
</script>

<style scoped>
/* Style specific to DarkModeButton, if any.
   Scoped styling ensures these styles only apply to this component. */
</style>
