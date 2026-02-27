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
  margin: 1rem 0;

  padding: 2rem;

  background: var(--glass-bg);
  backdrop-filter: blur(10px);

  border: var(--glass-border);
  border-radius: 8px;

  transition: transform 0.3s, box-shadow 0.3s, border-color 0.3s;
}

.feature-card:hover {
  transform: translateY(-5px);

  border-color: var(--brand-primary);
  box-shadow: 0 10px 20px rgba(16, 185, 129, 0.2);
}

.feature-card h3 {
  margin-bottom: 0.5rem;

  color: var(--brand-primary);
  font-size: 1.5rem;
}

.feature-card p {
  margin: 0;

  color: var(--text-muted);
  font-size: 1rem;
}
</style>
