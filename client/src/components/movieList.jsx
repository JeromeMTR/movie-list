import React from 'react';
import MovieListEntry from './MovieListEntry.jsx';
import AddMovie from './AddMovie.jsx';

class MovieList extends React.Component {
  constructor(props) {
    super(props)
    console.log('props', this.props);
    this.state = {}
  }

  // toWatch() {
  //   var copy = this.state.all.slice();
  //   var toWatch = [];
  //   for (let i = 0; i < copy.length; i++) {
  //     if (!copy[i].watched) {
  //       console.log(copy[i]);
  //       toWatch.push(copy[i]);
  //     }
  //   }
  //   console.log(toWatch)
  //   this.setState({selected: toWatch});
  // }

  // watched() {
  //   var copy = this.state.all.slice();
  //   var watched = [];
  //   for (let i = 0; i < copy.length; i++) {
  //     if (copy[i].watched) {
  //       watched.push(copy[i]);
  //     }
  //   }
  //   this.setState({selected: watched});
  // }

  render() {
    return (
      <div className="movie-list">
        {/* map through movie list */}
        <button onClick={this.props.renderAll}>All Movies</button>
        <button onClick={this.props.renderWatched}>Watched</button>
        <button onClick={this.props.renderToWatch}>To Watch</button>
        {this.props.movies.map((eachMovie, index) =>
          <MovieListEntry
            key={index}
            movie={eachMovie}
            button={this.props.watchedButton}
          />) }
      </div>
    )
  }
}

export default MovieList;