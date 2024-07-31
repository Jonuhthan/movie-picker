'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

// src/app/add/AddMovie.js
const AddMovie = () => {
  const router = useRouter();
  const [name, setName] = useState('');
  const [genre, setGenre] = useState('');
  const [image, setImage] = useState('');

  const nameHandler = (event) => {
    setName(event.target.value);
  };

  const genreHandler = (event) => {
    setGenre(event.target.value);
  };

  const imageHandler = (event) => {
    setImage(event.target.value);
  };

  const addMovieHandler = (event) => {
    const newMovie = {
      name: name,
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
    .then(router.push('/'))
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