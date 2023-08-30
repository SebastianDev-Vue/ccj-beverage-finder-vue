<script setup lang="ts">
import RecipeCard from '@/components/RecipeCard.vue'
import { useFavoritesStore } from '@/stores/favorites'

const favoritesStore = useFavoritesStore()
</script>

<template>
  <h1 class="text-6xl font-extrabold">Favorites</h1>

  <p v-if="favoritesStore.noFavorites" class="my-10 text-centet text-2xl">
    Your favorites is empty
  </p>

  <div v-else class="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 my-10 gap-10">
    <RecipeCard v-for="recipe in favoritesStore.favorites" :key="recipe.idDrink" :recipe="recipe" />
  </div>
</template>

<style scoped></style>
