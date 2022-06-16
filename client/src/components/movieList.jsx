import React from 'react';

var MovieList = (props) => {

  return (
    <div className="movie-list">
      {/* map through movie list */}
      {props.movies.map((eachMovie, index) =>
      <div
        className=".each-movie"
        key={index}
        movie={eachMovie.title}
        >{eachMovie.title}</div>)}
    </div>
  )
}

export default MovieList;