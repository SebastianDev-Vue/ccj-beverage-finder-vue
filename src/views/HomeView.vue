<script setup lang="ts">
import { useBeverageStore } from '@/stores/beverage'
import RecipeCard from '@/components/RecipeCard.vue'

const store = useBeverageStore()
</script>

<template>
  <h1 class="text-6xl font-extrabold">Recipes</h1>

  <p v-if="store.noRecipes" class="my-10 text-centet text-2xl">
    No Results! Start a search with the form
  </p>

  <div v-else class="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 my-10 gap-10">
    <RecipeCard v-for="recipe in store.recipes" :key="recipe.idDrink" :recipe="recipe" />
  </div>
</template>

<style scoped></style>
