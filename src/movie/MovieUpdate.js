import React, { Component } from 'react'
import './MovieDelete.scss'

import { axiosPatchMovie } from './movieApi'

export default class MovieUpdate extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      year: '',
      director: '',
      id: ''
    }
  }

  componentDidMount () {
    const firstMovieId = this.props.movies[0].id
    this.changeMovieData(firstMovieId)
  }

  changeMovieData = id => {
    const movie = this.props.movies.find(movie => String(movie.id) === String(id))
    this.setState({
      title: movie.title || '',
      year: movie.year || '',
      director: movie.director || '',
      id: movie.id
    })
  }

  handleInputChange = event => {
    event.preventDefault()
    const { name, value } = event.target
    if (name === 'id') {
      this.changeMovieData(value)
    } else {
      this.setState({ [name]: value })
    }
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
    // patchMovie(data, this.props.user)
    //   .then(res => res.ok ? res : new Error())
    //   .then(() => this.props.flash('Fixed the movie, z', 'flash-success'))
    //   .then(this.clearForm)
    //   .catch(() => console.error('oh no got an error'))

    axiosPatchMovie(data, this.props.user)
      .then(() => this.props.flash('SEEN IT!,(Entry Successfully Updated)','flash-success'))
      .then(this.clearForm)
      .then(this.props.getAllMovies)
      .catch(() => console.error('oh no got an error'))
  }

  
  render() {

    const SelectOptions = this.props.movies.map((movie, index) => {
      return<option key={ index } value={ movie.id }>{ movie.title } (ID: { movie.id })</option>
    })

    return (
      <form 
        className="movie-form"
        onSubmit={ this.handleFormSubmit }>
        <h3>Update Movie</h3>

        <label htmlFor="id">Id</label>
        <select 
          name="id"
          onChange={ this.handleInputChange }>
          { SelectOptions }
        </select>

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
        
        <button type="submit">Update Movie</button>

      </form>
    )
  }
}
