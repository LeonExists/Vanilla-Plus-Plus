# Icons Folder

Place your icon files here (SVG, PNG, etc.)

## Usage in Vue Components

### For SVG icons (recommended):

```vue
<template>
  <img src="@/assets/icons/your-icon.svg" alt="Icon" class="icon">
</template>

<style scoped>
.icon {
  width: 24px;
  height: 24px;
}
</style>
```

### Or import and use inline:

```vue
<script>
import iconSrc from '@/assets/icons/your-icon.svg'

export default {
  data() {
    return {
      icon: iconSrc
    }
  }
}
</script>

<template>
  <img :src="icon" alt="Icon">
</template>
```
