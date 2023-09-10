import React from 'react'

const Movie = ({movie}) => {
   const { title, director } = movie
   return (
      <div className="card">
         <h3>{title}</h3>
         <p>{director}</p>
      </div>
   )
}

export default Movie
