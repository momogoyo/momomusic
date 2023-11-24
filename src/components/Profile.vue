<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="momo-music--profile">
    <RouterLink to="/about">
      <div class="avatar">
        <img src="https://avatars.githubusercontent.com/HyunYuJin" alt="avatar" />
        <p>momogoyo</p>
      </div>
      <span class="material-icons-two-tone">Go to Profile</span>
      <i class="momomusic__Left"></i>
    </RouterLink>
  </div>
</template>

<style scoped>
</style>