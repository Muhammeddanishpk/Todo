import React from 'react'
import './header.css'
import {Link} from 'react-router-dom'
function header() {
  return (
    <header>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
    </header>
  )
}

export default header