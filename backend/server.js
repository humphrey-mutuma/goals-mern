const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const app = express();
const { errorHandler } = require("./middleware/errorMiddleware");

const connectDB = require("./config/db");
const PORT = process.env.PORT || 5000;

connectDB();
// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// route
app.use("/api/goals", require("./routes/goalRoutes"));

// error middleware
app.use(errorHandler);

app.listen(PORT, console.log(`Server running on port:${PORT}`));
