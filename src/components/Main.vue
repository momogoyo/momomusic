<script setup lang="ts">
import { Search, Tiktok, PlusCircle } from '@iconoir/vue'
</script>

<template>
  <div class="momomusic__Home--main">
    <header>
      <i class="icon"><Search /></i>
      <input type="search" placeholder="Type here to search" />
    </header>

    <div class="top">
      <h3>Top Artists</h3>
      <div class="contents">
        <div class="artists">
          <img src="" alt="">
          <em>Artist1</em>
          <span>Album1</span>
        </div>
        <div class="artists">
          <img src="" alt="">
          <em>Artist2</em>
          <span>Album2</span>
        </div>
        <div class="artists">
          <img src="" alt="">
          <em>Artist3</em>
          <span>Album3</span>
        </div>
        <div class="artists">
          <img src="" alt="">
          <em>Artist4</em>
          <span>Album4</span>
        </div>
        <div class="artists">
          <img src="" alt="">
          <em>Artist5</em>
          <span>Album5</span>
        </div>
      </div>
      <a href="#">See all</a>
    </div>

    <div class="genres">
      <h3>Genres</h3>
      <div class="contents">
        <div class="category dance">
          <span>Dance Beat</span>
        </div>
        <div class="category pop">
          <span>Electro Pop</span>
        </div>
        <div class="category indie">
          <span>Alternative Indie</span>
        </div>
        <div class="category hippop">
          <span>Hip Pop</span>
        </div>
        <div class="category classical">
          <span>Classical Period</span>
        </div>
        <div class="category rap">
          <span>Rap Hip Pop</span>
        </div>
      </div>
      <a href="#">See all</a>
    </div>

    <div class="charts">
      <h3>Top Charts</h3>
      <ol>
        <li>
          <a href="#">
            <div class="music">
              <img src="" alt="">
              <em class="title"></em>
              <span class="artist"></span>
              <span class="total"></span>
            </div>
            <div>
              <button class="play"><Tiktok /></button>
              <button class="add"><PlusCircle /></button>
            </div>
          </a>
        </li>
        <li>
          <a href="#">
            <div class="music">
              <img src="" alt="">
              <em class="title"></em>
              <span class="artist"></span>
              <span class="total"></span>
            </div>
            <div>
              <button class="play"><Tiktok /></button>
              <button class="add"><PlusCircle /></button>
            </div>
          </a>
        </li>
        <li>
          <a href="#">
            <div class="music">
              <img src="" alt="">
              <em class="title"></em>
              <span class="artist"></span>
              <span class="total"></span>
            </div>
            <div>
              <button class="play"><Tiktok /></button>
              <button class="add"><PlusCircle /></button>
            </div>
          </a>
        </li>
        <li>
          <a href="#">
            <div class="music">
              <img src="" alt="">
              <em class="title"></em>
              <span class="artist"></span>
              <span class="total"></span>
            </div>
            <div>
              <button class="play"><Tiktok /></button>
              <button class="add"><PlusCircle /></button>
            </div>
          </a>
        </li>
        <li>
          <a href="#">
            <div class="music">
              <img src="" alt="">
              <em class="title"></em>
              <span class="artist"></span>
              <span class="total"></span>
            </div>
            <div>
              <button class="play"><Tiktok /></button>
              <button class="add"><PlusCircle /></button>
            </div>
          </a>
        </li>
      </ol>
    </div>
  </div>
</template>

<style scoped>
.momomusic__Home--main {
  grid-column: span 2 / span 2;
  padding: 1.25rem 0.5rem 1.25rem;
}
</style>
