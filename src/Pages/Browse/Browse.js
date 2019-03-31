import React, { Component } from 'react'
import recommended from '../../recommended'
import categories from '../../categories'
import HomeRecipe from '../../Components/HomeRecipe'
import Category from '../../Components/Category'
import country from '../../Country'
import TasteOfCountries from '../../Components/TasteOfCountries'
import './style.css'
import AdvancedSearch from '../../Components/AdvancedSearch'
import Footer from '../../Components/Footer'

class Browse extends Component {
  constructor(props) {
    super(props)
    this.state = {
      recommended: this.shuffle(recommended),
      countries: this.shuffle(country),
      selected: 'topPicks'
    }
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
  _selected = value => {
    console.log(value)
    this.setState({
      selected: value
    })
  }

  render() {
    return (
      <div>
        <section className="small-view">
          <AdvancedSearch
            browse={true}
            selected={this.state.selected}
            _selected={this._selected}
          />

          <div className="spacingFromNav" />
        </section>
        {/*  */}
        <section className="small-view">
          {this.state.selected == 'topPicks' ? (
            <div className="center-home-options">
              <div className="top-Picks">
                <div className="homeRecipeSlider">
                  {this.state.recommended.slice(0, 7).map(recipe => {
                    return <HomeRecipe key={recipe.uri} recipe={recipe} />
                  })}
                </div>
              </div>
            </div>
          ) : (
            <div className="center-home-options">
              <div className="country-top-Picks">
                <div className="wrap-country-top-picks ">
                  {this.state.countries.map(TheCountry => {
                    return <TasteOfCountries country={TheCountry} />
                  })}
                </div>
              </div>
            </div>
          )}
        </section>
        {/*  */}
        <section className="centerLine ">
          <div>
            <div className="center-home-options big-view">
              <div className="top-Picks ">
                <div className="homeRecipeSlider">
                  {categories.map(category => {
                    return (
                      <div key={category.category}>
                        <Category category={category} />
                      </div>
                    )
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
        </section>

        <section className="small-view">
          <Footer className="small-view" />
        </section>
      </div>
    )
  }
}

export default Browse
