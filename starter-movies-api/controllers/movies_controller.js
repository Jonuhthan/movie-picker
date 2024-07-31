const MOVIES = require("../data/MOVIES_STORE")	// "database" of movies

// controller defines API logic for handling different HTTP requests

function getAllMovies() {
	return MOVIES;
}

function getMovieById(movieId) {
	const result = MOVIES.filter((movie) => movie.id == movieId);   // returns array of just the movie with matching ID
	return result[0];
}

function createMovie(movie) {	// assigns id to new movie, adds it to array, and returns new movie's data
	movie.id = MOVIES.length + 1;
	MOVIES.push(movie);
	return MOVIES[movie.id];
}

function updateMovieById(movieId, updatedMovie) {
	const index = MOVIES.findIndex(movie => movie.id === movieId);
	if (index > -1) {	// movie was found
		MOVIES[index] = updatedMovie;
		return updatedMovie;
	}

	throw new Error(`movie at id ${movieId} does not exist`);
}

function deleteMovieById(movieId) {
	const index = MOVIES.findIndex(movie => movie.id === movieId);

	if (index > -1 ) {
		return MOVIES.splice(index, 1)[0];	// splice movie at index, which returns single element array
	}
	
	throw new Error(`movie at id ${movieId} does not exist`);
}

module.exports = {
	getAllMovies,
	getMovieById,
	createMovie,
	updateMovieById,
	deleteMovieById,
};