const axios = require('axios');

const {BASE_API_URL, WEATHER_API_KEY} = process.env;

axios.defaults.baseURL =  BASE_API_URL

axios.defaults.params = {
        appid : WEATHER_API_KEY,
        units: 'metric'
   
}


module.exports = axios;