import React, { Component } from 'react'
import './MovieDelete.scss'

import { postMovie, axiosPostMovie } from './movieApi'

export default class MovieCreate extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      title: '',
      year: '',
      director: ''
    }
  }

  handleInputChange = event => {
    const { name, value } = event.target
    this.setState({ [name]: value })
  }

  clearForm = () => {
    this.setState(prevState => {
      const nextState = {}
      for(const key in prevState) {
        nextState[key] = ''
      }
      return nextState
    })
  }

  handleFormSubmit = event => {
    const data = { ...this.state }
    //   postMovie(data, this.props.user)
    //     .then(res => res.ok ? res : new Error())
    //     .then(() => this.props.flash('Made that movie, Emmanuel', 'flash-success'))
    //     .then(this.clearForm)
    //     .catch(() => console.error('oh no got an error'))

    axiosPostMovie(data, this.props.user)
      .then(() => this.props.flash('SEEN IT!,(Movie Entry Successfully Creared)', 'flash-success'))
      .then(this.clearForm)
      .then(this.props.getAllMovies)
      .catch(() => console.error('oh no got an error'))
  }

  
  render() {
    return (
      <form 
        className="movie-form"
        onSubmit={ this.handleFormSubmit }>
        <h3>Create Movie</h3>

        <label htmlFor="title">Title</label>
        <input 
          name="title"
          value={ this.state.title }
          onChange={ this.handleInputChange } />
        
        <label htmlFor="year">Year</label>
        <input 
          name="year"
          value={ this.state.year }
          onChange={ this.handleInputChange } />

        <label htmlFor="director">Director</label>
        <input 
          name="director"
          value={ this.state.director }
          onChange={ this.handleInputChange } />
        
        <button type="submit">Create Movie</button>

      </form>
    )
  }
}
