import React, { Component } from 'react'
const MovieIndex = props => {

  const Movies = props.movies.map((movie, index) => {
    return <div key={ index }>
      <h3>{ movie.title } (ID: { movie.id })</h3>

      <ul>
        <li>year: { movie.year }</li>
        <li>director: { movie.director }</li>
      </ul>
    </div>
  })
  return (
    <div>
      { Movies }
    </div>
  )
  
}

export default MovieIndex