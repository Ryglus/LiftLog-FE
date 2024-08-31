<template>


  <div v-if="isSmall">
    <MainHeader />
    <router-view></router-view> <!-- This is where the view components will be rendered -->
  </div>

  <div class="main-container" v-else>
    <MainHeader />
    <router-view></router-view> <!-- This is where the view components will be rendered -->
  </div>



</template>

<script setup>
import MainHeader from '../components/comprised/MainHeader.vue';
import {useResponsive} from "@/composables/useResponsive";
const { isSmall } = useResponsive();


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
.main-container {
  margin: 0 5% 0 5%;
  min-height: 100vh;
}
</style>
