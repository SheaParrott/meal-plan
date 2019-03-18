import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Footer extends Component {
  render() {
    return (
      <footer>
        <Link to="/creator">
          <p className="white">Creator</p>
        </Link>
        {/* about page not created yet */}
        <Link to="/about">
          <p className="white">About</p>
        </Link>
        <Link to="/creator">
          <p className="white">&copy;SheaParrott</p>
        </Link>
      </footer>
    )
  }
}

export default Footer
