import React, { Component } from 'react'
import { connect } from 'react-redux'
import { singleRecipe } from '../Actions/SearchActions'

class RecipePage extends Component {
  constructor(props) {
    super(props)
    // this.goToSingleRecipe = this.goToSingleRecipe.bind(this)
  }
  // componentDidMount = () => {
  //   this.goToSingleRecipe()
  // }
  // goToSingleRecipe = event => {
  //   // onClick we will add the uri to the url
  //   // this.props.match.params.url will be used to
  //   // fetch the data for the specific recipe
  //   // use componentDidMount to fetch
  //   // uri encoding works!

  //   this.props.goToSingleRecipe(this.props.recipe.uri)
  // }

  // for this page display the one specific recipe chosen
  // need to use the state of chosenRecipe from Redux
  render() {
    return (
      <div>
        {this.props.recipe.map(info => {
          return (
            <div>
              <h3>{info.label}</h3>
              <h3>
                {(info.calories / info.yield).toFixed(0)} calories per serving
              </h3>
              <h4>{info.yield} total servings</h4>
              <h4>Caution:</h4>
              <div>
                {info.cautions.map(caution => {
                  return <p>{caution}</p>
                })}
              </div>
              <h4>Health Labels</h4>
              <div>
                {info.healthLabels.map(label => {
                  return <p>{label}</p>
                })}
              </div>
              <img src={info.image} alt={info.label} />
              <h4>Ingrediants:</h4>
              <div>
                {info.ingredientLines.map(ingrediant => {
                  return <p>{ingrediant}</p>
                })}
              </div>
              <h4>Digest:</h4>
              <div>
                {info.digest.map(label => {
                  return (
                    <div>
                      <h5>{label.label}</h5>
                      <p>
                        {!label.daily || !label.schemaOrgTag
                          ? ''
                          : `${label.daily.toFixed(2)}% ${label.schemaOrgTag}`}
                      </p>

                      <p>
                        {!label.total || !label.unit || !label.tag
                          ? ''
                          : `${label.total.toFixed(2)}${label.unit} ${
                              label.tag
                            }`}
                      </p>
                      <div>
                        {label.sub
                          ? label.sub.map(l => {
                              return (
                                <div>
                                  <h5>{l.label}</h5>
                                  <p>
                                    {!l.daily || !l.schemaOrgTag
                                      ? ''
                                      : `${l.daily.toFixed(2)}% ${
                                          l.schemaOrgTag
                                        }`}
                                  </p>
                                  <p>
                                    {!l.total || !l.unit || !l.tag
                                      ? ''
                                      : `${l.total.toFixed(2)}${l.unit} ${
                                          l.tag
                                        }`}
                                  </p>
                                </div>
                              )
                            })
                          : null}
                      </div>
                    </div>
                  )
                })}
              </div>
              <h4>Total Daily:</h4>
              <div>
                {Object.keys(info.totalDaily).map(key => {
                  return (
                    <p>
                      {info.totalDaily[key].label}:{' '}
                      {info.totalDaily[key].quantity.toFixed(2)}{' '}
                      {info.totalDaily[key].unit}
                    </p>
                  )
                })}
              </div>
              <h4>Total Nutrients:</h4>
              <div>
                {Object.keys(info.totalNutrients).map(key => {
                  return (
                    <p>
                      {info.totalNutrients[key].label}:{' '}
                      {info.totalNutrients[key].quantity.toFixed(2)}
                      {info.totalNutrients[key].unit}
                    </p>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  recipe: state.recipe
  // from: state.from,
  // to: state.to,
  // more: state.more,
  // q: state.q,
  // hits: state.hits,
  // pages: state.pages
})
const mapActionsToProps = {
  // _searchRecipe: getRecipes
  // goToSingleRecipe: singleRecipe
}
export default connect(
  mapStateToProps,
  mapActionsToProps
)(RecipePage)
