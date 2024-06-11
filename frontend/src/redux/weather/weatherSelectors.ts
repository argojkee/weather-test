import { RootState } from "redux/store";

export const getCitiesWeather = (state: RootState) => state.weather.cities;
export const getCitiesLoading = (state: RootState) => state.weather.isLoadingAllCities;
export const getAllCitiesError = (state: RootState) => state.weather.error;
export const getSortValue = (state: RootState) => state.weather.sort