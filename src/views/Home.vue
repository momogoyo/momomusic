<script setup lang="ts">
import Main from '../components/Main.vue'
import Player from '../components/Player.vue'
</script>

<template>
  <div class="momomusic__Home">
    <Main></Main>
    <Player></Player>
  </div>
</template>

<style lang="scss" scoped>
.momomusic__Home {
  grid-column: span 3 / span 3;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
}
</style>