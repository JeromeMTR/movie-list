import React from 'react';
import moviesData from '../data/moviesData.js';

var Search = (props) => {
  return (
    <div>
      <input className="search-form"
      type="text"
      placeholder='yo search movie'
      onChange={props.searchBar}/>

      <button
        className="search-button"
        onClick={props.onSearch}
      >SEARCH</button>
    </div>
  )
}

export default Search;