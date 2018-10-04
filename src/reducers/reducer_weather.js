import { FETCH_WEATHER, SORT_WEATHER } from "../actions/index";

import _ from "lodash";

export default function(state = [], action) {
  //console.log("Action received (post middleware):", action);
  switch (action.type) {
    case FETCH_WEATHER:
      const temps = [];
      const pressure = [];
      const humidity = [];

      for (let i = 0; i <= action.payload.data.list.length - 1; i++) {
        temps[i] = action.payload.data.list[i].main.temp;
        pressure[i] = action.payload.data.list[i].main.pressure;
        humidity[i] = action.payload.data.list[i].main.humidity;
      }
      function average(data) {
        return _.round(_.sum(data) / data.length);
      }
      const avgTemp = average(temps);
      const avgHum = average(humidity);
      const avgPre = average(pressure);
      const data = {
        ...action.payload.data,
        "Temperature (Kelvin)": avgTemp,
        "Pressure (hPa)": avgPre,
        "Humidity (%)": avgHum
      };
      console.log(data);
      return [data, ...state];

    case SORT_WEATHER:
      console.log(action.payload);
      switch (action.payload) {
        case { sort: "city", order: "asc" }:
          console.log(action.payload);
      }
  }
  return state;
}
