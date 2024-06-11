async function getWeatherAtFiveDays (req, res) {
 res.status(200).json(req.weatherList)

   
}

module.exports = getWeatherAtFiveDays