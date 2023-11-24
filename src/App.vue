<script setup lang="ts">
import { RouterView } from 'vue-router'

import Sidebar from './components/Sidebar.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div class="momomusic">
    <div class="momomusic--container">
      <Sidebar />
      <RouterView />
    </div>

    <Footer />
  </div>
</template>


<style lang="scss" scoped>
.momomusic {
  min-height: 100vh;
  display: grid;
  justify-content: center;
  align-items: center;
  background-color: rgba(233, 233, 233, var(--light-weak));
  padding: 1.25rem 12% 1.25rem;

  &--container {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    border: 1px solid var(--light-input);
    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px;
  }
}
</style>