import { IWeatherDay } from "types/types";

export const checkCities = (cities: IWeatherDay[], city: IWeatherDay): IWeatherDay[] => {
    const cityIdx = cities.findIndex(town => town._id === city._id);
  
    if (!~cityIdx) {
      return [...cities, city]
    } else {
      cities[cityIdx] = city;
      return cities;
    }
  }