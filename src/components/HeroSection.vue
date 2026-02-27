<template>
  <section class="hero">
    <div class="hero-content">
      <h1>Welcome to Vanilla++</h1>
      <p>Enhanced Vanilla Minecraft Experience</p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroSection'
}
</script>

<style scoped>
/* Hero */
.hero {
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  position: relative;

  min-height: 100vh;

  background-image: url('/images/caves_and_cliffs.png');
  background-size: cover;
  background-position: center;
  background-attachment: local;
}

.hero::before {
  content: '';

  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  
  background: linear-gradient(to bottom, rgba(2, 6, 23, 0.3), rgba(2, 6, 23, 0.7));
}

/* Content */
.hero-content {
  position: relative;
  z-index: 2;

  max-width: 800px;

  padding: 2rem;
  
  text-align: center;
}

.hero-content h1 {
  margin-bottom: 1.5rem;

  font-family: var(--font-minecraft);
  font-weight: 700;

  background: var(--brand-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  font-size: 4rem;
  letter-spacing: 0.05em;
}

.hero-content p {
  color: var(--text-main);
  font-size: 1.5rem;
}

@media (max-width: 768px) {
  .hero-content h1 {
    font-size: 2.5rem;
  }

  .hero-content p {
    font-size: 1.25rem;
  }
}
</style>
