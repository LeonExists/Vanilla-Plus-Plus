<template>
  <div class="feature-card">
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
  </div>
</template>

<script>
export default {
  name: 'FeatureCard',
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.feature-card {
  background-color: #262626;
  border: 2px solid #4ade80;
  border-radius: 8px;
  padding: 2rem;
  margin: 1rem 0;
  transition: transform 0.3s, box-shadow 0.3s;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(74, 222, 128, 0.2);
}

.feature-card h3 {
  color: #4ade80;
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.feature-card p {
  color: #d1d5db;
  font-size: 1rem;
  margin: 0;
}
</style>
