const express = require('express')
const app = express()

app.use(express.json())

app.get("/", (req, res)=>{
    res.send("Hello World")
})

app.use('/cars', require('./routes/carsRouter.js'))


app.listen(9000, ()=>{
    console.log("Server listening on port 9000")
})