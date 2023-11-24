<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { ArrowRight } from '@iconoir/vue'
</script>

<template>
  <div class="momomusic--profile">
    <RouterLink to="/about">
      <div class="avatar">
        <img src="https://avatars.githubusercontent.com/HyunYuJin" alt="avatar" />
        <p>momogoyo</p>
        <i><ArrowRight /></i>
      </div>
    </RouterLink>
  </div>
</template>

<style scoped>
.momomusic--profile {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--light-text);
  border-top: 1px solid var(--light-input);

  .avatar {
    display: flex;
    align-items: center;
    
    > img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      object-fit: cover;
    }
  }
}
</style>