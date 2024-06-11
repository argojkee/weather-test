

const { Weather } = require("../../models/weather/weather")


async function getWeatherByCity (req, res) {
 
    const {weather} = req;

    
    const newWeather = await Weather.findOneAndUpdate(
            { name: weather.name }, 
           weather,          
            { new: true, upsert: true }  
        );
    res.status(201).json(newWeather)
   
}

module.exports = getWeatherByCity