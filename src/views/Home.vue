<template>
  <main>
    <section class="welcome">
      <h2>WELCOME TO LIFTLOG!</h2>
      <p>Your personal gym assistant designed to help you track and enhance your workouts, achieve your fitness goals, and stay motivated along the way.</p>
      <BaseButton @click="navigateToSignup">Get Started</BaseButton>
    </section>
    <section class="features">
      <div class="feature">
        <h3>Track Your Workouts</h3>
        <p>Log every set, rep, and exercise with ease. Keep a comprehensive record of your fitness journey and monitor your progress over time.</p>
      </div>
      <div class="feature">
        <h3>Visualize Progress</h3>
        <p>Transform your workout data into insightful charts and statistics. Easily identify trends and milestones to stay motivated and on track with your fitness goals.</p>
      </div>
      <div class="feature">
        <h3>Explore Exercises</h3>
        <p>Discover a variety of exercises to enhance your workout routine. Create personalized plans tailored to your fitness level and objectives.</p>
        <img src="@/assets/dumbell.png" alt="Explore Exercises" class="feature-image" />
      </div>
    </section>

  </main>
</template>

<script>
import BaseButton from '../components/shared/BaseButton.vue';

export default {
  name: 'HomePage',
  components: {
    BaseButton,
  },
  methods: {
    navigateToSignup() {
      this.$router.push('/signup');
    }
  }
}
</script>

<style scoped>
/* Apply global font settings */
body {
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-style: normal;
  font-optical-sizing: auto;
  font-variation-settings: "slnt" 0;
  margin: 0;
}


/* Welcome section styling */
.welcome {
  background-image: url(https://t4.ftcdn.net/jpg/03/20/49/25/360_F_320492530_2aeFG0eKU03OM20OD4eLzRte0K6xpw9i.jpg);
  text-align: center;
  border-radius: 10px;
  margin: 2rem 0;
  padding: 20px;
}

.welcome h2 {
  font-size: 2.5rem;
  color: var(--primary-500);
}

.welcome p {
  font-size: 1.2rem;
  margin: 1rem 0;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  color: #fff;
}

/* Features section styling */
.features {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 2rem;
  margin-top: 2rem;
  align-items: start;
}

.feature {
  padding: 1.5rem;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  text-align: center;
  background-color: var(--primary-700);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.feature:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.large-feature {
  grid-column: span 2;
}

.feature h3 {
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: var(--text-950);
}

.feature p {
  font-size: 1rem;
  color: var(--text-950);
}

.feature-image {
  margin-top: 1rem;
  width: 100px;
  height: auto;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .features {
    grid-template-columns: 1fr;
  }

  .large-feature {
    grid-column: span 1;
  }

  .welcome h2 {
    font-size: 2rem;
  }

  .welcome p {
    font-size: 1rem;
  }
}
</style>