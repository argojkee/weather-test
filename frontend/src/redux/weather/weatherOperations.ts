import axios from "axios";
import { AsyncThunk, createAsyncThunk } from "@reduxjs/toolkit";
import { toastSuccess, toastError } from "../../helpers/toastNotifications";
import {RootState} from '../store'
import {  IEmptyObj, IWeatherDay } from "types/types";
axios.defaults.baseURL = "http://localhost:3000/api/weather";




  const getWeatherByCity: AsyncThunk<IWeatherDay, string, IEmptyObj> = createAsyncThunk(
    "weather/getByCity",
    async (city, { rejectWithValue, getState }) => {
      const state = getState() as RootState;
      const cities = state.weather.cities;
      try {
        const { data } = await axios.get('', {
          params: {
            city
          }
        });
        const word = cities.some(city => city._id === data._id) ? 'refreshed' : 'added';

        toastSuccess(`Weather in town ${data.name} was ${word} successful`)

        return data;
      } catch (error) {
        toastError(error.response.data.message)
        return rejectWithValue(error.response.data.message);
      }
    }
  );

const getAllCities: AsyncThunk<IWeatherDay[], void, IEmptyObj > = createAsyncThunk(
  "weather/getAll",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('all');

      return data;
    } catch (error) {
 
      return rejectWithValue(error.message);
    }
  }
);

const deleteCity: AsyncThunk<IWeatherDay, string, IEmptyObj> = createAsyncThunk(
  "weather/deleteById",
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await axios.delete(`${id}`);
      return data;
    } catch (error) {
 
      return rejectWithValue(error.message);
    }
  }
);


const operations = {
 getWeatherByCity,
 getAllCities,
 deleteCity
};
export default operations;