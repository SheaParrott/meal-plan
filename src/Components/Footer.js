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
        <Link to="/">
          <p className="white">About</p>
        </Link>
        <p className="white">&copy;SheaParrott</p>
      </footer>
    )
  }
}

export default Footer
