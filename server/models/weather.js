const mongoose = require("mongoose");

const weatherSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  temp: {
    type: Number,
    required: true,
  },
  pressure: {
    type: Number,
    required: true,
  },
  humidity: {
    type: Number,
    required: true,
  },
  temp_min: {
    type: Number,
    required: true,
  },
  temp_max: {
    type: Number,
    required: true,
  },
});

const Weather = mongoose.model("Weather", weatherSchema, "weather");

module.exports = Weather;
