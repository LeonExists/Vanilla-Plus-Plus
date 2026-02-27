# Images Folder

Place your image files here (PNG, JPG, WebP, etc.)

## Usage in Vue Components

```vue
<template>
  <img src="@/assets/images/your-image.png" alt="Description">
</template>
```

Or with import:

```vue
<script>
import myImage from '@/assets/images/your-image.png'

export default {
  data() {
    return {
      imageSrc: myImage
    }
  }
}
</script>

<template>
  <img :src="imageSrc" alt="Description">
</template>
```
