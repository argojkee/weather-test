const { Weather } = require("../../models/weather/weather")


async function deleteCityWeather (req, res) {
 
  const {id} = req.params;

  const deletedCity = await Weather.findByIdAndDelete(id);


  res.status(200).json(deletedCity)
   
}

module.exports = deleteCityWeather