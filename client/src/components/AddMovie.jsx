import React from 'react';

var AddMovie = (props) => {

  return (
    <div>
      <input className="add-form"
      type='text'
      placeholder='yo add movie'
      onChange={props.movieBar}
      />
      <button className="add-buuton"
        onClick={props.onAdd}
      >ADD</button>
    </div>
  )
}

export default AddMovie;