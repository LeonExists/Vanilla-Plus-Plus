<template>
  <div id="app">
    <Header />
    <main>
      <h1>Welcome to Vanilla++</h1>
      <p>Enhanced Vanilla Minecraft Experience</p>
      <FeatureCard
        title="Enhanced Gameplay"
        description="Experience Minecraft with quality of life improvements while keeping the vanilla feel."
      />
    </main>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import FeatureCard from './components/FeatureCard.vue'

export default {
  name: 'App',
  components: {
    Header,
    FeatureCard
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  background-color: #1a1a1a;
  color: #ffffff;
}

#app {
  min-height: 100vh;
}

main {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
  color: #4ade80;
}

p {
  font-size: 1.25rem;
  margin-bottom: 2rem;
  color: #d1d5db;
}
</style>
