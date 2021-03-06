import React from 'react'
import { Link } from 'react-router-dom'

import './Header.scss'

const authenticatedOptions = (
  <React.Fragment>
    <Link to="/change-password">Change Password</Link>
    <Link to="/sign-out">Sign Out</Link>
    <Link to="/movies">Movies</Link>
    <Link to="/movie-create">Create</Link>
    <Link to="/movie-update">Update</Link>
    <Link to="/movie-delete">Delete</Link>
  </React.Fragment>
)


const unauthenticatedOptions = (
  <React.Fragment>
    <Link to="/sign-up">Sign Up</Link>
    <Link to="/sign-in">Sign In</Link>
  </React.Fragment>
)

const alwaysOptions = (
  <React.Fragment>
    <Link to="/"><img 
      src={require('../images/4.jpg')} 
      className= 'logo'/>
    </Link>
    <Link to="/">Home</Link>
  </React.Fragment>
)


const Header = ({ user }) => (
  <header className="main-header">
    <h1> Seen It!</h1>
    <nav>
      { user && <span>Welcome, {user.email}</span>}
      { user ? authenticatedOptions : unauthenticatedOptions }
      { alwaysOptions }
    </nav>
  </header>
)

export default Header
