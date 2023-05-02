//First express server
const express = require("express")
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')

app.use(morgan('dev'))
app.use(express.json())

mongoose.connect(`mongodb+srv://reyyvit:wbD4hDphYY69mtaz@cluster0.5sjz7mv.mongodb.net/reyyvit?retryWrites=true&w=majority`)
.then(() => console.log("Connected to Database"))
.catch((err) => console.error(err))

//Routes
app.use('/bounties', require('./routes/bountyRouter.js'))

//Error Handler
app.use((err, req, res, next)=>{
    console.log(err)
    return res.send({errMsg:err.message})
})

app.listen(9000, console.log(`Server listening on port 9000`))