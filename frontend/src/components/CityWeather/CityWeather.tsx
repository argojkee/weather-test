import { FC, useState } from "react"
import { CityWeatherStyles } from "./CityWeatherStyles.styled"
import helpers from "../../helpers";
import { useAppDispatch } from "../../redux/hooks/hooks";
import operations from "../../redux/weather/weatherOperations";
import { Modal } from "../Modal/Modal";
import WeatherModal from "../WeatherModal/WeatherModal";
import { PiSpinnerGap } from "react-icons/pi";
import { IoIosArrowDown, IoIosMore  } from "react-icons/io";
import { MdDelete, MdOutlineUpdate } from "react-icons/md";
import { IWeatherDay } from "types/types";



const CityWeather: FC<{city: IWeatherDay}> = ({city: {main, name, icon, wind, sun, updatedAt, _id}}) => {
  const [isShowMoreInfo, setIsShowMoreInfo] = useState(false);
  const dispatch = useAppDispatch();
  const [isShowMoreWeather, setIsShowMoreWeather] = useState(false);
  const [isDeleting, setIsDeleteng] = useState(false)
  const [isUpdating, setIsUpdating] = useState(false)

  function onShowInfoClick () {
    setIsShowMoreInfo(!isShowMoreInfo)
    
  };

  async function onDeleteClick () {
    setIsDeleteng(true)
    await dispatch(operations.deleteCity(_id));
    setIsDeleteng(false)
  }

 async function onUpdateClick() {
  setIsUpdating(true)
   await  dispatch(operations.getWeatherByCity(name));
  setIsUpdating(false)

  }

   function onMoreWeatherClick () {
    setIsShowMoreWeather(!isShowMoreWeather)
  }
  return (
    <CityWeatherStyles $isMoreInfo={isShowMoreInfo}>
      <div className="main-info">
      <button className="without-border" type='button' onClick={onShowInfoClick}><IoIosArrowDown className="arrow" size={16} /></button>
        <h3 className='title'> {name}</h3>
        <img src={icon} alt={name} />
        <p className="time">Temp at {helpers.convertTime(updatedAt)} - <span className='temperature'>{main.temp.toFixed(1)} &deg;C</span></p>
        <button className="without-border" type='button' onClick={onUpdateClick}> {isUpdating ? <PiSpinnerGap size={16} className="spinner"/> : <MdOutlineUpdate size={16} />}</button>
        <button className="without-border" type='button' onClick={onMoreWeatherClick}><IoIosMore size={16} /></button>
        <button className="without-border" type='button' onClick={onDeleteClick}>{isDeleting ? <PiSpinnerGap size={16} className="spinner"/> : <MdDelete size={16} color='red'/>}</button>
      </div>
     
      <div className={'more-info'}>
        <div>
          <p>Max temperature: {main.temp_max.toFixed(1)} &deg;C</p>
          <p>Min temperature: {main.temp_min.toFixed(1)} &deg;C</p>
          <p>Humidity: {main.humidity} %</p>
      </div>
      <div>
        <p>Wind speed: {wind.speed}</p>
        <p>Wind degrades: {wind.deg}</p>
      </div>
      <div>
        <p>Sunrise: {helpers.getHoursAndMinutes(sun.sunrise)}</p>
        <p>Sunset: {helpers.getHoursAndMinutes(sun.sunset)}</p>
      </div>
      
      </div>
     
        {isShowMoreWeather && <Modal children={ <WeatherModal name={name} />} closeModal={() => setIsShowMoreWeather(false)} />}
    </CityWeatherStyles>
  )
}

export default CityWeather