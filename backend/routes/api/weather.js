const express = require("express");
const { weatherControllers } = require("../../controllers");
const {  weatherAPI } = require("../../middlewares");

const router = express.Router();

router.get("/",   weatherAPI.getWeatherByCity, weatherControllers.getWeatherByCity);
router.get('/all', weatherControllers.getAllCities);
router.get('/five-days', weatherAPI.getWeatherAtFiveDays, weatherControllers.getWeatherAtFiveDays)
router.delete('/:id', weatherControllers.deleteCityWeather)

module.exports = router;
