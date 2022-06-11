const express = require("express");
const dotenv = require("dotenv").config();
const app = express();
const { errorHandler } = require("./middleware/errorMiddleware");
const PORT = process.env.PORT || 5000;

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// route
app.use("/api/goals", require("./routes/goalRoutes"));

// error middleware
app.use(errorHandler);

app.listen(PORT, console.log(`Server running on port:${PORT}`));
