// import React in all React component files
// import Component if you are making a stateful
// component
import React, { Component } from 'react'

//the name of the component should match the name
// of the file
// make sure to extend the Component class
class MovieShow extends Component {

  // this is your basic constructor setup
  constructor(props) {
    super(props)
    this.state = {
      moviesIndex: 0
    }
  }

  // you must have a render function that returns
  // some jsx
  /*
   - form to enter the id of the movoei we want to get
   - use that form data to make a request of the formate /movies/: MovieIndex
   - save that movie data in state
   - use the state to render a movie component
  */

  getMovieId (event) {
    event.prevent.Default()
  }
  onIdChange = (event) => {
    this.setState({moviesIndex: event.target.value})
  }
  render() {
    return (
      <div>
        <form>
          <input type="number"
            placeholder="Id of movie to get"
            value={ this.state.moviesIndex}
            onChange= {this.onIdChange}/>
          <input type="submit"
            value="Get Movie!"
            onSubmit={ this.getMovieId }/>
        </form>
      </div>

    )
  }
}

// remember to export your component so it can
// be imported and used elsewhere

export default MovieShow
