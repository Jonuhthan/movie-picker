'use client';

import Movie from '../../components/Movie'
import { useState, useEffect } from 'react' 
import './PickMovie.css'

const PickMovie = () => {
    const [randomMovie, setRandomMovie] = useState({});
    const [picked, setPicked] = useState(false);
    const [data, setData] = useState([]);   // data defaults to [] until its state changes

    useEffect(() => {
      fetch('http://localhost:8080/movies')
          .then(response => response.json())
          .then(json => setData(json))
          .catch(err => console.log(err))
    }, []);

    const moviePicker = () => {
      const randomPick = data[Math.floor(Math.random() * data.length)];
      setRandomMovie(randomPick);
      setPicked(true);
    };

    const pickAgain = () => {
      setRandomMovie({});
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
              <button className='pickButton' onClick={pickAgain}>
                Pick Again
              </button>
              </div>
            )}
            {!picked && <button onClick={moviePicker}>Pick a Movie</button>}
        </div>
    );
};
  
export default PickMovie;