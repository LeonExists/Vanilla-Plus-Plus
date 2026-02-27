<template>
  <header class="site-header">
    <nav>
      <div class="logo">
        <div class="logo-icon">V</div>
        <span class="logo-text">Vanilla++</span>
      </div>

      <ul class="nav-links">
        <li><a href="#features">Features</a></li>
        <li><a href="#world">World</a></li>
        <li><a href="#download">Download</a></li>
      </ul>

      <a href="#download" class="btn-download">
        Download
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
      </a>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
.site-header {
  position: fixed;
  z-index: 50;
  top: 0;
  
  width: 100%;
  
  background: transparent;
  
  border-bottom: 1px solid transparent;
  
  transition: background 0.3s, border-color 0.3s, backdrop-filter 0.3s;
}

.site-header.scrolled {
  background: var(--glass-bg);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  
  border-bottom: var(--glass-border);

  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  max-width: 1200px;
  height: 5rem;
  
  margin: 0 auto;
  
  padding: 0 1.5rem;

}

.logo {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.logo-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  
  width: 2rem;
  height: 2rem;

  background: var(--brand-primary);
  
  border-radius: 0.5rem;
  color: #fff;
  font-size: 1rem;
  font-weight: 700;
}

.logo-text {
  color: var(--text-main);
  font-size: 1.25rem;
  font-weight: 700;
  letter-spacing: -0.02em;
}

.nav-links {
  display: flex;
  gap: 2rem;
  
  margin: 0;
  
  padding: 0;

  list-style: none;
}

.nav-links a {
  color: var(--text-main);
  text-decoration: none;
  font-size: 0.875rem;
  font-weight: 500;

  transition: color 0.3s;
}

.nav-links a:hover {
  color: var(--brand-primary);
}

.btn-download {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;

  padding: 0.5rem 1.25rem;
  
  background: var(--brand-primary);
  
  box-shadow: 0 4px 14px rgba(16, 185, 129, 0.25);
  
  border-radius: 9999px;
  
  
  color: #fff;
  text-decoration: none;
  font-size: 0.875rem;
  font-weight: 600;
  
  transition: opacity 0.2s, box-shadow 0.2s;
}

.btn-download:hover {
  opacity: 0.9;

  box-shadow: 0 6px 20px rgba(16, 185, 129, 0.35);
}

@media (max-width: 768px) {
  .nav-links {
    display: none;
  }
}
</style>