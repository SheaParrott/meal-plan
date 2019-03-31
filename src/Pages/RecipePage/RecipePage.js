import React, { Component } from 'react'
import { connect } from 'react-redux'
import { singleRecipe } from '../../Actions/SearchActions'
import Header from '../../Components/Header'
import Loading from '../../Components/Loading'
import './style.css'
import Footer from '../../Components/Footer'
import ErrorMessage from '../../Components/ErrorMessage'
import AdvancedSearch from '../../Components/AdvancedSearch'
import Nutrition from '../../Components/Nutrition'

class RecipePage extends Component {
  constructor(props) {
    super(props)
    this.goToSingleRecipe = this.goToSingleRecipe.bind(this)
    this.state = {
      displayedInfo: 'ingredients',
      showSubNutrition: false
    }
  }
  componentDidMount = () => {
    this.goToSingleRecipe()
  }

  goToSingleRecipe = event => {
    this.props.goToSingleRecipe(this.props.match.params.uri)
    window.scrollTo(0, 0)
  }

  render() {
    if (this.props.recipe.length <= 0) {
      return <Loading />
    } else if (
      this.props.recipe[0] === 'No Results' ||
      this.props.responseStatus !== 200
    ) {
      return <ErrorMessage singleViewRecipePage={true} />
    }
    return (
      <div className="spash-bg">
        <div className="no-shaded-bg">
          <div className="single-view-page">
            <AdvancedSearch RecipePage={true} />
            <div className="spacingFromNav" />
            <main className="centerRecipePage">
              <main className="recipe-page-main">
                <div className="singleViewRecipe marginFromFooter">
                  {this.props.recipe.map((info, index) => {
                    return (
                      <div key={index}>
                        <h2 className="singleRecipeLabel">{info.label}</h2>
                        <div className="centerLine">
                          <div className="line-recipePage" />
                        </div>
                        <div className="centerImageAndWarnings">
                          <p className="singleRecipeInformation">
                            See full recipe on:{' '}
                            <a className="bold" href={info.url} target="_blank">
                              {info.source.toUpperCase()}
                            </a>
                          </p>

                          <div className="tooltip">
                            <a href={info.shareAs} target="_blank">
                              <img
                                className="singleViewRecipeImage"
                                src={info.image}
                                alt={info.label}
                              />
                            </a>
                            <span className="tooltiptext big-view">
                              Go To: {info.shareAs.slice(0, 50)}...
                            </span>
                          </div>

                          <h3 className="singleRecipeFacts">
                            {(info.calories / info.yield).toFixed(0)} calories
                            per serving
                          </h3>
                          <h3 className="singleRecipeFacts">
                            {info.yield} total servings
                          </h3>
                          <section className="singleViewRecipeHealthAndWarnings">
                            <div className="healthAndWarningsContainer-recipe">
                              {info.cautions.map(caution => {
                                return (
                                  <p key={caution} className="red-bg">
                                    {caution}
                                  </p>
                                )
                              })}
                            </div>
                            <div className="healthAndWarningsContainer-recipe">
                              {info.healthLabels.map(label => {
                                return (
                                  <p key={label} className="green-bg">
                                    {label}
                                  </p>
                                )
                              })}
                            </div>
                          </section>
                        </div>
                        <div className="centerLine">
                          <div className="line-recipePage" />
                        </div>
                        <section className="RecipeInfoContainer">
                          <div className="RecipeInfoBar">
                            <h3
                              className={
                                this.state.displayedInfo == 'ingredients'
                                  ? 'shadedRecipeInfoLabel'
                                  : 'recipeInfoLabel'
                              }
                              onClick={() => {
                                this.setState({
                                  displayedInfo: 'ingredients'
                                })
                              }}
                            >
                              Ingredients
                            </h3>
                            <h3
                              className={
                                this.state.displayedInfo == 'totalDaily'
                                  ? 'shadedRecipeInfoLabel'
                                  : 'recipeInfoLabel'
                              }
                              onClick={() => {
                                this.setState({
                                  displayedInfo: 'totalDaily'
                                })
                              }}
                            >
                              Daily
                            </h3>

                            <h3
                              className={
                                this.state.displayedInfo == 'Nutrition'
                                  ? 'shadedRecipeInfoLabel'
                                  : 'recipeInfoLabel'
                              }
                              onClick={() => {
                                this.setState({
                                  displayedInfo: 'Nutrition'
                                })
                              }}
                            >
                              Nutrition
                            </h3>
                          </div>

                          <div className="RecipeInfoDisplayed">
                            {/* start of Nutrition */}
                            {this.state.displayedInfo == 'Nutrition' ? (
                              <div className="recipeInfo">
                                <div>
                                  {info.digest
                                    .slice(0, Math.ceil(info.digest.length / 2))
                                    .map(label => {
                                      return (
                                        <div
                                          className="informationDisplayed"
                                          key={label.label}
                                        >
                                          <Nutrition label={label} />
                                        </div>
                                      )
                                    })}
                                </div>
                                <div>
                                  {info.digest
                                    .slice(
                                      Math.floor(info.digest.length / 2),
                                      info.digest.length - 1
                                    )
                                    .map(label => {
                                      return (
                                        <div
                                          className="informationDisplayed"
                                          key={label.label}
                                        >
                                          <Nutrition label={label} />
                                        </div>
                                      )
                                    })}
                                </div>
                              </div>
                            ) : null}

                            {/* end of Nutrition */}
                            {/* start of totalDaily */}

                            {this.state.displayedInfo == 'totalDaily' ? (
                              <div className="recipeInfo">
                                <div>
                                  {Object.keys(info.totalDaily)
                                    .slice(
                                      0,
                                      Math.ceil(
                                        Object.keys(info.totalDaily).length / 2
                                      )
                                    )
                                    .map((key, index) => {
                                      return (
                                        <div
                                          className="informationDisplayed"
                                          key={key + index}
                                        >
                                          <p className="singleRecipeInformation">
                                            {info.totalDaily[key].label}:{' '}
                                            {info.totalDaily[
                                              key
                                            ].quantity.toFixed(2)}{' '}
                                            {info.totalDaily[key].unit}
                                          </p>
                                          <br />
                                        </div>
                                      )
                                    })}
                                </div>
                                <div>
                                  {Object.keys(info.totalDaily)
                                    .slice(
                                      Math.floor(
                                        Object.keys(info.totalDaily).length / 2
                                      ),
                                      Object.keys(info.totalDaily).length - 1
                                    )
                                    .map((key, index) => {
                                      return (
                                        <div
                                          className="informationDisplayed"
                                          key={key + index}
                                        >
                                          <p className="singleRecipeInformation">
                                            {info.totalDaily[key].label}:{' '}
                                            {info.totalDaily[
                                              key
                                            ].quantity.toFixed(2)}{' '}
                                            {info.totalDaily[key].unit}
                                          </p>
                                          <br />
                                        </div>
                                      )
                                    })}
                                </div>
                              </div>
                            ) : null}

                            {this.state.displayedInfo == 'ingredients' ? (
                              <div className="recipeInfoIngredients">
                                {info.ingredientLines.map(
                                  (ingredient, index) => {
                                    return (
                                      <div
                                        className="informationDisplayedIngredients"
                                        key={ingredient + index}
                                      >
                                        <h4 className="singleRecipeInformation">
                                          {ingredient}
                                        </h4>{' '}
                                        <br />
                                      </div>
                                    )
                                  }
                                )}
                              </div>
                            ) : null}
                          </div>
                        </section>
                      </div>
                    )
                  })}
                </div>
              </main>
            </main>
            <Footer />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  recipe: state.recipe,
  responseStatus: state.responseStatus
})
const mapActionsToProps = {
  goToSingleRecipe: singleRecipe
}
export default connect(
  mapStateToProps,
  mapActionsToProps
)(RecipePage)
