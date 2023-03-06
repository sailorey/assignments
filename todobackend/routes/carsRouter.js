const express = require('express')
const carsRouter = express.Router()
const {v4: uuidv4} = require('uuid')


const cars = [
    {
    name: "Ferrari",
    description: "Italian Made",
    imageUrl: "http://www.myimage....",
   completed: false,
   _id:uuidv4()
},
{
    name: "Ford",
    description: "American Made",
    imageUrl: "http://www.myimage....",
   completed: false,
   _id:uuidv4()
},
{
    name: "Nissan",
    description: "Japanese Made",
    imageUrl: "http://www.myimage....",
   completed: false,
   _id:uuidv4()
},
]


carsRouter.route('/')
    .get((req, res)=>{
        res.send(cars)
        })
    .post((req, res)=>{
        const newCars = req.body
        newCars._id = uuidv4()
        cars.push(newCars)
        res.send(`${newCars.name} has been added`)
})

carsRouter.put('/:carId', (req, res)=>{
    const carId = req.params.carId
    const carIndex = cars.findIndex(car => car._id === carId)
    const updatedCar = Object.assign(cars[carIndex], req.body)
    res.send(updatedCar)
})

carsRouter.delete('/:carId', (req, res)=>{
    const carId = req.params.carId
    const carIndex = cars.findIndex(car=>car._id === carId)
    cars.splice(carIndex, 1)
    res.send (`${carId} has been removed`)
})

carsRouter.get('/:carId', (req, res)=>{
    const carId = req.params.carId
    res.send(cars.find(car=>car._id === carId))
})

module.exports = carsRouter