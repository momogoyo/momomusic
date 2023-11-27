<script setup lang="ts">
import { Playlist, PlaySolid, PauseSolid, RepeatOnce, SkipPrevSolid, SkipNextSolid, Shuffle } from '@iconoir/vue'
</script>

<template>
  <div class="momomusic__Home--player">
    <div class="header">
      <h3 class="player">Player</h3>
      <button type="button" class="icon playlist"><Playlist /></button>
    </div>

    <div class="info">
      <div class="metadata">
        <div class="cover">
          <img src="../assets/images/tayler.webp" alt="cover" />
        </div>
        <div class="metadata">
          <em class="title">Blank Space</em>
          <span class="artist">Taylor Swift</span>
          <span class="album-sub">1989 (Taylor's Version)</span>
        </div>
      </div>

      <div class="seeks">
        <div class="seekbar"></div>
        <span class="current">1:06</span>
        <span class="duration">3:51</span>
      </div>
    </div>

    <div class="controls">
      <button type="button" class="icon loop"><RepeatOnce /></button>
      <button type="button" class="icon prev"><SkipPrevSolid /></button>
      <button type="button" class="toggle"><PlaySolid /><PauseSolid /></button>
      <button type="button" class="icon next"><SkipNextSolid /></button>
      <button type="button" class="icon shuffle"><Shuffle /></button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.momomusic__Home--player {
  grid-column: span 1 / span 1;
  background-color: var(--light-input);
  padding: 0.8rem;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .info {
    .metadata {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .cover {
        width: 8rem;
        
        > img {
          width: 100%;
        }
      }
    }
  }
}
</style>