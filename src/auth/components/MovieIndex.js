// import React in all React component files
// import Component if you are making a stateful
// component
import React, { Component } from 'react'
import axios from 'axios'
import Movie from './Movie.js'

//the name of the component should match the name
// of the file
// make sure to extend the Component class
class MovieIndex extends Component {

  // this is your basic constructor setup
  constructor(props) {
    super(props)
    this.state = {
      movies: []
    }
  }

  // once component is mounted in the DOM, run
  // this comnponent will make a request to get
  // and save movie data
  componentDidMount () {
    // get all movies
    axios.get('http://localhost:4741/movies')
      .then(res => {
        this.setState({ movies: res.data.movies })
      })
  }

  // you must have a render function that returns
  // some jsx
  render() {

    const movies = this.state.movies.map((data, index) => {
      return (
        <Movie key={ index }
          data={ data }/>
      )
    })

    return (
      <div>
        { movies }
      </div>
    )
  }
}

// remember to export your component so it can
// be imported and used elsewhere
export default MovieIndex
