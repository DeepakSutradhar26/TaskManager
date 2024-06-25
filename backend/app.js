const express = require("express");
const app = express();
const middlewareError = require("./middleware/error");
const cookieParser = require("cookie-parser");

//Using Middlewares
app.use(express.json());
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(cookieParser());

//Routes Import
const user = require("./routes/userRoutes");

app.use("/api/v1", user);

//Middleware for errors
app.use(middlewareError);

module.exports = app;