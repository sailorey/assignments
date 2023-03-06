const express = require('express')
const app = express()

app.use(express.json())


app.get('/', (req, res, next)=>{
    res.send("Use /game")
})

app.use('/game', require("./routes/gameRouter.js"))

app.listen(9000, console.log("Server listening on port 9000"))