const express = require("express");
const router = express.Router();

// get a goal route
router.get("/", (req, res) => {
  res.status(200).json({ message: "Get goals" });
});

// post a goal route
router.post("/", (req, res) => {
  res.status(200).json({ message: "Set goal" });
});
// update a goal
router.put("/:id", (req, res) => {
  res.status(200).json({ message: `update goal ${req.params.id}` });
});
// delete a goal

router.delete("/:id", (req, res) => {
  res.status(200).json({ message: `delete goal ${req.params.id}` });
});

module.exports = router;
