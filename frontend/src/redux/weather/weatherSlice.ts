import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import operations from "./weatherOperations";
import { IWeatherDay, SortValue } from "types/types";
import helpers from "helpers";





interface IWeatherState {
  cities:  Array<IWeatherDay>,
  isLoadingAllCities: boolean,
  error: null | String,
  sort: SortValue
}


const initialState: IWeatherState = {
  cities: [],
  isLoadingAllCities : false,
  error: null,
  sort: SortValue.name
};

export const weatherSlice = createSlice({
  name: "cities",
  initialState,
  reducers: {
    changeSortValue: (state, action: PayloadAction<SortValue>) => {
        state.sort = action.payload
    }
  },
  extraReducers(builder) {
    builder.addCase(
      operations.getWeatherByCity.fulfilled,
      (state, {payload}) => {
        state.cities = helpers.checkCities(state.cities, payload)
      }
    ).addCase(
      operations.getAllCities.fulfilled,
      (state, {payload}) => {
        state.cities = payload;
        state.isLoadingAllCities = false;
      }
    ).addCase(
      operations.getAllCities.rejected,
      (state, action: PayloadAction<any>) => {
        state.cities = null;
        state.error = action.payload;
        state.isLoadingAllCities = false;
      }
    ).addCase(
      operations.getAllCities.pending,
      (state) => {
        state.error = null;
        state.isLoadingAllCities = true;
        
      }
    ).addCase(
      operations.deleteCity.fulfilled,
      (state, {payload}) => {
       state.cities = state.cities.filter(({_id}) => _id !== payload._id)
      }
    );

  },
});

export const { changeSortValue } = weatherSlice.actions;
export default weatherSlice.reducer;

