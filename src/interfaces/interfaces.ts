export interface Drinks {
  strCategory: string
}

export interface Search {
  name: string
  category: string
}

export interface Recipes {
  strDrink: string
  strDrinkThumb: string
  idDrink: string
}

export interface Recipe {
  idDrink: string
  strDrink: string
  strDrinkAlternate?: null | string
  strTags?: null | string
  strVideo?: null | string
  strCategory: string
  strIBA?: null | string
  strAlcoholic: string
  strGlass: string
  strInstructions: string
  strInstructionsES: string
  strInstructionsDE: string
  strInstructionsFR?: null | string
  strInstructionsIT: string
  strInstructionsZH?: null | string
  strDrinkThumb: string
  strIngredient1: string
  strIngredient2: string
  strIngredient3: string
  strIngredient4?: string
  strIngredient5?: string
  strIngredient6?: string
  strIngredient7?: string
  strIngredient8?: string
  strIngredient9?: string
  strIngredient10?: string
  strIngredient11?: string
  strIngredient12?: string
  strIngredient13?: string
  strIngredient14?: string
  strIngredient15?: string
  strMeasure1: string
  strMeasure2: string
  strMeasure3: string
  strMeasure4?: null | string
  strMeasure5?: null | string
  strMeasure6?: null | string
  strMeasure7?: null | string
  strMeasure8?: null | string
  strMeasure9?: null | string
  strMeasure10?: null | string
  strMeasure11?: null | string
  strMeasure12?: null | string
  strMeasure13?: null | string
  strMeasure14?: null | string
  strMeasure15?: null | string
  strImageSource?: null | string
  strImageAttribution?: null | string
  strCreativeCommonsConfirmed: string
  dateModified: string
}
