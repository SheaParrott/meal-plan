import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Footer extends Component {
  render() {
    return (
      <footer>
        <Link to="/">
          <p className="white footerButton">Home</p>
        </Link>
        <Link to="/about">
          <p className="white footerButton">About</p>
        </Link>
        <Link to="/creator">
          <p className="white footerButton">Creator</p>
        </Link>
        <a href="http://shea-portfolio.surge.sh/" target="_blank">
          <p className=" footerButton white">&copy;SheaParrott</p>
        </a>
      </footer>
    )
  }
}

export default Footer
