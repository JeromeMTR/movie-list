import React from 'react';
import Search from './Search.jsx';
import moviesData from '../data/moviesData.js';
import MovieList from './MovieList.jsx';
import AddMovie from './AddMovie.jsx';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allMovies: [],
      matches: moviesData,
      searchText: '',
      addText: ''
    }
  }
  // create a search function
  // get current text in input
  // setstate for searchText
  inputBar(type, event) {
    if (type === 'search') {
      console.log(event.target.value)
      this.setState({searchText: event.target.value});
    } else if (type === 'add') {
      console.log('add', event.target.value)
      this.setState({addText: event.target.value});
    }
  }

  // create a change list function that takes in movie list
  // loop through list
  // check if current title match the state search
  // setState for new movie list
  changeList(list = moviesData) {
    var matchedList = [];
    for (let i = 0; i < list.length; i++) {
      console.log('text', this.state.searchText)
      if (list[i].title.toLowerCase().includes(this.state.searchText.toLowerCase())) {
        matchedList.push(list[i]);
      }
    }
    if (matchedList.length === 0) {
      matchedList.push({title: 'no movie by that name found',

    });
    }
    this.setState({matches: matchedList});
  }

  // create add movie function
  // create copy of current state of all movies
  // push movie that we want in all movies
  // set state for all movies to copy
  addMovies() {
    for (let i = 0; i < this.state.allMovies.length; i++) {
      if (this.state.addText.toLowerCase() === this.state.allMovies[i].title.toLowerCase()) {
        alert('Movie is already in the list bozo');
        return;
      }
    }
    if (this.state.addText !== '') {
      var copy = this.state.allMovies.slice();
      copy.push({
        title: this.state.addText,
        watched: false
      });
      this.setState({
        allMovies: copy,
        matches: copy
      });
    }
  }

  toggleWatch(title) {
    // create new copy of all movies
    // loop through all movies
    // match movie title with current movie
    // delete movie from list
    // push title of movie and watched to true in copy
    // set state of all movies
    var newObj = {};
    var copy = this.state.allMovies.slice();
    for (let i = 0; i < copy.length; i++) {
      if (!copy[i].watched && copy[i].title === title) {
        newObj.title = title;
        newObj.watched = true;
        copy.splice(i, 1, newObj);
      } else if (copy[i].watched && copy[i].title === title) {
        newObj.title = title;
        newObj.watched = false;
        copy.splice(i, 1, newObj);
      }
    }
    this.setState({
      allMovies: copy,
      matches: copy
    });
  }

  renderAllMovies() {
    this.setState({matches: this.state.allMovies})
  }

  watched() {
    var copy = this.state.allMovies.slice();
    var watched = [];
    for (let i = 0; i < copy.length; i++) {
      if (copy[i].watched) {
        watched.push(copy[i]);
      }
    }
    this.setState({matches: watched});
  }

  toWatch() {
    var copy = this.state.allMovies.slice();
    var toWatch = [];
    for (let i = 0; i < copy.length; i++) {
      if (!copy[i].watched) {
        console.log(copy[i]);
        toWatch.push(copy[i]);
      }
    }
    console.log(toWatch)
    this.setState({matches: toWatch});
  }

  render() {
    return (
      <div>
        <h1>Movie List</h1>
        <Search
        searchBar={this.inputBar.bind(this, 'search')}
        onSearch={this.changeList.bind(this, this.state.allMovies)}
        />
        <AddMovie
        movieBar={this.inputBar.bind(this, 'add')}
        onAdd={this.addMovies.bind(this)}
        state={this.state}
        />
        <MovieList
        renderToWatch={this.toWatch.bind(this)}
        renderWatched={this.watched.bind(this)}
        renderAll={this.renderAllMovies.bind(this)}
        movies={this.state.matches}
        watchedButton={this.toggleWatch.bind(this)}
        />
      </div>
    )
  }
}
export default App;