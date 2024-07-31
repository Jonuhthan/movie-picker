const router = require("express").Router();	// initialize new router object for handling/directing requests
const {
	getAllMovies,
	getMovieById,
	createMovie,
	deleteMovieById,
	updateMovieById,
} = require("../controllers/movies_controller");

router.get("/", (req, res) => {		// "/movies", uses controller logic to get all movies & return JSON
	const movies = getAllMovies();
	res.json(movies);
});

router.get("/:id", (req, res) => {
	const movieId = Number(req.params.id);	// "/movies/:id"
	const movie = getMovieById(movieId);
	res.json(movie);	// returns single movie with corresponding ID
});

router.post("/", (req, res) => {
	const newMovie = {
		name: req.body.name,	// should be matching with API post request attribute names
		genre: req.body.genre,
		img: req.body.img,
	};

	createMovie(newMovie);
	res.status(201).json(newMovie);		// success, new resource created
});

router.put("/:id", (req, res) => {		// put method is CRUD update equivalent
	movieId = Number(req.params.id);
	const updatedMovie = {
		id: movieId,
		name: req.body.name,
		genre: req.body.genre,
		img: req.body.img,
	};
	updateMovieById(movieId, updatedMovie);	// replace previous movie data with new data
	res.json(updatedMovie);	// JSONify the updated data
});

router.delete("/:id", (req, res) => {
	movieId = Number(req.params.id);
	res.json(deleteMovieById(movieId));
});

module.exports = router;