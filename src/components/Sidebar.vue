<script setup lang="ts">
import Navigation from '../components/Navigation.vue'
import Profile from '../components/Profile.vue'
</script>

<template>
  <div class="momomusic__Sidebar">
    <div class="logo">
      <img src="logo.png" alt="모모플레이어 로고" />
      <span>momo</span><span>player</span>
    </div>
    <Navigation />
    <Profile />
  </div>
</template>

<style lang="scss" scoped>
.momomusic__Sidebar {
  grid-column: span 1 / span 1;
  background-color: var(--white);

  .logo {
    img {
      width: 3.2rem;
    }
  }
}
</style>