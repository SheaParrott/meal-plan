import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  removeCategory,
  removeChosenIngredient
} from '../Actions/SearchActions'

class ChosenCategory extends Component {
  constructor(props) {
    super(props)
    this._removeCategory = this._removeCategory.bind(this)
    this._removeChosenIngredient = this._removeChosenIngredient.bind(this)
  }
  _removeCategory = event => {
    console.log(this.props.value)
    this.props._removeCategory(this.props.value.category)
  }
  _removeChosenIngredient = event => {
    console.log(this.props.value.category)
    this.props._removeChosenIngredient(this.props.value.category)
  }
  render() {
    return (
      <div className="displayedLabel">
        {this.props.name === 'Categories' ? (
          <i className="fas fa-times" onClick={this._removeCategory} />
        ) : (
          <i className="fas fa-times" onClick={this._removeChosenIngredient} />
        )}
        <p className="Label">{this.props.value.category}</p>
      </div>
    )
  }
}

const mapStateToProps = state => ({})
const mapActionsToProps = {
  _removeCategory: removeCategory,
  _removeChosenIngredient: removeChosenIngredient
}

export default connect(
  mapStateToProps,
  mapActionsToProps
)(ChosenCategory)
