const express = require('express')
const tvshowRouter = express.Router()
const {v4: uuidv4} = require('uuid') 

const tvshows = [
    { title: "Rick and Morty", _id: uuidv4()},
    { title: "Watchmen", _id: uuidv4()},
    { title: "Westworld", _id: uuidv4()},
    { title: "Friends", _id: uuidv4()},
]

tvshowRouter.get("/", (req, res) => {
    res.send(tvshows)
})

tvshowRouter.get("/:tvshowId", (req, res) => {
    const tvshowId = req.params.tvshowId
    const foundShow = tvshows.find(show => show._id === tvshowId)
    res.send(foundShow)
})



tvshowRouter.get("/search/genre" , (req, res) => {
    const genre = req.query.genre
    const filteredtvshow = tvshows.filter(tvshow => tvshow.genre === genre)
    res.send(filteredtvshow)
})


//delete one
tvshowRouter.delete("/:tvshowId", (req, res) => {
    const tvshowId = req.params.tvshowId
    const tvshowIndex = tvshows.findIndex(tvshow => tvshow._id === tvshowId)
    tvshows.splice(tvshowIndex, 1)
    res.send("Successfully deleted tvshow!")
})

//update one
tvshowRouter.put("/tvshowId", (req, res) => {
    const tvshowId = req.params.tvshowId
    const tvshowIndex = tvshows.findIndex(tvshow => tvshow._id === tvshowId)
    const updatedtvshow = Object.assign(tvshows[tvshowIndex], req.body)
    res.send(updatedtvshow)
})


tvshowRouter.post("/", (req, res) => {
    const newShow = req.body
    newShow._id = uuidv4()
    tvshows.push(newShow)
    res.send(newShow)
})





module.exports = tvshowRouter