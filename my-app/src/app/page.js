'use client';

// home page
import './home.css';
import Movie from '../components/Movie';
import { useState, useEffect } from 'react';


export default function Home() {
  const [data, setData] = useState([]); // data defaults to empty array

  useEffect(() => {
    fetch('http://localhost:8080/movies') // GET request to movies API, updating the state of data using setData
    .then(response => response.json())
    .then(json => setData(json))
    .catch(err => console.log(err))
  }, []); // useEffect() only called once when page loads to get all movies available

  return (
    <main>
      <div>
        <h1 className='title'>Catalog</h1>
        <div className='movies'>
          {data.map((movie, index) => ( // iterate over data and initialize movie components for each element
            <Movie
              name={movie.name}
              genre={movie.genre}
              image={movie.img}
              key={index}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
