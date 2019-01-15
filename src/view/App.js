import React, { Component } from 'react'
import './App.scss'
import { Route, Link } from 'react-router-dom'

import AuthenticatedRoute from '../auth/components/AuthenticatedRoute'
import Header from '../header/Header'
import SignUp from '../auth/components/SignUp'
import SignIn from '../auth/components/SignIn'
import SignOut from '../auth/components/SignOut'
import ChangePassword from '../auth/components/ChangePassword'
import MovieIndex from '../auth/components/MovieIndex.js'
import MovieShow from '../auth/components/MovieShow.js'
import MovieCreate from '../auth/components/MovieCreate.js'
import MovieUpdate from '../auth/components/MovieUpdate.js'
import MovieDelete from '../auth/components/MovieDelete.js'

import Form from '../forms/Form.js'


class App extends Component {
  constructor () {
    super()

    this.state = {
      user: null,
      flashMessage: '',
      flashType: null
    }
  }

  setUser = user => this.setState({ user })

  clearUser = () => this.setState({ user: null })

  flash = (message, type) => {
    this.setState({ flashMessage: message, flashType: type })

    clearTimeout(this.messageTimeout)

    this.messageTimeout = setTimeout(() => this.setState({flashMessage: null
    }), 2000)
  }

  render () {
    const { flashMessage, flashType, user } = this.state

    return (
      <React.Fragment>
        <Header user={user} />
        {flashMessage && <h3 className={flashType}>{flashMessage}</h3>}
        
        <main className="container">
          <Route path='/sign-up' render={() => (
            <SignUp flash={this.flash} setUser={this.setUser} />
          )} />
          <Route path='/sign-in' render={() => (
            <SignIn flash={this.flash} setUser={this.setUser} />
          )} />
          <AuthenticatedRoute user={user} path='/sign-out' render={() => (
            <SignOut flash={this.flash} clearUser={this.clearUser} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/change-password' render={() => (
            <ChangePassword flash={this.flash} user={user} />
          )} />

          <Route path='/form' component={Form}/>
          <h1>Movie Client</h1>
          {/* this is our nav */}
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            {user && (<li>
              <Link to="/movies">All Movies</Link>
            </li> )}
            {user && (<li>
              <Link to="/movie">Single Movie</Link>
            </li> )}
            {user && (<li>
              <Link to="/add-movie">Add Movie</Link>
            </li> )}
            {user && (<li>
              <Link to="/update-movie">Update Movie</Link>
            </li> )}
            {user && (<li>
              <Link to="/delete-movie">Delete Movie</Link>
            </li> )}
          </ul>

          {/* here are our routes
          ie what to render when we visit a link */}
          {/* <Route exact path="/" component={Home}/> */}
          <Route exact path="/movies" component={MovieIndex}/>
          <Route exact path="/movie" component={MovieShow}/>
          <Route exact path="/add-movie" component={MovieCreate}/>
          <Route exact path="/update-movie" component={MovieUpdate}/>
          <Route exact path="/delete-movie" component={MovieDelete}/>
        
        
        
        </main>
      </React.Fragment>
    )
  }
}

export default App
