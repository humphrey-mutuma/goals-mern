const asyncHandler = require("express-async-handler");
const Goal = require("../models/goalModel");

// @desc get goals
// @route GET /api/goals
// @access private
const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get Goals" });
});

// @desc set goals
// @route POST /api/goals
// @access private
const setGoals = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text input");
  }
  res.status(200).json({ message: "Set Goals" });
});

// @desc update a goal
// @route PUT /api/goals/:id
// @access private
const updateGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `update Goal ${req.params.id}` });
});
// @desc delete goal
// @route DELETE /api/goals/:id
// @access private
const deleteGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `delete Goal ${req.params.id}` });
});

module.exports = { getGoals, setGoals, updateGoal, deleteGoals };
