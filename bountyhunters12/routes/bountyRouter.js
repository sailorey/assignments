const express = require('express')
const bountyRouter = express.Router()
const {v4: uuidv4} = require('uuid')

//data
const bountys = [
    {firstName:"Rey", lastName:"Martinez", living:true, bountyAmount:1000, type:"jedi", _id:uuidv4()}
]

//deleting id's
bountyRouter.delete('/:bountyId', (req, res)=>{
    const bountyId = req.params.bountyId
    const bountyIndex = bountys.findIndex(bounty=>bounty._id === bountyId)
    bountys.splice(bountyIndex, 1)
    res.send(`${bountyId} has been removed`)
})

bountyRouter.put('/:bountyId', (req, res)=>{
    const bountyId = req.params.bountyId
    const bountyIndex = bountys.findIndex(bounty=>bounty._id === bountyId)
    const updatedBounty = Object.assign(bountys[bountyIndex], req.body)
    res.send(updatedBounty)
})

//routes
bountyRouter.route('/')
.get((req, res)=>{
    res.send(bountys)
    })
.post((req, res)=>{
    const newBounty = req.body
    newBounty._id = uuidv4()
    bountys.push(newBounty)
    res.send(`Added ${newBounty.firstName} ${newBounty.lastName} to the database`)
})

    


module.exports = bountyRouter