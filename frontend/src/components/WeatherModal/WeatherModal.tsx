import axios from "axios";
import { FC, useEffect, useState } from "react";
import helpers from "../../helpers";
import { IOneDayWeather } from "types/types";
import { nanoid } from "nanoid";
import { PiSpinnerGap } from "react-icons/pi";
import { WeatherListStyles } from "./WeatherListStyles.styled";
import { WeatherModalStyles } from "./WeatherModal.styled";
import OneDayWeather from "components/OneDayWeather/OneDayWeather";

interface Props {
  name: string
}

const WeatherModal: FC<Props> = ({name}) => {
  const [weatherList, setWeatherList] =  useState<IOneDayWeather[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
     async  function getFiveDaysWeather () {
      setIsLoading(true);
      setError('');
      setWeatherList(null)
      try {
          const {data} = await axios.get(`/five-days?city=${name}`);
        setWeatherList(helpers.groupFiveDaysWeather(data));
        setError('')
      } catch (error) {
          setError(error.message);
          setWeatherList(null)

      } finally {
          setIsLoading(false)
      }
     }

     getFiveDaysWeather();
  }, [name])
  return (<WeatherModalStyles>
  <h2>Weather in {name} to 5 days</h2>
  {!isLoading && !error && weatherList && <WeatherListStyles >
      {weatherList.map(day => <OneDayWeather key={nanoid()} day={day}/>)}
    </WeatherListStyles>}

    {isLoading && <PiSpinnerGap className="spinner" size={40} />}
    {error && <h2>Oops... Something went wrong</h2>}
  </WeatherModalStyles>
  )
}

export default WeatherModal