# Vanilla++ Website

A Vue.js website for the Vanilla++ Minecraft project, hosted on GitHub Pages.

## Project Structure

```
├── src/
│   ├── components/          # Vue components folder
│   │   ├── Header.vue      # Navigation header component
│   │   └── FeatureCard.vue # Feature display component
│   ├── App.vue             # Main application component
│   └── main.js             # Application entry point
├── index.html              # HTML entry point
├── vite.config.js          # Vite configuration
└── package.json            # Project dependencies
```

## Setup & Development

### Prerequisites
- Node.js (version 18 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run development server:
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Building for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## Deployment to GitHub Pages

### Initial Setup

1. Go to your repository settings on GitHub
2. Navigate to **Settings** > **Pages**
3. Under **Source**, select **GitHub Actions**

### Automatic Deployment

The website is automatically deployed to GitHub Pages when you push to the `main` branch. The workflow is configured in [.github/workflows/deploy.yml](.github/workflows/deploy.yml).

After pushing to main:
1. GitHub Actions will automatically build the site
2. Deploy it to GitHub Pages
3. Your site will be available at: `https://[your-username].github.io/Vanilla-Plus-Plus/`

## Adding New Components

To add a new component:

1. Create a new `.vue` file in the [src/components/](src/components/) folder
2. Import and register it in [src/App.vue](src/App.vue) or another parent component
3. Use it in your template

Example:
```vue
<template>
  <div>
    <YourNewComponent />
  </div>
</template>

<script>
import YourNewComponent from './components/YourNewComponent.vue'

export default {
  components: {
    YourNewComponent
  }
}
</script>
```

## Technology Stack

- **Vue 3** - Progressive JavaScript framework
- **Vite** - Fast build tool and dev server
- **GitHub Pages** - Free static site hosting
- **GitHub Actions** - Automated deployment

## License

MIT