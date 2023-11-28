<script setup lang="ts">
import Navigation from '../components/default/Navigation.vue'
import Profile from '../components/Profile.vue'
</script>

<template>
  <div class="momomusic__Sidebar">
    <div class="logo">
      <img src="logo.png" alt="모모뮤직 로고" />
      <h2 class="title"><span class="momo">momo</span><span>music</span></h2>
    </div>
    <Navigation />
    <Profile />
  </div>
</template>

<style lang="scss" scoped>
.momomusic__Sidebar {
  grid-column: span 1 / span 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: var(--white);
  padding: 1.5rem;

  .logo {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
    padding: 0.75rem 0 1.75rem 0;

    > img {
      width: 2.8rem;
      margin: 0 0.6rem 0 0.2rem;
    }

    .title {
      font-size: 1.25rem;
      line-height: 1.75rem;
      color: var(--light-text);
      
      .momo {
        color: var(--primary);
      }
    }
    
  }
}
</style>