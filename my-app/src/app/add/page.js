'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import './AddMovie.css';

// src/app/add/AddMovie.js
const AddMovie = () => {
  const router = useRouter(); // allows ability to change routes within components
  const [name, setName] = useState('');
  const [genre, setGenre] = useState('');
  const [image, setImage] = useState('');

  const nameHandler = (event) => {  // wait for respective handler before updating name, genre, and img
    setName(event.target.value);
  };

  const genreHandler = (event) => {
    setGenre(event.target.value);
  };

  const imageHandler = (event) => {
    setImage(event.target.value);
  };

  const addMovieHandler = () => {   // when called, initializes new movie and makes post request to add it to the current array of movies
    const newMovie = {
      name: name,   // key values MATTER --> they represent the fields the API expects and should match with them
      genre: genre,
      img: image,
    };

    fetch('http://localhost:8080/movies', {
      method: 'POST',   // post request to the API to add a movie
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(newMovie)
    })
    .then(router.push('/')) // redirect user to /movies
    .catch(err => console.log(err));
  };

  return (
      <div className='form'>
          <h1 className='title'>Add Movie</h1>

          <label>Movie Title</label>
          <input onChange={nameHandler}></input>

          <label>Genre</label>
          <input onChange={genreHandler}></input>
          
          <label>Image</label>
          <input onChange={imageHandler}></input>

          <button onClick={addMovieHandler}>Add Movie</button>

      </div>
  );
};

export default AddMovie;