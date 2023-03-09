const express = require("express")
const movieRouter = express.Router()
const {v4: uuidv4} = require('uuid') 

//Fake Data
const movies = [
    { title: "Die Hard", genre: "action", _id: uuidv4()},
    { title: "Star War IV", genre: "fantasy", _id: uuidv4()},
    { title: "Lion King", genre: "fantasy", _id: uuidv4()},
    { title: "Friday the 13th", genre: "horror", _id: uuidv4()},
]

//Get All
movieRouter.get("/", (req, res) => {
    res.send(movies)
})

//Get one
movieRouter.get("/:movieId", (req, res) => {
    const movieId = req.params.movieId
    const foundMovie = movies.find(movie => movie._id === movieId)
    res.send(foundMovie)
})

//get by genre
movieRouter.get("/search/genre" , (req, res) => {
    const genre = req.query.genre
    const filteredMovies = movies.filter(movie => movie.genre === genre)
    res.send(filteredMovies)
})

movieRouter.post("/", (req, res) => {
    const newMovie = req.body
    newMovie._id = uuidv4()
    movies.push(newMovie)
    res.send(newMovie)
})

//delete one
movieRouter.delete("/:movieId", (req, res) => {
    const movieId = req.params.movieId
    const movieIndex = movies.findIndex(movie => movie._id === movieId)
    movies.splice(movieIndex, 1)
    res.send("Successfully deleted movie!")
})

//update one
movieRouter.put("/:movieId", (req, res) => {
    const movieId = req.params.movieId
    console.log(movieId, "id")
    const movieIndex = movies.findIndex(movie => movie._id === movieId)
    const updatedMovie = Object.assign(movies[movieIndex], req.body)
    res.send(updatedMovie)
})

module.exports = movieRouter