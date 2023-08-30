<script setup lang="ts">
import { useModalStore } from '@/stores/modal'
import { useBeverageStore } from '@/stores/beverage'
import { useFavoritesStore } from '@/stores/favorites'
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'

const modalStore = useModalStore()
const beverageStore = useBeverageStore()
const favsStore = useFavoritesStore()

const formatIngredients = () => {
  const ingredientsDiv = document.createElement('div')

  for (let i = 1; i <= 15; i++) {
    const ingredientKey = `strIngredient${i}` as keyof typeof beverageStore.recipe
    const measureKey = `strMeasure${i}` as keyof typeof beverageStore.recipe

    if (beverageStore.recipe[ingredientKey]) {
      const ingredient = beverageStore.recipe[ingredientKey]
      const quantity = beverageStore.recipe[measureKey]

      const ingredientQuantity = document.createElement('p')
      ingredientQuantity.classList.add('text-lg')
      ingredientQuantity.textContent = `${ingredient} - ${quantity}`

      ingredientsDiv.appendChild(ingredientQuantity)
    }
  }

  return ingredientsDiv
}
</script>

<template>
  <TransitionRoot as="template" :show="modalStore.modal">
    <Dialog as="div" class="relative z-10" @close="modalStore.handleClickModal()">
      <TransitionChild
        as="template"
        enter="ease-out duration-300"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="ease-in duration-200"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
      </TransitionChild>
      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div
          class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
        >
          <TransitionChild
            as="template"
            enter="ease-out duration-300"
            enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enter-to="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leave-from="opacity-100 translate-y-0 sm:scale-100"
            leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <DialogPanel
              class="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl sm:p-6"
            >
              <div>
                <div class="mt-3">
                  <DialogTitle as="h3" class="text-gray-900 text-4xl font-extrabold my-5">{{
                    beverageStore.recipe.strDrink
                  }}</DialogTitle>

                  <img
                    :src="beverageStore.recipe.strDrinkThumb"
                    :alt="`Image of ${beverageStore.recipe.strDrink}`"
                    class="mx-auto w-96"
                  />

                  <DialogTitle as="h3" class="text-gray-900 text-4xl font-extrabold my-5"
                    >Ingredients & Quantities</DialogTitle
                  >

                  <div v-html="formatIngredients().outerHTML"></div>

                  <DialogTitle as="h3" class="text-gray-900 text-4xl font-extrabold my-5"
                    >Instructions</DialogTitle
                  >

                  <p class="text-lg text-gray-500">{{ beverageStore.recipe.strInstructions }}</p>
                </div>
              </div>
              <div class="mt-5 sm:mt-6 flex justify-between gap-4">
                <button
                  @click="modalStore.handleClickModal()"
                  type="button"
                  class="w-full rounded bg-gray-600 p-3 font-bold uppercase text-white shadow hover:bg-gray-500 transition-colors duration-300 ease-linear"
                >
                  Close
                </button>

                <button
                  @click="favsStore.handleClickFav"
                  type="button"
                  class="w-full rounded bg-orange-600 p-3 font-bold uppercase text-white shadow hover:bg-orange-500 transition-colors duration-300 ease-linear"
                >
                  {{ modalStore.btnText }}
                </button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
