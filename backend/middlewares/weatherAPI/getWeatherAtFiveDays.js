const { HttpError } = require('../../helpers');
const {axios} = require('../../services')

async function getWeatherAtFiveDays (req, res, next) {
    const {city} = req.query;
    
    try {
        const {data} = await axios.get(`/forecast?q=${city}`);
        const weatherList = data.list.map(el => ({
            dt_txt: el.dt_txt,
            dt: el.dt,
            main: {
                temp: el.main.temp
            },
            icon: el.weather[0].icon
        }))

        req.weatherList = [...weatherList]
        next()
        
    } catch (error) {
       next(HttpError(404, error.response.data.message))
    }
   
}

module.exports = getWeatherAtFiveDays