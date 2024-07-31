const express = require("express");	// initializes express object
const app = express();	// app is used with express object with default parameters
const PORT = 8080;	// listen on port 8080

const cors = require("cors");
app.use(cors());		// allows requests from different server/ports

app.use(express.json());	// handle incoming requests as JSON objects

// root page
app.get("/", (req, res) => {
	res.send("This is the root page!");
});

// bare about page request/response
app.get("/about", (req, res) => {
	res.send("This is an API service for CRUD actions on movies resources");
});

// {name} is dynamic, changes depending upon URI input 
app.get("/about/:name", (req, res) => {
	const name = req.params.name;
	res.send("This is an API service for CRUD actions on a movies resources... for you, " + name);
});

const movieRouter = require('./routes/movies_routes');
app.use('/movies', movieRouter);

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}.`);
});
