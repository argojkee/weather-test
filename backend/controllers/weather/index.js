const { ctrlWrapper } = require("../../helpers");



const getWeatherByCity = require('./getWeatherByCity');
const getAllCities = require('./getAllCities');
const deleteCityWeather = require("./deleteCityWeather");
const getWeatherAtFiveDays = require("./getWeatherAtFiveDays");

module.exports = {
  getWeatherByCity : ctrlWrapper(getWeatherByCity),
  getAllCities: ctrlWrapper(getAllCities),
  deleteCityWeather: ctrlWrapper(deleteCityWeather),
  getWeatherAtFiveDays: ctrlWrapper(getWeatherAtFiveDays)
};
