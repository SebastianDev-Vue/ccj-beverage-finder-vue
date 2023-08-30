import { ref, reactive, onMounted, computed } from 'vue'
import { defineStore } from 'pinia'
import APIService from '@/services/APIService'
import { useModalStore } from '@/stores/modal'

import type { Drinks, Search, Recipes, Recipe } from '@/interfaces/interfaces'

export const useBeverageStore = defineStore('beverage', () => {
  const modalStore = useModalStore()
  const categories = ref<Drinks[]>([])
  const search = reactive<Search>({
    name: '',
    category: ''
  })
  const recipes = ref<Recipes[]>([])
  const recipe = ref<Recipe>({} as Recipe)

  onMounted(async () => {
    const {
      data: { drinks }
    } = await APIService.obtainCategories()

    categories.value = drinks
  })

  async function obtainRecipe() {
    const {
      data: { drinks }
    } = await APIService.searchRecipes(search)
    recipes.value = drinks
  }

  async function selectBeverage(id: string) {
    const {
      data: { drinks }
    } = await APIService.searchRecipe(id)

    recipe.value = drinks[0]
    modalStore.handleClickModal()
  }

  const noRecipes = computed(() => recipes.value.length === 0)

  return {
    categories,
    search,
    recipes,
    recipe,
    noRecipes,

    // Methods
    obtainRecipe,
    selectBeverage
  }
})
