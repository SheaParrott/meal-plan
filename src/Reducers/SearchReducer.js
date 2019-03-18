import {
  UPDATE_RECIPES,
  SINGLE_RECIPE,
  UPDATE_SEARCH_URL_PARAMS,
  COOK_TIME,
  CALORIES,
  MAX_INGREDIENTS
} from '../Actions/SearchActions'
//removed state = initial state
// may cause issues
export default function SearchReducer(state, action) {
  // do work here
  switch (action.type) {
    case UPDATE_RECIPES:
      return {
        ...state,
        count: action.payload.count ? action.payload.count : 0,
        from: action.payload.from ? action.payload.from : 0,
        to: action.payload.to ? action.payload.to : 0,
        more: action.payload.more ? action.payload.more : '',
        q: action.payload.q ? action.payload.q : '',
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
        searchURLParam: action.payload.searchURLParam
          ? action.payload.searchURLParam
          : ''
      }
    case COOK_TIME:
      return {
        ...state,
        cookTime: action.payload.cookTime
          ? action.payload.cookTime
          : { min: '', max: '', params: '' }
      }
    case CALORIES:
      return {
        ...state,
        calories: action.payload.calories
          ? action.payload.calories
          : { min: '', max: '', params: '' }
      }
    case MAX_INGREDIENTS:
      return {
        ...state,
        maxIngredients: action.payload.maxIngredients
          ? action.payload.maxIngredients
          : ''
      }
    default:
      return state
  }
}
