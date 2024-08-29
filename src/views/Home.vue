<template>
  <main>
    <section class="welcome">
      <h2>Welcome to LiftLog!</h2>
      <p>Your personal gym assistant to track and improve your workouts.</p>
      <button @click="navigateToSignup">Get Started</button>
    </section>

    <section class="features">
      <div class="feature">
        <h3>Track Your Workouts</h3>
        <p>Log your exercises, sets, and reps.</p>
      </div>
      <div class="feature">
        <h3>Visualize Progress</h3>
        <p>View your workout progress with charts and stats.</p>
      </div>
      <div class="feature">
        <h3>Explore Exercises</h3>
        <p>Find exercises and create personalized workout plans.</p>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: 'HomePage'
}
</script>

<style scoped>
.welcome {
  text-align: center;
}

.features {
  display: flex;
  justify-content: space-around;
  margin-top: 2rem;
}

.feature {
  width: 30%;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  text-align: center;
}
</style>