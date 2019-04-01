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
                                <span className="tooltiptext">
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

                            <img
                              className="singleViewRecipeImage"
                              src={info.image}
                              alt={info.label}
                            />

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
                            {/* ingredients start */}
                            <div
                              className={` scroll ${
                                this.state.displayedInfo == 'ingredients'
                                  ? 'animated an-position'
                                  : 'animated-hide an-position'
                              }`}
                            >
                              {info.ingredientLines.map((ingredient, index) => {
                                return (
                                  <div key={ingredient + index}>
                                    <h4 className="singleRecipeInformation">
                                      {ingredient}
                                    </h4>{' '}
                                    <br />
                                  </div>
                                )
                              })}
                            </div>
                            {/* ingredients end */}
                            {/* total daily start */}
                            <div
                              className={`${
                                this.state.displayedInfo == 'totalDaily'
                                  ? 'animated an-position'
                                  : 'animated-hide an-position'
                              }`}
                            >
                              <div className="nutrition-row scroll">
                                {Object.keys(info.totalDaily)
                                  .sort()
                                  .map((key, index) => {
                                    return (
                                      <div
                                        className="daily-cell"
                                        key={key + index}
                                      >
                                        <h4 className="singleRecipeInformation">
                                          {info.totalDaily[key].label}
                                        </h4>
                                        <p className="singleRecipeInformation">
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
                            {/* nutrition start */}

                            <div
                              className={`${
                                this.state.displayedInfo == 'Nutrition'
                                  ? 'animated an-position'
                                  : 'animated-hide an-position'
                              }`}
                            >
                              <div className="nutrition-row scroll">
                                {info.digest.sort().map(label => {
                                  return <Nutrition label={label} />
                                })}
                              </div>
                            </div>
                            {/* nutrition end */}
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
