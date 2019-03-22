import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class Category extends Component {
  render() {
    return (
      <Link
        to={`/browse/&q=${this.props.category.category}${
          this.props.from.param
        }${this.props.toParam.param}`}
      >
        <img
          className="home-category"
          src={this.props.category.image}
          alt={this.props.category.category}
        />
        <h5>{this.props.category.category}</h5>
      </Link>
    )
  }
}

const mapStateToProps = state => ({
  from: state.from,
  toParam: state.toParam
})

const mapActionsToProps = {}

export default connect(
  mapStateToProps,
  mapActionsToProps
)(Category)
