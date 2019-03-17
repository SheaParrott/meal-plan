import React, { Component } from 'react'
import { connect } from 'react-redux'
import Recipe from '../Components/Recipe'

class Browse extends Component {
  render() {
    return (
      <div>
        <h2>Results for {this.props.q}:</h2>
        <div>
          {this.props.hits.map((hit, index) => {
            console.log(hit.recipe)
            console.log(hit.recipe.uri)
            return <Recipe key={index} hit={hit} />
          })}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  count: state.count,
  from: state.from,
  to: state.to,
  more: state.more,
  q: state.q,
  hits: state.hits
})
const mapActionsToProps = {
  // _searchRecipe: getRecipes
}

export default connect(
  mapStateToProps,
  mapActionsToProps
)(Browse)
