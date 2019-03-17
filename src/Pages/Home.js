import React, { Component } from 'react'
import front from '../assets/front.jpg'
import Header from '../Components/Header'
import Footer from '../Components/Footer'

class Home extends Component {
  render() {
    //create a header component that handles the advanced search
    return (
      <div className="wrapper default">
        <Header />
        <img className="home" src={front} alt="cover" />
        <Footer />
      </div>
    )
  }
}

export default Home
