import { UPDATE_RECIPES, SINGLE_RECIPE } from '../Actions/SearchActions'

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
    default:
      return state
  }
}

// count: response.data.count,
// from: response.data.from,
// to: response.data.to,
// more: response.data.more,
// results: response.data,
// q: response.data.q,
