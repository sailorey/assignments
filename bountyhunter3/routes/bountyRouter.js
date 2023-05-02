const express = require("express");
const bountyRouter = express.Router();

const bounties = [
  {
    firstName: "Rey",
    lastName: "Martinez",
    living: true,
    amount: 5000,
    type: "Jedi",  },
];

bountyRouter.get("/:bountyId", async (req, res, next)=>{
  try {
    const bounty = await bounties.findOne({_id: req.params.bountyId});
    if (!bounty) {
      return res.status(404).send(`Bounty with ID ${req.params.movieId} not found`)
    }
    res.status(200).send(bounty); 
  } catch (err) {
    res.status(500);
    return next(err)
  }
});

bountyRouter.put("/:bountyId", async (req, res, next) => {
  try {
    const bounty = await bounties.findOneAndUpdate({ _id: req.params.movieId},
      req.body,
      {new: true}
      )
      return res.status(200).send(bounty)
  } catch(err){
    res.status(500)
    return next(err);
  }
})

bountyRouter.delete("/:bountyId", async (req, res, next) => {
  try {
    const deleteBounty = await bounties.findOneAndDelete({_id: req.params.bountyId});
    if (!deleteBounty) {
      return res.status(404).send(`Bounty with Id ${req.params.movieId} not found.`);
    }
  } catch (err) {
    res.status(500);
    return next(err);
    
  }
})

bountyRouter.get("/", async (req, res, next) => {
  try {
    res.status(200).send(bounties);
  } catch (err) {
    res.status(500);
    return next(err)
  }
})

bountyRouter.post("/", async (req, res, next) => {
  console.log(req.body)
  try {
    const newBounty = new bounties(req.body);
    const savedBounty = await newBounty.save();
    return res.status(201).send(savedBounty);
  } catch (err) {
      res.status(500);
    return next(err);
  }
});

module.exports = bountyRouter;