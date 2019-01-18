import React, { Component } from 'react'
import './App.scss'
import { Route, Link } from 'react-router-dom'

import AuthenticatedRoute from './components/AuthenticatedRoute'
import Header from '../header/Header'
import SignUp from './components/SignUp'
import SignIn from './components/SignIn'
import SignOut from './components/SignOut'
import ChangePassword from './components/ChangePassword'
import MovieIndex from '../movie/MovieIndex.js'
import MovieCreate from '../movie/MovieCreate.js'
import MovieUpdate from '../movie/MovieUpdate.js'
import MovieDelete from '../movie/MovieDelete.js'

import { axiosGetMoviesAuthenticated } from '../movie/movieApi'


class App extends Component {
  constructor () {
    super()

    this.state = {
      user: null,
      flashMessage: '',
      flashType: null,
      movies: []
    }
  }
  
  getAllMovies = () => {
  
    axiosGetMoviesAuthenticated(this.state.user)
      .then(res => this.setState({ movies: res.data.movies }))
      .then(() => this.flash('Now Showing All Movies', 'flash-success'))
      .catch((err) => console.error(err))
  }

  setUser = user => this.setState({ user }, this.getAllMovies)

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
          <AuthenticatedRoute user={user} path='/movies' render={() => (
            <MovieIndex movies={this.state.movies} flash={this.flash} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/movie-create' render={() => (
            <MovieCreate getAllMovies={this.getAllMovies} flash={this.flash} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/movie-update' render={() => (
            <MovieUpdate movies={this.state.movies} flash={this.flash} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/movie-delete' render={() => (
            <MovieDelete movies={this.state.movies} flash={this.flash} user={user} />
          )} />
        </main>
      </React.Fragment>
    )
  }
}

export default App
