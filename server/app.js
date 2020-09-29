const express = require("express");
const app = express();

const cors = require("cors");

const weatherRouter = require("./routes/weatherRoutes");

app.use(cors());
app.use(express.json());
app.use("/weather", weatherRouter);

module.exports = app;
