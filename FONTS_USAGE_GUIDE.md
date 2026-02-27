# Fonts Usage Guide for Vanilla++

## Quick Start

### 1. Add Your Font Files

Place your font files in the `public/fonts/` folder:

```
public/fonts/
├── YourFont-Regular.woff2
├── YourFont-Bold.woff2
└── YourFont-Italic.woff2
```

### 2. Add @font-face to style.css

Open `style.css` and add your font definitions at the top:

```css
/* Add this at the top of style.css */
@font-face {
  font-family: 'Minecraft';
  src: url('/fonts/Minecraft-Regular.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Minecraft';
  src: url('/fonts/Minecraft-Bold.woff2') format('woff2');
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}
```

### 3. Use the Font

Update your CSS variables or styles:

```css
:root {
  --font-heading: 'Minecraft', monospace;
  --font-body: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

body {
  font-family: var(--font-body);
}

h1, h2, h3 {
  font-family: var(--font-heading);
}
```

## Method 1: Update style.css (Recommended)

Edit `style.css`:

```css
/* Custom Fonts */
@font-face {
  font-family: 'MinecraftFont';
  src: url('/fonts/Minecraft.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

:root {
  /* ... existing variables ... */
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'MinecraftFont', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background-color: var(--bg-page);
  color: var(--text-main);
}
```

## Method 2: Create fonts.css

Create a separate `public/fonts/fonts.css`:

```css
/* Minecraft Font */
@font-face {
  font-family: 'Minecraft';
  src: url('/fonts/Minecraft-Regular.woff2') format('woff2'),
       url('/fonts/Minecraft-Regular.woff') format('woff');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Minecraft';
  src: url('/fonts/Minecraft-Bold.woff2') format('woff2'),
       url('/fonts/Minecraft-Bold.woff') format('woff');
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}
```

Then import it in `index.html`:

```html
<head>
  <link rel="stylesheet" href="/fonts/fonts.css">
  <!-- other links -->
</head>
```

## Method 3: Import in Vue Components

In any Vue component:

```vue
<style>
@font-face {
  font-family: 'Minecraft';
  src: url('/fonts/Minecraft.woff2') format('woff2');
  font-weight: 400;
  font-display: swap;
}

.minecraft-heading {
  font-family: 'Minecraft', monospace;
}
</style>
```

## Example: Minecraft-Themed Fonts

### Popular Minecraft Fonts

1. **Minecraft Regular** - Official game font
2. **Minecrafter** - Free alternative
3. **Monocraft** - Monospace variant
4. **MinecraftTen** - Clean variant

### Implementation Example

```css
/* Heading Font */
@font-face {
  font-family: 'MinecraftHeading';
  src: url('/fonts/Minecraft-Bold.woff2') format('woff2');
  font-weight: 700;
  font-display: swap;
}

/* Body Font */
@font-face {
  font-family: 'MinecraftBody';
  src: url('/fonts/Monocraft.woff2') format('woff2');
  font-weight: 400;
  font-display: swap;
}

/* Apply */
h1, h2, h3, h4, h5, h6 {
  font-family: 'MinecraftHeading', monospace;
}

body, p, span {
  font-family: 'MinecraftBody', 'Courier New', monospace;
}
```

## Update Your Project

### Update CSS Variables in style.css

```css
:root {
  /* Add font variables */
  --font-minecraft: 'Minecraft', monospace;
  --font-system: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;

  /* Dark Mode colors */
  --bg-page: #020617;
  --text-main: #f1f5f9;
  --text-muted: #94a3b8;
  --border-color: rgba(255, 255, 255, 0.1);

  /* Brand & Accents */
  --brand-primary: #10b981;
  --brand-hover: #059669;
  --brand-gradient: linear-gradient(to right, #34d399, #22d3ee);

  /* Glass Effect */
  --glass-bg: rgba(2, 6, 23, 0.8);
  --glass-border: 1px solid rgba(255, 255, 255, 0.1);
}
```

### Use in Components

```vue
<style scoped>
h1 {
  font-family: var(--font-minecraft);
}

p {
  font-family: var(--font-system);
}
</style>
```

## Performance Optimization

### Preload Critical Fonts

Add to `index.html` `<head>`:

```html
<link rel="preload" href="/fonts/Minecraft.woff2" as="font" type="font/woff2" crossorigin>
```

### Subset Fonts

If your font file is large, create a subset with only needed characters:
- Use tools like `glyphhanger` or `fonttools`
- Include only Latin characters if you don't need others

### Font Loading Strategy

```css
@font-face {
  font-family: 'Minecraft';
  src: url('/fonts/Minecraft.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
  font-display: swap; /* Show fallback immediately, swap when loaded */
}
```

## Where to Get Fonts

### Free Minecraft Fonts
- [Monocraft](https://github.com/IdreesInc/Monocraft) - Free, open source
- [Minecrafter](https://www.dafont.com/minecrafter.font) - Free alternative
- [MinecraftTen](https://www.fontspace.com/minecraft-ten-font-f40317) - Free

### Convert Fonts to WOFF2
- Use [CloudConvert](https://cloudconvert.com/ttf-to-woff2)
- Use [Font Squirrel Webfont Generator](https://www.fontsquirrel.com/tools/webfont-generator)

## Troubleshooting

### Font Not Loading?
1. Check file path: `/fonts/YourFont.woff2`
2. Check browser console for errors
3. Verify font file exists in `public/fonts/`
4. Check CORS if loading from external source

### Font Looks Different?
1. Verify font-weight matches the file
2. Check if multiple @font-face rules conflict
3. Ensure fallback fonts are appropriate

### Performance Issues?
1. Use WOFF2 format (smallest file size)
2. Only load weights you use
3. Consider system fonts for body text
4. Use font-display: swap
