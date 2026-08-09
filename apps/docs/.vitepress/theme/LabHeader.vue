<script lang="ts" setup>
import VPNavBarSearch from 'vitepress/dist/client/theme-default/components/VPNavBarSearch.vue'
</script>

<template>
  <header class="lab-header">
    <a class="lab-brand" href="/" target="_self">
      <img :src="'/assets/avatar.jpeg'" alt="Imber" />
      <span>Imber Frontend</span>
    </a>
    <nav class="lab-tabs" aria-label="产品导航">
      <a href="/" target="_self">Overview</a>
      <a href="/animation/" target="_self">Animation</a>
      <a href="/3d/" target="_self">3D</a>
      <a class="active" href="/docs/" aria-current="page">Docs</a>
    </nav>
    <div class="lab-actions">
      <VPNavBarSearch class="lab-search" />
      <a class="lab-github" href="https://github.com/imberZsk/imber-frontend">GitHub</a>
    </div>
  </header>
</template>
