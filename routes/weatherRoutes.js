const express = require("express");
const { getCities, getCity } = require("../controllers/weatherControllers");

const router = express.Router();

router.get("/", getCities);
router.get("/:name", getCity);
// router.post("/", postCity);

module.exports = router;
