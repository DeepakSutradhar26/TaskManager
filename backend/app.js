const express = require("express");
const app = express();
const middlewareError = require("./middleware/error");

//Routes Import
const user = require("./routes/userRoutes");

app.use("/api/v1", user);

//Middleware for errors
app.use(middlewareError);

module.exports = app;