import CityWeather from "../CityWeather/CityWeather";
import { getCitiesWeather} from "../../redux/weather/weatherSelectors";
import { CitiesWeatherListStyles } from "./CitiesWeatherListStyles.styled";
import { useAppSelector } from "../../redux/hooks/hooks";
import { FC } from "react";
import { getSortValue } from "../../redux/weather/weatherSelectors";
import helpers from "helpers";

const CitiesWeatherList: FC = () => {
    const cities = useAppSelector(getCitiesWeather);
    const sortValue = useAppSelector(getSortValue)

    const sortedCities = helpers.sortCities(sortValue, cities)



  return (<>
    {sortedCities && sortedCities.length > 0 &&  <CitiesWeatherListStyles>
        {sortedCities.map(city => <CityWeather city={city} key={city._id}/>)}
    </CitiesWeatherListStyles>}
      
      {sortedCities && sortedCities.length === 0 && <h2 className="empty-list">Please, enter the city name to add in weather list</h2>}
    </>
  )
}

export default CitiesWeatherList