const express = require("express");
const {
  getCities,
  getCity,
  postCity,
} = require("../controllers/weatherControllers");

const router = express.Router();

router.get("/", getCities);
router.get("/:name", getCity);
router.post("/", postCity);

module.exports = router;
