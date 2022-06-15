import React from 'react';
import Search from './Search.jsx';
import moviesData from '../data/moviesData.js';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movieData: moviesData
    }
  }

  render() {
    return (
      <div>Hello World

      </div>
    )
  }
}
export default App;