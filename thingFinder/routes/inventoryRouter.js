const express = require('express')
const inventoryRouter = express.Router()
const {v4: uuidv4} = require('uuid')

//data
const inventoryItems = [
    {
        name: "banana",
        type: "food",
        price: 200,
    },{
        name: "pants",
        type: "clothing",
        price: 2500,
    },{
        name: "basket ball",
        type: "toy",
        price: 1000,
    },{
        name: "rockem sockem robots",
        type: "toy",
        price: 1500,
    },{
        name: "shirt",
        type: "clothing",
        price: 800,
    },{
        name: "soup",
        type: "food",
        price: 300,
    },{
        name: "flour",
        type: "food",
        price: 100,
    }
]


//routes
//get all
inventoryRouter.get("/", (req, res) => {
    res.send(inventoryItems)
})

//get one
inventoryRouter.get("/:inventoryItemId", (req, res) => {
    const inventoryItemId = req.params.inventoryItemId
    const foundInventory = inventoryItems.find(inventoryItem => inventoryItem._id === inventoryItemId)
    res.send(foundInventory)
})



//type

inventoryRouter.get("/search/type",(req, res) => {
    const type = req.query.type
    const filteredItems = inventoryItems.filter(inventoryItem => inventoryItem.type === type)
    res.send(filteredItems)
})

//name
inventoryRouter.get("/search/name",(req, res) => {
    const name = req.query.name
    const filteredItems = inventoryItems.filter(inventoryItem => inventoryItem.name === name)
    res.send(filteredItems)
})


module.exports = inventoryRouter