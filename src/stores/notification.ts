import { ref, watchEffect } from 'vue'
import { defineStore } from 'pinia'

export const useNtificationSotre = defineStore('notification', () => {
  const text = ref<string>('')
  const error = ref<boolean>(false)
  const show = ref<boolean>(false)

  watchEffect(() => {
    if (show.value) {
      setTimeout(() => {
        text.value = ''
        error.value = false
        show.value = false
      }, 3000)
    }
  })

  return {
    text,
    error,
    show
  }
})
