import axios from 'axios'
export const UPDATE_SEARCH_URL_PARAMS = 'updateSearchedRecipe'
export const UPDATE_RECIPES = 'updateRecipes'
export const SINGLE_RECIPE = 'singleViewRecipe'
export const COOK_TIME = 'cookTime'
export const CALORIES = 'calories'
export const MAX_INGREDIENTS = 'maxIngredients'
export const ADD_CATEGORY = 'addCategory'
export const REMOVE_CATEGORY = 'removeCategory'
export const ADD_REMOVED_INGREDIENTS = 'removedIngredients'
export const REMOVE_CHOSEN_INGREDIENT = 'removeChosenIngredient'
export const PAGINATION = 'pagination'
export const RESET_ALL_SEARCH_FIELDS = 'resetAllFields'

const fillRange = count => {
  let start = 1
  let end = Math.ceil(count / 10)
  return Array(end - start + 1)
    .fill()
    .map((item, index) => start + index)
}

export function getRecipes(url_params) {
  return function action(dispatch) {
    dispatch({ type: UPDATE_RECIPES, payload: {} })

    const request = axios({
      method: 'GET',
      url: `https://api.edamam.com/search?app_id=4bef2681&app_key=96c8eeccc18628d4b898f8264781b999${url_params}`,
      headers: []
    })
    return request
      .then(response =>
        dispatch({
          type: UPDATE_RECIPES,
          payload: {
            count: response.data.count,
            from: {
              from: response.data.from,
              param: `&from=${response.data.from}`
            },
            to: response.data.to,
            more: response.data.more,
            q: response.data.q,
            SearchedRecipe: {
              value: response.data.q,
              param: `&q=${response.data.q}`
            },
            hits:
              response.data.hits.length === 0
                ? ['No Results']
                : response.data.hits,
            pages: fillRange(response.data.count)
          }
        })
      )
      .catch(error => {
        dispatch({
          type: UPDATE_RECIPES,
          payload: {
            count: 0,
            from: { from: 0, param: `&from=0` },
            to: '',
            more: '',
            q: '',
            SearchedRecipe: { value: '', param: '' },
            hits: ['No Results'],
            pages: []
          }
        })
      })
  }
}

export function singleRecipe(uri) {
  let url =
    'https://api.edamam.com/search?app_id=4bef2681&app_key=96c8eeccc18628d4b898f8264781b999&r='
  let encoded = encodeURIComponent(
    `http://www.edamam.com/ontologies/edamam.owl#recipe_${uri}`
  ).replace(/[!*]/g, function(c) {
    return '%' + c.charCodeAt(0).toString(16)
  })

  return function action(dispatch) {
    dispatch({ type: SINGLE_RECIPE, payload: {} })

    const request = axios({
      method: 'GET',
      url: `${url}${encoded}`,
      headers: []
    })

    return request
      .then(response =>
        dispatch({
          type: SINGLE_RECIPE,
          payload: {
            recipe: response.data ? response.data : ['No Results']
          }
        })
      )
      .catch(error => {
        dispatch({
          type: SINGLE_RECIPE,
          payload: {
            recipe: ['No Results']
          }
        })
      })
  }
}

export function minAndMaxParams({ theCase, min, max }) {
  let value = ''
  if (theCase === 'maxIngredients' || (!min && max)) {
    value = max
  } else if (max && max > min) {
    value = `${min}-${max}`
  } else if (!max && min) {
    value = `${min}+`
  }
  switch (theCase) {
    case 'cookTime':
      return {
        type: COOK_TIME,
        payload: {
          cookTime: { min: min, max: max, params: `&time=${value}` }
        }
      }

    case 'calories':
      return {
        type: CALORIES,
        payload: {
          calories: { min: min, max: max, params: `&calories=${value}` }
        }
      }
    case 'maxIngredients':
      return {
        type: MAX_INGREDIENTS,
        payload: {
          maxIngredients: { max: max, params: `&ingr=${value}` }
        }
      }
    default:
      //this could break the reducer..
      return
  }
}

export function SearchedRecipe(value) {
  return {
    type: UPDATE_SEARCH_URL_PARAMS,
    payload: {
      SearchedRecipe: { value: value, param: `&q=${value}` }
    }
  }
}
export function addCategory(category) {
  return {
    type: ADD_CATEGORY,
    payload: {
      categories: category
    }
  }
}
export function removeCategory(category) {
  return {
    type: REMOVE_CATEGORY,
    payload: {
      categories: category
    }
  }
}

export function addRemovedIngredients(ingredient) {
  return {
    type: ADD_REMOVED_INGREDIENTS,
    payload: {
      removedIngredients: {
        category: ingredient,
        param: `&excluded=${ingredient}`
      }
    }
  }
}
export function removeChosenIngredient(ingredient) {
  return {
    type: REMOVE_CHOSEN_INGREDIENT,
    payload: {
      removedIngredients: ingredient
    }
  }
}

export function resetAllSearchFields() {
  return {
    type: RESET_ALL_SEARCH_FIELDS,
    payload: {
      defaultURL:
        'https://api.edamam.com/search?app_id=4bef2681&app_key=96c8eeccc18628d4b898f8264781b999',
      SearchedRecipe: { value: '', param: '' },
      calories: { min: '', max: '', params: '' },
      cookTime: { min: '', max: '', params: '' },
      maxIngredients: { max: '', params: '' },
      categories: [],
      removedIngredients: [],
      results: {},
      count: '',
      from: { from: 0, param: `&from=0` },
      to: '',
      more: '',
      q: '',
      hits: [],
      pages: 0,
      recipe: [],
      healthLabels: ['vegan', 'vegetarian', 'peanut-free', 'tree-nut-free'],
      dietLabels: ['balanced', 'high-protein', 'low-fat', 'low-carb']
    }
  }
}
