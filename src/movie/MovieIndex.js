import React, { Component } from 'react'
import './MovieDelete.scss'

const MovieIndex = props => {

  const Movies = props.movies.map((movie, index) => {
    return <div className='movie' key={ index }>
      <h2><i>{ index+1 }.{ movie.title } (ID: { movie.id })</i></h2>

      <ul>
        <li>Year: { movie.year }</li>
        <li>Director: { movie.director }</li>
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