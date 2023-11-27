<script setup lang="ts">
import { Home, CompactDisc, AlbumOpen, Palette, FavouriteBook, AlbumList, Planet, MusicDoubleNotePlus } from '@iconoir/vue'
</script>

<template>
  <div class="momomusic--navigation">
    <nav class="relative">
      <strong class="heading">MENU</strong>
      <ul class="items">
        <li class="item"><a href="#"><i class="icon"><Home /></i><span>Home</span></a></li>
        <li class="item"><a href="#"><i class="icon"><CompactDisc /></i><span>Genres</span></a></li>
        <li class="item"><a href="#"><i class="icon"><AlbumOpen /></i><span>Albums</span></a></li>
        <li class="item"><a href="#"><i class="icon"><Palette /></i><span>Artists</span></a></li>
      </ul>
    </nav>
    <nav class="relative">
      <strong class="heading">LIBRARY</strong>
      <ul class="items">
        <li class="item"><a href="#"><i class="icon"><FavouriteBook /></i><span>Favorites</span></a></li>
        <li class="item"><a href="#"><i class="icon"><AlbumList /></i><span>Albums</span></a></li>
        <li class="item"><a href="#"><i class="icon"><Planet /></i><span>Artists</span></a></li>
      </ul>
    </nav>
    <nav class="relative">
      <strong class="heading">PLAYLIST</strong>
      <button type="button" class="create-btn"><i class="icon"><MusicDoubleNotePlus /></i>Create New</button>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
.momomusic--navigation {
  flex-grow: 1;
  
  .icon {
    display: inline-flex;
    width: 1rem;
    margin-right: 0.8rem;
    line-height: 1;
  }

  .relative {
    .heading {
      display: flex;
      align-items: center;
      justify-content: flex-start;
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

      &:hover {
        color: var(--light-text);
        background-color: var(--light-field);
      }

      > a {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        > span {
          flex-grow: 1;
        }
      }
    }
  }
  
  .create-btn {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 0.6rem 0.5rem;
  }
}
</style>