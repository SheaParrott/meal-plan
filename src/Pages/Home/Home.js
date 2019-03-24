import React, { Component } from 'react'
import front from '../../assets/front.jpg'
import AdvancedSearch from '../../Components/AdvancedSearch'
import { connect } from 'react-redux'
import { resetAllSearchFields } from '../../Actions/SearchActions'
import Footer from '../../Components/Footer'
import './style.css'
import recommended from '../../recommended'
import categories from '../../categories'
import HomeRecipe from '../../Components/HomeRecipe'
import Category from '../../Components/Category'
import country from '../../Country'
import TasteOfCountries from '../../Components/TasteOfCountries'

class Home extends Component {
  constructor(props) {
    super(props)
    this._resetAllSearchFields = this._resetAllSearchFields.bind(this)
    this.state = {
      recommended: this.shuffle(recommended),
      countries: this.shuffle(country)
    }
  }
  componentDidMount = () => {
    window.scrollTo(0, 0)
    this.props._resetAllSearchFields()
  }
  shuffle = array => {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex)
      currentIndex -= 1

      // And swap it with the current element.
      temporaryValue = array[currentIndex]
      array[currentIndex] = array[randomIndex]
      array[randomIndex] = temporaryValue
    }

    return array
  }
  _resetAllSearchFields = () => {
    this.props.resetAllSearchFields()
  }

  render() {
    return (
      <div className="spash-bg">
        <div className="no-shaded-bg">
          <div className="single-view-page">
            <div className="default homePage">
              <div className="wrapper default">
                <AdvancedSearch
                  _resetAllSearchFields={this.props._resetAllSearchFields}
                />

                <img className="home mobile-tablet" src={front} alt="cover" />
                <div className="home-spacing" />
                <div className="center-home-options big-view">
                  <div className="top-Picks">
                    <div className="homeRecipeSlider">
                      {categories.map(category => {
                        return <Category category={category} />
                      })}
                    </div>
                  </div>
                </div>
                <div className="center-home-options big-view">
                  <div className="top-Picks">
                    <h2 className="slider">Top Picks!</h2>
                    <div className="homeRecipeSlider">
                      {this.state.recommended.slice(0, 4).map(recipe => {
                        return <HomeRecipe key={recipe.uri} recipe={recipe} />
                      })}
                    </div>
                  </div>
                </div>
                <div className="center-home-options big-view">
                  <div className="country-top-Picks">
                    <h2 className="slider">A Taste From Another Land!</h2>
                    <div className="wrap-country-top-picks ">
                      {this.state.countries.map(TheCountry => {
                        return <TasteOfCountries country={TheCountry} />
                      })}
                    </div>
                  </div>
                </div>
              </div>
              <Footer />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({})
const mapActionsToProps = {
  _resetAllSearchFields: resetAllSearchFields
}

export default connect(
  mapStateToProps,
  mapActionsToProps
)(Home)
