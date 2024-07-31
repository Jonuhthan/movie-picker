import './Movie.css';

const Movie = ({ name, genre, image }) => { // movie component props
    return (
      <div className='movie'>
        <img src={image} alt={name + ' movie poster'}></img>
        <p className='movieName'>{name}</p>
        <p className='movieGenre'>{genre}</p>
      </div>
    );
  };
  
export default Movie;