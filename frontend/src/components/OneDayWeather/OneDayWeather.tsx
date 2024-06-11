import ThreeHoursWeather from "./ThreeHoursWeather/ThreeHoursWeather";
import { nanoid } from "nanoid";
import { OneDayWeatherStyles } from "./OneDayWeatherStyles";
import { IOneDayWeather } from "types/types";
import { FC } from "react";

interface Props {
  day: IOneDayWeather
}

const OneDayWeather: FC<Props> = ({day}) => {
  return (
    <OneDayWeatherStyles>
          <p className="day-name">{day.date}, {day.dayOfWeek}</p>
        <ul>      
           {day.forecasts.map(el => <ThreeHoursWeather key={nanoid()} data={el} />)}
        </ul>
    </OneDayWeatherStyles>
  )
}

export default OneDayWeather
