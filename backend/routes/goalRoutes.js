const express = require("express");
const router = express.Router();
const {
  getGoals,
  setGoals,
  updateGoal,
  deleteGoals,
} = require("../controllers/goalController");
const { protect } = require("../middleware/authMiddleware");

// get a goal route
// router.get("/", getGoals);
// // post a goal route
// router.post("/", setGoals);

router.route("/").get(protect, getGoals).post(protect, setGoals);

// // update a goal
// router.put("/:id", updateGoal);
// // delete a goal
// router.delete("/:id", deleteGoals);

router.route("/:id").delete(protect, deleteGoals).put(protect, updateGoal);

module.exports = router;
