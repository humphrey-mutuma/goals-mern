// @desc get goals
// @route GET /api/goals
// @access private
const getGoals = (req, res) => {
  res.status(200).json({ message: "Get Goals" });
};

// @desc set goals
// @route POST /api/goals
// @access private
const setGoals = (req, res) => {
  res.status(200).json({ message: "Set Goals" });
};
// @desc update a goal
// @route PUT /api/goals/:id
// @access private
const updateGoal = (req, res) => {
  res.status(200).json({ message: `update Goal ${req.params.id}` });
};
// @desc delete goal
// @route DELETE /api/goals/:id
// @access private
const deleteGoals = (req, res) => {
  res.status(200).json({ message: `delete Goal ${req.params.id}` });
};

module.exports = { getGoals, setGoals,updateGoal,deleteGoals };
