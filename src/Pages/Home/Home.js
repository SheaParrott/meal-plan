import React, { Component } from 'react'
import front from '../../assets/front.jpg'
import AdvancedSearch from '../../Components/AdvancedSearch'
import { connect } from 'react-redux'
import { resetAllSearchFields } from '../../Actions/SearchActions'
import Footer from '../../Components/Footer'
import './style.css'

class Home extends Component {
  constructor(props) {
    super(props)
    this._resetAllSearchFields = this._resetAllSearchFields.bind(this)
  }
  componentDidMount = () => {
    window.scrollTo(0, 0)
    this.props._resetAllSearchFields()
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
                <div className="top-Picks big-view">
                  <h2>Top Picks!</h2>
                  <div className="browseRecipeContainer">
                    {/* need uri as well, will call the single recipe fetch */}
                    {/* <img
            className="browseRecipeImage"
            src={this.props.hit.recipe.image}
            alt={this.props.hit.recipe.label}
          />
                <h3 className="browse-label">{this.props.hit.recipe.label}</h3> */}
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
