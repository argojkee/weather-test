const { HttpError } = require('../../helpers');
const services = require('../../services')

async function getWeatherByCity (req, res, next) {
    const {city} = req.query;
    
    try {
        const {data} = await services.axios.get(`weather?q=${city}`);
        req.weather = {
            ...data,
            icon: `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
            sun: {
                sunset: data.sys.sunset,
                sunrise: data.sys.sunrise
            },
            coord: undefined
        }
        next()
        
    } catch (error) {
       next(HttpError(404, error.response.data.message))
    }
   
}

module.exports = getWeatherByCity