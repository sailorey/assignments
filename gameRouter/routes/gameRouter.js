const express = require("express")
const gameRouter = express.Router()

const game = [{type: "RPG"}]


gameRouter.use('/',(req, res, next)=>{
    req.body = game
    next()
})
gameRouter.use('/', (req, res)=>{
   res.send(req.body)
})

module.exports = gameRouter