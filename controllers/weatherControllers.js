const Weather = require("../models/weather");

const getCities = async (req, res) => {
  try {
    const weather = await Weather.find();
    res.status(201).json({
      status: "success",
      data: weather,
    });
  } catch (err) {
    res.status(401).json({
      status: "fail",
      message: "No se pudieron encontrar los datos",
    });
  }
};

const getCity = async (req, res) => {
  try {
    const weather = await Weather.findOne({ name: req.params.name });

    if (weather === null) {
      res.status(401).json({
        status: "fail",
        message: "La ciudad no existe",
      });
    }
    res.status(201).json({
      status: "success",
      data: weather,
    });
  } catch (err) {
    res.status(401).json({
      status: "fail",
      message: "La ciudad no existe",
    });
  }
};

// const postCity = async (req, res) => {
//   try {
//     if (!req.body.name) {
//       return res.status(401).json({
//         status: "fail",
//         err: "Campo incompleto",
//       });
//     }
//     const weather = await Weather.create(req.body);
//     res.status(201).json({
//       status: "success",
//       data: weather,
//     });
//   } catch (err) {
//     res.status(401).json({
//       status: "fail",
//       err: err,
//     });
//   }
// };

module.exports = { getCity, getCities };
