const { Weather } = require("../../models/weather/weather")


async function getAllCities (req, res) {
 
    const cities = await Weather.find();

    res.status(200).json(cities)
   
}

module.exports = getAllCities