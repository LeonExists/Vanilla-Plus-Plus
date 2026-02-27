# Assets Usage Guide

This guide shows you how to use images and icons in your Vue.js components.

## Folder Structure

```
src/assets/
├── backgrounds/     # Background images (already exists)
├── images/          # General images (logos, photos, etc.)
└── icons/           # Icon files (SVG, PNG icons)
```

## Method 1: Direct Path Reference (Simplest)

Use the `@` alias which points to the `src` directory:

```vue
<template>
  <div>
    <!-- Images -->
    <img src="@/assets/images/logo.png" alt="Logo">

    <!-- Icons -->
    <img src="@/assets/icons/check.svg" alt="Check" class="icon">

    <!-- Backgrounds -->
    <img src="@/assets/backgrounds/caves_and_cliffs.png" alt="Background">
  </div>
</template>

<style scoped>
.icon {
  width: 24px;
  height: 24px;
}
</style>
```

## Method 2: CSS Background Images

```vue
<template>
  <div class="hero-banner"></div>
</template>

<style scoped>
.hero-banner {
  background-image: url('@/assets/images/banner.jpg');
  background-size: cover;
  background-position: center;
  height: 400px;
}
</style>
```

## Method 3: Import in Script (For Dynamic Use)

```vue
<script>
import logo from '@/assets/images/logo.png'
import icon from '@/assets/icons/star.svg'

export default {
  data() {
    return {
      logoSrc: logo,
      iconSrc: icon,
      // Or use directly in arrays/objects
      gallery: [
        '@/assets/images/photo1.jpg',
        '@/assets/images/photo2.jpg',
      ]
    }
  }
}
</script>

<template>
  <div>
    <img :src="logoSrc" alt="Logo">
    <img :src="iconSrc" alt="Icon">
  </div>
</template>
```

## Method 4: Dynamic Images with v-bind

```vue
<script>
export default {
  data() {
    return {
      currentImage: 'caves_and_cliffs.png'
    }
  },
  computed: {
    imageUrl() {
      return new URL(`../assets/backgrounds/${this.currentImage}`, import.meta.url).href
    }
  }
}
</script>

<template>
  <img :src="imageUrl" alt="Dynamic Background">
</template>
```

## Method 5: Component Props with Images

```vue
<!-- FeatureCard.vue -->
<script>
export default {
  props: {
    icon: {
      type: String,
      required: true
    },
    title: String
  }
}
</script>

<template>
  <div class="card">
    <img :src="icon" alt="Feature Icon" class="feature-icon">
    <h3>{{ title }}</h3>
  </div>
</template>

<!-- Usage in parent component -->
<template>
  <FeatureCard
    icon="@/assets/icons/sword.svg"
    title="Combat"
  />
</template>
```

## Real Example: Using Icons in Your Header

```vue
<template>
  <header>
    <div class="logo">
      <!-- Logo image -->
      <img src="@/assets/images/logo.png" alt="Vanilla++" class="logo-img">
      <span>Vanilla++</span>
    </div>

    <nav>
      <a href="#features">
        <img src="@/assets/icons/star.svg" alt="" class="nav-icon">
        Features
      </a>
      <a href="#download">
        <img src="@/assets/icons/download.svg" alt="" class="nav-icon">
        Download
      </a>
    </nav>
  </header>
</template>

<style scoped>
.logo-img {
  width: 40px;
  height: 40px;
}

.nav-icon {
  width: 20px;
  height: 20px;
  margin-right: 0.5rem;
}
</style>
```

## Tips

1. **Use SVG for icons** - They scale perfectly and can be styled with CSS
2. **Optimize images** - Compress images before adding them to reduce file size
3. **Use WebP format** - Modern format with better compression (with fallbacks)
4. **Use `@` alias** - Always use `@/assets/...` instead of relative paths
5. **Add alt text** - Always provide descriptive alt text for accessibility

## File Formats Supported

- **Images**: PNG, JPG, JPEG, WebP, GIF
- **Icons**: SVG (recommended), PNG
- **Backgrounds**: PNG, JPG, WebP

## Where to Put Files

- `src/assets/images/` - Logos, photos, illustrations, general images
- `src/assets/icons/` - UI icons, small graphics (SVG preferred)
- `src/assets/backgrounds/` - Large background images (already exists)
