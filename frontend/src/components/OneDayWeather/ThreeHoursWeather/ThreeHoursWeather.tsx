import { FC } from "react";
import { IThreeHoursWeather } from "types/types";

interface Props {
  data: IThreeHoursWeather
}
const ThreeHoursWeather: FC<Props> = ({data: {dt_txt, main: {temp}, icon}}) => {
  return (
    <li>
      <p>{dt_txt.split(' ')[1]}</p>
      <p>{temp.toFixed(1)} &deg;C</p>
      <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt='weather icon' />
    </li>
  )
}

export default ThreeHoursWeather