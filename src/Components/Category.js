import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import glutenFree from '../assets/glutenFree.jpg'
import { SearchedRecipe } from '../Actions/SearchActions'
import { Redirect } from 'react-router'

class Category extends Component {
  constructor(props) {
    super(props)
    this._SearchedRecipe = this._SearchedRecipe.bind(this)
    this.state = {
      navigate: false
    }
  }
  _SearchedRecipe = () => {
    this.props._SearchedRecipe(this.props.category.category)
    this.setState({
      navigate: true
    })
  }

  render() {
    if (this.state.navigate) {
      return (
        <Redirect
          to={`/results/&q=${this.props.category.category}${
            this.props.from.param
          }${this.props.toParam.param}`}
          push={true}
        />
      )
    }
    return (
      <div onClick={this._SearchedRecipe}>
        <img
          className="home-category"
          src={
            this.props.category.image == 'gluten'
              ? glutenFree
              : this.props.category.image
          }
          alt={this.props.category.category}
        />
        <h5>{this.props.category.category}</h5>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  from: state.from,
  toParam: state.toParam
})

const mapActionsToProps = {
  _SearchedRecipe: SearchedRecipe
}

export default connect(
  mapStateToProps,
  mapActionsToProps
)(Category)
