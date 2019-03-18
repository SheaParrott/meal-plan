import axios from 'axios'
export const UPDATE_SEARCH_URL_PARAMS = 'updatesearchURLParam'
export const UPDATE_RECIPES = 'updateRecipes'
export const SINGLE_RECIPE = 'singleViewRecipe'
export const COOK_TIME = 'cookTime'
export const CALORIES = 'calories'
export const MAX_INGREDIENTS = 'maxIngredients'

const fillRange = count => {
  let start = 1
  let end = Math.ceil(count / 10)
  return Array(end - start + 1)
    .fill()
    .map((item, index) => start + index)
}

export function getRecipes(url_params) {
  // pass in the current url and add the "&q=chicken" here
  // then make the api call
  // can pass in one object with the url and q
  // then fetch data

  // when using the min and max params:
  // The format is calories=RANGE where RANGE is replaced
  //  by the value in kcal. RANGE is in one of MIN+, MIN-MAX
  //   or MAX, where MIN and MAX are non-negative integer
  //   numbers. The + symbol needs to be properly encoded.
  //    Examples: “calories=100-300” will return all recipes
  //    with which have between 100 and 300 kcal per serving.

  return function action(dispatch) {
    dispatch({ type: UPDATE_RECIPES, payload: {} })

    const request = axios({
      method: 'GET',
      url: `https://api.edamam.com/search?app_id=4bef2681&app_key=96c8eeccc18628d4b898f8264781b999${url_params}`,
      headers: []
    })
    // need to extract the url update to a seperate action and reducer
    // to an onChange so the submit button is the Link for react-router-dom

    return request.then(response =>
      dispatch({
        type: UPDATE_RECIPES,
        payload: {
          count: response.data.count,
          from: response.data.from,
          to: response.data.to,
          more: response.data.more,
          q: response.data.q,
          hits:
            response.data.hits.length === 0
              ? ['No Results']
              : response.data.hits,
          pages: fillRange(response.data.count)
        }
      })
    )
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

export function searchURLParam(value) {
  return {
    type: UPDATE_SEARCH_URL_PARAMS,
    payload: {
      searchURLParam: `&q=${value}`
    }
  }
}
export function addCategory(category) {
  console.log(category)
}

export function singleRecipe(uri) {
  // api call take the uri and encoded uri to return
  // the single view recipe
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

    return request.then(response =>
      dispatch({
        type: SINGLE_RECIPE,
        payload: {
          recipe: response.data
        }
      })
    )
  }
}
