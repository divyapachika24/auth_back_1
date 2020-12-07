const router = require("express").Router();
const auth = require("../middleware/auth");
const Plan = require("../models/budgetSpentModel");

router.post("/", auth, async (req, res) => {
  try{
    let { category, spentAmount } = req.body;

    if (!category)
      return res.status(400).json({ msg: "Please provide category"});
    if (!spentAmount)
      return res.status(400).json({ msg: "Please provide amount spent"});

    const newSpent = new Spent({
      category,
      spentAmount,
      userId: req.user,
    });
    const savedSpent = await newSpent.save();
    res.json(savedSpent);
    
  }catch (err) {
      res.status(500).json({ error: err.message });
  }
});

router.get("/all", auth, async (req, res) => {
  const expenses = await Spent.find({ userId: req.user});
  if(!expenses)
     return res.status(400).json({ msg: "not authorized"});
  res.json(expenses)
  
})



module.exports = router;