<script setup>

</script>

<template>
  <footer>
    <p>&copy; 2024 LiftLog. All rights reserved.</p>
    <nav>
      <a href="#">Privacy Policy</a>
      <a href="#">Terms of Service</a>
      <a href="#">Contact Us</a>
    </nav>
  </footer>
</template>

<style scoped>
footer {
  text-align: center;
  padding: 1rem;
  position: fixed;
  display: flex;
  align-items: center;
  bottom: 0;

  color: var(--text-200) !important;
  background-color: var(--background-800) !important;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Optional shadow */
}

footer nav a {
  color: #fff;
  margin: 0 0.5rem;
}
</style>