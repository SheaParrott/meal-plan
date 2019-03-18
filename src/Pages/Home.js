import React, { Component } from 'react'
import front from '../assets/front.jpg'
import HeaderWithSearch from '../Components/HeaderWithSearch'

class Home extends Component {
  render() {
    //create a header component that handles the advanced search
    return (
      <div className="wrapper default">
        <HeaderWithSearch />
        <img className="home" src={front} alt="cover" />
      </div>
    )
  }
}

export default Home
