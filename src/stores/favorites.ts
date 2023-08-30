import { ref, watch, onMounted, computed } from 'vue'
import { defineStore } from 'pinia'
import { useBeverageStore } from '@/stores/beverage'
import { useModalStore } from '@/stores/modal'
import { useNtificationSotre } from '@/stores/notification'
import type { Recipe } from '@/interfaces/interfaces'

export const useFavoritesStore = defineStore('favorites', () => {
  const beveragedStore = useBeverageStore()
  const modalStore = useModalStore()
  const notificationStore = useNtificationSotre()

  const favorites = ref<Recipe[]>([])

  onMounted(() => {
    favorites.value = JSON.parse(localStorage.getItem('favorites') as string) ?? []
  })

  watch(
    favorites,
    () => {
      syncLocalStorage()
    },
    { deep: true }
  )

  const syncLocalStorage = (): void => {
    localStorage.setItem('favorites', JSON.stringify(favorites.value))
  }

  const favoriteExists = (): Recipe => {
    const favoritesLocalStorage = JSON.parse(localStorage.getItem('favorites') as string) ?? []

    return favoritesLocalStorage.some(
      (favorite: Recipe) => favorite.idDrink === beveragedStore.recipe.idDrink
    )
  }

  const deleteFavorite = () => {
    favorites.value = favorites.value.filter(
      (favorite: Recipe) => favorite.idDrink !== beveragedStore.recipe.idDrink
    )

    notificationStore.show = true
    notificationStore.text = 'Deleted from favorites'
  }

  const addFavorite = () => {
    favorites.value.push(beveragedStore.recipe)

    notificationStore.show = true
    notificationStore.text = 'Added to favorites'
  }

  const handleClickFav = (): void => {
    if (favoriteExists()) {
      deleteFavorite()
    } else {
      addFavorite()
    }
    modalStore.modal = false
  }

  const noFavorites = computed(() => favorites.value.length === 0)

  return {
    favorites,

    noFavorites,
    handleClickFav,
    favoriteExists
  }
})
