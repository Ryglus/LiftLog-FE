<template>
  <button :class="['base-button', typeClass, sizeClass]" :disabled="disabled">
    <slot></slot>
  </button>
</template>

<script setup>
import { defineProps, computed } from 'vue';

const props = defineProps({
  type: {
    type: String,
    default: 'primary', // Default button type
    validator: (value) => ['primary', 'secondary', 'danger'].includes(value),
  },
  size: {
    type: String,
    default: 'medium', // Default button size
    validator: (value) => ['small', 'medium', 'large'].includes(value),
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});

const typeClass = computed(() => `button-${props.type}`);
const sizeClass = computed(() => `button-${props.size}`);
</script>

<style scoped>
.base-button {
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.base-button:disabled {
  cursor: not-allowed;
  opacity: 0.6;
}

.button-primary {
  background-color: #007bff;
  color: #fff;
}

.button-primary:hover {
  background-color: #0056b3;
}

.button-secondary {
  background-color: #6c757d;
  color: #fff;
}

.button-secondary:hover {
  background-color: #5a6268;
}

.button-danger {
  background-color: #dc3545;
  color: #fff;
}

.button-danger:hover {
  background-color: #c82333;
}

.button-small {
  padding: 5px 10px;
  font-size: 12px;
}

.button-medium {
  padding: 10px 20px;
  font-size: 14px;
}

.button-large {
  padding: 15px 30px;
  font-size: 16px;
}
</style>
