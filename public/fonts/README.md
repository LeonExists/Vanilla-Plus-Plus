# Fonts Folder

Place your custom font files here (TTF, OTF, WOFF, WOFF2).

## Supported Font Formats

- **WOFF2** (recommended) - Best compression, modern browser support
- **WOFF** - Good fallback for older browsers
- **TTF** - Universal support
- **OTF** - OpenType format

## How to Use Custom Fonts

### Step 1: Add Font Files
Place your font files in this folder:
```
public/fonts/
├── MyFont-Regular.woff2
├── MyFont-Bold.woff2
└── MyFont-Italic.woff2
```

### Step 2: Define @font-face in CSS

Add this to your `style.css` or component `<style>` section:

```css
@font-face {
  font-family: 'MyFont';
  src: url('/fonts/MyFont-Regular.woff2') format('woff2'),
       url('/fonts/MyFont-Regular.woff') format('woff');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'MyFont';
  src: url('/fonts/MyFont-Bold.woff2') format('woff2'),
       url('/fonts/MyFont-Bold.woff') format('woff');
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}
```

### Step 3: Use the Font

```css
body {
  font-family: 'MyFont', -apple-system, sans-serif;
}

h1 {
  font-family: 'MyFont', sans-serif;
  font-weight: 700;
}
```

## Example: Minecraft Font

For a Minecraft-themed site, you might use fonts like:
- **Minecraft** - Official Minecraft font
- **Minecrafter** - Minecraft-style font
- **Monocraft** - Monospace Minecraft font

```css
@font-face {
  font-family: 'Minecraft';
  src: url('/fonts/Minecraft.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

/* Use it */
.minecraft-text {
  font-family: 'Minecraft', monospace;
}
```

## Font Display Options

- `swap` - Show fallback immediately, swap when custom font loads (recommended)
- `block` - Hide text briefly, then show custom font
- `fallback` - Brief hide, show fallback if font takes too long
- `optional` - Use custom font only if already cached

## Performance Tips

1. Use WOFF2 format for best compression
2. Include font-display: swap to prevent invisible text
3. Only load font weights you actually use
4. Consider using system fonts for body text
5. Preload critical fonts in index.html:
   ```html
   <link rel="preload" href="/fonts/MyFont.woff2" as="font" type="font/woff2" crossorigin>
   ```

## Variable Fonts

For fonts with multiple weights in one file:

```css
@font-face {
  font-family: 'MyVariableFont';
  src: url('/fonts/MyFont-Variable.woff2') format('woff2');
  font-weight: 100 900; /* Range of weights */
  font-style: normal;
}
```

## Google Fonts Alternative

If you prefer Google Fonts but want them local:
1. Download fonts from Google Fonts
2. Convert to WOFF2 if needed
3. Place here and use @font-face as above
