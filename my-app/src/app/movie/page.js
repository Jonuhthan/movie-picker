'use client';

import Movie from '../../components/Movie'
import { useState, useEffect } from 'react' 
import './PickMovie.css'

const PickMovie = () => {
    const [randomMovie, setRandomMovie] = useState({}); // empty movie object {}
    const [picked, setPicked] = useState(false);
    const [data, setData] = useState([]);   // data defaults to [] until its state changes

    useEffect(() => {   // GET request to get all movies
      fetch('http://localhost:8080/movies')
          .then(response => response.json())
          .then(json => setData(json))
          .catch(err => console.log(err))
    }, []);

    const moviePicker = () => {
      const randomPick = data[Math.floor(Math.random() * data.length)];   // get random item in data array of movies
      setRandomMovie(randomPick);
      setPicked(true);
    };

    const pickAgain = () => {
      setRandomMovie({}); // empty randomMovie and toggle picked
      setPicked(false);
    };

    return (
        <div>
            <h1 className='title'>Pick a movie</h1>
            {picked && (
              <div className='picked'>
              <Movie
                name={randomMovie.name}
                image={randomMovie.img}
                genre={randomMovie.genre}
              />
              {/* if picked, give user the option to pick again */}
              <button className='pickButton' onClick={pickAgain}>Pick Again</button>
              </div>
            )}
            {/* only renders when a movie has not been picked */}
            {!picked && <button onClick={moviePicker}>Pick a Movie</button>}
        </div>
    );
};
  
export default PickMovie;