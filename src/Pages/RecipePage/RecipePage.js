import React, { Component } from 'react'
import { connect } from 'react-redux'
import { singleRecipe } from '../../Actions/SearchActions'
import Header from '../../Components/Header'
import Loading from '../../Components/Loading'
import './style.css'
import Footer from '../../Components/Footer'
import ErrorMessage from '../../Components/ErrorMessage'

class RecipePage extends Component {
  constructor(props) {
    super(props)
    this.goToSingleRecipe = this.goToSingleRecipe.bind(this)
    this.state = {
      displayedInfo: 'ingredients'
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
    } else if (this.props.recipe[0] === 'No Results') {
      return <ErrorMessage singleViewRecipePage={true} />
    }

    return (
      <div className="spash-bg">
        <div className="no-shaded-bg">
          <div className="single-view-page">
            <nav>
              <h1 className="basicHeader">Meal Plan</h1>
              <Header />
            </nav>
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
                                this.state.displayedInfo == 'digest'
                                  ? 'shadedRecipeInfoLabel'
                                  : 'recipeInfoLabel'
                              }
                              onClick={() => {
                                this.setState({
                                  displayedInfo: 'digest'
                                })
                              }}
                            >
                              Digest
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
                                this.state.displayedInfo == 'totalNutrients'
                                  ? 'shadedRecipeInfoLabel'
                                  : 'recipeInfoLabel'
                              }
                              onClick={() => {
                                this.setState({
                                  displayedInfo: 'totalNutrients'
                                })
                              }}
                            >
                              Nutrients
                            </h3>
                          </div>

                          <div className="RecipeInfoDisplayed">
                            {/* start of digest */}
                            {this.state.displayedInfo == 'digest' ? (
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
                                          <h4 className="singleRecipeInformation">
                                            {label.label}
                                          </h4>
                                          <p className="singleRecipeInformation">
                                            {!label.daily || !label.schemaOrgTag
                                              ? ''
                                              : `${label.daily.toFixed(2)}% ${
                                                  label.schemaOrgTag
                                                }`}
                                          </p>

                                          <p className="singleRecipeInformation">
                                            {!label.total ||
                                            !label.unit ||
                                            !label.tag
                                              ? ''
                                              : `${label.total.toFixed(2)}${
                                                  label.unit
                                                } ${label.tag}`}
                                          </p>
                                          <br />
                                          <div>
                                            {label.sub
                                              ? label.sub.map(l => {
                                                  return (
                                                    <div
                                                      className="informationDisplayed"
                                                      key={l.label}
                                                    >
                                                      <h4 className="singleRecipeInformation">
                                                        {l.label}
                                                      </h4>
                                                      <p className="singleRecipeInformation">
                                                        {!l.daily ||
                                                        !l.schemaOrgTag
                                                          ? ''
                                                          : `${l.daily.toFixed(
                                                              2
                                                            )}% ${
                                                              l.schemaOrgTag
                                                            }`}
                                                      </p>
                                                      <p className="singleRecipeInformation">
                                                        {!l.total ||
                                                        !l.unit ||
                                                        !l.tag
                                                          ? ''
                                                          : `${l.total.toFixed(
                                                              2
                                                            )}${l.unit} ${
                                                              l.tag
                                                            }`}
                                                      </p>
                                                      <br />
                                                    </div>
                                                  )
                                                })
                                              : null}
                                          </div>
                                        </div>
                                      )
                                    })}
                                </div>
                                <div>
                                  {info.digest
                                    .slice(
                                      Math.floor(info.digest.length / 2),
                                      info.digest.length
                                    )
                                    .map(label => {
                                      return (
                                        <div
                                          className="informationDisplayed"
                                          key={label.label}
                                        >
                                          <h4 className="singleRecipeInformation">
                                            {label.label}
                                          </h4>
                                          <p className="singleRecipeInformation">
                                            {!label.daily || !label.schemaOrgTag
                                              ? ''
                                              : `${label.daily.toFixed(2)}% ${
                                                  label.schemaOrgTag
                                                }`}
                                          </p>

                                          <p className="singleRecipeInformation">
                                            {!label.total ||
                                            !label.unit ||
                                            !label.tag
                                              ? ''
                                              : `${label.total.toFixed(2)}${
                                                  label.unit
                                                } ${label.tag}`}
                                          </p>
                                          <br />
                                          <div>
                                            {label.sub
                                              ? label.sub.map(l => {
                                                  return (
                                                    <div
                                                      className="informationDisplayed"
                                                      key={l.label}
                                                    >
                                                      <h4 className="singleRecipeInformation">
                                                        {l.label}
                                                      </h4>
                                                      <p className="singleRecipeInformation">
                                                        {!l.daily ||
                                                        !l.schemaOrgTag
                                                          ? ''
                                                          : `${l.daily.toFixed(
                                                              2
                                                            )}% ${
                                                              l.schemaOrgTag
                                                            }`}
                                                      </p>
                                                      <p className="singleRecipeInformation">
                                                        {!l.total ||
                                                        !l.unit ||
                                                        !l.tag
                                                          ? ''
                                                          : `${l.total.toFixed(
                                                              2
                                                            )}${l.unit} ${
                                                              l.tag
                                                            }`}
                                                      </p>
                                                      <br />
                                                    </div>
                                                  )
                                                })
                                              : null}
                                          </div>
                                        </div>
                                      )
                                    })}
                                </div>
                              </div>
                            ) : null}
                            {/* end of digest */}
                            {/* start of totalDaily */}
                            {this.state.displayedInfo == 'totalDaily' ? (
                              <div className="recipeInfo">
                                <div>
                                  {Object.keys(info.totalDaily)
                                    .slice(0, Math.ceil(info.digest.length / 2))
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
                                      Math.floor(info.digest.length / 2),
                                      info.digest.length
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
                            {/* end of totalDaily */}
                            {/* start of totalNutrients */}
                            {this.state.displayedInfo == 'totalNutrients' ? (
                              <div className="recipeInfo">
                                <div>
                                  {Object.keys(info.totalNutrients)
                                    .slice(0, Math.ceil(info.digest.length / 2))
                                    .map((key, index) => {
                                      return (
                                        <div
                                          className="informationDisplayed"
                                          key={key + index}
                                        >
                                          <p className="singleRecipeInformation">
                                            {info.totalNutrients[key].label}:{' '}
                                            {info.totalNutrients[
                                              key
                                            ].quantity.toFixed(2)}
                                            {info.totalNutrients[key].unit}
                                          </p>
                                          <br />
                                        </div>
                                      )
                                    })}
                                </div>
                                <div>
                                  {Object.keys(info.totalNutrients)
                                    .slice(
                                      Math.floor(info.digest.length / 2),
                                      info.digest.length
                                    )
                                    .map((key, index) => {
                                      return (
                                        <div
                                          className="informationDisplayed"
                                          key={key + index}
                                        >
                                          <p className="singleRecipeInformation">
                                            {info.totalNutrients[key].label}:{' '}
                                            {info.totalNutrients[
                                              key
                                            ].quantity.toFixed(2)}
                                            {info.totalNutrients[key].unit}
                                          </p>
                                          <br />
                                        </div>
                                      )
                                    })}
                                </div>
                              </div>
                            ) : null}
                            {/* end of totalNutrients */}
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
  recipe: state.recipe
})
const mapActionsToProps = {
  goToSingleRecipe: singleRecipe
}
export default connect(
  mapStateToProps,
  mapActionsToProps
)(RecipePage)
