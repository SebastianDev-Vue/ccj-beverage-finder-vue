<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

import { useBeverageStore } from '@/stores/beverage'
import { useNtificationSotre } from '@/stores/notification'

const route = useRoute()
const store = useBeverageStore()
const notifications = useNtificationSotre()

const homeView = computed(() => route.name === 'home')

const handleSubmit = (): void => {
  if (Object.values(store.search).includes('')) {
    notifications.$patch({
      text: 'All The Fields Are Required',
      show: true,
      error: true
    })

    return
  }

  store.obtainRecipe()
}
</script>

<template>
  <header class="bg-slate-800" :class="{ header: homeView }">
    <div class="mx-auto container px-5 py-16">
      <div class="flex justify-between items-center">
        <div>
          <RouterLink :to="{ name: 'home' }">
            <img class="w-32" src="img/logo.svg" alt="logo" />
          </RouterLink>
        </div>

        <nav class="flex gap-4">
          <RouterLink
            :to="{ name: 'home' }"
            class="text-orange-500 uppercase font-bold hover:text-white transition-colors ease-in-out duration-300"
            active-class="white"
            >Home</RouterLink
          >
          <RouterLink
            :to="{ name: 'favorites' }"
            class="text-orange-500 uppercase font-bold hover:text-white transition-colors ease-in-out duration-300"
            active-class="white"
            >Favorites</RouterLink
          >
        </nav>
      </div>

      <form
        v-if="homeView"
        @submit.prevent="handleSubmit"
        class="md:w-1/2 2xl:w-1/3 bg-orange-400 my-32 py-10 px-6 rounded-lg shadow space-y-6"
      >
        <div class="space-y-4">
          <label for="ingredient" class="blockl text-white uppercase font-extrabold text-lg"
            >Name or ingredients</label
          >
          <input
            type="text"
            id="ingredient"
            class="p-3 w-full rounded-lg focus:outline-none"
            placeholder="Name or Ingredient: Ex. Vodka, Tequila, etc"
            v-model="store.search.name"
          />
        </div>

        <div class="space-y-4">
          <label for="category" class="blockl text-white uppercase font-extrabold text-lg"
            >Category</label
          >
          <select
            id="category"
            class="p-3 w-full rounded-lg focus:outline-none"
            v-model="store.search.category"
          >
            <option value="">--Select One --</option>
            <option
              v-for="{ strCategory } in store.categories"
              :key="strCategory"
              :value="strCategory"
            >
              {{ strCategory }}
            </option>
          </select>

          <input
            type="submit"
            value="Search Recipes"
            class="bg-orange-800 hover:bg-orange-900 cursor-pointer text-white font-extrabold w-full p-2 rounded-lg uppercase"
          />
        </div>
      </form>
    </div>
  </header>
</template>

<style scoped>
.header {
  background-image: url('/img/bg.jpg');
  background-size: cover;
  background-position: center;
}

.white {
  color: #fff;
}
</style>
