import axios from 'axios'
export const UPDATE_SEARCH_URL_PARAMS = 'updateSearchURLParams'
export const UPDATE_RECIPES = 'updateRecipes'
export const SINGLE_RECIPE = 'singleViewRecipe'

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
          hits: response.data.hits,
          pages: fillRange(response.data.count)
        }
      })
    )
  }
}
export function searchURLParams({ url_params, value }) {
  return {
    type: UPDATE_SEARCH_URL_PARAMS,
    payload: {
      searchURLParams: `${url_params}&q=${value}`
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
