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
          results: response.data,
          searched: value
        }
      })
    )
  }

  // return dispatch => {
  //   dispatch({ type: UPDATE_RECIPES })
  //   axios
  //     .get(
  //       'https://api.edamam.com/search?app_id=4bef2681&app_key=96c8eeccc18628d4b898f8264781b999&q=chicken'
  //     )
  //     .then(response => {
  //       dispatch({
  //         type: UPDATE_RECIPES,
  //         payload: {
  //           results: ['hey'],
  //           searched: 'searched item here to display on page'
  //         }
  //       })
  //     })
  // }
}

export function addCategory(category) {
  console.log(category)
}

// export function fetchOffers() {
//   return function action(dispatch) {
//     dispatch({ type: FETCH_OFFERS })

//     const request = axios({
//       method: 'GET',
//       url: `${BASE_URL}/offers`,
//       headers: []
//     });

//     return request.then(
//       response => dispatch(fetchOffersSuccess(response)),
//       err => dispatch(fetchOffersError(err))
//     );
//   }
// }
