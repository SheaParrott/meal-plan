import { UPDATE_RECIPES } from '../Actions/SearchActions'

//removed state = initial state
// may cause issues
export default function SearchReducer(state, action) {
  // do work here
  switch (action.type) {
    case UPDATE_RECIPES:
      console.log(action.payload.results)
      console.log(action.payload.searched)
      return {
        ...state,
        results: action.payload.results,
        searched: action.payload.searched,
        categories: [],
        calories: { min: 0, max: 0 },
        maxIngredients: 0,
        removeIngredients: []
      }
    default:
      return state
  }
}
