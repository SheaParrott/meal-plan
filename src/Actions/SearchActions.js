import axios from 'axios'
export const UPDATE_RECIPES = 'updateRecipes'

export function getRecipes() {
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
        dispatch(setRecipes(response.data))
      })
  }
}
export function setRecipes(recipes) {
  //pass in the results of the search and clear out previous
  //search selections
  return {
    type: UPDATE_RECIPES,
    payload: {
      results: recipes,
      searched: 'searched item here to display on page',
      categories: [],
      calories: { min: 0, max: 0 },
      maxIngredients: 0,
      removeIngredients: []
    }
  }
}

export function addCategory(category) {
  console.log(category)
}
