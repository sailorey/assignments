const express = require("express")
const morgan = require("morgan")
const app = express()
app.use(morgan('dev'))
app.use(express.json())


app.get('/', (req, res)=>{
res.send("Welcome to the Bounty Hunter API")
})
app.use('/bounties', require('./routes/bountyRouter.js'))
app.use((err, req, res, next)=>{
console.log(err)
return res.send({errMsg:err.message})
})

app.listen(9000, console.log(`Server listening on port 9000`))