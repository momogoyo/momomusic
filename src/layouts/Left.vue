<script setup lang="ts">
import Navigation from '../components/Navigation.vue'
import Profile from '../components/Profile.vue'
</script>

<template>
  <div class="logo">
    <img src="logo.png" alt="모모플레이어 로고" />
    <span>momo</span><span>player</span>
  </div>
  <Navigation />
  <Profile />
</template>

<style scoped lang="scss">
.logo {
  img {
    width: 3.2rem;
  }
}
</style>