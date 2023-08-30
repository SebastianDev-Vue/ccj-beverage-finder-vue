import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useFavoritesStore } from '@/stores/favorites'
// import { useBeverageStore } from '@/stores/beverage'

export const useModalStore = defineStore('modal', () => {
  const favsStore = useFavoritesStore()
  // const beverageStore = useBeverageStore()
  const modal = ref<boolean>(false)

  const handleClickModal = (): void => {
    modal.value = !modal.value
  }

  const btnText = computed(() => {
    return favsStore.favoriteExists() ? 'Delete favorite' : 'Add favorite'
  })

  return {
    modal,
    btnText,
    handleClickModal
  }
})
