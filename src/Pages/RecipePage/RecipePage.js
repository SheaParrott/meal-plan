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
      showSubNutrition: false,
      start: 0,
      end: 3
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
                <div className="marginFromFooter">
                  {this.props.recipe.map((info, index) => {
                    return (
                      <div key={index}>
                        <main className="big-view">
                          <div className="centerImageAndWarnings">
                            <section className="RowImageAndWarnings">
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
                              <div>
                                <h2 className="singleRecipeLabel text-shadow">
                                  {info.label}
                                </h2>
                                <div className="centerLine">
                                  <div className="recipePageLine" />
                                </div>
                                <p className="singleRecipeInformation text-shadow">
                                  See full recipe on:{' '}
                                  <a
                                    className="bold"
                                    href={info.url}
                                    target="_blank"
                                  >
                                    {info.source.toUpperCase()}
                                  </a>
                                </p>
                                <h3 className="singleRecipeFacts text-shadow">
                                  {(info.calories / info.yield).toFixed(0)}{' '}
                                  calories per serving
                                </h3>
                                <h3 className="singleRecipeFacts  text-shadow">
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
                            </section>
                          </div>
                        </main>
                        <main className="small-view">
                          <h2 className="singleRecipeLabel">{info.label}</h2>
                          <div className="centerLine">
                            <div className="line-recipePage" />
                          </div>
                          <div className="centerImageAndWarnings">
                            <p className="singleRecipeInformation">
                              See full recipe on:{' '}
                              <a
                                className="bold"
                                href={info.url}
                                target="_blank"
                              >
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
                        </main>

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
                                  displayedInfo: 'ingredients',
                                  start: 0,
                                  end: 3
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
                                  displayedInfo: 'totalDaily',
                                  start: 0,
                                  end: 3
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
                                  displayedInfo: 'Nutrition',
                                  start: 0,
                                  end: 3
                                })
                              }}
                            >
                              Nutrition
                            </h3>
                          </div>

                          <div className="RecipeInfoDisplayed">
                            {/* start of Nutrition */}

                            {
                              <div
                                className={`nutritionNavigation ${
                                  this.state.displayedInfo == 'Nutrition'
                                    ? 'hidden-animated-daily'
                                    : 'hidden-animated-hide-daily'
                                }`}
                              >
                                {' '}
                                <i
                                  className="fas fa-chevron-left white-hv"
                                  onClick={() => {
                                    this.setState({
                                      start:
                                        this.state.start < 3
                                          ? 0
                                          : this.state.start - 3,
                                      end:
                                        this.state.start < 3
                                          ? 3
                                          : this.state.end - 3
                                    })
                                  }}
                                />
                                <i
                                  className="fas fa-chevron-right white-hv"
                                  onClick={() => {
                                    let length = info.digest.length - 1
                                    this.setState({
                                      start:
                                        length < this.state.end + 3
                                          ? length - 3
                                          : this.state.start + 3,
                                      end:
                                        length < this.state.end + 3
                                          ? length
                                          : this.state.end + 3
                                    })
                                  }}
                                />
                              </div>
                            }
                            <div
                              className={`recipeInfo ${
                                this.state.displayedInfo == 'Nutrition'
                                  ? 'hidden-animated-nutrition'
                                  : 'hidden-animated-hide-nutrition'
                              }`}
                            >
                              <div className="nutrition-row">
                                {info.digest
                                  .sort()
                                  .slice(this.state.start, this.state.end)
                                  .map(label => {
                                    return <Nutrition label={label} />
                                  })}
                              </div>
                            </div>
                            {/* total daily start */}
                            <div
                              className={`recipeInfo ${
                                this.state.displayedInfo == 'totalDaily'
                                  ? 'hidden-animated-daily'
                                  : 'hidden-animated-hide-daily'
                              }`}
                            >
                              <div>
                                {Object.keys(info.totalDaily)
                                  .sort()
                                  .slice(
                                    0,
                                    Math.ceil(
                                      Object.keys(info.totalDaily).length / 4
                                    )
                                  )
                                  .map((key, index) => {
                                    return (
                                      <div
                                        className="informationDisplayedDaily"
                                        key={key + index}
                                      >
                                        <p className="singleRecipeInformation">
                                          {info.totalDaily[key].label}:<br />{' '}
                                          {info.totalDaily[
                                            key
                                          ].quantity.toFixed(2)}
                                          {info.totalDaily[key].unit}
                                        </p>
                                        <br />
                                      </div>
                                    )
                                  })}
                              </div>

                              <div>
                                {Object.keys(info.totalDaily)
                                  .sort()
                                  .slice(
                                    Math.floor(
                                      Object.keys(info.totalDaily).length / 4
                                    ),
                                    Math.ceil(
                                      Object.keys(info.totalDaily).length / 2
                                    )
                                  )
                                  .map((key, index) => {
                                    return (
                                      <div
                                        className="informationDisplayedDaily"
                                        key={key + index}
                                      >
                                        <p className="singleRecipeInformation">
                                          {info.totalDaily[key].label}:<br />{' '}
                                          {info.totalDaily[
                                            key
                                          ].quantity.toFixed(2)}
                                          {info.totalDaily[key].unit}
                                        </p>
                                        <br />
                                      </div>
                                    )
                                  })}
                              </div>
                              <div>
                                {Object.keys(info.totalDaily)
                                  .sort()
                                  .slice(
                                    Math.floor(
                                      Object.keys(info.totalDaily).length / 2
                                    ),
                                    Math.floor(
                                      Object.keys(info.totalDaily).length / 2
                                    ) +
                                      Math.ceil(
                                        Object.keys(info.totalDaily).length / 4
                                      )
                                  )
                                  .map((key, index) => {
                                    return (
                                      <div
                                        className="informationDisplayedDaily"
                                        key={key + index}
                                      >
                                        <p className="singleRecipeInformation">
                                          {info.totalDaily[key].label}:<br />{' '}
                                          {info.totalDaily[
                                            key
                                          ].quantity.toFixed(2)}
                                          {info.totalDaily[key].unit}
                                        </p>
                                        <br />
                                      </div>
                                    )
                                  })}
                              </div>
                              <div>
                                {Object.keys(info.totalDaily)
                                  .sort()
                                  .slice(
                                    Math.floor(
                                      Object.keys(info.totalDaily).length / 2
                                    ) +
                                      Math.ceil(
                                        Object.keys(info.totalDaily).length / 4
                                      ),
                                    Object.keys(info.totalDaily).length - 1
                                  )
                                  .map((key, index) => {
                                    return (
                                      <div
                                        className="informationDisplayedDaily"
                                        key={key + index}
                                      >
                                        <p className="singleRecipeInformation">
                                          {info.totalDaily[key].label}:<br />{' '}
                                          {info.totalDaily[
                                            key
                                          ].quantity.toFixed(2)}
                                          {info.totalDaily[key].unit}
                                        </p>
                                        <br />
                                      </div>
                                    )
                                  })}
                              </div>
                            </div>
                            {/* end of total daily */}
                            <div
                              className={`recipeInfoIngredients ${
                                this.state.displayedInfo == 'ingredients'
                                  ? 'hidden-animated-ingredients'
                                  : 'hidden-animated-hide-ingredients'
                              }`}
                            >
                              {info.ingredientLines.map((ingredient, index) => {
                                return (
                                  <div
                                    className="informationDisplayedIngredients"
                                    key={ingredient + index}
                                  >
                                    <h4 className="recipeInformation">
                                      {ingredient}
                                    </h4>{' '}
                                    <br />
                                  </div>
                                )
                              })}
                            </div>
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
