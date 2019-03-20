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
        <div className="shaded-bg-lighter">
          <div className="single-view-page-home">
            <div className="default">
              <div className="wrapper default">
                <AdvancedSearch
                  _resetAllSearchFields={this.props._resetAllSearchFields}
                />
                <img className="home" src={front} alt="cover" />
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
