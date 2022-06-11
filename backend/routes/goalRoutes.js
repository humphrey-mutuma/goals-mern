const express = require("express");
const router = express.Router();
const {
  getGoals,
  setGoals,
  updateGoal,
  deleteGoals,
} = require("../controllers/goalController");


// get a goal route
router.get("/", getGoals);

// post a goal route
router.post("/", setGoals);
// update a goal
router.put("/:id", updateGoal);
// delete a goal

router.delete("/:id", deleteGoals);

module.exports = router;
