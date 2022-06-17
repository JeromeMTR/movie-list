import React from 'react';

var MovieListEntry = (props) => {
  var movie = props.movie.title;
  return (
    <div>
      <div className="movie-title">{movie}
        <button onClick={props.button.bind(null, movie)}>{props.movie.watched ? 'WATCHED' : 'TO WATCH'}</button>
      </div>
    </div>
  )
}

export default MovieListEntry;