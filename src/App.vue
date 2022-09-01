<script lang="ts">
import MainNavbar from '@/components/MainNavbar.vue'

export default {
  components: {
    MainNavbar,
  },
}
</script>

<template>
  <div id="app">
    <main-navbar />

    <div id="app-content">
      <router-view />
    </div>
  </div>
</template>