<script setup lang="ts">
import { CompactDisc } from '@iconoir/vue'
import { RouterLink } from 'vue-router'
</script>

<template>
  <nav class="momo-music--navigation">
    <strong>MENU</strong>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/genres">Genres</RouterLink>
    <RouterLink to="/albums"><i>{{ CompactDisc }}</i>Albums</RouterLink>
    <RouterLink to="/artists">Artists</RouterLink>

    <strong>LIBRARY</strong>
    <RouterLink to="/my-favorites">Favorites</RouterLink>
    <RouterLink to="/my-albums">Albums</RouterLink>
    <RouterLink to="/my-artists">Artists</RouterLink>
    
    <strong>PLAYLIST</strong>
    <RouterLink to="/create">Create New</RouterLink>
  </nav>
</template>