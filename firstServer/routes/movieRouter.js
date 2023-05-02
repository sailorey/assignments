const express = require("express")
const movieRouter = express.Router()
const Movie = require ('../models/movie.js')

//Fake Data


// Get All Movies
movieRouter.get("/", async (req, res, next) => {
    try {
      const movies = await Movie.find();
      res.status(200).send(movies);
    } catch (err) {
      res.status(500);
      return next(err);
    }
});


// Post One
movieRouter.post("/", async (req, res, next) => {
    console.log(req.body)
    try {
      const newMovie = new Movie(req.body);
      const savedMovie = await newMovie.save();
      return res.status(201).send(savedMovie);
    } catch (err) {
        res.status(500);
      return next(err);
    }
  });
  
  //delete one
  movieRouter.delete("/:movieId", async (req, res, next) => {
    try {
      const deletedMovie = await Movie.findOneAndDelete({_id: req.params.movieId});
      if (!deletedMovie) {
        return res.status(404).send(`Movie with ID ${req.params.movieId} not found.`);
      }
      return res.status(200).send(`Successfully deleted ${deletedMovie.title} from the database.`);
    } catch (err) {
      res.status(500);
      return next(err);
    }
  });

movieRouter.get("/:movieId", async (req, res, next) => {

try {
    const movie = await Movie.findOne({_id: req.params.movieId});
    if (!movie) {
    return res.status(404).send(`Movie with ID ${req.params.movieId} not found.`);
    }
    return res.status(200).send(movie);
} catch (err) {
    res.status(500);
    return next(err);
}
});

movieRouter.get("/", async (req, res, next) => {
    try {
      const movies = await Movie.find();
      res.status(200).send(movies);
    } catch (err) {
      res.status(500);
      return next(err);
    }
});


movieRouter.put("/:movieId", async (req, res, next) => {
    try {
        const movie = await Movie.findOneAndUpdate({ _id: req.params.movieId }, 
            req.body, 
            { new: true }
            )
            return res.status(200).send(movie)
    } catch (err) {
        res.status(500);
        return next(err);
    }
})
//get by genre
movieRouter.get("/search/genre" , async (req, res, next) => {
    try {
        const movie = await Movie.find({ genre: req.query.genre})
            return res.status(200).send(movie)
    }   catch (err) {
        res.status(500);
        return next(err);
}
});




module.exports = movieRouter