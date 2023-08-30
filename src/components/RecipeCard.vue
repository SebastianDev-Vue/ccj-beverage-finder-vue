<script setup lang="ts">
import { useBeverageStore } from '@/stores/beverage'
import type { Recipes } from '@/interfaces/interfaces'

defineProps<{ recipe: Recipes }>()

const store = useBeverageStore()
</script>

<template>
  <div class="border shadow-lg">
    <div class="overflow-hidden">
      <img
        :src="recipe.strDrinkThumb"
        :alt="`Image of ${recipe.strDrink}`"
        class="hover:scale-125 hover:rotate-1 transition-all duration-300 ease-in-out"
      />
    </div>

    <div class="p-5 text-2xl truncate font-extrabold">
      <h2>{{ recipe.strDrink }}</h2>

      <button
        @click="store.selectBeverage(recipe.idDrink)"
        type="button"
        class="bg-orange-400 mt-5 w-full p-3 font-bold text-white text-lg hover:bg-orange-500 transition-colors ease-in-out duration-300"
      >
        See Recipe
      </button>
    </div>
  </div>
</template>
