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

// router.route('/').get(getGoals).post(setGoals) 

// update a goal
router.put("/:id", updateGoal);
// delete a goal
router.delete("/:id", deleteGoals);
 
// router.route('/:id').put(updateGoal).delete(deleteGoals) 

module.exports = router;
