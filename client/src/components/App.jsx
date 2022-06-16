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
  inputBar(component, event) {
    if (component === 'search') {
      console.log(event.target.value)
      this.setState({searchText: event.target.value});
    } else if (component === 'add') {
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
      matchedList.push({title: 'no movie by that name found'});
    }
    this.setState({matches: matchedList});
  }

  // create add movie function
  // create copy of current state of all movies
  // push movie that we want in all movies
  // set state for all movies to copy
  addMovies() {
    var copy = this.state.allMovies.slice();
    copy.push({title: this.state.addText});
    this.setState({
      allMovies: copy,
      matches: copy
    });
  }

  render() {
    return (
      <div>
        <h1>Movie List</h1>
        <Search
        searchBar={this.inputBar.bind(this, 'search')}
        onSearch={this.changeList.bind(this, this.state.allMovies)}
        movies={this.state.movieData}
        />
        <AddMovie
        movieBar={this.inputBar.bind(this, 'add')}
        onAdd={this.addMovies.bind(this)}
        state={this.state}
        />
        <MovieList
        movies={this.state.matches}/>
      </div>
    )
  }
}
export default App;