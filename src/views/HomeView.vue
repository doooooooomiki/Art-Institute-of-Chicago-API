<template>
  <h1>Art Institute of Chicago API</h1>
  <ul>
    <li v-for="artwork in artworks">
      <div>
        <RouterLink :to="{ name: 'artwork', params: { id: artwork.id } }">{{
          artwork.id
        }}</RouterLink>
        {{ artwork.id }}
        {{ artwork.credit_line }}
      </div>
    </li>
  </ul>
</template>
<script setup lang="ts">
import { getArtworks } from '@/api/artworks'
import { onMounted, ref } from 'vue'

const artworks = ref()

onMounted(async () => {
  artworks.value = (await getArtworks()).data
})
</script>
