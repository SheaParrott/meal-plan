import React, { Component } from 'react'
import { connect } from 'react-redux'
import { removeCategory } from '../Actions/SearchActions'

class ChosenCategory extends Component {
  constructor(props) {
    super(props)
    this._removeCategory = this._removeCategory.bind(this)
  }
  _removeCategory = event => {
    console.log(this.props.value)
    this.props._removeCategory(this.props.value.category)
  }
  render() {
    return (
      <div className="displayedLabel">
        <i className="fas fa-times" onClick={this._removeCategory} />
        <p className="Label">{this.props.value.category}</p>
      </div>
    )
  }
}

const mapStateToProps = state => ({})
const mapActionsToProps = {
  _removeCategory: removeCategory
}

export default connect(
  mapStateToProps,
  mapActionsToProps
)(ChosenCategory)
