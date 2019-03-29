import {
  UPDATE_RECIPES,
  SINGLE_RECIPE,
  UPDATE_SEARCH_URL_PARAMS,
  COOK_TIME,
  CALORIES,
  MAX_INGREDIENTS,
  ADD_CATEGORY,
  REMOVE_CATEGORY,
  ADD_REMOVED_INGREDIENTS,
  PAGINATION,
  RESET_ALL_SEARCH_FIELDS,
  REMOVE_CHOSEN_INGREDIENT
} from '../Actions/SearchActions'

export default function SearchReducer(state, action) {
  let string = ''
  state.categories.concat(state.removedIngredients).forEach(category => {
    string += category.param
  })
  switch (action.type) {
    case UPDATE_RECIPES:
      return {
        ...state,
        count: action.payload.count ? action.payload.count : 0,
        from: action.payload.from
          ? action.payload.from
          : { from: 0, param: `&from=0` },
        toParam: action.payload.toParam
          ? action.payload.toParam
          : { toParam: 0, param: `&from=0` },
        more: action.payload.more ? action.payload.more : '',
        hits: action.payload.hits ? action.payload.hits : [],
        pages: action.payload.pages ? action.payload.pages : 0
      }
    case SINGLE_RECIPE:
      return {
        ...state,
        recipe: action.payload.recipe ? action.payload.recipe : []
      }
    case UPDATE_SEARCH_URL_PARAMS:
      return {
        ...state,
        SearchedRecipe: action.payload.SearchedRecipe
          ? action.payload.SearchedRecipe
          : { value: '', param: '' },
        paramsWithPagination:
          action.payload.SearchedRecipe.param +
          state.calories.params +
          state.cookTime.params +
          state.maxIngredients.params +
          string +
          state.from.param +
          state.toParam.param,
        paramsWithoutPagination:
          action.payload.SearchedRecipe.param +
          state.calories.params +
          state.cookTime.params +
          state.maxIngredients.params +
          string
      }
    case COOK_TIME:
      return {
        ...state,
        cookTime: action.payload.cookTime
          ? action.payload.cookTime
          : { min: '', max: '', params: '' },
        paramsWithPagination:
          state.SearchedRecipe.param +
          state.calories.params +
          action.payload.cookTime.params +
          state.maxIngredients.params +
          string +
          state.from.param +
          state.toParam.param,
        paramsWithoutPagination:
          state.SearchedRecipe.param +
          state.calories.params +
          action.payload.cookTime.params +
          state.maxIngredients.params +
          string
      }
    case CALORIES:
      return {
        ...state,
        calories: action.payload.calories
          ? action.payload.calories
          : { min: '', max: '', params: '' },
        paramsWithPagination:
          state.SearchedRecipe.param +
          action.payload.calories.params +
          state.cookTime.params +
          state.maxIngredients.params +
          string +
          state.from.param +
          state.toParam.param,
        paramsWithoutPagination:
          state.SearchedRecipe.param +
          action.payload.calories.params +
          state.cookTime.params +
          state.maxIngredients.params +
          string
      }
    case MAX_INGREDIENTS:
      return {
        ...state,
        maxIngredients: action.payload.maxIngredients
          ? action.payload.maxIngredients
          : { max: '', params: '' },
        paramsWithPagination:
          state.SearchedRecipe.param +
          state.calories.params +
          state.cookTime.params +
          action.payload.maxIngredients.params +
          string +
          state.from.param +
          state.toParam.param,
        paramsWithoutPagination:
          state.SearchedRecipe.param +
          state.calories.params +
          state.cookTime.params +
          action.payload.maxIngredients.params +
          string
      }
    case ADD_CATEGORY:
      if (!action.payload.categories) {
        return { ...state }
      }
      let category = [...state.healthLabels].includes(action.payload.categories)
        ? {
            category: action.payload.categories,
            param: `&health=${action.payload.categories}`
          }
        : {
            category: action.payload.categories,
            param: `&diet=${action.payload.categories}`
          }
      let TheString = ''
      state.removedIngredients
        .concat([...state.categories, category])
        .forEach(category => {
          TheString += category.param
        })
      return {
        ...state,
        categories: [...state.categories, category],
        paramsWithPagination:
          state.SearchedRecipe.param +
          state.calories.params +
          state.cookTime.params +
          state.maxIngredients.params +
          TheString +
          state.from.param +
          state.toParam.param,
        paramsWithoutPagination:
          state.SearchedRecipe.param +
          state.calories.params +
          state.cookTime.params +
          state.maxIngredients.params +
          TheString
      }
    case REMOVE_CATEGORY:
      let removedCategory = [
        ...state.categories.filter(
          category => action.payload.categories !== category.category
        )
      ]
      let stringOfCategoriesAndRemovedIngredients = ''
      state.removedIngredients.concat(removedCategory).forEach(category => {
        stringOfCategoriesAndRemovedIngredients += category.param
      })
      return {
        ...state,
        categories: removedCategory,
        paramsWithPagination:
          state.SearchedRecipe.param +
          state.calories.params +
          state.cookTime.params +
          state.maxIngredients.params +
          stringOfCategoriesAndRemovedIngredients +
          state.from.param +
          state.toParam.param,
        paramsWithoutPagination:
          state.SearchedRecipe.param +
          state.calories.params +
          state.cookTime.params +
          state.maxIngredients.params +
          stringOfCategoriesAndRemovedIngredients
      }
    case ADD_REMOVED_INGREDIENTS:
      let TheIngredientsRemoved = [
        ...state.removedIngredients,
        action.payload.removedIngredients
      ]
      let TheNewString = ''
      TheIngredientsRemoved.concat(state.categories).forEach(category => {
        TheNewString += category.param
      })
      return {
        ...state,
        removedIngredients: TheIngredientsRemoved,
        paramsWithPagination:
          state.SearchedRecipe.param +
          state.calories.params +
          state.cookTime.params +
          state.maxIngredients.params +
          TheNewString +
          state.from.param +
          state.toParam.param,
        paramsWithoutPagination:
          state.SearchedRecipe.param +
          state.calories.params +
          state.cookTime.params +
          state.maxIngredients.params +
          TheNewString
      }
    case REMOVE_CHOSEN_INGREDIENT:
      let updateIngredients = [
        ...state.removedIngredients.filter(
          ingredient =>
            action.payload.removedIngredients !== ingredient.category
        )
      ]
      let TheNewestString = ''
      updateIngredients.concat(state.categories).forEach(category => {
        TheNewestString += category.param
      })
      return {
        ...state,
        removedIngredients: updateIngredients,
        paramsWithPagination:
          state.SearchedRecipe.param +
          state.calories.params +
          state.cookTime.params +
          state.maxIngredients.params +
          TheNewestString +
          state.from.param +
          state.toParam.param,
        paramsWithoutPagination:
          state.SearchedRecipe.param +
          state.calories.params +
          state.cookTime.params +
          state.maxIngredients.params +
          TheNewestString
      }
    case PAGINATION:
      if (action.payload.from.from < 0) {
        return { ...state }
      }
      return {
        ...state,
        from: action.payload.from
          ? action.payload.from
          : { from: '', param: '' },
        paramsWithPagination:
          state.SearchedRecipe.param +
          state.calories.params +
          state.cookTime.params +
          state.maxIngredients.params +
          TheNewestString +
          action.payload.from.param +
          `&to=${parseInt(action.payload.from.param) + 12}`
      }
    case RESET_ALL_SEARCH_FIELDS:
      return action.payload
    default:
      return state
  }
}
