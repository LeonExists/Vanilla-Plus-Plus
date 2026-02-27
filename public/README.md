# Public Folder

Files in the `public` folder are served at the root path. They are **not processed** by Vite and are copied as-is to the build output.

## Folder Structure

```
public/
├── images/     # Images (backgrounds, photos, etc.)
└── icons/      # Icons (SVG, PNG)
```

## How to Use

### In HTML/Templates:
```html
<img src="/images/caves_and_cliffs.png" alt="Background">
<img src="/icons/star.svg" alt="Icon">
```

### In CSS:
```css
.hero {
  background-image: url('/images/caves_and_cliffs.png');
}

.icon {
  background-image: url('/icons/download.svg');
}
```

### In Vue Components:
```vue
<template>
  <img src="/images/logo.png" alt="Logo">
</template>
```

## Important Notes

1. **Always use absolute paths** starting with `/` (e.g., `/images/photo.jpg`)
2. **Files are NOT processed** - No optimization, no hashing, no bundling
3. **Referenced at build root** - `/images/file.png` becomes `https://yoursite.com/images/file.png`
4. **For GitHub Pages**: Paths work automatically with the base URL configured in `vite.config.js`

## When to Use Public vs Assets

### Use `public/` for:
- Large images that don't need optimization
- Files referenced in `index.html`
- Files that need specific names (like `favicon.ico`, `robots.txt`)
- Third-party libraries loaded via `<script>` tags

### Use `src/assets/` for:
- Images imported in JavaScript/Vue files
- Images that benefit from optimization
- Icons used frequently in components
- Files that should be versioned/hashed for cache-busting
