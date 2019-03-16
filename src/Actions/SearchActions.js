import axios from 'axios'
export const UPDATE_RECIPES = 'updateRecipes'

export function getRecipes(data) {
  // pass in the current url and add the "&q=chicken" here
  // then make the api call
  // can pass in one object with the url and q
  // then fetch data
  return dispatch => {
    return axios
      .get(
        'https://api.edamam.com/search?app_id=4bef2681&app_key=96c8eeccc18628d4b898f8264781b999&q=chicken'
      )
      .then(response => {
        console.log(response.data)
        dispatch(setRecipes(response.data, data))
      })
  }
}
export function setRecipes(recipes, data) {
  //pass in the results of the search and clear out previous
  //search selections
  return {
    type: UPDATE_RECIPES,
    results: recipes,
    searched: data
  }
}

export function addCategory(category) {
  console.log(category)
}
