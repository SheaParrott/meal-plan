import { UPDATE_RECIPES } from '../Actions/SearchActions'

//removed state = initial state
// may cause issues
export default function SearchReducer(state, action) {
  // do work here
  switch (action.type) {
    case UPDATE_RECIPES:
      return {
        ...state,
        count: action.payload.count ? action.payload.count : '',
        from: action.payload.from ? action.payload.from : '',
        to: action.payload.to ? action.payload.to : '',
        more: action.payload.more ? action.payload.more : '',
        q: action.payload.q ? action.payload.q : '',
        hits: action.payload.hits ? action.payload.hits : []
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
