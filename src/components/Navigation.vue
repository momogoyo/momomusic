<script setup lang="ts">
import { Home, CompactDisc, AlbumOpen, Palette, FavouriteBook, AlbumList, Planet, MusicDoubleNotePlus } from '@iconoir/vue'
</script>

<template>
  <div class="momomusic--navigation">
    <nav class="relative">
      <strong class="heading">MENU</strong>
      <ul class="items">
        <li class="item"><a href="#"><i><Home /></i>Home</a></li>
        <li class="item"><a href="#"><i><CompactDisc /></i>Genres</a></li>
        <li class="item"><a href="#"><i><AlbumOpen /></i>Albums</a></li>
        <li class="item"><a href="#"><i><Palette /></i>Artists</a></li>
      </ul>
    </nav>
    <nav class="relative">
      <strong class="heading">LIBRARY</strong>
      <ul class="items">
        <li class="item"><a href="#"><i><FavouriteBook /></i>Favorites</a></li>
        <li class="item"><a href="#"><i><AlbumList /></i>Albums</a></li>
        <li class="item"><a href="#"><Planet />Artists</a></li>
      </ul>
    </nav>
    <nav class="relative">
      <strong class="heading">PLAYLIST</strong>
      <button type="button" class="create-btn"><i><MusicDoubleNotePlus /></i>Create New</button>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
.momomusic--navigation {
  i {
    margin-right: 0.8rem;
    margin-left: 0.2rem;
  }

  .relative {
    .heading {
      color: var(--light-head);
      font-size: 0.75rem;
      padding: 0.6rem 0.5rem;
      letter-spacing: 3px;
    }

    .item {
      padding: 0.6rem 0.5rem;
      border-radius: 0.75rem;
      font-size: 0.85rem;
      cursor: pointer;
      transition: 0.1s linear;

      &::after {
        content: "";
        position: absolute;
        background: transparent;
        width: 2px;
        transform: translateY(-0.5rem);
        height: 2.6rem;
        right: -1.5rem;
      }

      &:hover {
        color: var(--light-text);
        background-color: var(--light-field);
      }
    }
  }
  
  .create-btn {
    background-color: transparent;
    border: none;
  }
}
</style>