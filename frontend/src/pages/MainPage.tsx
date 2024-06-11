import SearchForm from "../components/SearchForm/SearchForm";
import CitiesWeatherList from "../components/CitiesWeatherList/CitiesWeatherList";
import operations from "../redux/weather/weatherOperations";
import { FC, useEffect } from "react";
import { getCitiesLoading, getAllCitiesError } from "../redux/weather/weatherSelectors";
import { PiSpinnerGap } from "react-icons/pi";
import Container from "../components/Container/Container";
import { useAppDispatch, useAppSelector } from "../redux/hooks/hooks";


const MainPage: FC = () => {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(getCitiesLoading);
  const error = useAppSelector(getAllCitiesError);

  useEffect(() => {
    dispatch(operations.getAllCities())
  }, [dispatch])

  return (
    <section>
      <Container>
    <SearchForm />
    {error && <h2>Oops, something went wrong</h2>}
    {isLoading &&  <PiSpinnerGap className="spinner main-spinner" size={40} />}
    {!error && !isLoading && <CitiesWeatherList />}
    </Container>
    </section>
  )
}

export default MainPage