const express = require("express");
const { v4: uuidv4 } = require("uuid");
const bountyRouter = express.Router();

const bounties = [
  {
    firstName: "Rey",
    lastName: "Martinez",
    living: true,
    amount: 5000,
    type: "Jedi",
    id: uuidv4(),
  },
];

bountyRouter.put("/:bountyId", (req, res) => {
  const bountyId = req.params.bountyId;
  const updatedBounty = req.body;
  const bountyIndex = bounties.findIndex((bounty) => bounty.id === bountyId);
  const bountyUpdate = Object.assign(bounties[bountyIndex], updatedBounty);
  res.send(bountyUpdate);
});

bountyRouter.delete("/:bountyId", (req, res) => {
  const bountyId = req.params.bountyId;
  const bountyIndex = bounties.findIndex((bounty) => bounty.id === bountyId);
  bounties.splice(bountyIndex, 1);
  res.send(`${bountyId} has been removed`);
  
});

bountyRouter.get("/:bountyId", (req, res, next)=>{
  const bountyId = req.params.bountyId
  const foundBounty = bounties.find(bounty=>bounty.id === bountyId)
  if(!foundBounty){
    const error = new Error(`${bountyId} was not found`)
   return next(error)
   
  }
  res.send(foundBounty)

})

bountyRouter
  .route("/")
  .get((req, res) => {
    res.send(bounties);
  })
  .post((req, res) => {
    const newBounty = req.body;
    newBounty.id = uuidv4();
    bounties.push(newBounty);
    res.send(
      `A bounty was created for ${newBounty.firstName} ${newBounty.lastName}`
    );
  });

module.exports = bountyRouter;