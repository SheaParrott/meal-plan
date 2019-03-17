import axios from 'axios'
export const UPDATE_RECIPES = 'updateRecipes'

export function getRecipes({ url, value }) {
  // pass in the current url and add the "&q=chicken" here
  // then make the api call
  // can pass in one object with the url and q
  // then fetch data
  return function action(dispatch) {
    dispatch({ type: UPDATE_RECIPES, payload: {} })

    const request = axios({
      method: 'GET',
      url: `${url}&q=${value}`,
      headers: []
    })

    return request.then(response =>
      dispatch({
        type: UPDATE_RECIPES,
        payload: {
          count: response.data.count,
          from: response.data.from,
          to: response.data.to,
          more: response.data.more,
          q: response.data.q,
          hits: response.data.hits
        }
      })
    )
  }
}

export function addCategory(category) {
  console.log(category)
}
