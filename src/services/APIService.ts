import api from '@/lib/axios'
import type { Search } from '@/interfaces/interfaces'

export default {
  obtainCategories() {
    return api('/list.php?c=list')
  },

  searchRecipes({ category, name }: Search) {
    return api(`/filter.php?c=${category}&i=${name}`)
  },

  searchRecipe(id: string) {
    return api(`/lookup.php?i=${id}`)
  }
}
