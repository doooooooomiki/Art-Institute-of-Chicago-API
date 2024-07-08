<template>
  <h1>artwork</h1>
  <div class="post">
    <div v-if="loading" class="loading">Loading...</div>

    <div v-if="error" class="error">{{ error }}</div>

    <div v-if="artwork" class="content">
      <h2>{{ artwork.title }}</h2>
      <p>{{ artwork.main_reference_number }}</p>
    </div>
  </div>
  ...
</template>
<script setup lang="ts">
import { getArtworkById } from '@/api/artworks'
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const loading = ref(false)
const artwork = ref<{ title: string; main_reference_number: string } | null>(null)
const error = ref(null)

watch(
  () => route.params.id,
  async () => {
    error.value = artwork.value = null
    loading.value = true

    try {
      artwork.value = (await getArtworkById(route.params.id as string)).data
    } catch (err: any) {
      error.value = err.toString()
    } finally {
      loading.value = false
    }
  },
  { immediate: true }
)
</script>
