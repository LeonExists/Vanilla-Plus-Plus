<template>
  <div id="app">

    <Header />
    <Hero />
    <Features />

  </div>
</template>

<script>
import Header from './components/Header.vue'
import Hero from './components/HeroSection.vue'
import Features from './components/FeaturesSection.vue'

export default {
  name: 'App',
  components: {
    Header,
    Hero,
    Features
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
  background-color: var(--bg-page);

  color: var(--text-main);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
}

#app {
  min-height: 100vh;
}
</style>
