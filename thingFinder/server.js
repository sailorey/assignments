const express = require('express')
const app = express()

app.use(express.json())

app.get('/', (req, res)=>{
res.send(`<p>InventoryItems</p><p>Use: localhost:9000/inventoryRouter</p>`)
})

app.use('/inventoryRouter', require('./routes/inventoryRouter.js'))


app.listen(9000, ()=>{
console.log("Server listening on port 9000")
})