import React, { Component } from 'react'
import front from '../assets/front.jpg'
import AdvancedSearch from '../Components/AdvancedSearch'

class Home extends Component {
  componentDidMount = () => {
    window.scrollTo(0, 0)
  }
  render() {
    console.log(window.location)
    //create a header component that handles the advanced search
    return (
      <div className="wrapper default">
        <AdvancedSearch />
        <img className="home" src={front} alt="cover" />
      </div>
    )
  }
}

export default Home
