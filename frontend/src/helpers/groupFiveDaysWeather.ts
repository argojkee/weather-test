import { IOneDayWeather, IThreeHoursWeather } from "types/types";
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export function groupFiveDaysWeather (forecasts: IThreeHoursWeather[]): IOneDayWeather[] {

  
    const groupedForecasts = forecasts.reduce((acc, forecast) => {
      const date = new Date(forecast.dt * 1000);
      const day = date.toISOString().split('T')[0]; 
  
      if (!acc[day]) {
        acc[day] = [];
      }
      acc[day].push(forecast);
  
      return acc;
    }, {});
  
    const result = Object.keys(groupedForecasts).slice(0, 5).map(day => {
      const date = new Date(day);
      const forecastsForDay = groupedForecasts[day];
  
      return {
        dayOfWeek: days[date.getUTCDay()],
        date: `${date.getUTCDate()} ${months[date.getUTCMonth()]} ${date.getUTCFullYear()}`,
        forecasts: forecastsForDay.slice(0, 8) 
      };
    });
  
    return result;
  }