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

<style lang="scss" scoped>
.momomusic--profile {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--light-text);
  border-top: 1px solid var(--light-input);
  padding: 1.5rem 0 0;

  > a {
    width: 100%;
  }

  .avatar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    > img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      object-fit: cover;
    }

    > i {
      display: inline-flex;
      width: 1rem;
      margin-right: 0.8rem;
      margin-left: 0.2rem;
      line-height: 1;
    }
  }
}
</style>