<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="momo-music--profile">
    <a href="#">
      <div class="avatar">
        <img src="https://avatars.githubusercontent.com/HyunYuJin" alt="avatar" />
        <p>momogoyo</p>
      </div>
    </a>
    <RouterLink to="/about"><span class="material-icons-two-tone">Go to Profile</span> </RouterLink>
  </div>
</template>